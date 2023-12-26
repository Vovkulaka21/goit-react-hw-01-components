import css from './FriendLisc.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    
  const element = friends.map(friend => (
    <FriendListItem
      key={friend.id}
      avatar={friend.avatar}
      name={friend.name}
      isOnline={friend.isOnline}
    />
  ));

  return <ul className={css.friendslist}>{element}</ul>;
};

export default FriendList;
