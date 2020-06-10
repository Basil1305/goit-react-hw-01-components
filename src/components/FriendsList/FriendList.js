import React from "react";
import PropTypes from "prop-types";
import s from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((i) => (
        <li className={s.item} key={i.id}>
          <span
            className={i.isOnline === true ? s.isOnline : s.isOffline}
          ></span>
          <img className={s.avatar} src={i.avatar} alt={i.name} />
          <p className={s.name}>{i.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.defaultProps = {
  friends: {},
};

FriendList.propTypes = {
  friends: PropTypes.object,
};
