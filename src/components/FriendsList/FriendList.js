import React from "react";
import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map((i) => (
        <li className={styles.item} key={i.id}>
          <span
            className={i.isOnline === true ? styles.isOnline : styles.isOffline}
          ></span>
          <img className={styles.avatar} src={i.avatar} alt={i.name} />
          <p className={styles.name}>{i.name}</p>
        </li>
      ))}
    </ul>
  );
}
