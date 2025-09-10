// backend/server.js
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 5000;

app.use(cors());

// Enable JSON parsing for request bodies
app.use(express.json());

// Route for forwarding API requests to Gemini with different payloads
app.post("/api/gemini", async (req, res) => {
  const { payloadType } = req.body; // Check which payload to send
  let payload;

  if (payloadType === "keywordPayload") {
    const { task, context } = req.body;
    const userPrompt = `Based on the following prompt details, generate a JSON array of 15 relevant, single-word or two-word keywords or tags. Task: "${task}". Context: "${context}".`;
    payload = {
      contents: [{ role: 'user', parts: [{ text: userPrompt }] }],
      generationConfig: {
        responseMimeType: "application/json",
        responseSchema: { type: "ARRAY", items: { type: "STRING" } },
      },
    };
  } else if (payloadType === "finalPayload") {
    const { task, context, references, selectedKeywords } = req.body;
    const mainPrompt = `
    As an expert prompt engineer, your task is to synthesize the following structured inputs into a single, cohesive, and highly effective prompt for a generative AI model. 
    The final prompt should be written in natural, conversational language, seamlessly combining all the details into a clear and direct set of instructions. 
    Do not use markdown, headings like "### TASK ###", or any other structural formatting. The output should be a single block of text ready to be used.

    Here are the components to synthesize:
    - **Primary Task:** ${task}
    - **Detailed Context:** ${context || "No specific context provided."}
    - **Style & References:** ${
      references || "No specific style references provided."
    }
    - **Key Keywords to incorporate:** ${
      selectedKeywords.join(", ") || "None"
    }

    Now, generate the final, user-ready prompt:`;

    payload = {
      contents: [{ role: 'user', parts: [{ text: mainPrompt }] }],
    };
  } else {
    return res.status(400).json({ error: "Invalid payloadType" });
  }

  try {
    const response = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
        params: {
          key: process.env.GEMINI_API_KEY, // Using the API key from .env
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error.response?.data || error.message);
    res.status(500).json({ error: "Failed to fetch from Gemini" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
