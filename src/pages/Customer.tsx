import React from "react";
import { Layout } from "../components/Layout";
import { Button } from "react-daisyui";
import Frame2960 from "/Frame2960.svg";
import Frame2959 from "/Frame2959.svg";
import Frame2964 from "/Frame2964.svg";
import Rectangle from "/Rectangle.svg";
import ShieldSearch from "../assets/shield-search.svg";
import Arrow1 from "../assets/Arrow1.svg";
import Edit2 from "../assets/edit-2.svg";
import Trash from "../assets/trash.svg";
import Filter from "../assets/filter.svg";
import Refresh2 from "../assets/refresh-2.svg";
import Printer from "../assets/printer.svg";
import UnsplashHeader from "/UnsplashHeader.png";
import { ButtonAction, ButtonTrans } from "../components/Button";
import { BsBell } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { RiSearchLine } from "react-icons/ri";
import { RxCaretSort } from "react-icons/rx";

export const Customer = () => {
  const customers = [
    {
      customerName: "Odis Rhinehart",
      level: "Warga",
      favMenu: "Chicken & Ribs Combo",
      totalTransaction: "IDR 194,700",
    },
    {
      customerName: "Kris Roher",
      level: "Warga",
      favMenu: "Surf & Turf Gift Basket",
      totalTransaction: "IDR 631,200",
    },
    {
      customerName: "Serenity Fisher",
      level: "Juragan",
      favMenu: "Fried Chicken Dinne",
      totalTransaction: "IDR 1,040.920",
    },
    {
      customerName: "Brooklyn Warren",
      level: "Sultan",
      favMenu: "Surf & Turf Gift Basket",
      totalTransaction: "IDR 730,500",
    },
    {
      customerName: "Franco Delort",
      level: "Juragan",
      favMenu: "Chicken & Ribs Combo",
      totalTransaction: "IDR 96,000",
    },
    {
      customerName: "Saul Geoghegan",
      level: "Juragan",
      favMenu: "Surf & Turf Gift Basket",
      totalTransaction: "IDR 256,000",
    },
    {
      customerName: "Alfredo Vetrovs",
      level: "Juragan",
      favMenu: "Dark & Stormy",
      totalTransaction: "IDR 590,080",
    },
    {
      customerName: "Cristofer Vetrovs",
      level: "Konglomerat",
      favMenu: "Shaking Beef Tri-Tip",
      totalTransaction: "IDR 782,600",
    },
    {
      customerName: "Calvin Steward",
      level: "Konglomerat",
      favMenu: "BBQ Rib Dinner",
      totalTransaction: "IDR 467,500",
    },
    {
      customerName: "Calvin Steward",
      level: "Konglomerat",
      favMenu: "BBQ Rib Dinner",
      totalTransaction: "IDR 467,500",
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Warga":
        return "text-transparent bg-clip-text bg-gradient-to-br from-[#EEA849] to-[#F46B45]";
      case "Juragan":
        return "text-transparent bg-clip-text bg-gradient-to-br from-[#56CCF2] to-[#2F80ED]";
      case "Sultan":
        return "text-transparent bg-clip-text bg-gradient-to-br from-[#38EF7D] to-[#11998E]";
      case "Konglomerat":
        return "text-transparent bg-clip-text bg-gradient-to-br from-[#E100FF] to-[#7F00FF]";
      default:
        return "";
    }
  };

  const getLevelBgColor = (level: string) => {
    switch (level) {
      case "Warga":
        return "bg-[#FEFBF6]";
      case "Juragan":
        return "bg-[#F6FCFE]";
      case "Sultan":
        return "bg-[#F6FEF9]";
      case "Konglomerat":
        return "bg-[#FEF5FF]";
      default:
        return "";
    }
  };

  return (
    <Layout>
      <header className="border-b-2 w-full">
        <p className="font-bold text-2xl mb-2">Customer</p>
        <div className="flex justify-between">
          <p
            className="text-[#98949E] font-medium"
            style={{ fontFamily: "Satoshi" }}
          >
            You can manage and organize your customer and other things here
          </p>
          <div className="">
            <button className="px-16 py-3 text-[#5D5FEF] normal-case border-b-4 border-[#5D5FEF] hover:bg-slate-300">
              Customer
            </button>
            <button className="px-16 py-3 text-[#98949E] normal-case hover:bg-slate-300">
              Promo
            </button>
            <button className="px-16 py-3 text-[#98949E] normal-case hover:bg-slate-300">
              Voucher
            </button>
          </div>
        </div>
      </header>
      <main className="flex w-full h-full mt-4">
        <div className="w-full">
          <div className="bg-[#5D5FEF] rounded-lg p-3 text-white mr-4 relative">
            <p className="text-xl font-bold">Customer</p>
            <p
              className="w-[21.3125rem] text-xs font-light tracking-wide leading-6 mt-3 mb-4"
              style={{ fontFamily: "Satoshi" }}
            >
              On this menu you will be able to create, edit, and also delete the
              customer. Also you can manage it easily.
            </p>
            <div className="flex gap-3">
              <ButtonTrans
                id="add-button"
                label="Add New Customer"
                buttonSet="bg-opacity-20"
                iconString={"+"}
                iconStringSet="mr-4"
              />
              <div className="form-control w-full z-10">
                <form>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[#D1D0D3]">
                      <RiSearchLine />
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full px-4 py-3 pl-10 text-sm text-gray-900 border rounded-lg placeholder:text-black placeholder:text-opacity-20"
                      placeholder="Search Customer"
                      required
                    />
                    <button
                      type="submit"
                      className="text-white absolute right-2.5 bottom-[0.3rem] bg-[#5D5FEF] font-medium rounded-lg text-sm px-5 py-2"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>
              <ButtonTrans
                id="Filter"
                label="Filter"
                buttonSet="bg-opacity-20 z-10 backdrop-blur-sm"
                icon={Filter}
                iconSet="mr-2"
              />
              <ButtonTrans
                id="Refresh"
                label="Refresh"
                buttonSet="bg-opacity-20 z-10 backdrop-blur-sm"
                icon={Refresh2}
                iconSet="mr-2"
              />
              <ButtonTrans
                id="Refresh"
                buttonSet="bg-opacity-20 z-10 backdrop-blur-sm"
                icon={Printer}
                // iconSet="mr-2"
              />
            </div>
            <div
              className="h-full w-1/2 absolute right-0 top-0 z-0 bg-left rounded-r-lg"
              style={{
                backgroundImage: `url(${UnsplashHeader})`,
              }}
            ></div>
            <div
              className="h-full w-full absolute right-0 top-0 z-10 bg-left rounded-lg bg-cover"
              style={{
                backgroundImage: `url(${Rectangle})`,
              }}
            ></div>
          </div>
          <div className="overflow-x-auto mr-4 mt-4 text-sm font-semibold">
            <table className="table w-full table-compact ">
              {/* head */}
              <thead>
                <tr>
                  <td className="normal-case text-sm text-[#98949E] font-medium">
                    <div className="flex justify-between">
                      <p>Customer Name</p>
                      <RxCaretSort size={20} />
                    </div>
                  </td>
                  <td className="normal-case text-sm text-[#98949E] font-medium">
                    <div className="flex justify-between">
                      <p>Level</p>
                      <RxCaretSort size={20} />
                    </div>
                  </td>
                  <td className="normal-case text-sm text-[#98949E] font-medium">
                    <div className="flex justify-between">
                      <p>Favorite Menu</p>
                      <RxCaretSort size={20} />
                    </div>
                  </td>
                  <td className="normal-case text-sm text-[#98949E] font-medium">
                    <div className="flex justify-between">
                      <p>Total Transaction</p>
                      <RxCaretSort size={20} />
                    </div>
                  </td>
                  <td className="normal-case text-sm text-[#98949E] font-medium">
                    <div className="flex justify-between">
                      <p>Action</p>
                      <RxCaretSort size={20} />
                    </div>
                  </td>
                </tr>
              </thead>
              <tbody>
                {customers.map((cust, index) => (
                  <tr key={index} className="border-none">
                    <td className="border-none">{cust.customerName}</td>
                    <td className={`border-none `}>
                      <div
                        className={`w-fit rounded-lg ${getLevelBgColor(
                          cust.level
                        )}`}
                      >
                        <p
                          className={`w-fit py-3 px-5 rounded-lg ${getLevelColor(
                            cust.level
                          )}`}
                        >
                          {cust.level}
                        </p>
                      </div>
                    </td>
                    <td className="border-none">{cust.favMenu}</td>
                    <td className="border-none">{cust.totalTransaction}</td>
                    <td className="w-0 border-none">
                      <div className="flex gap-2">
                        <ButtonAction
                          icon={ShieldSearch}
                          label="Detail"
                        ></ButtonAction>
                        <ButtonAction
                          icon={Edit2}
                          buttonSet="w-max pr-3"
                        ></ButtonAction>
                        <ButtonAction
                          icon={Trash}
                          buttonSet="w-max pr-3 bg-red-100"
                        ></ButtonAction>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-[#FAFAFA] mr-4 px-3  text-[#98949E] mt-[3.75rem] flex justify-between text-center items-center rounded-lg mb-6">
            <p>Showing 10 Data Customers</p>
            <div className="flex gap-6 items-center">
              <p className="bg-white py-2 px-4 shadow-md my-2">1</p>
              <p>2</p>
              <p>3</p>
              <p>...</p>
              <p>38</p>
              <p>Next</p>
              <img src={Arrow1} alt="" className="mr-3" />
            </div>
          </div>
          <div>{}</div>
        </div>
        <div className="h-full w-[16.4rem]">
          <div
            className="h-[16.5625rem] text-white p-4 rounded-lg flex flex-col justify-between font-semibold text-xl"
            style={{
              backgroundImage: `url(${Frame2960})`,
            }}
          >
            See analytics of the Customer Clearly
            <button className="px-4 py-3 bg-white bg-opacity-20 rounded-lg w-fit text-sm">
              See Analytics
            </button>
          </div>
          <div
            className="h-[37.1875rem] my-4 p-4 text-xs font-semibold text-[#98949E]"
            style={{
              backgroundImage: `url(${Frame2959})`,
            }}
          >
            <p className="text-2xl font-bold text-[#110D17]">Top Menu</p>
            <p className="text-2xl font-bold text-[#F17300]">This Week</p>
            <p
              className="text-xs font-normal my-3"
              style={{ fontFamily: "Satoshi" }}
            >
              10 - 12 Agustus 2023
            </p>
            <div className="text-black font-extrabold p-[12px] px-4 bg-white rounded-lg shadow-md mb-6 tracking-wide relative">
              <p>Nasi Goreng Jamur Special Resto Pak Min</p>
              <p
                className="px-3 py-1 text-white bg-[#F17300] absolute top-[-0.6rem] right-[-0.5rem] shadow-black shadow-md rotate-12"
                style={{ boxShadow: "3px 2px 1px 0 black" }}
              >
                1
              </p>
              {/* <img src={Frame2964} alt="" /> */}
            </div>
            <div className="grid gap-7">
              <p>2. Tongseng Sapi Gurih</p>
              <p>3. Nasi Gudeg Telur Ceker</p>
              <p>4. Nasi Ayam serundeng</p>
              <p>5. Nasi Goreng Seafood</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
