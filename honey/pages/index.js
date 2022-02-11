import Navbar from "./components/Navbar";

export default function IndexPage() {
  return (
    <div className='h-screen bg-[url("../public/mainBg.jpg")] bg-cover bg-top'>
      <Navbar />
      <div className="flex justify-center h-fit">
        <div className="flex justify-center w-4/5 h-52 rounded-lg bg-white bg-opacity-30 mt-12">
        Hello
        </div>
      </div>
      
    </div>
  )
}