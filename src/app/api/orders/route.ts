import { prisma } from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get('userId');

  const orders = await prisma.order.findMany({
    where: userId ? { userId: Number(userId) } : undefined,
    include: {
      user: true, // incluye datos del usuario
      products: {
        include: {
          product: true // incluye los detalles de los productos
        }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  });

  return NextResponse.json(orders);
}
