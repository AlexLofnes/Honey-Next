import Link from "next/link"
import Navbar from "./components/Navbar"

export default function IndexPage() {
  return (
    <div className='h-screen bg-[url("../public/mainBg.jpg")] bg-opacity-0 bg-cover bg-top'>
      <div className='h-screen'>
        <Navbar />
        <h1 className='text-white text-6xl text-center font-bold pt-6 stroke-black'>Emery's Honey</h1>
      </div>
    </div>
  )
}