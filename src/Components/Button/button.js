import React, { useRef } from 'react'
import { useButton } from 'react-aria'

const Button = (props) => {
    const {
        children,
        classes: propClasses,
        priority,
        negative,
        disabled,
        onPress,
        loading = false,
        ...restProps
    } = props

    const buttonRef = useRef()

    let { buttonProps } = useButton(
        {
            isDisabled: disabled,
            onPress,
            ...restProps,
        },
        buttonRef,
    )
    return (
        <div>
            <button {...buttonProps} {...restProps} ref={buttonRef}>
                {!loading ? children : 'loading'}
            </button>
        </div>
    )
}

export default Button
