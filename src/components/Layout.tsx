import React, { FC, PropsWithChildren } from 'react'

const Layout:FC<PropsWithChildren<{className?: string}>> = ({children, className}) => {
    return (
        <div className={`w-full h-full inline-block z-0 bg-light p-32 dark:bg-dark ${className}`}>
            {children}
        </div>
    )
}

export default Layout;
