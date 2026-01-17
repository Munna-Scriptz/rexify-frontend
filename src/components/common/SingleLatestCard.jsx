import React from 'react'

const SingleLatestCard = ({ item }) => {
    return (
        <div className="w-115 h-140 p-6 bg-cover bg-no-repeat bg-center relative rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),0px_8px_24px_rgba(17,17,26,0.1),0px_16px_56px_rgba(17,17,26,0.1)] duration-300 hover:scale-[1.02]" style={{ backgroundImage: `url(${item.image})` }}>
            <div className='pt-6 space-y-1'>
                <h2 className={`text-${item.color} text-[26px] font-semibold`}>{item.name}</h2>
                <p className={`text-${item.color} text-lg font-medium`}>{item.text}</p>
                <p className={`text-${item.color} text-sm`}>{item.desc}</p>
            </div>
        </div>
    )
}

export default SingleLatestCard