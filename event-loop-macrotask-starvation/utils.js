export function log(label, message) {
  const now = new Date().toISOString();
  console.log(`[${label}] ${now} — ${message}`);
}
