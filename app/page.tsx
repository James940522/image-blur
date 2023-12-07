import ImageGridLocal from "@/components/image-grid-local"
import ImageGridRemote from "@/components/image-grid-remote"
import Image from "next/image"

export default function Home() {
  return (
    <main className='w-screen h-screen flex justify-center items-center'>
      <div className='w-1/2 border max-w-5xl'>
        <div className='grid grid-cols-2 gap-10'>
          <div>
            <h1 className='text-white'>Local</h1>
            <div className=' relative aspect-[3/4]'>
              <ImageGridLocal />
            </div>
          </div>
          <div>
            <h1 className='text-white'>Remote</h1>
            <div className=' relative aspect-[3/4]'>
              <ImageGridRemote />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
