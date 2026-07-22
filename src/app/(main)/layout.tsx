import { ReactNode } from "react";
import { Header } from "@/shared/components/layout/Header/Header";
// import { Footer } from '@/shared/components/layout/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-blue-200">
      <Header />

      <main className="flex-1 w-full max-w-360 mx-auto">{children}</main>

      {/* <Footer /> */}
    </div>
  );
}
