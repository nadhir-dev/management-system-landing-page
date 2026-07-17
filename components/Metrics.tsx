const metrics = [
  {
    title: "400+",
    subtitle: "Projects completed",
  },
  {
    title: "600%",
    subtitle: "Return on investment",
  },
  {
    title: "10k",
    subtitle: "Global downloads",
  },
];

export const Metrics = () => {
  return (
    <section id="metrics" className="bg-background py-16 md:py-24 scroll-mt-20">
      <div className="mx-auto max-w-container px-4 md:px-8">
        <div className="flex flex-col gap-8 rounded-2xl bg-secondary px-6 py-10 md:gap-16 md:rounded-none md:bg-transparent md:p-0">
          <div className="flex w-full flex-col self-center text-center md:max-w-3xl">
            <h2 className="font-semibold text-brand-secondary text-4xl ">
              best of them all
            </h2>
            <p className="mt-4 text-lg text-tertiary md:mt-5 md:text-xl">
              Everything you need to manage and great products.
            </p>
          </div>

          <dl className="flex flex-col gap-8 rounded-2xl bg-secondary md:flex-row md:p-16">
            {metrics.map((item, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col-reverse gap-3 text-center"
              >
                <dt className="text-2xl font-normal ">{item.subtitle}</dt>
                <dd className="text-display-lg text-5xl text-brand-secondary font-semibold md:text-display-xl">
                  {item.title}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};
