import React, { useRef } from "react";

function Login({ setName, setRoom }) {
  const nameRef = useRef(null);
  const roomRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setName(nameRef.current.value);
    setRoom(roomRef.current.value);

    roomRef.current.value = undefined;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center bg-indigo-900 rounded">
        <div className="mx-16 my-8">
          <div className="text-center mb-8">
            <h1 className="text-gray-50 font-bold text-4xl">Login</h1>
          </div>
          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-50 mb-2" htmlFor="username">
              Username
            </label>
            <input
              ref={nameRef}
              className="border rounded py-2 px-3 text-gray-900"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          {/* Room */}
          <div className="mb-6">
            <label className="block text-gray-50 mb-2" htmlFor="Room">
              Room Name
            </label>
            <input
              ref={roomRef}
              className="border rounded py-2 px-3 text-gray-900"
              id="Room"
              type="text"
              placeholder="Enter room name"
            />
          </div>
          {/* Button */}
          <div className="w-full mb-6">
            <button
              onClick={handleSubmit}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Enter
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
