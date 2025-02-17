import css from './Profile.module.css';

export default function Profile({username, 
    tag, location, 
    avatar, stats}) {
        const { followers, views, likes } = stats;

    return (
    <>
    <div className={css.profile}>
      <div>
        <img className={css.avatar}
          src={avatar}
          alt="User avatar"
        />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
    
      <ul className={css.stats}>
        <li className={css.statItem}>
          <span>Followers</span>
          <span className={css.statValue}>{followers}</span>
        </li>
        <li className={css.statItem}>
          <span>Views</span>
          <span className={css.statValue}>{views}</span>
        </li>
        <li className={css.statItem}>
          <span>Likes</span>
          <span className={css.statValue}>{likes}</span>
        </li>
      </ul>
    </div>
    </>)
    
}