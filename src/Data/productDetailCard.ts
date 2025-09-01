type Tcategories = "Sneaker" | "Runner" | "Casual";

export type productDetailCardType = {
  id: number;
  img: string;
  title: string;
  category: Tcategories;
  regularPrice: number;
  summary: string;
  sales: number;
  remaining: number;
  sku: number;
  brandName?: string;
  stockQuantity?: number;
  salesPrice?: number;
  // tags?: [string, ...string[]];
  tags?: string[];
};

export type ProductFormValues = {
  title: string;
  summary: string;
  category: "Sneaker" | "Runner" | "Casual";
  sku: number;
  regularPrice: number;
  stockQuantity: number;
  brandName: string;
  salesPrice: number;
  tags: string[];
};

export const productDetailCard: productDetailCardType[] = [
  {
    id: 1,
    img: "/src/assets/sneaker-1.png",
    title: "Adidas Ultra boost",
    category: "Sneaker",
    regularPrice: 140,
    summary: "Long distance running requires a lot from athletes.",
    sales: 1269,
    remaining: 1269,
    sku: 25425,
    brandName: "Addidas",
    stockQuantity: 21,
    salesPrice: 45,
    tags: ["Adidas", "Shoes", "Sneakers", "Ultraboost"],
  },
  {
    id: 2,
    img: "/src/assets/sneaker-2.png",
    title: "Adidas Ultra boost",
    category: "Sneaker",
    regularPrice: 140,
    summary: "Long distance running requires a lot from athletes.",
    sales: 1269,
    remaining: 1269,
    sku: 25425,
    brandName: "Addidas",
    stockQuantity: 21,
    salesPrice: 45,
    tags: ["Adidas", "Shoes", "Sneakers", "Ultraboost"],
  },
  {
    id: 3,
    img: "/src/assets/sneaker-3.png",
    title: "Adidas Ultra boost",
    category: "Sneaker",
    regularPrice: 140,
    summary: "Long distance running requires a lot from athletes.",
    sales: 1269,
    remaining: 1269,
    sku: 25425,
    brandName: "Addidas",
    stockQuantity: 21,
    salesPrice: 45,
    tags: ["Adidas", "Shoes", "Sneakers", "Ultraboost"],
  },
  {
    id: 4,
    img: "/src/assets/runner-4.png",
    title: "Adizero sl Running",
    category: "Runner",
    regularPrice: 140,
    summary: "Long distance running requires a lot from athletes.",
    sales: 1269,
    remaining: 1269,
    sku: 25425,
    brandName: "Addidas",
    stockQuantity: 21,
    salesPrice: 45,
    tags: ["Adidas", "Shoes", "Sneakers", "Ultraboost"],
  },
  {
    id: 5,
    img: "/src/assets/sneaker-5.png",
    title: "UltraBoost Cleats ",
    category: "Sneaker",
    regularPrice: 140,
    summary: "Long distance running requires a lot from athletes.",
    sales: 1269,
    remaining: 1269,
    sku: 25425,
    brandName: "Addidas",
    stockQuantity: 21,
    salesPrice: 45,
    tags: ["Adidas", "Shoes", "Sneakers", "Ultraboost"],
  },
  {
    id: 6,
    img: "/src/assets/sneaker-6.png",
    title: "Forum Exhibit Low",
    category: "Sneaker",
    regularPrice: 140,
    summary: "Long distance running requires a lot from athletes.",
    sales: 1269,
    remaining: 1269,
    sku: 25425,
    brandName: "Addidas",
    stockQuantity: 21,
    salesPrice: 45,
    tags: ["Adidas", "Shoes", "Sneakers", "Ultraboost"],
  },
];
