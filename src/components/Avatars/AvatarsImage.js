import styles from './Avatars.module.css'

const AvatarsImage = ({ avatar, selected, clicked }) => {

    const classNames = [styles.AvatarsImage]

    if (selected === true) {
        classNames.push(styles.AvatarsImageSelected)
    }

    const onAvatarClick = () => {
        clicked(avatar)
    }

    return (
        <figure>
            <img className={classNames.join(' ')}
                src={avatar.url} alt="Avatar"
                onClick={onAvatarClick} />
        </figure>
    )
}

export default AvatarsImage