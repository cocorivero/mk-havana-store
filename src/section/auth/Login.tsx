"use client";

import { useState, useEffect, useRef } from "react";
import { getSession, signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { AlertTriangle } from "lucide-react";
import { useToast } from "@/context/ToastContext";

export default function LoginPage({
  onClose,
  onSwitchToRegister,
}: {
  onClose: () => void;
  onSwitchToRegister: () => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const modalRef = useRef(null);
  const { showToast } = useToast();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !(modalRef.current as HTMLElement).contains(e.target as Node)) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Usuario o contraseña incorrectos.");
    } else {
      await getSession(); // opcional pero recomendado para actualizar estado de sesión
      onClose(); // CIERRA EL MODAL AQUÍ ✅
      router.push(callbackUrl ?? "/"); // luego redirige si hace falta
      showToast("Ha iniciado sesión correctamente ✅ ", "success");
    }
  };

  return (
    <div
      onClick={handleOverlayClick}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div ref={modalRef} className="relative bg-white rounded-2xl p-8 shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-pink-900 mb-6 text-center">Iniciar Sesión</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-pink-600 hover:text-pink-800 text-2xl font-bold cursor-pointer"
        >
          &times;
        </button>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-pink-700 mb-1">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg text-pink-800 focus:ring-2 focus:ring-pink-500"
              placeholder="ejemplo@correo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-pink-700 mb-1">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-4 py-2 border border-pink-300 rounded-lg text-pink-800 focus:ring-2 focus:ring-pink-500"
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && (
            <div className="text-sm text-red-700 flex items-center justify-center font-semibold">
              <AlertTriangle className="w-4 h-4 mr-2" />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-pink-700 transition-colors"
          >
            Entrar
          </button>
        </form>

        <p className="text-sm text-center mt-6">
          ¿No tienes cuenta?{" "}
          <button onClick={onSwitchToRegister} className="text-pink-600 font-semibold hover:underline">
            Regístrate
          </button>
        </p>
      </div>
    </div>
  );
}
