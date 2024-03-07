"use client"

import Image from "next/image";
import React from "react";
import Container from "./container";

import thasneema from "../public/img/thasneema.png";
import eliz from "../public/img/eliz.png"
import sherin from "../public/img/sherin.png"
import aysiha from "../public/img/ayisha.png"
import anjo from "../public/img/anjogeorge.png"
import { useRouter } from "next/navigation";
import Link from "next/link";
const Testimonials = () => {
  const router = useRouter()
  return (
    <Container>
      <div className=" px-8 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 place-content-center" >
      <div className=" hover:shadow-lg cursor-pointer">
          <Link href='/thasneema'>
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
              <p className="text-base md:text-md lg:text-xl xl:text-xl leading-normal ">
                Dynamic <Mark>researcher</Mark> and academician dedicated to societal well-being
              </p>

              <Avatar
                image={thasneema}
                name="Thasneema"
                title="Researcher and Academician"
              />
            </div>
          </Link>
        </div>
        <div className=" hover:shadow-lg cursor-pointer">
          <Link href='/ayisharahna'>
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
              <p className="text-base md:text-md lg:text-xl xl:text-xl leading-normal ">
              Dedicated <Mark>academic director</Mark>, Educator in Psychology, Psychotherapist, and accomplished Researcher.
              </p>

              <Avatar
                image={aysiha}
                name="Ayisha Rahna K P"
                title="Academic Director- Psychology | Researcher | Psychology Teacher at UAE"
              />
            </div>
          </Link>
        </div>
      <div className=" hover:shadow-lg cursor-pointer">
          <Link href='/anjo_george'>
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
              <p className="text-base md:text-md lg:text-xl xl:text-xl leading-normal ">
              Dedicated <Mark>academic director</Mark>, Educator in Psychology, Psychotherapist, and accomplished Researcher.
              </p>

              <Avatar
                image={anjo}
                name="Anjo George"
                title="Academic Director-Psychology"
              />
            </div>
          </Link>
        </div>
   
        
          
          <div className="lg:col-span-2 xl:col-auto hover:shadow-lg cursor-pointer">
          <Link href='/elizabathroy'>
            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
              <p className="text-base md:text-md lg:text-xl xl:text-xl leading-normal ">
                Dedicated <Mark>professional</Mark> with a strong academic background and a passion for research and teaching in the field of psychology
              </p>

              <Avatar
                image={eliz}
                name="Elizebath Roy"
                title="Academic Director- Psychology"

              />
            </div>
            </Link>
          </div>
        


        <div className=" hover:shadow-lg cursor-pointer">
          <Link href='/sherin'>

            <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-10 rounded-2xl py-10 dark:bg-trueGray-800">
              <p className="text-base md:text-md lg:text-xl xl:text-xl leading-normal ">
                Dedicated consultant <Mark>psychologist</Mark> currently immersed in full-time Ph.D.
              </p>

              <Avatar
                image={sherin}
                name="Sherin P"
                title="Consultant Psychologist"
              />
            </div>
          </Link>
        </div>
      </div>
    </Container >
  );
}

function Avatar(props) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="90"
          height="90"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-base md:text-md lg:text-lg xl:text-xl font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}

export default Testimonials;