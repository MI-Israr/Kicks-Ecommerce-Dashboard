// orders.ts
export interface CustomerDetailsType {
  orderId: number;
  status: "Delivered" | "Canceled" | "Pending";
  dateRange: string;
  customer: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    shipping: string;
    paymentMethod: string;
  };
  paymentInfo: {
    method: string;
    card?: string;
    businessName?: string;
  };
  products: {
    name: string;
    orderId: number;
    quantity: number;
    price: number;
  }[];
  notes?: string;
}

export const CustomerDetails: CustomerDetailsType[] = [
  {
    orderId: 25426,
    status: "Pending",
    dateRange: "Feb 16,2022 - Feb 20,2022",
    customer: {
      fullName: "Jane Cooper",
      email: "janecooper@gmail.com",
      phone: "+900 231 1212",
      address: "Santa Ana, illinois 85342 2345 Westheimer Rd. Block 9A",
      shipping: "Next express",
      paymentMethod: "Paypal",
    },
    paymentInfo: {
      method: "Paypal",
      card: "**** **** 6557",
      businessName: "Jane Cooper",
    },
    products: [
      { name: "Adidas Ultra Boost", orderId: 25426, quantity: 2, price: 800.4 },
      { name: "Adidas Ultra Boost", orderId: 25426, quantity: 2, price: 800.4 },
    ],
  },
];
