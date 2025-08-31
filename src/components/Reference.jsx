const Reference = () => {
  return (
    <div>
      <label
        htmlFor="references"
        className="block mb-2 text-lg font-semibold text-gray-300"
      >
        3. Add References (Optional)
      </label>
      <p className="text-sm text-gray-500 mb-2">
        Paste any example text, links, or styles you want the AI to emulate.
      </p>
      <textarea
        id="references"
        rows="4"
        className="w-full resize-none bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
        placeholder="e.g., Write in a style similar to..."
      ></textarea>
    </div>
  );
};

export default Reference;
