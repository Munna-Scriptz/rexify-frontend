import React from 'react'
import SingleSellerCard from '../common/SingleSellerCard'

const BestSeller = () => {
    return (
        <>
            <section id='Best-Seller' className='mt-28'>
                <div className="container">
                    <div id="Header-Row" className='mb-10'>
                        <h2 className='text-4xl font-semibold text-text-primary'>Best Seller.</h2>
                    </div>

                    {/* ----------- Cards ----------- */}
                    <div id="content-Row" className='flex items-center gap-4'>
                        <SingleSellerCard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default BestSeller