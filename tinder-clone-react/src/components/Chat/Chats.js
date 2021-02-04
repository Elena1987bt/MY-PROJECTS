import React from 'react';
import ChatRow from './ChatRow';

function Chats() {
  return (
    <div className="chats">
      <ChatRow
        name="Mark"
        message="hey whats up?"
        timestamp="40 sec ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp6oxKikeTi0HVumoxImcJK4eKWNoi_hIOYw&usqp=CAU"
      />
      <ChatRow
        name="Angela"
        message="hey, that's cool!"
        timestamp="15 min ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIglHRREU79rY3PcIh_k0APeKBvzQpXbcCkQ&usqp=CAU"
      />
      <ChatRow
        name="Elena"
        message="Olja :)"
        timestamp="5 min ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZiKg0WAXUTZOta2MgylvpOV9BOWI63S7Nw&usqp=CAU"
      />
      <ChatRow
        name="Maja"
        message="hey, how is gooing on?"
        timestamp="1 hour ago"
        profilePic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9kb7FBe_ny5R7-HwjwyZuvvElMaJm12SrcA&usqp=CAU"
      />
    </div>
  );
}

export default Chats;
