import type { Metadata } from "next";
import { SharedLayout } from "@repo/ui/layout";

export const metadata: Metadata = {
  title: "Booker",
  description: "The Booker application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SharedLayout>{children}</SharedLayout>;
}
