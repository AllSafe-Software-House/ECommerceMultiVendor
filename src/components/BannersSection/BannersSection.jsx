import React from 'react'
import ShineCard from '../ShineCard/ShineCard'

export default function BannersSection() {
    return <>
        <section className='py-20'>
            <div className="container">
                <div className="flex items-center flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                        <ShineCard />
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                        <ShineCard />
                    </div>
                </div>
            </div>
        </section>
    </>
}
