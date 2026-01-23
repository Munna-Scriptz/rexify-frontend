import React from 'react'
import { Link } from 'react-router'

const Header = ({header, text, linkText, linkPath}) => {
    return (
        <>
            <h1 className="text-4xl font-semibold text-coil mb-2">
                {header}
            </h1>
            <p className="text-coil text-base mb-12">
                {text}
                <Link to={linkPath} className="text-text-primary font-semibold underline underline-offset-2 ml-1">
                    {linkText}
                </Link>
            </p>
        </>
    )
}

export default Header