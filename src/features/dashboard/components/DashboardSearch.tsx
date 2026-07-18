"use client";

import * as React from "react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shared/components/ui/command";
import { Button } from "@/shared/components/ui/button";
import { Search } from "lucide-react";

export function DashboardSearch() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-4">
      <Button
        onClick={() => setOpen(true)}
        variant="outline"
        className="w-fit opacity-80 bg-input/50 text-xs"
      >
        <span>جستجو در آگهی ها ...</span>
        <Search className=" w-5 h-5 mr-5 " />
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="جستجو در آکهی یا کالاها..." />
          <CommandList>
            <CommandEmpty>نتیجه‌ای یافت نشد.</CommandEmpty>
            <CommandGroup heading="دسترسی‌های سریع">
              <CommandItem>پنل مدیریت</CommandItem>
              <CommandItem>لیست سفارشات</CommandItem>
              <CommandItem>افزودن محصول جدید</CommandItem>
              <CommandItem>گزارش‌های فروش</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  );
}
