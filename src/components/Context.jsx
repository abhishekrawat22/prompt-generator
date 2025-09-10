const Context = ({ value, onChange }) => {

  return (
    <div>
      <label
        htmlFor="context"
        className="block mb-2 text-lg font-semibold text-gray-300"
      >
        2. Provide Context
      </label>
      <p className="mb-2 text-sm text-gray-500">
        Include background info, constraints, target audience, tone, and desired
        format.
      </p>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="context"
        rows="5"
        className="w-full p-3 transition-shadow bg-gray-900 border border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="e.g., The story should be for young adults..."
      ></textarea>
    </div>
  );
};

export default Context;
