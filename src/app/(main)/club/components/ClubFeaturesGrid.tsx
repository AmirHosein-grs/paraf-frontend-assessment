import Image from "next/image";
import { Card, CardContent } from "@/shared/components/ui/card";
import { motion, type Variants } from "framer-motion";

const features = [
  {
    title: "ارسال رایگان",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با...",
    image: "/images/img1.png",
  },
  {
    title: "پشتیبانی حرفه‌ای",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با...",
    image: "/images/img2.png",
  },
  {
    title: "جوایز ویژه",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با...",
    image: "/images/img3.png",
  },
  {
    title: "شبکه همکاران",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با...",
    image: "/images/img4.png",
  },
  {
    title: "رویدادهای ویژه",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با...",
    image: "/images/img5.png",
  },
  {
    title: "گزارش فروش",
    description:
      "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با...",
    image: "/images/img6.png",
  },
];

export function ClubFeaturesGrid() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 16,
      },
    },
  };
  return (
    <section className="w-full space-y-8 max-w-5xl mb-20 ">
      <h2 className="text-2xl font-bold">
        ویژگی‌های <span className="text-primary">پاراف‌کلاب</span>
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3"
      >
        {features.map((feature) => (
          <motion.div
            key={feature.title}
            variants={cardVariants}
            whileHover={{
              y: -12,
              rotateX: 6,
              rotateY: -6,
              transition: {
                duration: 0.25,
              },
            }}
            whileTap={{
              scale: 0.98,
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            <Card
              className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/40
      bg-white/90
      backdrop-blur-xl
      shadow-lg
      transition-all
      duration-300
      hover:shadow-[0_25px_60px_rgba(118,74,241,.22)]
    "
            >
              {/* Glow */}

              <motion.div
                className="absolute inset-0 rounded-3xl  from-[#A688FA]/20 via-transparent to-transparent opacity-0"
                whileHover={{
                  opacity: 1,
                  scale: 1.2,
                }}
                transition={{
                  duration: 0.4,
                }}
              />

              {/* Shine */}

              <motion.div
                initial={{
                  x: "-150%",
                }}
                whileHover={{
                  x: "250%",
                }}
                transition={{
                  duration: 0.9,
                }}
                className="
          absolute
          inset-y-0
          w-20
          rotate-12
          bg-white/40
          blur-xl
        "
              />

              <CardContent className="relative z-10 flex h-40 flex-col items-center justify-center px-8 text-center">
                <motion.div
                  whileHover={{
                    scale: 1.18,
                    rotate: [-3, 3, -3, 0],
                    y: -4,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={72}
                    height={72}
                  />
                </motion.div>

                <motion.h3
                  whileHover={{
                    scale: 1.03,
                  }}
                  className="mt-5 mb-2 text-lg font-bold"
                >
                  {feature.title}
                </motion.h3>

                <motion.p
                  initial={{
                    opacity: 0.7,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                  className="text-sm leading-7 text-muted-foreground"
                >
                  {feature.description}
                </motion.p>

                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 18,
                      ease: "linear",
                    }}
                    className="
      absolute
      -left-1/2
      -top-1/2
      h-[200%]
      w-[200%]
      from-[#A688FA]/0
      via-[#A688FA]/12
      to-transparent
    "
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
