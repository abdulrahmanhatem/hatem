import dynamic from "next/dynamic";
import Loading from "@/components/custom/Loading";

const Hero = dynamic(() => import("@/components/modules/home/Hero"), {
  loading: Loading,
});

const About = dynamic(() => import("@/components/modules/home/About"), {
  loading: Loading,
});

const Expertise = dynamic(() => import("@/components/modules/home/Expertise"), {
  loading: Loading,
});

const WorkProcess = dynamic(
  () => import("@/components/modules/home/WorkProcess"),
  {
    loading: Loading,
  }
);

const CTA = dynamic(
  () => import("@/components/modules/home/CTA"),
  {
    loading: Loading,
  }
);

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <WorkProcess />
      <CTA />
      
    </>
  );
};
export default Home;
