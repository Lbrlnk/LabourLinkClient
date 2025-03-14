import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

interface Notification {
  id: number;
  name: string;
  message: string;
  img: string;
}

const EmployeeNotifications: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, name: "Anjali", message: "New work is pending", img: "" },
    { id: 2, name: "Rahul", message: "New project update available", img: "" },
    { id: 3, name: "Priya", message: "Meeting scheduled for tomorrow", img: "",},
    { id: 4, name: "Anjali", message: "New work is pending", img: "" },
    { id: 5, name: "Shilpa", message: "New project update available", img: "" },
    { id: 6, name: "Priya", message: "Meeting scheduled for tomorrow", img: "",},
    { id: 7, name: "Gopika", message: "New work is pending", img: "" },
    { id: 8, name: "Rahul", message: "New project update available", img: "" },
    { id: 9, name: "kaarthi", message: "Meeting scheduled for tomorrow", img: "",},
    { id: 10, name: "Vishnumaya", message: "New work is pending", img: "" },
    { id: 11, name: "Arun", message: "New project update available", img: "" },
    { id: 12, name: "Reenu", message: "Meeting scheduled for tomorrow", img: "",},
  ]);

  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  const filteredNotifications = notifications.filter((notification) =>
    notification.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div>
      <div className="ml-32 grid grid-flow-col mt-9 mb-8">
        <h1 className="font-bold text-3xl text-[#6300B3] font-postno">
          Labour Link
        </h1>
        <div className="relative">
          <IoSearch className="absolute mt-3 ml-3" size={21} />
          <input
            type="text"
            className=" border w-60 h-10 px-10 "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
          />
        </div>
        <div className="flex gap-5">
          <button>
            <MdOutlineMessage size={35} />
          </button>
          <button>
            <CgProfile size={35} />
          </button>
        </div>
      </div>

      <h2 className="text-3xl font-bold px-20 ml-20">Notifications</h2>

      <div className="border rounded-lg w-[60%] mx-auto mt-9 min-h-screen ">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              // className="h-40 m-4 rounded-lg  p-5 grid grid-flow-col shadow-[4px_4px_5px_rgb(192,192,192)] bg-[#F8F2FC] relative"
              className="h-40 m-4 rounded-lg  p-5 flex justify-between shadow-[2px_4px_5px_rgb(192,192,192)] bg-[#F8F2FC] relative"
            >
              <img
                src={notification.img || "https://via.placeholder.com/80"}
                alt="profile"
                className="rounded-full object-cover border w-20 h-20"
              />
              <div className="w-[250px] mt-4">
                <p className="font-semibold">{notification.name}</p>
                <p>{notification.message}</p>
              </div>
              
               
                <button
                  className=" bg-[#96F399] text-white p-1 rounded-lg mt-6  w-[130px] h-[50px]"
                >
                 Accept
                </button>
              
              <button
                  className=" bg-[#6941C6] text-white p-[14px] rounded-lg w-[130px] h-[50px] mt-6 mr-10"
                  onClick={() => navigate("/")}
                >
                  View Details
                </button>
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-red-600"
                onClick={() => handleDelete(notification.id)}
              >
                <AiOutlineClose size={20} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 mt-5">
            No notifications found
          </p>
        )}
      </div>
    </div>
  );
};

export default EmployeeNotifications;
