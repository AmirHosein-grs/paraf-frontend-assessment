import { Loader } from "lucide-react";

export function DashboardLoading() {
  return (
    <div className="w-full pt-52  flex items-center justify-center text-black ">
      <Loader className="animate-spin w-5 h-5" />
    </div>
  );
}
