"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

const words = [
    {
      text: "Fostering",
    },
    {
      text: "Innovative",
    },
    {
      text: "M",
    },
    {
      text: "B",
    },
    {
      text: "O",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "L",
     
    },
  ];


export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={idx == 3 || idx == 2? "text-md leading-normal text-blue-500  md:text-2xl lg:text-3xl xl:text-4xl opacity-0" : " md:text-xl text-base leading-normal text-gray-500 lg:text-2xl xl:text-3xl dark:text-gray-300 opacity-0"}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="">
        <div className=" flex flex-nowrap">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
