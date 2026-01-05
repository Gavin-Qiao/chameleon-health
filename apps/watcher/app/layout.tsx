import type { Metadata } from "next";
import { SharedLayout } from "@repo/ui/layout";

export const metadata: Metadata = {
  title: "Watcher",
  description: "The Watcher application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SharedLayout>{children}</SharedLayout>;
}
