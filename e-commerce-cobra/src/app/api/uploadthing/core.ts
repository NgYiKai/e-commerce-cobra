import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { z } from "zod";
 
const f = createUploadthing();
 
// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .input(
      z.object({ configId: z.string().optional() })
    )
    .middleware(async ({ req,input }) => {
      console.log("hi")
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { input };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("hi2")
      const { configId } = metadata.input
      return { configId }
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;