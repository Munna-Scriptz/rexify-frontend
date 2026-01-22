import React from 'react'

const OrDivider = () => {
    return (
        <div className="w-full flex items-center gap-4 mb-10 cursor-pointer">
            <div className="h-px bg-gray-300 flex-1"></div>
            <span className="text-gray-500 text-sm">OR</span>
            <div className="h-px bg-gray-300 flex-1"></div>
        </div>
    )
}

export default OrDivider