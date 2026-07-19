import Image from "next/image";

export function BannerSection() {
  return (
    <div className=" my-10 ">
      <Image
        src="/images/banner.png"
        alt="banner"
        width={1920}
        height={500}
        className="w-full h-auto"
      />
    </div>
  );
}
