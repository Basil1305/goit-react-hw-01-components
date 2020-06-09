import React from "react";
import Profile from "./UserProfile/Profile";
import Statistics from "./StatisticSection/Statistics";
import friends from "./FriendsList/friends.json";
import transactions from "./TransactionHistory/transactions.json";
import "./general.css";
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
