import clsx from 'clsx';
import css from './FriendListItem.css'

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
}



