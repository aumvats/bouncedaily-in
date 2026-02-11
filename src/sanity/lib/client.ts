import { createClient, type QueryParams } from "next-sanity";
import { apiVersion, dataset, projectId, isSanityConfigured } from "../env";

export const client = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
    })
  : null;

export async function sanityFetch<QueryResult>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}): Promise<QueryResult> {
  if (!client) return [] as unknown as QueryResult;
  return client.fetch<QueryResult>(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate,
      tags,
    },
  });
}
