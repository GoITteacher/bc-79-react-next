export interface Car {
  _id: string;
  make: string;
  model: string;
  year: number;
  color: string;
  price: number;
  mileage: number;
  fuelType: string;
  description: string;
}

export interface GetCarListParams {
  page?: number;
  perPage?: number;
  make?: string;
  model?: string;
}

export interface GetCarListResponse {
  page: number;
  perPage: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  items: Car[];
}
