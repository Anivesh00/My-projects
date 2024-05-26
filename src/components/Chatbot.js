import React, { useState } from "react";
import logo from "../icons/logo.jpg";
import cross from "../icons/cross-black.svg";
import send from "../icons/send-svgrepo-com.svg";
import "./Chatbot.css";

const Chatbot = () => {
  const [toggleNavigation, setToggleNavigation] = useState(false);
  const msg = React.createRef();
  const [mainMsgArray, setMainMsgArray] = useState([]);
  const greetMessage = "Hi, i am a ChatBOT. How may i help you";
  const botMessage = [
    "How may i help you",
    "How are you",
    "yes, its fine",
    "do it your self",
  ];

  const handleAddMessage = () => {
    const newMsg = msg.current.value;

    if (newMsg) {
      const randomIndex = Math.floor(Math.random() * botMessage.length);
      const newBotMessage = botMessage[randomIndex];

      const newMessage = {
        botMessage: newBotMessage,
        userMessage: newMsg,
      };

      setMainMsgArray((prevMessages) => [...prevMessages, newMessage]);

      msg.current.value = null;
    }
  };
  return (
    <div className="relative  text-white flex flex-col gap-4 justify-between py-6 pb-10 h-[91.5vh] ">
      <h1 className="uppercase text-6xl flex mx-auto text-center">
        Chatbot page
      </h1>

      <div
        className={`bg-white w-[320px] lg:w-[450px] mx-auto shadow-ani-default-shadow  rounded-lg h-[400px] ${
          toggleNavigation ? "flex relative flex-col gap-4" : "hidden"
        }`}
      >
        <button
          onClick={() => setToggleNavigation(!toggleNavigation)}
          className="h-fit mx-6 ml-auto mt-6 justify-end flex"
        >
          <img src={cross} alt="cross" className="w-4 aspect-square" />
        </button>
        <div className=" px-6 flex flex-col gap-4">
          <div className="flex flex-col gap-4 h-[260px] overflow-auto noScrollbar">
            <h1
              className={`${
                mainMsgArray.length === 0 ? "block" : "hidden"
              }  px-4 py-1 bg-ani-primary-color text-white w-fit rounded-md mr-auto`}
            >
              {greetMessage}
            </h1>
            <div className="flex flex-col  ">
              {mainMsgArray.map((item, index) => (
                <div key={index}>
                  <h2
                    className={` px-4 py-1 bg-ani-secondry-light-color text-ani-primary-color w-fit rounded-md ml-auto`}
                  >
                    {item?.userMessage}
                  </h2>
                  <h3
                    className={`  px-4 py-1 bg-ani-primary-color text-white w-fit rounded-md mr-auto`}
                  >
                    {item?.botMessage}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between  gap-6 absolute bottom-8 ">
            <input
              type="text"
              className="w-[215px] lg:w-[350px] px-6 pb-1 rounded-full bg-ani-primary-light-color text-white"
              placeholder="Type here!"
              ref={msg}
              //   onKeyUp={this.handleKeyPress}
            />
            <button onClick={handleAddMessage}>
              <img src={send} className="w-8 h-6" />
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setToggleNavigation(!toggleNavigation)}
        className="bottom-8 fixed right-6"
      >
        <img
          src={logo}
          alt="logo"
          className="w-10 lg:w-14 aspect-square rounded-full shadow-ani-logo-shadow"
        />
      </button>
    </div>
  );
};

export default Chatbot;
