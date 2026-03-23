interface Product {
  _id: string;
  name: string;
  img: string;
  category: string;
  size: string;
  is10PercentOff: boolean;
  price: number;
  popularity: number;
}

interface GetProductsResponse {
  page: number;
  perPage: number;
  totalPages: number;
  results: Product[];
}
