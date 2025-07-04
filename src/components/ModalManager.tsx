"use client";

import { useModal } from "@/context/ModalContext";
import LoginModal from '@/section/auth/Login';
import RegisterModal from '@/section/auth/Register';

export default function ModalManager() {
  const { modal, closeModal, openModal } = useModal();

  if (modal === "login") {
    return (
      <LoginModal
        onClose={closeModal}
        onSwitchToRegister={() => {
          closeModal();
          openModal("register");
        }}
      />
    );
  }

  if (modal === "register") {
    return (
      <RegisterModal
        onClose={closeModal}
        onSwitchToLogin={() => {
          closeModal();
          openModal("login");
        }}
      />
    );
  }

  return null;
}
