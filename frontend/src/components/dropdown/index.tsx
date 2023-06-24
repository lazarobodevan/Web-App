import styles from './styles.module.scss'
import {DropdownOption} from '../../common/IDropdownOption'

interface Props{
    name: string,
    defaultOption: React.ReactNode,
    options: DropdownOption[],
    style?: React.CSSProperties
}

export default function Dropdown({name, defaultOption, options, style}:Props){
    return(
        <select name={name} style={style} className={styles.select}>

            <option value={undefined}>{defaultOption}</option>

            {options.map((option)=>{
                return <option value={option.value}>{option.text}</option>
            })}

        </select>
    )
}