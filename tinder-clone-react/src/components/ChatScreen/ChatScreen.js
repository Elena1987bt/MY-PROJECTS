import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import './ChatScreen.css';

function ChatScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      name: 'Elena',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZiKg0WAXUTZOta2MgylvpOV9BOWI63S7Nw&usqp=CAU',
      message: 'Whats up?',
    },
    {
      name: 'Elena',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZiKg0WAXUTZOta2MgylvpOV9BOWI63S7Nw&usqp=CAU',
      message: 'I am good?',
    },
    {
      message: 'Coool?',
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        message: input,
      },
    ]);
    setInput('');
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen__timestamp">
        YOU MATCHED WITH ELENA ON 10/08/20
      </p>
      {messages.map((message) =>
        message.name ? (
          <div className="chatScreen__message" key={Math.random()}>
            <Avatar
              src={message.image}
              alt={message.name}
              className="chatScreen__image"
            ></Avatar>
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message" key={Math.random()}>
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      )}

      <form className="chatScreen__form">
        <input
          value={input}
          type="text"
          placeholder="Type a message..."
          className="chatScreen_input"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          disabled={!input}
          onClick={handleSend}
          className="chatScreenInput__button"
        >
          SEND
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
