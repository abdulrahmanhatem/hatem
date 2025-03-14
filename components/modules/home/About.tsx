"use client";
import { memo } from "react";
import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";
import {motion } from "framer-motion";
import { fadeScale, fadeScaleD1 } from "@/lib/animation";

const Description = dynamic(
  () => import("@/components/modules/home/about/Description"),
  {
    loading: Loading,
  }
);

const ResponsiveWeb = dynamic(
  () => import("@/components/modules/home/about/ResponsiveWeb"),
  {
    loading: Loading,
  }
);

const Performance = dynamic(
  () => import("@/components/modules/home/about/Performance"),
  {
    loading: Loading,
  }
);

const SPA = dynamic(() => import("@/components/modules/home/about/SPA"), {
  loading: Loading,
});

const MobileFirst = dynamic(
  () => import("@/components/modules/home/about/MobileFirst"),
  {
    loading: Loading,
  }
);

const PixelPerfect = dynamic(
  () => import("@/components/modules/home/about/PixelPerfect"),
  {
    loading: Loading,
  }
);

const TrustedBrands = dynamic(
  () => import("@/components/modules/home/TrustedBrands"),
  {
    loading: Loading,
  }
);

const About = () => {

  return (
    <section className="w-full mt-24">
      <div className="w-[90%] 2xl:w-[70%] mx-auto flex flex-col gap-10">
        <Description />
        <div className="grid md:grid-cols-[calc(50%-1.25rem)_calc(50%-1.25rem)] gap-10">
         
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeScale}
              className="max-w-full"
            >
              <ResponsiveWeb />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeScaleD1}
              layout
            >
              <Performance />
            </motion.div>
        </div>
        <div className="grid lg:grid-cols-[repeat(3,calc(33.33333%-1.666666666rem))] gap-10 ">
          <SPA />
          <MobileFirst />
          <PixelPerfect />
        </div>
        <TrustedBrands />
      </div>
    </section>
  );
};
export default memo(About);
