import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

import Modal from "../components/Modal";
import Login from "../components/Login";
import Header from "../components/Header";
import MessageList from "../components/MessageList";
import MessageInput from "../components/messageInput";

export default function Chat() {
  const [name, setName] = useState(undefined);
  const [room, setRoom] = useState(undefined);
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState([]);

  const messageRef = useRef(null);

  useEffect(() => {
    getMessages();
  }, [room]);

  const getMessages = async () => {
    try {
      if (room) {
        const res = await axios.post("http://localhost:3000/api/getmessages", {
          room,
        });

        setMessages(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const postMessages = async (message) => {
    try {
      if (room) {
        await axios.post("http://localhost:3000/api/postmessage", {
          room: room,
          data: {
            name: name,
            message: message,
            seen: false,
          },
        });
      }

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postMessages(messageRef.current.value);
    getMessages();

    messageRef.current.value = null;
  };

  return (
    <div className="flex h-screen antialiased text-gray-800 bg-purple-900">
      <div className="flex flex-row h-full w-full overflow-x-hidden shadow">
        {/* Login Modal */}
        {name === undefined ? (
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <Login setName={setName} setRoom={setRoom} />
          </Modal>
        ) : (
          ""
        )}

        <div className="flex flex-col flex-auto h-full p-6 pt-0">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl rounded-t-none bg-gray-100 h-full  pt-0">
            {/* Header */}
            <Header
              name={name}
              setName={setName}
              room={room}
              setRoom={setRoom}
              getMessages={getMessages}
            />
            {/* Messages List */}
            <MessageList messages={messages} user={name} />
            {/* Input Area */}
            <MessageInput handleSubmit={handleSubmit} messageRef={messageRef} />
          </div>
        </div>
      </div>
    </div>
  );
}
