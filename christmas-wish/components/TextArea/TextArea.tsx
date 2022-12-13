import React, { FC, TextareaHTMLAttributes } from 'react'
import classNames from 'classnames'
import { Fullable } from '../type'
import styles from './TextArea.module.css'

type TextAreaProps = Fullable &
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    error?: boolean
    destructive?: boolean
  }

const TextArea: FC<TextAreaProps> = ({ disabled, full, destructive, error, required, ...TextAreaProps }) => {
  const className = classNames([styles.basicStyles, styles.default], {
    [styles.error]: error,
    [styles.destructive]: destructive,
    [styles.disabled]: disabled,
    'w-full': full
  })
  return <textarea {...TextAreaProps} className={className} disabled={disabled} />
}

export default TextArea
