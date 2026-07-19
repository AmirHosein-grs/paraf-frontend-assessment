"use client";

import Image from "next/image";
import { DashboardNavigationMenu } from "./NavigationMenu";
import { DashboardSearch } from "./DashboardSearch";
import { DashboardToolbar } from "./DashboardToolbar";

export function DashboardHeader() {
  return (
    <div className=" w-full h-14 bg-white flex items-center justify-center px-4">
      <div className=" w-full max-w-6xl flex items-center justify-between">
        <div className="flex items-center justify-between ">
          <Image src="/images/logo.png" alt={"logo"} width={72} height={32} />
          <div className=" text-blue-600 p-1 text-xs flex items-center justify-center flex-col ">
            <span className=" w-max">بازار کالا و خدمات;</span>
            <span className=" w-max">ساده, امن, بی مرز</span>
          </div>
        </div>
        <DashboardNavigationMenu />
        <DashboardSearch />
        <DashboardToolbar />
      </div>
    </div>
  );
}
