type Props = {
  title: string;
};

const stories = [
  {
    title: "Choosing the Right Path",
    img: "https://picsum.photos/200/280?random=1",
  },
  {
    title: "The Fountain and the Mayor",
    img: "https://picsum.photos/200/280?random=2",
  },
  {
    title: "The Less Said",
    img: "https://picsum.photos/200/280?random=3",
  },
];

export default function StoryCarousel({ title }: Props) {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center px-4 mb-2">
        <h3 className="font-semibold">{title}</h3>
        <span className="text-sm text-green-600">Show all →</span>
      </div>

      <div className="flex gap-3 overflow-x-auto px-4">
        {stories.map((story) => (
          <div key={story.title} className="min-w-[140px]">
            <img
              src={story.img}
              alt={story.title}
              className="h-44 w-full rounded-xl object-cover"
            />
            <p className="text-xs mt-2">{story.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
