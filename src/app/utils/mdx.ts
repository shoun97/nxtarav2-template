import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

export async function parseMDX(source: string): Promise<MDXRemoteSerializeResult> {
  return await serialize(source);
}
