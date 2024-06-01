import React, { useState } from "react";
import logo from "../../icons/logo.jpg";
import cross from "../../icons/cross-black.svg";
import send from "../../icons/send-svgrepo-com.svg";
import { botMessage, greetMessage } from "../../JSON Data/data";

/**
 * Chatbot component renders a chatbot interface with functionality for user input
 * and bot responses.
 * @returns {JSX.Element} The rendered Chatbot component.
 */
const Chatbot = () => {
  /**
   * State to toggle the visibility of the chat modal.
   * @type {[boolean, Function]}
   */
  const [toggleModal, setToggleModal] = useState(false);

  /**
   * Reference to the input field for user messages.
   * @type {React.RefObject<HTMLInputElement>}
   */
  const msg = React.createRef();

  /**
   * State to hold the array of messages between the user and the bot.
   * @type {[Array<{botMessage: string, userMessage: string}>, Function]}
   */
  const [mainMsgArray, setMainMsgArray] = useState([]);

  /**
   * Handles adding a new message to the chat. It retrieves the user message from the
   * input field, selects a random bot response, and updates the main message array.
   */
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

  /**
   * Handles the key press event for the input field. If the Enter key is pressed,
   * it triggers the handleAddMessage function.
   * @param {React.KeyboardEvent} event - The keyboard event object.
   */
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddMessage();
    }
  };

  return (
    <div className="relative text-white flex flex-col gap-14 py-6 pb-10 h-[91.5vh]">
      <h1 className="uppercase text-6xl flex mx-auto text-center">
        Chatbot page
      </h1>

      <div
        className={`bg-white w-[320px] lg:w-[450px] mx-auto shadow-ani-default-shadow rounded-lg h-[345px] ${
          toggleModal ? "flex relative flex-col gap-4" : "hidden"
        } py-5 px-6`}
      >
        <button
          onClick={() => setToggleModal(!toggleModal)}
          className="h-fit ml-auto justify-end flex"
        >
          <img src={cross} alt="cross" className="w-4 aspect-square" />
        </button>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 h-[220px] overflow-auto noScrollbar">
            <h1
              className={`${
                mainMsgArray.length === 0 ? "block" : "hidden"
              } px-4 py-1 bg-ani-primary-color text-white w-fit rounded-md mr-auto`}
            >
              {greetMessage}
            </h1>
            {mainMsgArray.map((item, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h2
                  className={`px-4 py-1 bg-ani-secondry-light-color text-ani-primary-color w-fit rounded-md ml-auto`}
                >
                  {item?.userMessage}
                </h2>
                <h3
                  className={`px-4 py-1 bg-ani-primary-color text-white w-fit rounded-md mr-auto`}
                >
                  {item?.botMessage}
                </h3>
              </div>
            ))}
          </div>

          <div className="flex justify-between gap-6">
            <input
              type="text"
              className="w-[215px] lg:w-[350px] px-6 pb-1 rounded-full bg-ani-primary-light-color text-white"
              placeholder="Type here!"
              ref={msg}
              onKeyDown={handleKeyDown}
            />
            <button onClick={handleAddMessage}>
              <img src={send} className="w-8 h-6" />
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={() => setToggleModal(!toggleModal)}
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
