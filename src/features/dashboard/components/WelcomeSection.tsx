import Image from "next/image";

interface Props {
  firstName: string;
}

export function WelcomeSection({ firstName }: Props) {
  return (
    <section className=" w-full h-64 flex items-center justify-center">
      <div className=" relative flex items-center justify-center">
        <div className=" flex flex-col items-start justify-center  bg-white rounded-r-full p-10 z-10 ">
          <span className=" w-max text-xs "> {firstName}عزیز </span>
          <span className=" w-max text-xl font-bold  lg:pl-20 md:pl-10">
            به پاراف کلاب
            <span className=" text-sm ">{`(باشگاه مشتریان پاراف)`}</span>
            خوش اومدی!
          </span>
        </div>

        <Image
          src="/images/img2.png"
          alt={"logo"}
          width={240}
          height={32}
          className=" absolute -left-30 z-10 "
        />
        <Image
          src="/images/img3.png"
          alt={"logo"}
          width={120}
          height={32}
          className="absolute left-0 -bottom-15 animate-[wiggle_2s_ease-in-out_infinite] z-10 "
        />
        <Image
          src="/images/img4.png"
          alt={"logo"}
          width={130}
          height={32}
          className="absolute animate-ping z-0  "
        />
      </div>
    </section>
  );
}
