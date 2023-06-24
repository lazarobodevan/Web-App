import styles from './styles.module.scss'
import {IDropdownOption} from '../../common/IDropdownOption'
import { useState } from 'react';

interface Props{
    name: string,
    defaultOption: React.ReactNode,
    options: IDropdownOption[],
    style?: React.CSSProperties,
    onChange: (...params:any) => void;
}

export default function Dropdown({name, defaultOption, options, style, onChange}:Props){

    return(
        <select name={name} style={style} className={styles.select} onChange={event => onChange(event.target.value)}>

            <option value={undefined}>{defaultOption}</option>

            {options.map((option)=>{
                return <option value={option.value}>{option.text}</option>
            })}

        </select>
    )
}