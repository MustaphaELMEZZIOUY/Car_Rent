import Link from 'next/link'
import React from 'react'
import { Title } from './Title'

export const BestDeal = () => {
    const collection = [
        {
            name: 'Desk and Office',
            description: 'Work from home accessories',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '/item/15',
        },
        {
            name: 'Self-Improvement',
            description: 'Journals and note-taking',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
            imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
            href: '/item/16',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
            href: '/item/17',
        },
        {
            name: 'Travel',
            description: 'Daily commute essentials',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '/item/18',
        },
        {
            name: 'Desk and Office',
            description: 'Work from home accessories',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '/item/19',
        },
        {
            name: 'Self-Improvement',
            description: 'Journals and note-taking',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg',
            imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
            href: '/item/20',
        },
    ]
    return (
        <div className="w-full bg-gray-100">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="pt-8 lg:max-w-none">
                    <div className="flex items-center justify-center">
                        <Title title="Best Deal" />
                    </div>

                    <div className="my-6 lg:grid lg:grid-cols-3 lg:gap-x-6">
                        {collection.map((callout, index) => (
                            <div key={callout.name + index} className="group relative my-6">
                                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                    <img
                                        src={callout.imageSrc}
                                        alt={callout.imageAlt}
                                        className="h-full w-full object-cover object-center"
                                    />
                                </div>
                                <h3 className="mt-6 text-sm text-gray-500">
                                    {/* <a href={callout.href}>
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </a> */}
                                    <Link
                                        href={callout.href}
                                    >
                                        <a>
                                            <span className="absolute inset-0" />
                                            {callout.name}
                                        </a>
                                    </Link>
                                </h3>
                                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
