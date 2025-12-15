const actions = ["Video", "Peer Calls", "Stories", "AI Calls"];

export default function ActionIcons() {
  return (
    <div className="flex justify-around mt-6">
      {actions.map((action) => (
        <div key={action} className="flex flex-col items-center text-xs">
          <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center">
            ------
          </div>
          <span className="mt-1">{action}</span>
        </div>
      ))}
    </div>
  );
}
