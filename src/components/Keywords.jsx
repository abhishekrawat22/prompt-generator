const Keywords = ({ keywords, isLoading, selectedKeywords, onKeywordClick }) => {

  return (
    <div>
      <label className="block mb-2 text-lg font-semibold text-gray-300">
        4. Select Keywords
      </label>
      <p className="mb-2 text-sm text-gray-500">
        We've suggested some keywords based on your input. Click to select the
        most relevant ones.
      </p>
      {isLoading && (
        <div className="flex items-center justify-center my-4 space-x-2">
          <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-4 h-4 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          <span className="text-gray-400">Generating keywords...</span>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {keywords.map((kw) => (
          <button
            key={kw}
            onClick={() => onKeywordClick(kw)}
            className={`px-3 py-1 rounded-full text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 ${selectedKeywords.has(kw) ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
          >
            {kw}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Keywords;
