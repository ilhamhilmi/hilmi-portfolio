"use client"
import NavbarClient from "./components/NavbarClient"

export default function Home() {
  return(
    <div>
      <NavbarClient/>
      <section id="home" className="min-h-screen">
        <h1>Home</h1>
      </section>
      <section id="about" className="min-h-screen">
        <h1>About</h1>
      </section>
    </div>
  )
}