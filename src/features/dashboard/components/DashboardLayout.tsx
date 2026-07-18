import { DashboardHeader } from "./DashboardHeader";

interface DashboardPageLayoutProps {
  children: React.ReactNode;
}

export default function DashboardPageLayout({
  children,
}: DashboardPageLayoutProps) {
  return (
    <div>
      <DashboardHeader />

      <div className="flex-1 w-full max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
        {children}
      </div>
    </div>
  );
}
