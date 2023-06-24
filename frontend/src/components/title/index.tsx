import styles from './styles.module.scss'

interface Props{
    children?: React.ReactNode
}

export default function Title({children}:Props){
    return(
        <h1 className={styles.title}>{children}</h1>
    )
}