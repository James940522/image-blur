import getBase64 from "@/lib/getLocalBase64"
import Image from "next/image"

export default async function ImageGridRemote() {
  try {
    const src =
      "https://i.namu.wiki/i/NMeCMaJ5plWdr-KdnczP33a8Wuqtbr43N_sOmxxe5NfuONQ4vrk4_PxCcBvnqR9AY1edLf1AFdeYT7xHN_jkJA.webp"

    const base64 = await getBase64(src)

    return (
      <Image
        src={src}
        fill
        alt={"remote-img"}
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        placeholder={"blur"}
        blurDataURL={base64}
      />
    )
  } catch (error: unknown) {
    return null
  }
}
