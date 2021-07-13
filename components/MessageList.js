import React, { useRef, useEffect } from "react";

import MessageItem from "./MessageItem";

function MessageList({ messages, user }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col h-full overflow-x-auto mb-4">
      <div className="flex flex-col h-full">
        <div className="grid grid-cols-12 gap-y-2">
          {messages.map(({ name, message, seen }, i) => (
            <MessageItem
              key={i}
              sender={name === user ? true : false}
              name={name}
              message={message}
              seen={seen}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
}

export default MessageList;
