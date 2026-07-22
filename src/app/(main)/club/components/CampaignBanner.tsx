import Image from "next/image";
import Link from "next/link";

export function CampaignBanner() {
  return (
    <div className="w-full relative h-30 md:h-45 overflow-hidden my-8">
      <Link href="/campaigns/...">
        <Image
          src="/images/Banner.png"
          alt="جشن ۱۹ سالگی ایکس ویژن"
          fill
          className="object-cover"
        />
      </Link>
    </div>
  );
}
