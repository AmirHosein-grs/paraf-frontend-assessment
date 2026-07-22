"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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

//  یک دیکشنری برای ترجمه نام مسیرهای انگلیسی به فارسی
const routeDictionary: Record<string, string> = {
  club: "پاراف کلاب",
  // missions: "ماموریت‌ها",
  // store: "فروشگاه",
  // profile: "پروفایل من",
};

export function SummaryBarBreadcrumb() {
  const pathname = usePathname();
  const router = useRouter();

  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <div className="flex items-center justify-center gap-2">
      <div className="flex items-center justify-center">
        <Button
          variant={"ghost"}
          size={"xs"}
          className="cursor-pointer"
          onClick={() => router.back()}
        >
          <ArrowRight className="w-3 h-3" />
          <span className="font-bold">برگشت</span>
        </Button>
      </div>

      <Breadcrumb className="text-shadow-2xs opacity-80">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/" className="text-[10px]">
                صفحه اصلی
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {pathSegments.map((segment, index) => {
            const href = `/${pathSegments.slice(0, index + 1).join("/")}`;

            const isLast = index === pathSegments.length - 1;

            const label = routeDictionary[segment] || segment;

            return (
              <React.Fragment key={href}>
                <BreadcrumbSeparator />

                {isLast ? (
                  <BreadcrumbPage className="text-[12px] cursor-pointer">
                    {label}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href={href} className="text-[10px] cursor-pointer ">
                        {label}
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                )}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
