import "./App.css";
import { useState, useEffect, useCallback } from "react";
import Context from "./components/Context";
import Generate from "./components/Generate";
import GeneratedPrompt from "./components/GeneratedPrompt";
import Keywords from "./components/Keywords";
import Reference from "./components/Reference";
import Task from "./components/Task";

function App() {
  // State management
  const [task, setTask] = useState("");
  const [context, setContext] = useState("");
  const [references, setReferences] = useState("");
  const [keywords, setKeywords] = useState([]);
  const [selectedKeywords, setSelectedKeywords] = useState(new Set());
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isKeywordsLoading, setIsKeywordsLoading] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState("");

  // --- Keyword Generation Logic ---
  const fetchKeywords = useCallback(async (task, context) => {
    if (task.length < 10 && context.length < 10) {
      setKeywords([]);
      return;
    }

    setIsKeywordsLoading(true);

    try {

      const response = await fetch('http://localhost:5000/api/gemini', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payloadType: 'keywordPayload',
          task,
          context,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
        setKeywords(JSON.parse(result.candidates[0].content.parts[0].text));
      } else {
        throw new Error("Invalid response structure from API.");
      }
    } catch (error) {
      console.error("Error fetching keywords:", error);
      setKeywords([]); // Clear keywords on error
    } finally {
      setIsKeywordsLoading(false);
    }
  }, []);

  // Debounced effect for fetching keywords
  useEffect(() => {
    const handler = setTimeout(() => {
      fetchKeywords(task, context);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [task, context, fetchKeywords]);

  const handleKeywordClick = (keyword) => {
    const newSelection = new Set(selectedKeywords);
    if (newSelection.has(keyword)) {
      newSelection.delete(keyword);
    } else {
      newSelection.add(keyword);
    }
    setSelectedKeywords(newSelection);
  };

  // --- Final Prompt Generation ---
  const handleGeneratePrompt = async () => {
    setIsGenerating(true);
    setGeneratedPrompt("");

    try {

      const response = await fetch('http://localhost:5000/api/gemini', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          payloadType: 'finalPayload',
          task: task,
          context: context,
          references: references,
          selectedKeywords: Array.from(selectedKeywords)
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();

      if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
        setGeneratedPrompt(result.candidates[0].content.parts[0].text);
      } else {
        throw new Error("Invalid response from prompt generation API.");
      }
    } catch (error) {
      console.error("Error generating final prompt:", error);
      setGeneratedPrompt(
        "Sorry, there was an error generating the prompt. Please try again."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedPrompt).then(() => {
      setCopyFeedback("Copied to clipboard!");
      setTimeout(() => setCopyFeedback(""), 2000);
    });
  };

  const isGenerateButtonDisabled = !task.trim() || isGenerating;

  return (
    <div className="w-full max-w-3xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-transparent md:text-5xl bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
          PROMPTER
        </h1>
        <p className="mt-2 text-gray-400">
          Craft the perfect AI prompt, every time.
        </p>
      </header>

      <main className="p-6 space-y-6 border border-gray-700 shadow-2xl bg-gray-800/50 backdrop-blur-sm rounded-2xl md:p-8">
        <Task value={task} onChange={setTask} />
        <Context value={context} onChange={setContext} />
        <Reference value={references} onChange={setReferences} />
        <Keywords
          keywords={keywords}
          isLoading={isKeywordsLoading}
          selectedKeywords={selectedKeywords}
          onKeywordClick={handleKeywordClick}
        />
        <Generate
          onClick={() => handleGeneratePrompt()}
          isDisabled={isGenerateButtonDisabled}
          isGenerating={isGenerating}
        />
        <GeneratedPrompt
          promptText={generatedPrompt}
          onCopy={handleCopy}
          copyFeedback={copyFeedback}
        />
      </main>
    </div>
  );
}

export default App;
