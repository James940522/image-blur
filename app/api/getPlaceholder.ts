// import { getPlaiceholder } from "plaiceholder"

// export default async function getBase64(imageUrl: string) {
//   try {
//     const response = await fetch(imageUrl)

//     if (!response.ok) {
//       throw new Error(`Failed to fetch image`)
//     }

//     const buffer = await response.arrayBuffer()

//     const { base64 } = await getPlaiceholder(Buffer.from(buffer))

//     console.log(`base64: ${base64}`)

//     return base64
//   } catch (error: unknown) {
//     console.error(error)
//     return null
//   }
// }
