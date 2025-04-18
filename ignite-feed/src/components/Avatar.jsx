import styles from './Avatar.module.css'

//  Desestruturação no JavaScript:
//  const user = { name: "Diego"};
//  const { name } = user;

export function Avatar({ hasBorder = true, src }) {
    return (
        <img 
            className={hasBorder ? styles.avatarWithBorder : styles.avatar}
            src={src}
        />
    );
}