import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black font-sans">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
          Booker
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Welcome to the Booker application.
        </p>
      </main>
    </div>
  );
}
