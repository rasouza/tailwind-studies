interface CardProps {
  image: string;
  title: string;
  subtitle: string;
  button?: string;
  url?: string;
}

export function Card({ image, title, subtitle, button, url }: CardProps) {
  return (
    <div className="p-2 w-60 h-80">
      <div className="bg-grey px-6 py-8 rounded-lg shadow-lg text-center">
        <div className="mb-3">
          <img className="h-44 mx-auto rounded-full" src={image} alt={title} />
        </div>
        <h2 className="text-xl font-medium text-gray-700">{title}</h2>
        <span className="text-teal block">{subtitle}</span>
        {button && (
          <a
            href={url}
            className="mt-5 px-4 py-2 bg-blue-500 text-white rounded-full"
          >
            {button}
          </a>
        )}
      </div>
    </div>
  );
}
