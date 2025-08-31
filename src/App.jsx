import './App.css'
import Context from './components/Context'
import Generate from './components/Generate'
import GeneratedPrompt from './components/GeneratedPrompt'
import Keywords from './components/Keywords'
import Reference from './components/Reference'
import Task from './components/Task'

function App() {

  return (
    <>
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            PROMPTER
        </h1>
        <p className="text-gray-400 mt-2">Craft the perfect AI prompt, every time.</p>
      </header>

      <main className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-2xl p-6 md:p-8 space-y-6">
        {/* Step 1: Task */}
        <Task />

        {/* Step 2: Context */}
        <Context />

        {/* Step 3: References */}
        <Reference />

        {/* Step 4: Keywords */}
        <Keywords />

        {/* Step 5: Generate Prompt Button */}
        <Generate />

        {/* Generated Prompt */}
        <GeneratedPrompt />
      </main>
    </>
  )
}

export default App
