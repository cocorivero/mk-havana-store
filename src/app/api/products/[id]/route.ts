import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

// GET → Obtener producto por ID
export async function GET(req: NextRequest, context: { params: { id: string } }) {
  const { id } = context.params;

  const product = await prisma.product.findUnique({
    where: { id: Number(id) },
  });

  if (!product) {
    return NextResponse.json({ message: "Producto no encontrado" }, { status: 404 });
  }

  return NextResponse.json(product);
}

// PATCH → Actualizar producto por ID
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  const body = await req.json();

  const updated = await prisma.product.update({
    where: { id: Number(params.id) },
    data: {
      name: body.name,
      brand: body.brand,
      price: body.price,
      originalPrice: body.originalPrice,
      image: body.image,
      category: body.category,
      description: body.description,
      notes: body.notes,
      size: body.size,
      inStock: body.inStock,
      rating: body.rating,
      reviews: body.reviews,
    },
  });

  return NextResponse.json(updated);
}

// DELETE → Eliminar producto por ID
export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  const deleted = await prisma.product.delete({
    where: { id: Number(params.id) },
  });

  return NextResponse.json({ message: "Producto eliminado", deleted });
}
