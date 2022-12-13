import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styles from './Button.module.css'
import { Hierarchy, Size } from '../type'
import classNames from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: Size
    destructive?: boolean
    hierarchy?: Hierarchy
    active?: boolean
    full?: boolean
    iconLead?: ReactNode
    iconTrail?: ReactNode
    loading?: boolean
}

const Button: FC<ButtonProps> = ({
                                     iconLead,
                                     iconTrail,
                                     children,
                                     size = Size.MEDIUM,
                                     full = false,
                                     hierarchy = Hierarchy.PRIMARY,
                                     destructive = false,
                                     active,
                                     disabled,
                                     loading,
                                     ...buttonProps
                                 }) => {
    const className = classNames([styles.default], {
        [styles.full]: full,
        [styles.active]: active,
        [styles.disabled]: disabled,
        [styles.tabButton]: hierarchy === Hierarchy.TAB_BUTTON,
        [styles.secondaryColor]: hierarchy === Hierarchy.SECONDARY_COLOR,
        [styles.secondaryGray]: hierarchy === Hierarchy.SECONDARY_GRAY,
        [styles.tertiaryColor]: hierarchy === Hierarchy.TERTIARY_COLOR,
        [styles.tertiaryGray]: hierarchy === Hierarchy.TERTIARY_GRAY,
        [styles.primary]: hierarchy === Hierarchy.PRIMARY,
        [styles.small]: size === Size.SMALL,
        [styles.medium]: size === Size.MEDIUM,
        [styles.lg]: size === Size.LARGE,
        [styles.xl]: size === Size.EXTRALARGE,
        [styles.xxl]: size === Size.EXTRA_EXTRA_LARGE,
        [styles.destructivePrimary]: destructive && hierarchy === Hierarchy.PRIMARY,
        [styles.destructiveSecondaryColor]: destructive && hierarchy === Hierarchy.SECONDARY_COLOR,
        [styles.destructiveSecondaryGray]: destructive && hierarchy === Hierarchy.SECONDARY_GRAY,
        [styles.destructiveTertiaryColor]: destructive && hierarchy === Hierarchy.TERTIARY_COLOR,
        [styles.destructiveTertiaryGray]: destructive && hierarchy === Hierarchy.TERTIARY_GRAY,
        [styles.primaryDisabled]: (disabled && hierarchy === Hierarchy.PRIMARY) || loading,
        [styles.secondaryColorDisabled]: disabled && hierarchy === Hierarchy.SECONDARY_COLOR,
        [styles.secondaryGrayDisabled]: disabled && hierarchy === Hierarchy.SECONDARY_GRAY,
        [styles.tertiaryColorDisabled]: disabled && hierarchy === Hierarchy.TERTIARY_COLOR,
        [styles.tertiaryGrayDisabled]: disabled && hierarchy === Hierarchy.TERTIARY_GRAY,
        [styles.destructivePrimaryDisabled]: disabled && destructive && hierarchy === Hierarchy.PRIMARY,
        [styles.destructiveSecondaryColorDisabled]: disabled && destructive && hierarchy === Hierarchy.SECONDARY_COLOR,
        [styles.destructiveSecondaryGrayDisabled]: disabled && destructive && hierarchy === Hierarchy.SECONDARY_GRAY,
        [styles.destructiveTertiaryColorDisabled]: disabled && destructive && hierarchy === Hierarchy.TERTIARY_COLOR,
        [styles.destructiveTertiaryGrayDisabled]: disabled && destructive && hierarchy === Hierarchy.TERTIARY_GRAY
    })
    return (
        <button className={className} {...buttonProps}>
            {iconLead}
            {children}
            {iconTrail}
        </button>
    )
}

export default Button
