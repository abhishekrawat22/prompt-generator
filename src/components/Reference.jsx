const Reference = ({ value, onChange }) => {

  return (
    <div>
      <label
        htmlFor="references"
        className="block mb-2 text-lg font-semibold text-gray-300"
      >
        3. Add References (Optional)
      </label>
      <p className="mb-2 text-sm text-gray-500">
        Paste any example text, links, or styles you want the AI to emulate.
      </p>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="references"
        rows="4"
        className="w-full p-3 transition-shadow bg-gray-900 border border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="e.g., Write in a style similar to..."
      ></textarea>
    </div>
  );
};

export default Reference;
