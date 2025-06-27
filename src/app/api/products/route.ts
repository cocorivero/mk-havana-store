import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET → Lista de productos
export async function GET() {
  const products = await prisma.product.findMany();
  return NextResponse.json(products);
}

// POST → Crear nuevo producto
export async function POST(request: Request) {
  const body = await request.json();

  const product = await prisma.product.create({
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
      reviews: body.reviews
    }
  });

  return NextResponse.json(product, { status: 201 });
}
