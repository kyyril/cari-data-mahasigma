export default function LoadingListMhs() {
  return (
    <main className="flex justify-center flex-col items-center mt-5 w-full">
      <section className="max-w-3xl w-full">
        <div className="flex items-center justify-center flex-col w-full">
          <div className="flex mt-12 justify-center items-center w-full"></div>
          <div className="bg-neutral-200 w-full h-96 animate-pulse dark:bg-neutral-800 rounded-md"></div>
          <div className="w-full h-[400px] mt-4 animate-pulse bg-neutral-200 dark:bg-neutral-800 rounded-md"></div>
        </div>
      </section>
    </main>
  );
}
