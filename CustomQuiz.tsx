export default function CustomQuiz() {
  const topics = [
    "My Best Friend",
    "Cricket Basics",
    "Solar System",
    "Healthy Habits",
    "Animals & Birds",
    "School Picnic",
  ];

  return (
    <div className="max-w-md mx-auto min-h-screen bg-gray-50 p-4">
      {/* Top Bar */}
      <div className="flex items-center gap-2 mb-4">
        <button className="text-sm text-green-600 font-medium">
          ← Back
        </button>
      </div>

      {/* Header Card */}
      <div className="bg-white rounded-2xl p-4 shadow">
        <p className="text-xs text-green-600 tracking-widest font-semibold">
          LEARN TAB
        </p>

        <h1 className="text-lg font-semibold mt-1">
          Craft a custom quiz
        </h1>

        <p className="text-sm text-gray-600 mt-1">
          Pick a topic, choose difficulty, and we will build fun
          questions instantly.
        </p>

        {/* Pills */}
        <div className="flex gap-2 mt-3 text-xs">
          <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full">
            AI Powered
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-full">
            4 Questions
          </span>
          <span className="px-2 py-1 bg-gray-100 rounded-full">
            Instant play
          </span>
        </div>
      </div>

      {/* Step 1 */}
      <div className="mt-6">
        <p className="text-xs font-semibold text-gray-500 mb-2">
          STEP 1
        </p>
        <h2 className="font-medium mb-2">
          Choose a topic
        </h2>

        <input
          placeholder='e.g. "My school day" or "Planets in space"'
          className="w-full border rounded-xl px-3 py-2 text-sm mb-3"
        />

        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              className="px-3 py-1.5 bg-gray-100 rounded-full text-xs"
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Step 2 */}
      <div className="mt-6">
        <p className="text-xs font-semibold text-gray-500 mb-2">
          STEP 2
        </p>
        <h2 className="font-medium mb-3">
          Pick a challenge level
        </h2>

        <div className="space-y-3">
          {/* Easy */}
          <div className="border rounded-xl p-3 bg-green-50 border-green-400">
            <p className="font-medium text-sm">Easy</p>
            <p className="text-xs text-gray-600">
              Short sentences & gentle vocabulary.
            </p>
            <p className="text-xs text-green-600 mt-1">
              Selected
            </p>
          </div>

          {/* Medium */}
          <div className="border rounded-xl p-3">
            <p className="font-medium text-sm">Medium</p>
            <p className="text-xs text-gray-600">
              Everyday situations with detail.
            </p>
          </div>

          {/* Hard */}
          <div className="border rounded-xl p-3">
            <p className="font-medium text-sm">Hard</p>
            <p className="text-xs text-gray-600">
              Longer thinking and tricky choices.
            </p>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-6 bg-green-500 text-white rounded-2xl p-4">
        <p className="text-xs tracking-widest font-semibold">
          WHAT YOU'LL GET
        </p>
        <p className="font-medium mt-1">
          Friendly quiz with instant feedback
        </p>
        <ul className="text-xs mt-2 space-y-1">
          <li>• Bite-sized explanations</li>
          <li>• Tone adapts to learner</li>
        </ul>
      </div>

      {/* CTA */}
      <button
        disabled
        className="mt-6 w-full bg-gray-300 text-gray-500 py-3 rounded-xl font-medium"
      >
        Generate Quiz
      </button>
    </div>
  );
}
