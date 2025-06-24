import type { Phone, PhoneApiResponse } from "../types/Header";

export async function fetchActivePhones(): Promise<Phone[]> {
  const apiUrl = `${import.meta.env.BASE_API_URL}/phones`; // ✅ Dùng đúng biến
  const res = await fetch(apiUrl);
  const json: PhoneApiResponse = await res.json();

  if (json.success && Array.isArray(json.data)) {
    return json.data.filter((phone) => phone.is_active);
  } else {
    throw new Error("Invalid API response");
  }
}
