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

export type NotificationItem = {
  img: string;
  title: string;
  price?: number;
  date?: string;
  status?: "sold" | "pending" | "lost";
};

export type NotificationData = {
  header: {
    title: string;
    closeIcon: string;
  };
  items: NotificationItem[];
  footer: {
    markAll: {
      img: string;
      text: string;
    };
    viewAllText: string;
  };
};

export const notifications: NotificationData = {
  header: {
    title: "Notification",
    closeIcon: "/src/assets/cross-circle.svg",
  },

  items: [
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
      price: 140,
      date: "Sep 20,2022",
      status: "sold",
    },
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
      price: 140,
      date: "Sep 20,2022",
      status: "sold",
    },
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
      price: 140,
      date: "Sep 20,2022",
      status: "sold",
    },
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
      price: 140,
      date: "Sep 20,2022",
      status: "sold",
    },
  ],

  footer: {
    markAll: {
      img: "/src/assets/tick.svg",
      text: "Mark all as read",
    },
    viewAllText: "View all notifications",
  },
};
