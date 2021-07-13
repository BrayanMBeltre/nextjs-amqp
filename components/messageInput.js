import React from "react";
import { PaperAirplaneIcon } from "@heroicons/react/solid";

export default function messageInput({ handleSubmit, messageRef }) {
  return (
    <div className="m-2">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row items-center h-16 rounded-xl bg-gray-50 w-full p-2 ">
          <div className="flex-grow ml-4">
            <div className="relative w-full">
              <input
                type="text"
                ref={messageRef}
                className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                placeholder="Type a message"
              />
            </div>
          </div>
          <div className="ml-4">
            <button
              type="submit"
              className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-full text-white flex-shrink-0 h-10 w-10"
            >
              <PaperAirplaneIcon className="h-5 w-5 transform rotate-90" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
