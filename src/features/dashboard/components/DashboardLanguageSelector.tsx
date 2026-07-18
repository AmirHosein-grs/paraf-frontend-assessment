import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  //   SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Languages } from "lucide-react";

export function DashboardLanguageSelector() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48 bg-transparent hover:bg-input/50 ">
        <SelectValue placeholder="فارسی/IRT" />
        <Languages className=" w-3 h-3" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className=" text-xs">
          {/* <SelectLabel className=" text-center">زبان/lang</SelectLabel> */}
          <SelectItem value="فارسی/IRT">فارسی/IRT</SelectItem>
          <SelectItem value="English/USD">USD/English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
