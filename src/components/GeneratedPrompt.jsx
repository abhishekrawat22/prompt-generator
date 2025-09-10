import { useRef, useEffect } from 'react';

const GeneratedPrompt = ({ promptText, onCopy, copyFeedback }) => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [promptText]);


  if (!promptText) {
    return null;
  }

  return (
    <div className="pt-6 border-t border-gray-700 fade-in">
      <h2 className="text-xl font-semibold mb-3 text-gray-200">Your Generated Prompt</h2>
      <div className="relative">
        <textarea
          ref={textareaRef}
          id="output-prompt"
          value={promptText}
          readOnly
          className="w-full bg-gray-900 border border-gray-700 rounded-lg p-3 pr-12 text-gray-300 custom-scrollbar overflow-hidden"
        ></textarea>
        <button onClick={onCopy} className="absolute top-3 right-3 p-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-gray-400 hover:text-white transition-colors" title="Copy to clipboard">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        </button>
      </div>
      <p className="text-center text-green-400 mt-2 h-4">{copyFeedback}</p>
    </div>
  );
};

export default GeneratedPrompt;
