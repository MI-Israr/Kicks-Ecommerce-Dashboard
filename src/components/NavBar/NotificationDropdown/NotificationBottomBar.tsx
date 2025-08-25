type BottomProps = {
  markAll: {
    img: string;
    text: string;
  };
  viewAllText: string;
};

const NotificationBottomBar: React.FC<BottomProps> = ({
  markAll,
  viewAllText,
}) => {
  return (
    <div className="notifications-container-footer">
      <div className="markdown">
        <img src={markAll.img} alt="" />
        <p>{markAll.text}</p>
      </div>
      <div className="btn">
        <button>{viewAllText}</button>
      </div>
    </div>
  );
};

export default NotificationBottomBar;
