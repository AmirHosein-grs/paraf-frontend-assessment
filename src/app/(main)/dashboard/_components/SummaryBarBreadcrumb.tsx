import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/shared/components/ui/breadcrumb";
import { ArrowRight } from "lucide-react";
import { Button } from "@/shared/components/ui/button";

export function SummaryBarBreadcrumb() {
  return (
    <div className=" flex items-center justify-center gap-2 ">
      <div className=" flex items-center justify-center">
        <Button variant={"ghost"} size={"xs"} className=" cursor-pointer">
          <ArrowRight className=" w-3 h-3" />
          <span className=" font-bold">برگشت</span>
        </Button>
      </div>
      <Breadcrumb className=" text-shadow-2xs opacity-80 ">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/#" className="text-[10px]">
                صفحه اصلی
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbPage>
            <BreadcrumbLink asChild>
              <Link href="/#" className="text-[12px]">
                پاراف کلاب
              </Link>
            </BreadcrumbLink>
          </BreadcrumbPage>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
