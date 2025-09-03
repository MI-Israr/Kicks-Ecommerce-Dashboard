"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronRight, LogOut } from "lucide-react";
import ArrowDown from "/src/assets/down.svg";
import ArrowUp from "/src/assets/arrow-up.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

export function AdminDropdown() {
  const [opened, setOpened] = useState(false);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="w-24 cursor-pointer !text-[16px]"
          onClick={() => setOpened((prev) => !prev)}
        >
          Admin
          <span>
            <img
              className="w-[15px]"
              src={opened ? ArrowUp : ArrowDown}
              alt=""
            />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 rounded-lg border border-gray-200 shadow-md !p-4 flex  flex-col gap-3">
        <DropdownMenuLabel className="px-12 font-bold text-lg">
          Admin
        </DropdownMenuLabel>
        {/* <DropdownMenuSeparator /> */}
        <DropdownMenuItem className="flex items-center justify-between cursor-pointer uppercase">
          <span>Change Password</span>
          <ChevronRight className="h-4 w-4 text-gray-500" />
        </DropdownMenuItem>
        <Link to="/register">
          <DropdownMenuItem className="flex items-center justify-between cursor-pointer text-red-600 focus:text-red-700 uppercase">
            <span>Log Out</span>
            <LogOut className="h-4 w-4" />
          </DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
