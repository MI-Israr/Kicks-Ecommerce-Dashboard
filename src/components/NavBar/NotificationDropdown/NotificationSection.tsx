import NotificationsDropdown from "./NotificationsDropdown";
import BellOne from "/src/assets/bell.svg";
import BellTwo from "/src/assets/bell-2.svg";

interface NotificationSectionProps {
  notification: boolean;
  handleNotification: () => void;
}

const NotificationSection: React.FC<NotificationSectionProps> = ({
  notification,
  handleNotification,
}) => {
  return (
    <>
      <div className="bell" onClick={handleNotification}>
        <img src={notification ? BellTwo : BellOne} alt="" />
      </div>
      {notification && (
        <NotificationsDropdown handleNotification={handleNotification} />
      )}
    </>
  );
};

export default NotificationSection;
