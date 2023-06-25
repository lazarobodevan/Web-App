import styles from './styles.module.scss'

interface Props{
    type: string,
    name?:string,
    placeholder?: string,
    style?: React.CSSProperties,
    onChange: (...params:any) => void;
}

export default function Input({type, placeholder, style, onChange, name}:Props){
    return(
        <input className={styles.input} 
            type={type} 
            placeholder={placeholder}
            style={style}
            onChange={onChange}
            name={name}
        />
    )
}