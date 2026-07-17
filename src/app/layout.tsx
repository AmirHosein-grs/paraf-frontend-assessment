import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/shared/providers/providers";
import { YekanBakhFaNumRegular } from "@/shared/components/font/fonts";
import { DirectionProvider } from "@/shared/components/ui/direction";

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
      className={`h-full antialiased ${YekanBakhFaNumRegular.className}`}
    >
      <body className="min-h-full flex flex-col">
        <DirectionProvider dir="rtl">
          <Providers>{children}</Providers>
        </DirectionProvider>
      </body>
    </html>
  );
}
