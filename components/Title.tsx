import React from 'react'

export const Title = ({ title }: { title: string }) => {
  return (
    <h1 className="relative text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
       {title}
    </h1>
  )
}
