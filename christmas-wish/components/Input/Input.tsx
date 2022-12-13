import React, { FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import { Fullable } from '../type'
import styles from './Input.module.css'

type InputProps = Fullable &
    InputHTMLAttributes<HTMLInputElement> & {
    error?: boolean
    destructive?: boolean
}

const Input: FC<InputProps> = ({ disabled, full, destructive, error, required, ...inputProps }) => {
    const className = classNames([styles.basicStyles, styles.default], {
        [styles.error]: error,
        [styles.destructive]: destructive,
        [styles.disabled]: disabled,
        'w-full': full
    })
    return <input {...inputProps} className={className} disabled={disabled} />
}

export default Input
