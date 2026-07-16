import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/shared/providers/providers";
import { vazirmatn } from "@/shared/components/font/fonts";

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
    <html
      lang="fa"
      dir="rtl"
      className={`h-full antialiased ${vazirmatn.className}`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
