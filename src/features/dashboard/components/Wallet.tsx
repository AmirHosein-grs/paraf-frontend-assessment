import { useProfile } from "@/features/profile";
import { Button } from "@/shared/components/ui/button";
import { CircleQuestionMark } from "lucide-react";

export function Wallet() {
  const profileQuery = useProfile();

  return (
    <div className="flex items-center justify-center ">
      <Button
        variant={"outline"}
        size={"sm"}
        className=" text-[10px] rounded-md shadow "
      >
        کیف پول:
        <span>{profileQuery.data?.coins}</span>
        تومان
      </Button>

      <Button
        variant={"ghost"}
        size={"sm"}
        className=" w-5 h-5 cursor-pointer opacity-50 "
      >
        <CircleQuestionMark className=" w-5 h-5" />
      </Button>
    </div>
  );
}
