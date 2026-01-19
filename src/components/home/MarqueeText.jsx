import React from 'react'

const MarqueeText = () => {
    return (
        <>
            <section id='content' className='mt-28'>
                <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-flow-row-dense gap-y-4 gap-x-6">
                    <div className="lg:col-start-1 lg:col-end-13">

                        <div className="marquee-wrapper text-text-primary flex overflow-hidden gap-1 text-6xl uppercase font-space">
                            <div className="marquee-track animate-marquee">
                                <p>Rexify · Smarter Tech · Built for the Future ·</p>
                            </div>
                            <div className="marquee-track animate-marquee">
                                <p>Rexify · Smarter Tech · Built for the Future ·</p>
                            </div>
                            <div className="marquee-track animate-marquee">
                                <p>Rexify · Smarter Tech · Built for the Future ·</p>
                            </div>
                            <div className="marquee-track animate-marquee">
                                <p>Rexify · Smarter Tech · Built for the Future ·</p>
                            </div>
                            <div className="marquee-track animate-marquee">
                                <p>Rexify · Smarter Tech · Built for the Future ·</p>
                            </div>
                            <div className="marquee-track animate-marquee">
                                <p>Rexify · Smarter Tech · Built for the Future ·</p>
                            </div>
                            <div className="marquee-track animate-marquee">
                                <p>Rexify · Smarter Tech · Built for the Future ·</p>
                            </div>
                            <div className="marquee-track animate-marquee">
                                <p>Rexify · Smarter Tech · Built for the Future ·</p>
                            </div>
                            <div className="marquee-track animate-marquee">
                                <p>Rexify · Smarter Tech · Built for the Future ·</p>
                            </div>
                            <div className="marquee-track animate-marquee">
                                <p>Rexify · Smarter Tech · Built for the Future ·</p>
                            </div>
                        </div>

                    </div>
                </div>


            </section>
        </>
    )
}

export default MarqueeText