import { Perfume } from "@/types/perfume";

const API_URL = process.env.NEXT_PUBLIC_SITE_URL;

// GET: Todos los perfumes
export async function getPerfumes(): Promise<Perfume[]> {
  const res = await fetch(`${API_URL}/api/products`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch perfume data");
  }

  return res.json();
}

// POST: Crear nuevo perfume
export async function createPerfume(perfumeData: Perfume): Promise<Perfume> {
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

// GET: Obtener perfume por ID
export async function getPerfumeById(id: number | string): Promise<Perfume> {
  const res = await fetch(`${API_URL}/api/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch perfume by ID");
  }

  return res.json();
}

// PATCH: Actualizar perfume por ID
export async function updatePerfume(id: number | string, updates: Partial<Perfume>): Promise<Perfume> {
  const res = await fetch(`${API_URL}/api/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  });

  if (!res.ok) {
    throw new Error("Failed to update perfume");
  }

  return res.json();
}

// DELETE: Eliminar perfume por ID
export async function deletePerfume(id: number | string): Promise<{ message: string }> {
  const res = await fetch(`${API_URL}/api/products/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete perfume");
  }

  return res.json();
}
