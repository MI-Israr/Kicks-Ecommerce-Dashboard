export type SearchItem = {
  img: string;
  title: string;
};

export type SearchData = {
  header: {
    title: string;
  };
  items: SearchItem[];
  footer: {
    viewAllText: string;
  };
};

export const search: SearchData = {
  header: {
    title: "Notification",
  },
  items: [
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
    },
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
    },
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
    },
    {
      img: "/src/assets/notifications-image.png",
      title: "Adidas Ultra boost",
    },
  ],

  footer: {
    viewAllText: "See all Products",
  },
};
