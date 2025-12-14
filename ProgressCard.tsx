export default function ProgressCard() {
  return (
    <div className="mt-4 bg-green-400 rounded-xl p-4">
      <p className="text-xs">XP PROGRESS</p>
      <div className="w-full bg-green-200 rounded-full h-2 mt-2">
        <div className="bg-white h-2 rounded-full w-2/3" />
      </div>
      <p className="text-xs mt-2">24 XP • Next Level</p>
    </div>
  );
}
