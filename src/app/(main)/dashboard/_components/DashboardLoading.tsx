import { Loader } from "lucide-react";

export function DashboardLoading() {
  return (
    <div className="w-full h-screen animate-spin flex items-center justify-center text-black ">
      <Loader className=" w-5 h-5" />
    </div>
  );
}
