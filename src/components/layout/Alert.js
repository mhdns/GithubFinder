import React from 'react'

export const Alert = ({alert}) => {
    return (
        alert !== null && (
            <div className={`${alert.level}`}>
                <i className='fas fa-info-circle' />{alert.msg}
            </div>
        )
    )
}

export default Alert;