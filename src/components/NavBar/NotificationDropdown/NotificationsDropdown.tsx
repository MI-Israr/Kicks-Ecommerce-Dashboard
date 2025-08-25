import "./NotificationDropdown.css";
import { notifications } from "../../../Data/notifications";
import type { NotificationItem } from "../../../Data/notifications";
import Notification from "./Notification";
import NotificationTopBar from "./NotificationTopBar";
import NotificationBottomBar from "./NotificationBottomBar";

interface handle {
  handleNotification?: () => void;
}

const NotificationsDropdown: React.FC<handle> = ({ handleNotification }) => {
  return (
    <div className="notifications-container">
      <NotificationTopBar
        header={notifications.header.title}
        closeIcon={notifications.header.closeIcon}
        handleNotification={handleNotification}
      />
      <div className="notification-wrapper">
        {notifications.items.map((item: NotificationItem, index: number) => (
          <Notification item={item} key={index} />
        ))}
      </div>
      <NotificationBottomBar
        markAll={notifications.footer.markAll}
        viewAllText={notifications.footer.viewAllText}
      />
    </div>
  );
};

export default NotificationsDropdown;
