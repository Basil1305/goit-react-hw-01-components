import React from "react";
import friends from "./Data/friends.json";
import transactions from "./Data/transactions.json";
import "./general.css";
import Profile from "./UserProfile/Profile";
import Statistics from "./StatisticSection/Statistics";
import FriendList from "./FriendsList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";

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
