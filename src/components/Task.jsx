const Task = ({ value, onChange }) => {

  return (
    <div>
      <label htmlFor="task" className="block mb-2 text-lg font-semibold text-gray-300">
        1. What is the primary task?
      </label>
      <p className="mb-2 text-sm text-gray-500">
        Describe the main goal. E.g., "Write a blog post", "Generate Python code
        for a web scraper", "Create a marketing slogan".
      </p>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        id="task"
        rows="3"
        className="w-full p-3 transition-shadow bg-gray-900 border border-gray-700 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="e.g., Generate a short story..."
      ></textarea>
    </div>
  );
};

export default Task;
