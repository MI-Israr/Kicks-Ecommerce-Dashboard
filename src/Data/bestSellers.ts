// export type NotificationType = {
//   img?: string;
//   title?: string;
//   price?: number;
//   date?: string;
//   status?: "sold" | "pending" | "lost";
// };

// export const notifications: NotificationType[] = [
//   {
//     img: "/src/assets/cross-circle.svg",
//     title: "Notification",
//   },
//   {
//       {
//         img: "/src/assets/notifications-image.png",
//         title: "Adidas Ultra boost",
//         price: 140,
//         date: "Sep 20,2022",
//         status: "sold",
//       },
//       {
//         img: "/src/assets/notifications-image.png",
//         title: "Adidas Ultra boost",
//         price: 140,
//         date: "Sep 20,2022",
//         status: "sold",
//       },
//       {
//         img: "/src/assets/notifications-image.png",
//         title: "Adidas Ultra boost",
//         price: 140,
//         date: "Sep 20,2022",
//         status: "sold",
//       },
//       {
//         img: "/src/assets/notifications-image.png",
//         title: "Adidas Ultra boost",
//         price: 140,
//         date: "Sep 20,2022",
//         status: "sold",
//       },
//   },
//   {
//     img: "/src/assets/tick.svg",
//     title: "Mark all as read",
//   },
// ];

export type BestSellersItem = {
  img: string;
  title: string;
  price?: number;
  sales: number;
};

export type BestSellersData = {
  header: {
    title: string;
    threeDots: string;
  };
  items: BestSellersItem[];
  footer: {
    text: string;
  };
};

export const bestSellers: BestSellersData = {
  header: {
    title: "Best Sellers",
    threeDots: "/src/assets/three-dots-vertical-bold.svg",
  },

  items: [
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
      price: 140.5,
      sales: 999,
    },
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
      price: 140.5,
      sales: 999,
    },
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
      price: 140.5,
      sales: 999,
    },
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
      price: 140.5,
      sales: 999,
    },
  ],

  footer: {
    text: "Report",
  },
};
