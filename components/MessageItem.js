import React from "react";

function MessageItem({ sender, name, message, seen }) {
  return (
    <div
      className={
        sender === true
          ? "col-start-6 col-end-13 p-3 rounded-lg"
          : "col-start-1 col-end-8 p-3 rounded-lg"
      }
    >
      <div
        className={
          sender === true
            ? "flex items-center justify-start flex-row-reverse"
            : "flex flex-row items-center"
        }
      >
        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
          {name[0]}
        </div>
        <div
          className={
            sender === true
              ? "relative mr-3 text-sm bg-gray-100 py-2 px-4 shadow rounded-xl"
              : "relative ml-3 text-sm bg-indigo-50 py-2 px-4 shadow rounded-xl"
          }
        >
          <div>{message}</div>
          {seen === true ? (
            <div
              className={
                sender === true
                  ? "absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                  : "absolute text-xs bottom-0 left-0 -mb-5 ml-2 text-gray-500"
              }
            >
              seen
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default MessageItem;
