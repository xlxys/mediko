import React from "react";
import { GiftedChat } from 'react-native-gifted-chat';

export default function Chat() {
  const [messages, setMessages] = React.useState([]);

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello ",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: require("../../assets/doctor2.png"),
        },
      },
    ]);
  }, []);

  const onSend = React.useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  return (
    <>
      <GiftedChat
        
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
    </>

  );


}