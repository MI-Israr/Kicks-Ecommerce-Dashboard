import type { NotificationItem } from "../../../Data/notifications";

interface NotificationProps {
  item: NotificationItem;
}

const Notification: React.FC<NotificationProps> = ({ item }) => {
  return (
    <div className="notification">
      <div className="notification-left">
        <img src={item.img} alt="" />
      </div>
      <div className="notification-right">
        <div className="notification-right-top">
          <div className="notification-heading">
            <h3>{item.title}</h3>
            <p>${item.price}</p>
          </div>
          <button>{item.status}</button>
        </div>
        <div className="notification-right-bottom">
          <p>{item.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
