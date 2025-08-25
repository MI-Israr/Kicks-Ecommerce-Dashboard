interface handle {
  handleNotification?: () => void;
  header: string;
  closeIcon: string;
}

const NotificationTopBar: React.FC<handle> = ({
  handleNotification,
  header,
  closeIcon,
}) => {
  return (
    <div className="notifications-container-heading">
      <h2>{header}</h2>
      <img src={closeIcon} alt="" onClick={handleNotification} />
    </div>
  );
};

export default NotificationTopBar;
