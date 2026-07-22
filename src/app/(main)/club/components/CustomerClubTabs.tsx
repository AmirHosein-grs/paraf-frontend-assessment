"use client";

import Image from "next/image";
import { useProfile } from "@/features/profile";
import { useUserVitrins, useVitrin } from "@/features/storefront";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { env } from "@/shared/config";
import { Separator } from "@/shared/components/ui/separator";
import { useActiveVitrinStore } from "@/shared/store/use-active-vitrin";
import { ChevronLeft, CircleAlert, ListTodo } from "lucide-react";
import { Badge } from "@/shared/components/ui/badge";
import { useEffect } from "react";

export function CustomerClubTabs() {
  const profile = useProfile();
  const vitrins = useUserVitrins();

  const { activeVitrin, setActiveVitrin } = useActiveVitrinStore();

  useEffect(() => {
    if (activeVitrin !== null) return;
    if (!vitrins.data?.length) return;

    const personalVitrin =
      vitrins.data.find((v) => v.role === "user") ?? vitrins.data[0];

    setActiveVitrin(personalVitrin.id);
  }, [activeVitrin, vitrins.data, setActiveVitrin]);

  const vitrin = useVitrin(activeVitrin ?? 0);

  return (
    <div className="relative flex w-full max-w-6xl items-center justify-center">
      <Tabs
        value={activeVitrin ? String(activeVitrin) : ""}
        onValueChange={(value) => setActiveVitrin(Number(value))}
        className="w-full"
      >
        <div className="h-12 flex items-center bg-[linear-gradient(to_right,transparent_0,rgba(255,255,255,.8)_60px,transparent_700px,transparent_calc(100%-700px),rgba(255,255,255,.8)_calc(100%-60px),transparent_100%)]">
          <TabsList className="mr-34 h-10! rounded-md bg-zinc-300">
            <span className="absolute right-0 text-xs">
              انتخاب باشگاه مشتریان :
            </span>

            {vitrins.data?.map((item) => (
              <TabsTrigger key={item.id} value={String(item.id)}>
                {item.role === "user" ? "پروفایل شخصی" : item.companyName}
              </TabsTrigger>
            ))}
            <div className="absolute left-5 w-max space-x-2">
              <Button variant="ghost" size="lg">
                قوانین و مقررات
              </Button>

              <Button variant="ghost" size="lg">
                سوالات متداول شما
              </Button>
            </div>
          </TabsList>
        </div>

        <TabsContent value={activeVitrin ? String(activeVitrin) : ""}>
          <Card className="rounded-md p-0 ">
            <CardContent className="p-6 flex items-center justify-between bg-white rounded-xl">
              <div className="flex items-center justify-between rounded-md  ">
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-zinc-100 shrink-0">
                    {vitrin.data?.logo?.link ? (
                      <Image
                        src={`${env.IMAGE_BASE_URL}/${vitrin.data.logo.link}`}
                        alt={vitrin.data.companyName ?? "logo"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-zinc-200" />
                    )}
                  </div>

                  <div className="flex flex-col items-start gap-1 text-xs ">
                    <span className="font-medium text-2xl ">
                      {vitrin?.data?.companyName}
                    </span>

                    <span>
                      {vitrin.data?.fieldOfActivity?.name ?? "-"}/
                      <span>
                        {vitrin.data?.citiesRow
                          ?.map((city) => city.name)
                          .join("، ") ?? "-"}
                      </span>
                    </span>
                    <span>
                      {vitrin.data?.groupCategoriesRow?.[0]?.name ?? "-"}
                    </span>
                    <span>امتیاز ویترین: {vitrin.data?.scores ?? "-"}</span>
                  </div>
                </div>
              </div>
              <Separator orientation={"vertical"} />
              <div className="flex flex-col items-center justify-center text-xs gap-2 ">
                <span>وقت کمی مونده ماموریتت رو همین الان انجام بده</span>
                <Button variant={"default"} className=" bg-sky-500 rounded-md ">
                  مشاهده ماموریت
                  <ListTodo />
                </Button>
              </div>
              <Separator orientation={"vertical"} />
              <div className=" flex flex-col items-center justify-center gap-2 text-xs ">
                <div className=" flex items-center justify-center gap-2">
                  <Card className=" py-2 shadow ">
                    <CardContent className="flex items-end justify-end">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-zinc-100 shrink-0">
                        {vitrin.data?.logo?.link ? (
                          <Image
                            src={`${env.IMAGE_BASE_URL}/${vitrin.data?.logo?.link}`}
                            alt={vitrin.data.companyName ?? "logo"}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-zinc-200" />
                        )}
                      </div>

                      <div className=" flex flex-col items-center justify-center text-xs">
                        <span>سطح {vitrin.data?.level?.name ?? "-"}</span>
                        <span> {vitrin.data?.scores ?? "-"} امتیاز</span>
                      </div>
                      <Button
                        variant={"ghost"}
                        size={"xs"}
                        className=" rounded-full"
                      >
                        <CircleAlert className=" w-3 h-3" />
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className=" py-2 shadow">
                    <CardContent className="flex items-end justify-end   ">
                      <Button
                        variant={"ghost"}
                        size={"xs"}
                        className=" rounded-full"
                      >
                        <CircleAlert className=" w-3 h-3" />
                      </Button>

                      <div className=" flex flex-col items-center justify-center text-xs">
                        <span> {profile.data?.coins ?? "-"}سکه</span>
                        <span>{profile.data?.scores ?? "-"} تومان</span>
                      </div>
                      <Image
                        src="/images/img5.png"
                        alt="img"
                        width={60}
                        height={60}
                        className=" p-1 "
                      />
                    </CardContent>
                  </Card>
                </div>
                <Separator orientation={"horizontal"} className=" opacity-65" />

                <div className="flex items-center justify-center gap-2 ">
                  <div className=" flex items-center justify-center">
                    <Badge className=" bg-gray-300 text-black">
                      <span>30 روز اخیر</span>
                      <ChevronLeft className=" w-3 h-3" />
                    </Badge>
                  </div>
                  <div className=" flex items-center justify-center">
                    <Image
                      src="/images/img6.png"
                      alt="img"
                      width={30}
                      height={30}
                      className=" p-1 "
                    />
                    <span>سکه دریافتی از طرح تخفیف سکه ای: 536 سکه</span>
                  </div>
                  <span>معادل 56 امتیاز</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
