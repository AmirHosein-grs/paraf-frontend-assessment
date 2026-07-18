"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/shared/components/ui/navigation-menu";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "پیگیری سفارشات",
    href: "#",
    description:
      "مشاهده وضعیت لحظه‌ای سفارش‌های ثبت شده و مدیریت مراحل آماده‌سازی تا تحویل.",
  },
  {
    title: "پنل فروشندگان",
    href: "#",
    description:
      "ویژه تامین‌کنندگان جهت مدیریت کالاها، قیمت‌گذاری و گزارش‌های فروش.",
  },
  {
    title: "گارانتی و خدمات",
    href: "#",
    description:
      "ثبت و پیگیری خدمات پس از فروش، گارانتی محصولات و شرایط بازگشت کالا.",
  },
  {
    title: "راهنمای خرید",
    href: "#",
    description: "دسترسی به قوانین خرید، نحوه پرداخت و سوالات متداول مشتریان.",
  },
  {
    title: "باشگاه مشتریان",
    href: "#",
    description:
      "مشاهده امتیازات، استفاده از کدهای تخفیف و بهره‌مندی از پیشنهادات ویژه.",
  },
  {
    title: "پشتیبانی آنلاین",
    href: "#",
    description:
      "ارتباط مستقیم با کارشناسان جهت رفع مشکلات فنی و مشاوره پیش از خرید.",
  },
];

export function DashboardNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>کالا</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="w-96">
              <ListItem href="/products/digital" title="کالاهای دیجیتال">
                موبایل، لپ‌تاپ، لوازم جانبی و تجهیزات کامپیوتری.
              </ListItem>
              <ListItem href="/products/home" title="لوازم خانگی">
                لوازم آشپزخانه، صوتی و تصویری و ابزار برقی منزل.
              </ListItem>
              <ListItem href="/products/fashion" title="مد و پوشاک">
                انواع پوشاک مردانه، زنانه و اکسسوری‌های برند.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem className="hidden md:flex">
          <NavigationMenuTrigger>خدمات</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-100 gap-2 md:w-125 md:grid-cols-2 lg:w-150">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/#">فروشندگان</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>{" "}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/#">نمایندگی ها</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="line-clamp-2 text-muted-foreground">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
