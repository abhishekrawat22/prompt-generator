const Task = () => {
  return (
    <div>
      <label htmlFor="task" className="block mb-2 text-lg font-semibold text-gray-300">
        1. What is the primary task?
      </label>
      <p className="text-sm text-gray-500 mb-2">
        Describe the main goal. E.g., "Write a blog post", "Generate Python code
        for a web scraper", "Create a marketing slogan".
      </p>
      <textarea
        id="task"
        rows="3"
        className="w-full resize-none bg-gray-900 border border-gray-700 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-shadow"
        placeholder="e.g., Generate a short story..."
      ></textarea>
    </div>
  );
};

export default Task;
