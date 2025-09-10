# PROMPTER - Craft Your Perfect AI Prompt

PROMPTER is a modern, responsive web application with a Node.js backend that helps users craft effective prompts for generative AI models. By breaking down the prompt creation process into structured inputs (Task, Context, References, and Keywords), PROMPTER assists users in generating clear, cohesive, and highly effective prompts.

## Features

*   **Structured Prompt Input**: Define your primary task, provide detailed context, and add relevant references.
*   **AI-Powered Keyword Generation**: Automatically suggests 15 relevant keywords based on your task and context using the Gemini API.
*   **Interactive Keyword Selection**: Easily select and incorporate the most appropriate keywords into your final prompt.
*   **Cohesive Prompt Synthesis**: Synthesizes all your inputs into a single, natural language prompt optimized for generative AI models.
*   **Copy to Clipboard**: One-click functionality to copy the generated prompt for immediate use.
*   **Progressive Web App (PWA)**: Installable on your device for quick access and an app-like experience.
*   **Responsive Design**: A clean and intuitive user interface built with Tailwind CSS.

## Technologies Used

*   **Frontend**:
    *   [React](https://react.dev/): A JavaScript library for building user interfaces.
    *   [Vite](https://vitejs.dev/): A fast frontend build tool.
    *   [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for rapid UI development.
*   **Backend**:
    *   [Node.js](https://nodejs.org/): A JavaScript runtime for building the server-side application.
    *   [Express](https://expressjs.com/): A minimal and flexible Node.js web application framework.
*   **API Integration**:
    *   [Google Gemini API](https://ai.google.dev/): Used for intelligent keyword generation and synthesizing final prompts.
*   **PWA**:
    *   [vite-plugin-pwa](https://github.com/antfu/vite-plugin-pwa): For transforming the web application into a Progressive Web App.

## Setup and Installation

Follow these steps to set up and run PROMPTER locally:

### 1. Clone the repository

```bash
git clone <repository-url>
cd prompter-react-app # Or whatever your project directory is named
```

### 2. Install Dependencies

First, install the frontend dependencies:
```bash
npm install
# or
yarn install
```

Then, navigate to the `server` directory and install its dependencies:
```bash
cd server
npm install
# or
yarn install
cd ..
```

### 3. Configure Gemini API Key

PROMPTER uses the Google Gemini API. You need to obtain an API key and configure it:

1.  Go to the [Google AI Studio](https://ai.google.dev/) and generate a new API key.
2.  Create a `.env` file in the root of your project.
3.  Add your Gemini API key to the `.env` file:

    ```
    VITE_GEMINI_API_KEY=YOUR_GEMINI_API_KEY
    ```
    Replace `YOUR_GEMINI_API_KEY` with your actual API key.

### 4. Run the Backend Server

Navigate to the `server` directory and start the Node.js server:

```bash
cd server
npm start
# or
yarn start
cd ..
```

This will start the backend server, typically running on `http://localhost:5000`.

### 5. Run the Frontend Development Server

```bash
npm run dev
# or
yarn dev
```

This will start the frontend development server, usually at `http://localhost:5173`.

### 6. Build for Production

To create a production-ready build of the application:

```bash
npm run build
# or
yarn build
```

The build artifacts will be generated in the `dist` directory.

## Deployment

The `build` command creates a `dist` directory with all the necessary files for deployment. You can deploy this directory to any static site hosting service (e.g., Appwrite, Netlify, Vercel, GitHub Pages).

## Project Structure

```
.
├── public/
│   └── ... (PWA related assets)
├── server/
│   └── server.js
├── src/
│   ├── App.css
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Entry point
│   ├── index.css
│   ├── components/
│   │   ├── Context.jsx       # Input component for context
│   │   ├── Generate.jsx      # Generate prompt button
│   │   ├── GeneratedPrompt.jsx # Displays the final prompt
│   │   ├── Keywords.jsx      # Displays and manages keywords
│   │   ├── Reference.jsx     # Input component for references
│   │   └── Task.jsx          # Input component for the primary task
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── ...
```

## Contributing

Feel free to fork the repository, open issues, or submit pull requests.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).

