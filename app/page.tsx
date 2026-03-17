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
                  'Frontend Developer',
                  1000,
                  'UI / UX Designer',
                  1000,
                  'Informatics Engineering Student',
                  1000
                ]}
                wrapper="span"
                speed={50}
                style={{}}
                repeat={Infinity}
              />
            </div>
            <h1 className="text-primary2 font-montserrat font-bold text-3xl xl:text-[55px] max-w-xl">Muhammad Ilham Hilmi</h1>
            <p className="text-secondary font-montserrat text-md xl:text-xl">Sculpting Logic, Designing Emotion.</p>
          </div>

          <div className="h-full flex flex-col justify-center items-center">
            <div className="mb-3">
              <Image src={photo} alt="photo" className="rounded-2xl shadow-md hover:shadow-xl hover:-rotate-1 hover:scale-[1.03] duration-200 w-112.5 2xl:w-125" />
            </div>
            <div className="flex justify-between w-full justify-items-center">
              <a href="https://www.instagram.com/ilhamhlmi?igsh=MWxkaHVyd29mYzBhdQ==">
                <Image src={insta} alt="insta" width={55} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
              <a href="https://github.com/ilhamhilmi">
                <Image src={github} alt="github" width={55} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:-rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ilhamhilmi206@gmail.com">
                <Image src={gmail} alt="gmail" width={55} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
              <a href="#">
                <Image src={linkedin} alt="linkedin" width={55} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:-rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
            </div>
          </div>

        </div>
      </section>

      <section id="about" className="w-full flex flex-col items-center px-8 pt-16 pb-16 xl:pt-18 relative">
        <Image src={heroMobile} alt="heroMobile" fill className="xl:hidden object-cover -z-10 inset-0 absolute" />
        <Image src={hero} alt="hero" fill className="hidden xl:flex object-cover -z-10 inset-0" />
        <div className="container mx-auto">
          <div>
            <div className="text-center mb-5.5">
              <h1 className="text-midnight font-montserrat font-semibold text-2xl xl:text-3xl">About Me</h1>
            </div>
            <div className="flex flex-col xl:flex-row xl:space-x-4.5 space-y-5 xl:space-y-0">
              <div className="">
                <div className="border bg-yellow-200 rounded-2xl px-6 py-4 h-full flex flex-col justify-center text-center items-center shadow-md hover:scale-[1.02] duration-200 hover:shadow-2xl">
                  <h1 className="text-midnight font-montserrat font-semibold text-lg">Who Am I?</h1>
                  <p className="text-midnight font-montserrat xl:max-w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim neque natus aut molestias sed quia explicabo eos sequi ipsa alias dicta eligendi blanditiis vero doloremque, provident praesentium eveniet ab nostrum tenetur tempora incidunt nesciunt sit. Dolorem, ratione, corrupti earum sint corporis necessitatibus vel sequi tempore natus omnis modi? Earum!</p>
                </div>
              </div>
              <div className="xl:space-y-4.5 space-y-5">
                <div className="border bg-sky-200 rounded-2xl px-6 py-4 shadow-md hover:scale-[1.02] duration-200 hover:shadow-2xl">
                  <h1 className="text-midnight font-montserrat font-semibold text-lg">What I Do?</h1>
                  <p className="text-midnight font-montserrat">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sunt alias veritatis deleniti perferendis ducimus dignissimos, molestias perspiciatis ut ratione corrupti tempora, dolore exercitationem odio error nobis labore eveniet necessitatibus?.</p>
                </div>
                <div className="border bg-emerald-200 rounded-2xl px-6 py-4 shadow-md hover:scale-[1.02] duration-200 hover:shadow-2xl">
                  <h1 className="text-midnight font-montserrat font-semibold text-lg">Currently Learning</h1>
                  <p className="text-midnight font-montserrat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique modi et placeat eaque alias animi numquam fuga, labore commodi quae recusandae pariatur consequatur in aliquid est, natus perferendis aut.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container mx-auto">
          <div>
            <div>
              <h1>Skills & Expertise</h1>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  )
}