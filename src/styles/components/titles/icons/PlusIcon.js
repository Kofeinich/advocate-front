import * as React from "react"

export const PlusIcon = ({color}) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill={color}
    >
        <path d="M0 14h30M15 30V0" stroke={color} strokeWidth={2} />
    </svg>
)