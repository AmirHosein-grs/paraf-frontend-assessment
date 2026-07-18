"use client";

import { Button } from "@/shared/components/ui/button";
import { Separator } from "@/shared/components/ui/separator";
import { LayoutGrid, ShoppingCart } from "lucide-react";
import { DashboardNotificationPopover } from "./DashboardNotificationPopover";
import { DashboardLanguageSelector } from "./DashboardLanguageSelector";

export function DashboardToolbar() {
  return (
    <div className=" flex items-center justify-center ">
      <div className=" flex items-center justify-center text-xs gap-5 ">
        <div className=" flex items-center justify-center cursor-pointer">
          <DashboardLanguageSelector />
        </div>
        <Button className="w-max" variant={"ghost"}>
          ثبت آگهی جدید{" "}
        </Button>
      </div>
      <Separator orientation="vertical" className=" mx-5" />
      <div className=" flex items-center justify-center gap-2 ">
        <DashboardNotificationPopover />

        <Button
          size={"sm"}
          variant={"ghost"}
          className=" rounded-full w-8 h-8 "
        >
          <ShoppingCart />
        </Button>
        <Button size={"sm"} variant={"ghost"} className=" rounded-full w-8 h-8">
          <LayoutGrid />
        </Button>
      </div>
    </div>
  );
}
