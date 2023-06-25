import styles from './styles.module.scss'

interface Props{
    children?: React.ReactNode,
    style?: React.CSSProperties,
    onClick: (...params:any) => void
}

export default function Button({children, style, onClick}:Props){
    return(
        <button className={styles.button} style={style} onClick={onClick}>
            {children}
        </button>
    )
}