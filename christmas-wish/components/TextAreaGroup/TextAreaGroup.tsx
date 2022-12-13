import { FC, ReactNode, useEffect, useState } from 'react'
import TextArea from '../TextArea/TextArea'
import classNames from 'classnames'

type Props = {
  placeholder?: string
  required?: boolean
  textAreaFieldText: ReactNode
  destructive?: boolean
  disabled?: boolean
  loading?: boolean
  onChange?: (value: string) => void
  value?: string
}

const TextAreaGroup: FC<Props> = ({
  value,
  required = false,
  textAreaFieldText,
  disabled,
  destructive,
  onChange
}) => {
  const [focus, setFocus] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const textAreaFieldLabelGroupStyles = classNames(
    [
      'absolute',
      'items-center',
      'flex',
      'top-[10px]',
      'left-[10px]',
      'transition',
      'duration-200',
      'ease-out',
      'z-10',
      'bg-white'
    ],
    {
      ['-translate-y-[20px]']: focus,
      ['-translate-y-[20px] cursor-not-allowed']: disabled
    }
  )

  const textAreaFieldTextStyles = classNames(['text-[16px]', 'transition', 'duration-200', 'ease-out', 'p-0'], {
    ['scale-[0.83] text-[#669F2A]']: focus,
    ['text-[#FDA29B]']: destructive,
    ['text-[#F04438]']: error,
    ['cursor-not-allowed !text-[#D0D5DD]']: disabled,
    ['scale-[0.83] text-[#F04438]']: focus && error,
    ['scale-[0.83] text-[#FDA29B]']: focus && destructive
  })

  useEffect(() => {
    setError(false)
    setFocus(false)
  }, [])

  return (
    <div className="relative w-full">
      <TextArea
        onChange={({ target: { value } }) => {
          if (onChange) {
            onChange(value)
            if (!value && required) {
              setError(true)
            } else setError(false)
          }
        }}
        value={value}
        destructive={destructive}
        disabled={disabled}
        error={error}
        required={required}
        onFocus={() => setFocus(true)}
        onBlur={e => {
          if (!e.target.value) {
            setFocus(false)
          }
        }}
      />
      <div className={textAreaFieldLabelGroupStyles}>
        <p className={textAreaFieldTextStyles}>{textAreaFieldText}</p>
      </div>
    </div>
  )
}

export default TextAreaGroup
