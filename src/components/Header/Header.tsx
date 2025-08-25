const Header = () => {
  return (
    <div className="flex items-center justify-between w-[100%]">
      <div className="flex flex-col">
        <h1 className="text-[24px] font-bold">Dashboard</h1>
        <div className="flex gap-[4px]">
          <p>Home</p>
          <span>&gt;</span>
          <p>Dashboard</p>
        </div>
      </div>
      <div className="flex gap-[8px] self-end">
        <img src="/src/assets/calendar.svg" alt="" />
        <div className="flex gap-[4px] ">
          <p>Aug 20, 2025</p>
          <span>-</span>
          <p>Aug 25, 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
