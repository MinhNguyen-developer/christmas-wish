export enum Size {
    EXTRASMALL = 'xs',
    SMALL = 'sm',
    MEDIUM = 'md',
    LARGE = 'lg',
    EXTRALARGE = 'xl',
    EXTRA_EXTRA_LARGE = 'xxl'
}

export enum Hierarchy {
    PRIMARY = 'primary',
    SECONDARY_GRAY = 'sec_gray',
    SECONDARY_COLOR = 'sec_color',
    TERTIARY_GRAY = 'tertiary_gray',
    TERTIARY_COLOR = 'tertiary_color',
    TAB_BUTTON = 'tab_button'
}

export enum Status {
    DEFAULT = 'default',
    COMPANY = 'company',
    ONLINE = 'online',
    VERIFIED = 'verified'
}

export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

export enum Role {
    STAFF = 'staff',
    MANAGER = 'manager',
    ADMIN = 'admin',
    CLIENTS = 'clients'
}

export enum NavStatus {
    DEFAULT = 'default',
    TASKS = 'tasks'
}

export type HavingTheme = {
    theme?: Theme
}

export type NavProperties = {
    role: Role
    status?: NavStatus
}

export type Fullable = {
    full?: boolean
}