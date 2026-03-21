"use client"
import NavbarClient from "./components/NavbarClient"
import Eye from "./components/Eye"
import RestApi from "./components/RestApi"
import Code from "./components/Code"
import Circle from "./components/Circle"
import Image from "next/image"
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div>
      <NavbarClient />

      <section id="home" className="min-h-screen w-full flex items-center px-8 pt-16 xl:pt-18">
        <Image src="/hero/hero-mobile.png" alt="heroMobile" fill className="xl:hidden object-cover -z-10 inset-0 absolute" />
        <Image src="/hero/hero.png" alt="hero" fill className="hidden xl:flex object-cover -z-10 inset-0" />
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
              <Image src="/hero/photo.jpeg" width={450} height={300} alt="photo" className="rounded-2xl shadow-md hover:shadow-xl hover:-rotate-1 hover:scale-[1.03] duration-200 2xl:w-125" />
            </div>
            <div className="flex justify-between w-full justify-items-center">
              <a href="https://www.instagram.com/ilhamhlmi?igsh=MWxkaHVyd29mYzBhdQ==" target="_blank" rel="noopener noreferrer">
                <Image src="/hero/insta.png" alt="insta" width={55} height={55} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
              <a href="https://github.com/ilhamhilmi" target="_blank" rel="noopener noreferrer">
                <Image src="/hero/github.png" alt="github" width={55} height={55} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:-rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ilhamhilmi206@gmail.com" target="_blank" rel="noopener noreferrer">
                <Image src="/hero/gmail.png" alt="gmail" width={55} height={55} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
              <a href="#">
                <Image src="/hero/linkedin.png" alt="linkedin" width={55} height={55} className="bg-white border border-white p-1.5 rounded-2xl hover:scale-[1.2] hover:-rotate-5 duration-200 hover:border-primary shadow-md hover:shadow-xl" />
              </a>
            </div>
          </div>

        </div>
      </section>

      <section id="about" className="w-full flex flex-col items-center px-8 pt-16 pb-16 xl:pt-18 relative scroll-mt-12 xl:scroll-mt-16">
        <Image src="/hero/hero-mobile.png" alt="heroMobile" fill className="xl:hidden object-cover -z-10 inset-0 absolute" />
        <Image src="/hero/hero.png" alt="hero" fill className="hidden xl:flex object-cover -z-10 inset-0" />
        <div className="container mx-auto">
          <div>
            <div className="text-center mb-8.5 flex justify-center">
              <h1 className="text-midnight font-montserrat font-semibold text-xl xl:text-2xl uppercase tracking-[0.2em]">About Me</h1>
            </div>
            <div className="flex flex-col xl:flex-row xl:space-x-4.5 space-y-5 xl:space-y-0">
              <div className="">
                <div className="border bg-sky-200 rounded-2xl px-6 py-4 h-full flex flex-col justify-center text-center items-center shadow-md hover:scale-[1.02] duration-200 hover:shadow-xl">
                  <h1 className="text-midnight font-montserrat font-semibold text-lg">Who Am I?</h1>
                  <p className="text-midnight font-montserrat xl:max-w-3/4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi enim neque natus aut molestias sed quia explicabo eos sequi ipsa alias dicta eligendi blanditiis vero doloremque, provident praesentium eveniet ab nostrum tenetur tempora incidunt nesciunt sit. Dolorem, ratione, corrupti earum sint corporis necessitatibus vel sequi tempore natus omnis modi? Earum!</p>
                </div>
              </div>
              <div className="xl:space-y-4.5 space-y-5">
                <div className="border bg-yellow-200 rounded-2xl px-6 py-4 shadow-md hover:scale-[1.02] duration-200 hover:shadow-xl">
                  <h1 className="text-midnight font-montserrat font-semibold text-lg">What I Do?</h1>
                  <p className="text-midnight font-montserrat">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel sunt alias veritatis deleniti perferendis ducimus dignissimos, molestias perspiciatis ut ratione corrupti tempora, dolore exercitationem odio error nobis labore eveniet necessitatibus?.</p>
                </div>
                <div className="border bg-emerald-200 rounded-2xl px-6 py-4 shadow-md hover:scale-[1.02] duration-200 hover:shadow-xl">
                  <h1 className="text-midnight font-montserrat font-semibold text-lg">Currently Learning</h1>
                  <p className="text-midnight font-montserrat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam similique modi et placeat eaque alias animi numquam fuga, labore commodi quae recusandae pariatur consequatur in aliquid est, natus perferendis aut.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center px-8 pt-16 pb-16 xl:pt-18 relative space-y-16">
        <Image src="/hero/hero-mobile.png" alt="heroMobile" fill className="xl:hidden object-cover -z-10 inset-0 absolute" />
        <Image src="/hero/hero.png" alt="hero" fill className="hidden xl:flex object-cover -z-10 inset-0" />
        <div className="container mx-auto">
          <div>
            <div className="mb-8.5 text-center flex justify-center">
              <h1 className="text-midnight font-montserrat font-semibold text-xl xl:text-2xl uppercase tracking-[0.2em]">Skills & Expertise</h1>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex flex-col items-center w-1/3">
                <Code />
                <p className="text-midnight font-montserrat text-center mt-3 xl:text-xl font-semibold xl:w-1/2">Frontend Development</p>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <Eye />
                <p className="text-midnight font-montserrat text-center mt-3 xl:text-xl font-semibold">UI / UX Design</p>
              </div>
              <div className="flex flex-col items-center w-1/3">
                <RestApi />
                <p className="text-midnight font-montserrat text-center mt-3 xl:text-xl font-semibold">API Integration</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row justify-center items-center">
            <div className="text-center mb-8.5 xl:mb-0 xl:w-1/2">
              <h1 className="text-secondary font-semibold font-montserrat text-lg xl:text-xl mb-2.5">Languages & Frameworks</h1>
              <p className="text-midnight font-montserrat xl:text-lg"><span className="font-semibold">HTML</span> | <span className="font-semibold">CSS</span> | <span className="font-semibold">JavaScript</span> | <span className="font-semibold">React</span> | <span className="font-semibold">Next.js</span> | <span className="font-semibold">Tailwind CSS</span></p>
            </div>
            <div className="text-center xl:w-1/2">
              <h1 className="text-secondary font-semibold font-montserrat text-lg mb-2.5 xl:text-xl">Tools & Design</h1>
              <p className="text-midnight font-montserrat xl:text-lg"><span className="font-semibold">Visual Studio Code</span> | <span className="font-semibold">Git</span> | <span className="font-semibold">GitHub</span> | <span className="font-semibold">Figma</span></p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex flex-col items-center px-8 pt-16 pb-16 xl:pt-18 relative space-y-16">
        <Image src="/hero/hero-mobile.png" alt="heroMobile" fill className="xl:hidden object-cover -z-10 inset-0 absolute" />
        <Image src="/hero/hero.png" alt="hero" fill className="hidden xl:flex object-cover -z-10 inset-0" />
        <div className="container mx-auto">
          <div>
            <div className="mb-8.5 text-center flex justify-center">
              <h1 className="text-midnight font-montserrat font-semibold text-xl xl:text-2xl uppercase tracking-[0.2em]">Education & Certifications</h1>
            </div>
            <div>

              <div className="flex flex-col justify-center items-center space-y-5">
                <div className="flex xl:w-2/3 space-x-2.5">
                  <Circle />
                  <div className="border border-midnight bg-white rounded-2xl px-4 py-2 shadow-md hover:shadow-xl hover:scale-[1.02] duration-200">
                    <h1 className="text-midnight font-montserrat font-bold">2024 - Present</h1>
                    <h1 className="text-midnight font-montserrat font-semibold text-lg">Paramadina University</h1>
                    <h1 className="text-secondary font-montserrat">Informatics Engineering - Bachelor</h1>
                    <p className="text-midnight font-montserrat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem ipsa molestias placeat, accusantium sapiente repellat saepe nemo quod, error voluptatibus totam! Maiores, quis aut!</p>
                  </div>
                </div>
                <div className="flex xl:w-2/3 space-x-2.5">
                  <Circle />
                  <div className="border border-midnight bg-white rounded-2xl px-4 py-2 shadow-md hover:shadow-xl hover:scale-[1.02] duration-200">
                    <h1 className="text-midnight font-montserrat font-bold">2021 - 2024</h1>
                    <h1 className="text-midnight font-montserrat font-semibold text-lg">Muhammadiyah 23 Senior High School</h1>
                    <h1 className="text-secondary font-montserrat">Science Major</h1>
                    <p className="text-midnight font-montserrat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus voluptatem ipsa molestias placeat, accusantium sapiente repellat saepe nemo quod, error voluptatibus totam! Maiores, quis aut!</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div className="grid grid-cols-1 gap-y-4 xl:gap-y-0 xl:gap-x-4 xl:grid-cols-2 xl:w-2/3 justify-center items-center mt-8.5">
                  <a href="" className="border border-midnight bg-green-200 text-center p-2 rounded-2xl shadow-md hover:shadow-xl duration-200 hover:scale-[1.02]">
                    <p className="text-midnight font-semibold font-montserrat">Placeholder</p>
                  </a>
                  <a href="" className="border border-midnight bg-green-200 text-center p-2 rounded-2xl shadow-md hover:shadow-xl duration-200 hover:scale-[1.02]">
                    <p className="text-midnight font-semibold font-montserrat">Placeholder</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="project" className="w-full flex flex-col items-center px-8 pt-16 pb-16 xl:pt-18 relative scroll-mt-12 xl:scroll-mt-16">
        <Image src="/hero/hero-mobile.png" alt="heroMobile" fill className="xl:hidden object-cover -z-10 inset-0 absolute" />
        <Image src="/hero/hero.png" alt="hero" fill className="hidden xl:flex object-cover -z-10 inset-0" />
        <div className="container mx-auto">
          <div>

            <div className="mb-8.5 text-center flex justify-center">
              <h1 className="text-midnight font-montserrat font-semibold text-xl xl:text-2xl uppercase tracking-[0.2em]">Projects</h1>
            </div>

            <div className="flex flex-col xl:flex-row space-y-5 xl:space-y-0 xl:justify-evenly items-center justify-center">
              <div className="border border-midnight rounded-2xl bg-white overflow-hidden">
                <div className="relative">
                  <div className="absolute inset-0 flex items-end justify-end p-5 space-x-2.5">
                    <a href="">
                      <div className="border border-white/30 bg-white/5 p-2 backdrop-blur-sm rounded-md hover:scale-[1.1] duration-200 ">
                        <Image src="/projects/github-svgrepo-com.svg" alt="github" width={40} height={40} />
                      </div>
                    </a>
                    <a href="https://lapcare-rpl.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <div className="border border-white/30 bg-white/5 p-2 backdrop-blur-sm rounded-md hover:scale-[1.1] duration-200 ">
                        <svg
                          className="w-10 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <Image src="/projects/Lapcare Preview.png" alt="Lapcare" width={450} height={300} className="rounded-t-2xl" />
                </div>
                <div className="py-2 px-4 space-y-2 flex flex-col">
                  <h1 className="text-midnight font-montserrat font-semibold">LapCare</h1>
                  <p className="font-montserrat text-midnight max-w-90">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia odit dolores non harum! Saepe, ut.</p>
                </div>
              </div>

              <div className="border border-midnight rounded-2xl bg-white overflow-hidden">
                <div className="relative">
                  <div className="absolute inset-0 flex items-end justify-end p-5 space-x-2.5">
                    <a href="">
                      <div className="border border-white/30 bg-white/5 p-2 backdrop-blur-sm rounded-md hover:scale-[1.1] duration-200 ">
                        <Image src="/projects/github-svgrepo-com.svg" alt="github" width={40} height={40} />
                      </div>
                    </a>
                    <a href="https://wedware.vercel.app/" target="_blank" rel="noopener noreferrer">
                      <div className="border border-white/30 bg-white/5 p-2 backdrop-blur-sm rounded-md hover:scale-[1.1] duration-200 ">
                        <svg
                          className="w-10 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      </div>
                    </a>
                  </div>
                  <Image src="/projects/Wedware Preview.png" alt="Lapcare" width={450} height={300} className="rounded-t-2xl" />
                </div>
                <div className="py-2 px-4 space-y-2 flex flex-col">
                  <h1 className="text-midnight font-montserrat font-semibold">WedWare</h1>
                  <p className="font-montserrat text-midnight max-w-90">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia odit dolores non harum! Saepe, ut.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="w-full flex flex-col items-center px-8 pt-16 pb-16 xl:pt-18 relative scroll-mt-12 xl:scroll-mt-16">
        <Image src="/hero/hero-mobile.png" alt="heroMobile" fill className="xl:hidden object-cover -z-10 inset-0 absolute" />
        <Image src="/hero/hero.png" alt="hero" fill className="hidden xl:flex object-cover -z-10 inset-0" />
        <div className="container mx-auto flex flex-col xl:flex-row bg-sky-400">

          <div className="bg-amber-200">
            <div className="mb-8.5 text-start flex justify-start">
              <h1 className="text-midnight font-montserrat font-bold text-xl xl:text-2xl uppercase tracking-[0.2em]">Get in Touch</h1>
            </div>
            <div className="flex flex-col space-y-5">
              <div className="border-l-4 border-midnight pl-3.5 space-y-2">
                <h1 className="font-montserrat text-secondary font-semibold uppercase">Email</h1>
                <p className="font-montserrat text-midnight">ilhamhilmi206@gmail.com</p>
              </div>
              <div className="border-l-4 border-midnight pl-3.5 space-y-2">
                <h1 className="font-montserrat text-secondary font-semibold uppercase">Phone</h1>
                <p className="font-montserrat text-midnight">+62 895 4032 74420</p>
              </div>
              <div className="border-l-4 border-midnight pl-3.5 space-y-2">
                <h1 className="font-montserrat text-secondary font-semibold uppercase">Location</h1>
                <p className="font-montserrat text-midnight">Jakarta, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="bg-emerald-200">
            <div className="mb-8.5 text-start flex justify-start">
              <h1 className="text-midnight font-montserrat font-bold text-xl xl:text-2xl uppercase tracking-[0.2em]">Reach Me Out</h1>
            </div>
            <div className="flex flex-col space-y-5">
              <input type="email" className="border-b-2"/>
              <input type="email" />
              <textarea name="" id=""/>
            </div>
          </div>
          


        </div>
      </section>

    </div>
  )
}