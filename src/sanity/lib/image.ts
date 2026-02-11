import createImageUrlBuilder from "@sanity/image-url";
import { dataset, projectId, isSanityConfigured } from "../env";

const builder = isSanityConfigured
  ? createImageUrlBuilder({ projectId, dataset })
  : null;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function urlFor(source: any) {
  if (!builder) throw new Error("Sanity is not configured");
  return builder.image(source);
}
