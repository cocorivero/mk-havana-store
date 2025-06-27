import { PrismaClient } from "@prisma/client";
import perfumes from "./perfumes.json";

const prisma = new PrismaClient();

async function main() {
  // 1. Crear usuarios
  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      name: "Admin",
      email: "admin@example.com",
      password: "admin123", // Más adelante: bcrypt
      role: "admin",
    },
  });

  const user = await prisma.user.upsert({
    where: { email: "user@example.com" },
    update: {},
    create: {
      name: "Cliente Regular",
      email: "user@example.com",
      password: "user123",
      role: "user",
    },
  });

  // 2. Insertar productos
  await prisma.product.createMany({
    data: (perfumes as Perfume[]).map((p) => ({
      name: p.name,
      brand: p.brand,
      price: p.price,
      originalPrice: p.originalPrice,
      image: p.image,
      category: p.category,
      description: p.description,
      notes: p.notes,
      size: p.size,
      inStock: p.inStock,
      rating: p.rating,
      reviews: p.reviews,
    })),
  });

  // 3. Crear orden
  await prisma.order.create({
    data: {
      userId: user.id,
      status: "pending",
      totalPrice: 2198,
      products: {
        create: [
          { productId: 1, quantity: 1, unitPrice: 1299 },
          { productId: 2, quantity: 1, unitPrice: 899 },
        ],
      },
    },
  });

  console.log("🌱 Seed completado correctamente");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());

type Perfume = {
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  image: string;
  category: string;
  description: string;
  notes: string[];
  size: string;
  inStock: boolean;
  rating: number;
  reviews: number;
};
