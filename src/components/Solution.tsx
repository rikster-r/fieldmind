export default function Solution() {
  return (
    <section
      id="solution"
      className="bg-secondary-200 px-4 py-10 text-primary-100 md:pb-20 lg:px-32"
    >
      <div className="mx-auto max-w-[1300px]">
        <div className="flex w-full items-center justify-between">
          <div>
            <h2 className="font-raleway flex flex-col text-5xl font-black uppercase tracking-widest md:mt-10 md:text-left md:text-7xl">
              <span>Problems</span>
              <span>Decision</span>
            </h2>
            <p className="mt-8 max-w-[500px] md:text-[16pt] xl:ml-48 xl:mt-24">
              Timely detection of problem areas in the field using UAVs and
              ground equipment allows farmers to react quickly and minimize
              losses, increasing overall productivity and reducing labor costs.
            </p>
            <p className="font-raleway hidden font-extrabold uppercase leading-5 md:flex md:flex-col md:text-2xl xl:ml-48 xl:mt-8">
              <span>significant crop losses due</span>
              <span>to plant diseases and pests</span>
            </p>
          </div>
          <div className="relative mt-8 hidden aspect-square h-full md:block">
            <svg
              className="size-[300px] -rotate-90 lg:size-[400px]"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="7"
              fill="none"
            >
              <circle
                cx="18"
                cy="18"
                r="14"
                className="stroke-current text-gray-200 dark:text-primary-200"
              ></circle>
              <circle
                cx="18"
                cy="18"
                r="14"
                className="stroke-current text-blue-600 dark:text-primary-300"
                stroke-dasharray="100"
                stroke-dashoffset="45"
                stroke-linecap="round"
              ></circle>
            </svg>
          </div>
        </div>
        <div className="sm:mx-auto sm:w-max md:hidden">
          <div className="relative mt-8 size-full">
            <svg
              className="size-[250px] -rotate-90"
              viewBox="0 0 36 36"
              xmlns="http://www.w3.org/2000/svg"
              stroke-width="7"
              fill="none"
            >
              <circle
                cx="18"
                cy="18"
                r="14"
                className="stroke-current text-gray-200 dark:text-primary-200"
              ></circle>
              <circle
                cx="18"
                cy="18"
                r="14"
                className="stroke-current text-blue-600 dark:text-primary-300"
                stroke-dasharray="100"
                stroke-dashoffset="45"
                stroke-linecap="round"
              ></circle>
            </svg>
          </div>
          <p className="font-raleway ml-12 mt-2 flex flex-col font-bold uppercase leading-5 md:mt-16 md:text-4xl">
            <span>significant crop losses due</span>
            <span>to plant diseases and pests</span>
          </p>
        </div>
        <div className="mt-8">
          <p className="ml-auto max-w-[700px] text-right md:text-[16pt]">
            Additionally, the project makes precision farming technology
            accessible to medium and small farms, which is especially important
            in conditions of insufficient availability of such solutions on the
            market.
          </p>
        </div>
      </div>
    </section>
  );
}
