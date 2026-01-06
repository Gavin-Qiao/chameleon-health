type PageProps = {
  readonly appName: string;
};

export function Page({ appName }: PageProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="flex flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          {appName}
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Welcome to the {appName} application.
        </p>
      </main>
    </div>
  );
}
