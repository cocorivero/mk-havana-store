export const generateWhatsAppMessage = (
  cartItems: {
    name: string;
    brand: string;
    price: number;
    quantity: number;
  }[],
  total: number
): string => {
  let message = "¡Hola! Me interesa comprar los siguientes perfumes:\n\n";

  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.name} - ${item.brand}\n`;
    message += `   Cantidad: ${item.quantity}\n`;
    message += `   Precio: $${item.price.toFixed(2)} c/u\n`;
    message += `   Subtotal: $${(item.price * item.quantity).toFixed(2)}\n\n`;
  });

  message += `💰 TOTAL: $${total.toFixed(2)}\n\n`;
  message += "¿Podrían confirmarme la disponibilidad y el proceso de compra?\n\n";
  message += "¡Gracias!";

  return encodeURIComponent(message);
};

export const sendWhatsAppMessage = (
  cartItems: {
    name: string;
    brand: string;
    price: number;
    quantity: number;
  }[],
  total: number,
  phoneNumber = "50524333"
): void => {
  const message = generateWhatsAppMessage(cartItems, total);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  window.open(whatsappUrl, "_blank");
};
