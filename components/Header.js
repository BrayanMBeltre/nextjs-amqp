import React, { useRef } from "react";
import { RefreshIcon, XIcon } from "@heroicons/react/solid";

function Header({ name, setName, room, setRoom, getMessages }) {
  const nameRef = useRef(null);
  const roomRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(nameRef.current.value);
    setRoom(roomRef.current.value);

    roomRef.current.value = undefined;
  };

  const handleClose = () => {
    setName(undefined);
    setRoom(undefined);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between bg-indigo-500 border-b border-gray-300 p-2 shadow">
        <div className="flex items-center">
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-50 flex-shrink-0">
            <p className="text-2xl capitalize font-bold">
              {name ? name[0] : ""}
            </p>
          </div>
          <div className="block ml-2">
            <p className="text-xl text-gray-50">{name}</p>
          </div>
        </div>
        <div>
          <div className="block">
            <p className="text-2xl text-gray-50 font-bold">{room}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={getMessages}
            className="flex items-center justify-center bg-gray-50 hover:bg-gray-200 rounded-md text-indigo-500 flex-shrink-0 p-2"
          >
            <RefreshIcon className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={handleClose}
            className="flex items-center justify-center bg-red-500 hover:bg-red-600 rounded-md text-white flex-shrink-0 p-2 "
          >
            <XIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Header;
