import choosingRightPath from "../assets/images/choosingrightpath.png";
import theFountain from "../assets/images/thefountain.png";
import theLessSap from "../assets/images/thelesssap.png";

import videoLearning from "../assets/images/videolearning.png";
import peerCalls from "../assets/images/peercalls.png";
import stories from "../assets/images/stories.png";
import aiCalls from "../assets/images/aicalls.png";

import doremon from "../assets/images/doremon.png";
import spiderman from "../assets/images/spiderman.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex justify-center">
      {/* PHONE CONTAINER */}
      <div className="w-full max-w-[390px] pb-24">

        {/* HEADER */}
        <div className="bg-green-500 text-white rounded-b-3xl p-4">
          <p className="text-xs opacity-90">Good Night</p>
          <h1 className="text-xl font-semibold">Lorenzo</h1>

          {/* XP CARD */}
          <div className="mt-4 bg-green-400 rounded-xl p-4">
            <div className="flex justify-between text-xs mb-2">
              <span>XP PROGRESS</span>
              <span>Next L4</span>
            </div>
            <div className="h-2 bg-green-200 rounded-full">
              <div className="h-2 w-2/3 bg-white rounded-full" />
            </div>
            <p className="text-xs mt-2">242 XP</p>
          </div>
        </div>

        {/* ACTION ICONS */}
        <div className="grid grid-cols-4 gap-4 px-4 mt-6 text-center text-xs">
          <Action icon={videoLearning} label="Video Learning" />
          <Action icon={peerCalls} label="Peer Calls" />
          <Action icon={stories} label="Stories" />
          <Action icon={aiCalls} label="AI Calls" />
        </div>

        {/* AUDIO STORIES */}
        <Section title="Audio Stories">
          <Story image={choosingRightPath} title="Choosing the Right Path" />
          <Story image={theFountain} title="The Fountain and the Mayor" />
          <Story image={theLessSap} title="The Less Sap" />
        </Section>

        {/* PRACTICE WITH AI */}
        <Section title="Practice with AI">
          <Character image={doremon} name="Talk with Doremon" />
          <Character image={spiderman} name="Talk with Spider Man" />
        </Section>

      </div>
    </div>
  );
}

/* ---------- SMALL COMPONENTS ---------- */

function Action({ icon, label }: { icon: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 rounded-full bg-white shadow flex items-center justify-center">
        <img src={icon} alt={label} className="w-7 h-7" />
      </div>
      <span className="mt-2">{label}</span>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center px-4 mb-3">
        <h2 className="font-semibold">{title}</h2>
        <span className="text-sm text-green-500">Show all →</span>
      </div>
      <div className="flex gap-4 overflow-x-auto px-4">
        {children}
      </div>
    </div>
  );
}

function Story({ image, title }: { image: string; title: string }) {
  return (
    <div className="min-w-[140px]">
      <div className="aspect-[3/4] rounded-xl overflow-hidden shadow">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <p className="text-xs mt-2">{title}</p>
    </div>
  );
}

function Character({ image, name }: { image: string; name: string }) {
  return (
    <div className="min-w-[140px] bg-white rounded-xl p-3 shadow text-center">
      <img src={image} alt={name} className="w-20 h-20 mx-auto mb-2" />
      <p className="text-xs">{name}</p>
    </div>
  );
}
