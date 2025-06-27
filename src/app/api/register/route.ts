import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { hash } from "bcrypt";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "Todos los campos son obligatorios" },
      { status: 400 }
    );
  }

  // Verificar si ya existe el usuario
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    return NextResponse.json(
      { error: "El correo ya está registrado" },
      { status: 409 }
    );
  }

  // Encriptar la contraseña
  const hashedPassword = await hash(password, 10);

  // Crear nuevo usuario
  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: "user" // Por defecto todos los que se registran son "user"
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true
    }
  });

  return NextResponse.json(user, { status: 201 });
}
