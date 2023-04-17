import React, { FC } from "react";
import {
  Sidebar,
  Menu,
  MenuItem,
  useProSidebar,
  sidebarClasses,
  menuClasses,
} from "react-pro-sidebar";
import { Link } from "react-router-dom";
import Logo from "/logo.svg";
import fotoProfile from "/fotoProfile.svg";
import LogoutIcon from "../assets/logout.svg";
import BatteryFull from "../assets/battery-full.svg";
import Candle from "../assets/candle.svg";
import Category2 from "../assets/category-2.svg";
import DocumentNormal from "../assets/document-normal.svg";
import MouseSquare from "../assets/mouse-square.svg";
import Profile2user from "../assets/profile-2user.svg";
import Reserve from "../assets/reserve.svg";
import UserSquare from "../assets/user-square.svg";
import ShoppingCart from "../assets/shopping-cart.svg";
import Truck from "../assets/truck.svg";
import { Button } from "react-daisyui";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { collapseSidebar } = useProSidebar();
  return (
    <div className="w-full h-screen  flex flex-col overflow-auto ">
      <div className="h-full w-full overflow-auto flex ">
        <Sidebar
          width="12.8rem"
          rootStyles={{
            [`.${sidebarClasses.container}`]: {
              padding: "1.5rem",
              borderRightWidth: "1px",
              background: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
            [`.${menuClasses.button}`]: {
              margin: 0,
              padding: 0,
            },
          }}
        >
          <Menu className="text-[#98949E] text-xs font-semibold">
            <img
              src={Logo}
              alt=""
              onClick={() => collapseSidebar()}
              className="hover:cursor-pointer"
            />
            <p
              className="mt-6 text-[10px] tracking-wider"
              style={{ fontFamily: "Satoshi" }}
            >
              Menu
            </p>
            <div className="text-sm">
              <MenuItem component={<Link to="/" />} className="relative">
                <div className="flex gap-3">
                  <img src={Category2} alt="" />
                  Dashboard
                  <p className="absolute top-4 right-0 bg-orange-400 px-2  rounded-full text-white text-[10px] bg-gradient-to-br from-[#EEA849] to-[#F46B45]">
                    4
                  </p>
                </div>
              </MenuItem>
              <MenuItem component={<Link to="/" />}>
                <div className="flex gap-3">
                  <img src={BatteryFull} alt="" />
                  Stock
                </div>
              </MenuItem>
              <MenuItem
                component={<Link to="/customer" />}
                className="text-[#5D5FEF]"
              >
                <div className="flex gap-3">
                  <img src={Profile2user} alt="" />
                  Customer
                </div>
              </MenuItem>
              <MenuItem component={<Link to="/" />}>
                <div className="flex gap-3">
                  <img src={Reserve} alt="" />
                  Restaurant
                </div>
              </MenuItem>
            </div>
            <MenuItem component={<Link to="/" />}>
              <div className="flex gap-3">
                <img src={MouseSquare} alt="" />
                Customer
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/" />}>
              <div className="flex gap-3">
                <img src={DocumentNormal} alt="" />
                Report
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/" />}>
              <div className="flex gap-3">
                <img src={UserSquare} alt="" />
                Role & Admin
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/" />}>
              <div className="flex gap-3">
                <img src={Candle} alt="" />
                Settings
              </div>
            </MenuItem>
            <p
              className="mt-8 text-[10px] tracking-wider"
              style={{ fontFamily: "Satoshi" }}
            >
              Integration
            </p>
            <MenuItem component={<Link to="/" />}>
              <div className="flex gap-3">
                <img src={ShoppingCart} alt="" />
                Stock
              </div>
            </MenuItem>
            <MenuItem component={<Link to="/" />}>
              <div className="flex gap-3">
                <img src={Truck} alt="" />
                Supply
              </div>
            </MenuItem>
          </Menu>
          <div className="">
            <div className="border-b-2 mx-[-2rem]"></div>
            <div className="flex gap-3 my-6">
              <img src={fotoProfile} alt="" />
              <div>
                <p>Savannah N</p>
                <p
                  className="text-[10px] font-normal text-[#98949E]"
                  style={{ fontFamily: "Satoshi" }}
                >
                  Food Quality Manager
                </p>
              </div>
            </div>
            <Button className="normal-case bg-[#FEF5F6] text-[#8F0A13] border-none w-full gap-2">
              <img src={LogoutIcon} alt="" />
              Logout
            </Button>
          </div>
        </Sidebar>
        <div className="flex flex-col p-6 h-full w-full overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};
