import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/shared/providers/providers";

export const metadata: Metadata = {
  title: "باشگاه مشتریان پاراف",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
