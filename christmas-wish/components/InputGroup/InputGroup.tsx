import { FC, ReactNode, useEffect, useState } from 'react'
import Input from '../Input/Input'
import classNames from 'classnames'

type Props = {
  placeholder?: string
  required: boolean
  inputFieldText: ReactNode
  destructive?: boolean
  disabled?: boolean
  full?: boolean
  validationMessage?: string
  onChange?: (value: string) => void
  value?: string
  error?: any
}

const InputGroup: FC<Props> = ({
  value,
  required,
  inputFieldText,
  disabled,
  destructive,
  full = false,
  placeholder,
  onChange,
  error
}) => {
  const [focus, setFocus] = useState<boolean>(false)

  const inputFieldLabelGroupStyles = classNames(
    [
      'absolute',
      'flex',
      'items-center',
      'top-[16px]',
      'left-[15px]',
      'transition',
      'duration-200',
      'ease-out',
      'z-10',
      'bg-white'
    ],
    {
      ['-translate-x-[5%] -translate-y-[120%]']: focus,
      ['-translate-x-[5%] -translate-y-[120%] cursor-not-allowed']: disabled
    }
  )

  const labelStyles = classNames(
    [
      'mr-2',
      'text-white',
      'bg-[#98A2B3]',
      'rounded-[4px]',
      'text-[12px]',
      'flex',
      'items-center',
      'p-[2px]',
      'transition',
      'duration-200',
      'ease-out'
    ],
    {
      ['scale-[0.83]']: focus,
      ['!bg-[#669F2A]']: required,
      ['!bg-[#FDA29B]']: destructive,
      ['bg-[#F04438]']: error,
      ['cursor-not-allowed !bg-[#D0D5DD]']: disabled,
      ['scale-[0.83] bg-[#F04438]']: focus && error,
      ['scale-[0.83] bg-[#FDA29B]']: focus && destructive
    }
  )

  const inputFieldTextStyles = classNames(['text-[16px]', 'transition', 'duration-200', 'ease-out', 'p-0'], {
    ['scale-[0.83] text-[#669F2A]']: focus,
    ['text-[#FDA29B]']: destructive,
    ['text-[#F04438]']: error,
    ['cursor-not-allowed !text-[#D0D5DD]']: disabled,
    ['scale-[0.83] text-[#F04438]']: focus && error,
    ['scale-[0.83] text-[#FDA29B]']: focus && destructive
  })

  useEffect(() => {
    setFocus(false)
  }, [])

  return (
    <>
      <div className="relative w-full mb-4" onClick={() => setFocus(true)}>
        <Input
          onChange={({ target: { value } }) => {
            if (onChange) {
              onChange(value)
            }
          }}
          value={value}
          placeholder={placeholder}
          full={full}
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
        <div className={inputFieldLabelGroupStyles}>
          <label className={labelStyles}>{required ? '必須' : '任意'}</label>
          <p className={inputFieldTextStyles}>{inputFieldText}</p>
        </div>
      </div>
    </>
  )
}

export default InputGroup
