import styles from './styles.module.scss'

interface Props{
    children?: React.ReactNode,
    style?: React.CSSProperties
}

export default function Button({children, style}:Props){
    return(
        <button className={styles.button} style={style}>
            {children}
        </button>
    )
}