const GeneratedPrompt = () => {
  return (
    <div
      id="output-section"
      className="hidden pt-6 border-t border-gray-700 fade-in"
    >
      <h2 className="text-xl font-semibold mb-3 text-gray-200">
        Your Generated Prompt
      </h2>
      <div className="relative">
        <textarea
          id="output-prompt"
          rows="10"
          readOnly
          className="w-full resize-none bg-gray-900 border border-gray-700 rounded-lg p-3 pr-12 text-gray-300 custom-scrollbar"
        ></textarea>
        <button
          id="copy-btn"
          className="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-400 hover:text-white transition-colors"
          title="Copy to clipboard"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
      <p id="copy-feedback" className="text-center text-green-400 mt-2 h-4"></p>
    </div>
  );
};

export default GeneratedPrompt;
