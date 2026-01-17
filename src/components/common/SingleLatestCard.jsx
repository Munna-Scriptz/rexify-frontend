import React from 'react'

const SingleLatestCard = ({item}) => {
    return (
        <div
            className="w-[450px] h-[600px] p-6 bg-cover bg-no-repeat bg-center relative rounded-xl"
            style={{ backgroundImage: `url(${item.image})` }}
        >
        </div>
    )
}

export default SingleLatestCard