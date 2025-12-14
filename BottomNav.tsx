export default function BottomNav() {
  const tabs = ["Home", "Learn", "Call", "Me"];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3">
      {tabs.map((tab) => (
        <span key={tab} className="text-xs text-gray-600">
          {tab}
        </span>
      ))}
    </nav>
  );
}
