import { Menu, Button } from "@mantine/core";
import ArrowDown from "/src/assets/down.svg";
import ArrowUp from "/src/assets/arrow-up.svg";
import { useContext, useState } from "react";
import { AppContext } from "@/Context/Context";

function FilterButton() {
  const { setFilter } = useContext(AppContext);
  const [opened, setOpened] = useState(false);
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button
          bg={"white"}
          c="#232321"
          onClick={() => setOpened((prev) => !prev)}
          radius={6}
        >
          Change Status
          <span className="!ml-4">
            <img src={opened ? ArrowUp : ArrowDown} alt="" />
          </span>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item
          leftSection={
            <span className="w-[10px] h-[10px] rounded-4xl bg-[#4A69E2]"></span>
          }
          onClick={() => setFilter("Delivered")}
        >
          Delivered
        </Menu.Item>
        <Menu.Item
          leftSection={
            <span className="w-[10px] h-[10px] rounded-4xl bg-[#FFA52F]"></span>
          }
          onClick={() => setFilter("Canceled")}
        >
          Canceled
        </Menu.Item>
        <Menu.Item onClick={() => setFilter(null)}>Show All</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default FilterButton;
