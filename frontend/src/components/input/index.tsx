import styles from './styles.module.scss'

interface Props{
    type: string,
    placeholder?: string,
    style?: React.CSSProperties
}

export default function Input({type, placeholder, style}:Props){
    return(
        <input className={styles.input} 
            type={type} 
            placeholder={placeholder}
            style={style}
        />
    )
}