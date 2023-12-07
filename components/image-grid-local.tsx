import getBase64 from "@/lib/getLocalBase64"
import Image from "next/image"

export default async function ImageGridLocal() {
  try {
    const src = "http://localhost:3000/won.jpeg"

    const base64 = await getBase64(src)

    return (
      <Image
        src={src}
        fill
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        alt={"local-img"}
        placeholder='blur'
        blurDataURL={base64}
      />
    )
  } catch (error: unknown) {
    return null
  }
}
