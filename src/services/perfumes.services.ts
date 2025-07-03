import { Perfume } from "@/types/perfume";

const API_URL = process.env.NEXT_PUBLIC_SITE_URL;

export async function getPerfumes(): Promise<Perfume[]> {
  console.log(API_URL);
  const res = await fetch(`${API_URL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch perfume data");
  }
  return res.json();
}

export async function createPerfume(perfumeData: Perfume) {
  const res = await fetch(`${API_URL}/api/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(perfumeData),
  });

  if (!res.ok) {
    throw new Error("Failed to create perfume");
  }

  return res.json();
}
