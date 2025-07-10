export default function Title ({title, author, date}) {
  return (
    <section className="overflow-hidden pt-20 pb-10">
      <div className="container">
        <div className="flex flex-col gap-5">
          <div className="relative flex flex-col gap-8">
            <div
              style={{
                transform: "translate(-50%, -50%)",
              }}
              className="absolute top-1/2 left-1/2 -z-10 mx-auto size-[800px] rounded-full border [mask-image:linear-gradient(to_top,transparent,transparent,white,white,white,transparent,transparent)] p-16 md:size-[1300px] md:p-32"
            >
              <div className="size-full rounded-full border p-16 md:p-32">
                <div className="size-full rounded-full border"></div>
              </div>
            </div>
            <h2 className="mx-auto max-w-5xl text-center text-3xl font-medium md:text-6xl">
              {title}
            </h2>
            <div className="flex flex-col gap-1 mx-auto max-w-3xl text-center">
              <p className="text-muted-foreground md:text-xl font-medium">By {author}</p>
              <p className="text-muted-foreground/80 md:text-lg">Created {date}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};