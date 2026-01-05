export function Page({ appName }: { readonly appName: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-black">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-black dark:text-white">
          {appName}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Welcome to the {appName} application.
        </p>
      </main>
    </div>
  );
}
