export interface Phone {
  id: number;
  name: string;
  number: string;
  description: string;
  is_active: boolean;
  display_order: number;
}

export interface PhoneApiResponse {
  success: boolean;
  data: Phone[];
}