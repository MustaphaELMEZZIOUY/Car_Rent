import Image from 'next/image'
import React from 'react'
import { Title } from './Title'

export const FindLocation = () => {
    return (
        <div className="w-full my-8 px-4 md:px-8 md:my-12 md:grid md:grid-cols-3 md:gap-2">
            <div className="flex flex-col items-center rounded-md bg-slate-200">
                <Title title="Find Us" />
                <div>
                    <Image
                        // src="https://images.unsplash.com/photo-1519709042477-8de6eaf1fdc5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80"
                        src="https://images.unsplash.com/photo-1604357209793-fca5dca89f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFwfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Location"
                        // layout="intrinsic"
                        width={450}
                        height={450}
                        objectFit="fill"
                        className="rounded-3xl"
                    />
                </div>
            </div>

            <div className="col-span-2 md:order-first rounded-md bg-slate-200">
                
            </div>
        </div>
    )
}
