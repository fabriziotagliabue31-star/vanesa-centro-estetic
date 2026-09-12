const WHATSAPP_NUMBER = "5493764380293";

function money(n) {
  return "$" + Number(n).toLocaleString("es-AR");
}

// Convierte un teléfono cargado por la clienta (ej: "3764123456", "03764-123456")
// en un número listo para wa.me. Es una aproximación para números argentinos:
// saca el 0 y el 15 si están, y agrega el código de país + el 9 de WhatsApp.
function normalizePhone(raw) {
  let digits = (raw || "").replace(/\D/g, "");
  digits = digits.replace(/^0/, "");
  digits = digits.replace(/^(\d{2,4})15/, "$1");
  if (!digits.startsWith("54")) digits = "54" + digits;
  if (!digits.startsWith("549")) digits = "549" + digits.slice(2);
  return digits;
}
