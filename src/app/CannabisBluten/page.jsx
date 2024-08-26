import Feed from "@/components/Feed";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

const page = () => {
  return (
    <>
      {/* CONTAINER  */}
      <div className="text-lg h-fit w-full">

        <Header />
        <div className="flex gap-10 mt-6">
          <Sidebar />
          <Feed />
        </div>


      </div>
    </>
  )
}

export default page