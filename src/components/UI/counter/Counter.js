import React, { useState } from 'react'
import '../../../styles/Counter.css'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const Counter = () => {
    const [countOn, setcoountOn] = useState(false)
    return (
        <>
            <ScrollTrigger onEnter={() => setcoountOn(true)} onExit={() => setcoountOn(false)}>
                <div className="row">
                    <div className="col">
                        <div className="counter__desc">
                            <h1>
                                {countOn &&
                                    <CountUp start={0} end={1000} delay={0} duration={3} />
                                }
                            </h1>
                            <h3>INGREDIENTS</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="counter__desc">
                            <h1>
                                {countOn &&
                                    <CountUp start={0} end={800} delay={0} duration={3} />
                                }
                                <span>+</span>
                            </h1>
                            <h3>CLIENTS DAILY</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="counter__desc">
                            <h1>
                                {countOn &&
                                    <CountUp start={0} end={32} delay={0} duration={3} />
                                }
                                <span>+</span>
                            </h1>
                            <h3>YEARS OF EXPERIENCE</h3>
                        </div>
                    </div>
                    <div className="col">
                        <div className="counter__desc">
                            <h1>
                                {countOn &&
                                    <CountUp start={0} end={5000} delay={0} duration={3} />
                                }
                                <span>+</span>
                            </h1>
                            <h3>CLIENT REVIEW</h3>
                        </div>
                    </div>
                </div>
            </ScrollTrigger>
        </>
    )
}

export default Counter