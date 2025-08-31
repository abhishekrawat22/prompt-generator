const Keywords = () => {
  return (
    <div>
      <label className="block mb-2 text-lg font-semibold text-gray-300">
        4. Select Keywords
      </label>
      <p className="text-sm text-gray-500 mb-2">
        We've suggested some keywords based on your input. Click to select the
        most relevant ones.
      </p>
      <div
        id="loader"
        className="hidden my-4 items-center justify-center space-x-2"
      >
        <div className="w-4 h-4 rounded-full animate-pulse bg-blue-400"></div>
        <div
          className="w-4 h-4 rounded-full animate-pulse bg-blue-400"
          style={{animationDelay: '0.2s'}}
        ></div>
        <div
          className="w-4 h-4 rounded-full animate-pulse bg-blue-400"
          style={{animationDelay: '0.4s'}}
        ></div>
        <span className="text-gray-400">Generating keywords...</span>
      </div>
      <div id="tags-container" className="flex flex-wrap gap-2">
        {/* Keyword pills will be dynamically inserted here */}
      </div>
    </div>
  );
};

export default Keywords;
