import friendship from "../assets/images/friendshipncourage.png";

export default function NowPlaying() {
  return (
    <div className="min-h-screen bg-green-50 px-4 pt-4 pb-6 max-w-md mx-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-4">
        {/* Back */}
        <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M12.7 5.3a1 1 0 010 1.4L9.4 10l3.3 3.3a1 1 0 01-1.4 1.4l-4-4a1 1 0 010-1.4l4-4a1 1 0 011.4 0z" />
          </svg>
        </button>

        <p className="text-xs tracking-widest text-gray-500 font-medium">
          NOW PLAYING
        </p>

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M6 2a2 2 0 00-2 2v12l6-3 6 3V4a2 2 0 00-2-2H6z" />
            </svg>
          </button>

          <button className="w-9 h-9 rounded-full bg-green-500 text-white flex items-center justify-center relative shadow">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-yellow-400 text-[10px] font-bold rounded-full px-1">
              7
            </span>
          </button>
        </div>
      </div>

      {/* Artwork Card */}
      <div className="bg-white rounded-2xl p-3 shadow">
        <div className="rounded-xl border-2 border-green-400 p-2">
          <img
            src={friendship}
            alt="Friendship and Courage"
            className="h-64 w-full rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Title + Like */}
      <div className="mt-4 flex items-start justify-between">
        <div>
          <h2 className="text-lg font-semibold">
            The Melody of Friendship
          </h2>
          <p className="text-sm text-gray-600 mt-1 max-w-[260px]">
            A heartwarming story about friendship and courage
          </p>
        </div>

        <button className="mt-1">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M12 21s-6.5-4.35-9-7.5A5.4 5.4 0 0112 6a5.4 5.4 0 019 7.5c-2.5 3.15-9 7.5-9 7.5z" />
          </svg>
        </button>
      </div>

      {/* CTA */}
      <button className="mt-4 w-full bg-green-500 text-white py-3 rounded-xl font-medium flex items-center justify-center gap-2 shadow">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 2a2 2 0 00-2 2v12l6-3 6 3V4a2 2 0 00-2-2H6z" />
        </svg>
        Test Your Understanding
        <span className="bg-green-600 text-xs px-2 py-0.5 rounded-full">
          7 Questions
        </span>
      </button>

      {/* Progress */}
      <div className="mt-6">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>0:00</span>
          <span>2:18</span>
        </div>
        <div className="h-1 bg-gray-300 rounded-full">
          <div className="h-1 w-1/4 bg-green-500 rounded-full" />
        </div>
      </div>

      {/* Controls */}
      <div className="mt-6 flex justify-center items-center gap-6">
        <button className="text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 4l-6 6 6 6V4z" />
          </svg>
        </button>

        <button className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg">
          <svg className="w-7 h-7 ml-1" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 4l10 6-10 6V4z" />
          </svg>
        </button>

        <button className="text-gray-600">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4 4l6 6-6 6V4zm6 0l6 6-6 6V4z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
