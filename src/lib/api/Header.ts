import type { Phone, PhoneApiResponse } from "../types/Header";
export async function fetchActivePhones(): Promise<Phone[]> {
  const apiUrl = `${process.env.PHONES_API_URL as string}/phones`;
  const res = await fetch(apiUrl);
  const json: PhoneApiResponse = await res.json();

  if (json.success && Array.isArray(json.data)) {
    return json.data.filter((phone) => phone.is_active);
  } else {
    throw new Error("Invalid API response");
  }
}

// Ví dụ sử dụng
fetchActivePhones()
  .then((activePhones) => console.log("Active phones:", activePhones))
  .catch((error) => console.error(error));
