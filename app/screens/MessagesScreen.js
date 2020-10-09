import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  ListItem,
  ListItemDeleteAction,
  ListItemSeparator,
  Screen,
} from "../components";

const initialMessages = [
  {
    id: 1,
    title: "Title 1",
    description: "First Message",
    image: require("../assets/headshot.png"),
  },
  {
    id: 2,
    title: "Title 2",
    description: "Second Message",
    image: require("../assets/headshot.png"),
  },
  {
    id: 3,
    title: "Title 3",
    description: "Third Message",
    image: require("../assets/headshot.png"),
  },
];

const MessagesScreen = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (messageId) => {
    setMessages(messages.filter((message) => message.id !== messageId));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log(item.id)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => setMessages(initialMessages)}
      />
    </Screen>
  );
};

export default MessagesScreen;
