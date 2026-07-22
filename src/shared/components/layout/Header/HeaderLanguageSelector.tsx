import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shared/components/ui/select";
import { Languages } from "lucide-react";

export function LanguageSelector() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-48 bg-transparent hover:bg-input/50 ">
        <SelectValue placeholder="فارسی/IRT" />
        <Languages className=" w-3 h-3" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup className=" text-xs">
          <SelectItem value="فارسی/IRT">فارسی/IRT</SelectItem>
          <SelectItem value="English/USD">USD/English</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
