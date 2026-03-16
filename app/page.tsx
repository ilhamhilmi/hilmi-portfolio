"use client"
import NavbarClient from "./components/NavbarClient"
import Image from "next/image"
import Link from "next/link"
import hero from "@/public/hero/hero.png"
import photo from "@/public/hero/photo.jpeg"
import insta from "@/public/hero/insta.png"
import github from "@/public/hero/github.png"
import gmail from "@/public/hero/gmail.png"
import linkedin from "@/public/hero/linkedin.png"
import heroMobile from "@/public/hero/hero-mobile.png"
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div>
      <NavbarClient />
      <section id="home" className="min-h-screen w-full flex items-center px-8 pt-16 xl:pt-18">
        <Image src={heroMobile} alt="heroMobile" fill className="xl:hidden object-cover -z-10 inset-0 absolute" />
        <Image src={hero} alt="hero" fill className="hidden xl:flex object-cover -z-10 inset-0" />
        <div className="container mx-auto flex flex-col xl:flex-row xl:justify-evenly">
          <div className="mb-5.5 xl:mb-0 flex flex-col justify-center">
            {/* <p className="text-midnight font-montserrat font-semibold text-xl xl:text-3xl">Fullstack Developer</p> */}
            <div className="text-midnight text-xl xl:text-3xl font-semibold font-montserrat">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Frontend Developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'UI / UX Designer',
                  1000,
                  'Freelancer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{ }}
                repeat={Infinity}
              />
            </div>
            <h1 className="text-primary2 font-montserrat font-bold text-3xl xl:text-[55px] max-w-xl">Muhammad Ilham Hilmi</h1>
            <p className="text-secondary font-montserrat text-md xl:text-xl">Sculpting Logic, Designing Emotion.</p>
          </div>

          <div className="h-full flex flex-col justify-center items-center">
            <div className="mb-3">
              <Image src={photo} alt="photo" className="rounded-2xl shadow-md hover:-rotate-1 duration-200" width={450} />
            </div>
            <div className="flex justify-between w-full justify-items-center">
              <a href="https://www.instagram.com/ilhamhlmi?igsh=MWxkaHVyd29mYzBhdQ==">
                <Image src={insta} alt="insta" width={50} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
              <a href="https://github.com/ilhamhilmi">
                <Image src={github} alt="github" width={50} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:-rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ilhamhilmi206@gmail.com">
                <Image src={gmail} alt="gmail" width={50} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
              <a href="#">
                <Image src={linkedin} alt="linkedin" width={50} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:-rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
            </div>
          </div>

        </div>
      </section>

      <section id="about" className="min-h-screen w-full flex items-center px-8 pt-16 xl:pt-18">
        <Image src={heroMobile} alt="heroMobile" fill className="xl:hidden object-cover -z-10 inset-0 absolute" />
        <Image src={hero} alt="hero" fill className="hidden xl:flex object-cover -z-10 inset-0" />
        1
      </section>
    </div>
  )
}