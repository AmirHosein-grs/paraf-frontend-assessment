"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useProfile } from "@/features/profile";
import { useUserVitrins, useVitrin } from "@/features/vitrin";
import { Button } from "@/shared/components/ui/button";
import { Card, CardContent } from "@/shared/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components/ui/tabs";
import { ChevronLeft, CircleAlert, ListTodo } from "lucide-react";
import { env } from "@/shared/config";
import { Separator } from "@/shared/components/ui/separator";
import { Badge } from "@/shared/components/ui/badge";

export function VitrinsTabsGroupe() {
  const profile = useProfile();
  const vitrins = useUserVitrins();

  const [selectedVitrinId, setSelectedVitrinId] = useState<number | null>(null);

  const activeVitrinId = useMemo(
    () => selectedVitrinId ?? vitrins.data?.[0]?.id ?? 0,
    [selectedVitrinId, vitrins.data],
  );

  const vitrin = useVitrin(activeVitrinId);

  const activeVitrin = vitrins.data?.find((item) => item.id === activeVitrinId);

  const isProfile = activeVitrin?.role === "user";

  return (
    <div className="relative flex w-full max-w-6xl items-center justify-center">
      <Tabs
        className="w-full"
        value={String(activeVitrinId)}
        onValueChange={(value) => setSelectedVitrinId(Number(value))}
      >
        <div className="h-10 flex items-center bg-[linear-gradient(to_right,transparent_0,rgba(255,255,255,.8)_60px,transparent_700px,transparent_calc(100%-700px),rgba(255,255,255,.8)_calc(100%-60px),transparent_100%)]">
          <TabsList className="mr-34 h-8! rounded-md bg-zinc-300">
            <span className="absolute right-0 text-xs">
              انتخاب باشگاه مشتریان :
            </span>

            {vitrins.data?.map((item) => (
              <TabsTrigger key={item.id} value={String(item.id)}>
                {item.companyName ?? "پروفایل شخصی"}
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

        <TabsContent value={String(activeVitrinId)}>
          {isProfile ? (
            <Card className="rounded-md">
              <CardContent>
                <div className="flex w-full items-center justify-between rounded-md bg-white p-2">
                  مشخصات پروفایل فردی (تکمیل نشده)
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="rounded-md p-0 ">
              <CardContent className="p-0">
                <Card className="rounded-md">
                  <CardContent>
                    <div className="flex w-full items-center justify-between rounded-md bg-white ">
                      <div className="flex items-center gap-4">
                        <Image
                          src="/images/user-profile-icon.png"
                          alt="profile"
                          width={90}
                          height={90}
                          className="bg-white p-1"
                        />
                        <div className="flex flex-col items-start gap-1 text-xs ">
                          <span className="font-medium text-2xl ">
                            {profile.data?.firstName} {profile.data?.lastName}
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

                          <span>
                            امتیاز ویترین: {vitrin.data?.scores ?? "-"}
                          </span>
                        </div>
                      </div>
                      <Separator orientation={"vertical"} />
                      <div className="flex flex-col items-center justify-center text-xs gap-2 ">
                        <span>
                          وقت کمی مونده ماموریتت رو همین الان انجام بده
                        </span>
                        <Button
                          variant={"default"}
                          className=" bg-sky-500 rounded-md "
                        >
                          مشاهده ماموریت
                          <ListTodo />
                        </Button>
                      </div>
                      <Separator orientation={"vertical"} />

                      <div className=" flex flex-col items-center justify-center gap-2 text-xs ">
                        <div className=" flex items-center justify-center gap-2">
                          <Card className=" py-2 shadow ">
                            <CardContent className="flex items-end justify-end   ">
                              <Image
                                src={`${env.IMAGE_BASE_URL}/${vitrin.data?.logo?.link}`}
                                alt="img"
                                width={60}
                                height={60}
                                className=" p-1 "
                              />
                              <div className=" flex flex-col items-center justify-center text-xs">
                                <span>
                                  سطح {vitrin.data?.level?.name ?? "-"}
                                </span>
                                <span>
                                  {" "}
                                  {vitrin.data?.scores ?? "-"} امتیاز
                                </span>
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
                        <Separator
                          orientation={"horizontal"}
                          className=" opacity-65"
                        />

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
                            <span>
                              سکه دریافتی از طرح تخفیف سکه ای: 536 سکه
                            </span>
                          </div>
                          <span>معادل 56 امتیاز</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
