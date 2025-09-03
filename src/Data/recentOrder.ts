// types.ts
export type OrderStatus = "Delivered" | "Canceled";

export interface RecentOrder {
  orderId: number;
  product: string;
  date: string;
  quantity: number;
  customerName: string;
  customerImg: string;
  status: OrderStatus;
  amount: number;
}

export const recentOrders: RecentOrder[] = [
  {
    orderId: 25426,
    product: "Adidas Ultra boost",
    date: "Jan 8th,2022",
    quantity: 2,
    customerName: "Leo Gouse",
    customerImg: "/images/leo.png",
    status: "Delivered",
    amount: 200,
  },
  {
    orderId: 25425,
    product: "Adidas Ultra boost",
    date: "Jan 7th,2022",
    quantity: 2,
    customerName: "Jaxson Korsgaard",
    customerImg: "/images/jaxson.png",
    status: "Canceled",
    amount: 200,
  },
  {
    orderId: 25424,
    product: "Adidas Ultra boost",
    date: "Jan 6th,2022",
    quantity: 2,
    customerName: "Talan Botosh",
    customerImg: "/images/talan.png",
    status: "Delivered",
    amount: 200,
  },
  {
    orderId: 25423,
    product: "Adidas Ultra boost",
    date: "Jan 5th,2022",
    quantity: 2,
    customerName: "Ryan Philips",
    customerImg: "/images/ryan.png",
    status: "Canceled",
    amount: 200,
  },
  {
    orderId: 25422,
    product: "Adidas Ultra boost",
    date: "Jan 4th,2022",
    quantity: 2,
    customerName: "Emerson Baptista",
    customerImg: "/images/emerson.png",
    status: "Delivered",
    amount: 200,
  },
  {
    orderId: 25421,
    product: "Adidas Ultra boost",
    date: "Jan 2th,2022",
    quantity: 2,
    customerName: "Jaxson Calzoni",
    customerImg: "/images/calzoni.png",
    status: "Delivered",
    amount: 200,
  },
];
