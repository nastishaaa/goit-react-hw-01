import css from './FriendList.module.css';
import clsx from "clsx";


export default function FriendList({friends}) {

    const list = friends.map(item => <li className={css.friendCard} key={item.id}>
        <div>
            <img className={css.friendAvatar} src={item.avatar} alt="Avatar" width="48" />
            <p className={css.friendName }>{item.name}</p>
            <p className={clsx(css.friendStatus, { [css.isOnline]: item.isOnline, [css.isOffline]: !item.isOnline })}>
                {item.isOnline ? 'Online' : 'Offline'}
            </p>

        </div>
    </li>)
    return (<ul className={css.friendList}>{list}</ul>)
}