import css from "./FriendLisc.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={avatar} alt="User avatar"/>
      <p>{name}</p>
    </li>
  );
};


export default FriendListItem;