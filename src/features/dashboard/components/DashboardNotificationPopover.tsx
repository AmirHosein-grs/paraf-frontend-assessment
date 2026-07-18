import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/shared/components/ui/popover";
import { Button } from "@/shared/components/ui/button";
import { BellRing } from "lucide-react";

export function DashboardNotificationPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size={"sm"}
          variant={"ghost"}
          className=" rounded-full w-8 h-8 "
        >
          <BellRing />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end">
        <PopoverHeader className=" text-center">
          <PopoverTitle>اعلان ها</PopoverTitle>
          <PopoverDescription>--------------------</PopoverDescription>
        </PopoverHeader>
      </PopoverContent>
    </Popover>
  );
}
