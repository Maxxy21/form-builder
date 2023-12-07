import React, {ReactNode} from 'react'

function Layout({
                    children,
                }: {
    children: ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen">{children}</div>
    )
}

export default Layout
