const Context = () => {
  return (
    <div>
      <label
        htmlFor="context"
        className="block mb-2 text-lg font-semibold text-gray-300"
      >
        2. Provide Context
      </label>
      <p className="text-sm text-gray-500 mb-2">
        Include background info, constraints, target audience, tone, and desired
        format.
      </p>
      <textarea
        id="context"
        rows="5"
        className="w-full resize-none bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
        placeholder="e.g., The story should be for young adults..."
      ></textarea>
    </div>
  );
};

export default Context;
