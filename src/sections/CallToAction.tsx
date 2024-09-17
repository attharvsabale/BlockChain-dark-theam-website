import { CutCornerButton } from "../components/CutCornerButton";
import { Hexagon } from "../components/Hexagon";
import { Circle } from "../components/Circle";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const CallToAction = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

  return (
    <section className="py-60 overflow-hidden" ref={sectionRef}>
      <div className="container">
        <div className="relative">
          {/* Hexagon Background Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={700} />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Hexagon size={1100} reverse duration={50} />
          </div>

          {/* Animated Circle Elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute left-0 -top-[400px]" animate>
              <motion.img
                src="/assets/images/cuboid.png"
                className="w-[140px] h-[140px]" // Corrected sizing
                alt=""
                style={{
                  rotate: rotate, // Corrected to use rotate instead of Rotate
                }}
              />
            </Circle>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Circle className="absolute -left-[600px] -top-[70px]" animate>
              <motion.img
                src="/assets/images/cylinder.png"
                className="w-[140px] h-[140px]" // Corrected sizing
                alt=""
                style={{
                  rotate,
                }}
              />
            </Circle>
          </div>

          {/* Main Content */}
          <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center">
            Ready to <span className="block">get started?</span>
          </h2>
          <p className="text-xl text-zinc-400 text-center mt-8 lg:text-2xl max-w-sm mx-auto">
            Start building using blockchain technology, with BlockForge.
          </p>
          <div className="flex justify-center mt-12">
            <CutCornerButton>Get Started</CutCornerButton>
          </div>
        </div>
      </div>
    </section>
  );
};
