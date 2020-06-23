import React from "react";

import Profile from "./UserProfile/Profile";
import Statistics from "./StatisticSection/Statistics";
import FriendList from "./FriendsList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

import "./general.css";

export default function App() {
  return (
    <>
      <Profile />
      <Statistics title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
