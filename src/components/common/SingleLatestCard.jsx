import React from 'react'

const SingleLatestCard = ({item}) => {
    return (
        <div className="w-104 h-130 p-6 bg-cover bg-no-repeat bg-center relative rounded-[20px]" style={{ backgroundImage: `url(${item.image})` }}>
            <h2></h2>
            <p></p>
            <p></p>
        </div>
    )
}

export default SingleLatestCard