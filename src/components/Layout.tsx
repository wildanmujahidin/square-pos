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
          width="12.5rem"
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
          <Menu className="text-[#98949E]">
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
            <MenuItem component={<Link to="/" />}> Dashboard</MenuItem>
            <MenuItem component={<Link to="/" />}> Stock</MenuItem>
            <MenuItem
              component={<Link to="/customer" />}
              className="text-[#5D5FEF]"
            >
              {" "}
              Customer
            </MenuItem>
            <MenuItem component={<Link to="/" />}> Restaurant</MenuItem>
            <MenuItem component={<Link to="/" />}> Design</MenuItem>
            <MenuItem component={<Link to="/" />}> Report</MenuItem>
            <MenuItem component={<Link to="/" />}> Role & Admin</MenuItem>
            <MenuItem component={<Link to="/" />}> Settings</MenuItem>
            <p
              className="mt-8 text-[10px] tracking-wider"
              style={{ fontFamily: "Satoshi" }}
            >
              Integration
            </p>
            <MenuItem component={<Link to="/" />}> Stock</MenuItem>
            <MenuItem component={<Link to="/" />}> Supply</MenuItem>
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
            <Button className="normal-case bg-[#FEF5F6] text-[#8F0A13] border-none w-full">
              Logout
            </Button>
          </div>
        </Sidebar>
        {children}
      </div>
    </div>
  );
};
