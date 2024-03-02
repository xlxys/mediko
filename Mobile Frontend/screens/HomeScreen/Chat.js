import React from "react";
import { GiftedChat } from 'react-native-gifted-chat';

export default function Chat({route}) {
  const [messages, setMessages] = React.useState([]);

  const { name, img } = route.params;

  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello ",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: name,
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