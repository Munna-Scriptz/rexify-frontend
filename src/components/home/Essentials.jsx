import React from 'react'

const Essentials = () => {
    return (
        <>
            <section id='Essentials' className='mt-30'>
                <div className="container">
                    {/* -------------- Text Header --------------- */}
                    <div id="Header-Row" className="mb-10 flex items-end justify-between">
                        <h2 className="text-4xl font-semibold text-text-primary">
                            Everyday Essentials.
                        </h2>

                        <button className="text-base font-medium text-text-secondary hover:text-neutral-900 flex items-center gap-1 transition cursor-pointer " >
                            View all
                            <span className="text-base">→</span>
                        </button>
                    </div>
                    {/* -------------- Text Header --------------- */}
                </div>
            </section>
        </>
    )
}

export default Essentials