import React from 'react'
import { Link } from 'react-router'

const Header = () => {
    return (
        <>
            <h1 className="text-4xl font-semibold text-coil mb-2">
                Create an account
            </h1>
            <p className="text-coil text-base mb-12">
                Already have an account?{' '}
                <Link to="/auth/signIn" className="text-text-primary font-semibold underline underline-offset-2">
                    Sign In
                </Link>
            </p>
        </>
    )
}

export default Header