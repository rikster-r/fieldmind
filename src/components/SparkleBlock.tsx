type Props = {
  text: string;
};

export default function SparkleBlock({ text }: Props) {
  return (
    <div
      className="mt-4 grid min-h-max gap-2 md:gap-8 md:h-auto md:grid-cols-2 md:items-center"
      id="sparkle-block"
    >
      <svg
        className="h-16 w-16 md:h-20 md:w-20"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
      >
        <path
          d="M50 10 Q55 50 90 50 Q55 50 50 90 Q45 50 10 50 Q45 50 50 10 Z"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
        />
      </svg>
      <p className="outline-title text-2xl font-black uppercase tracking-wider md:text-4xl">
        {text}
      </p>
    </div>
  );
}
