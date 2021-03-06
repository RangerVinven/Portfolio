import React from 'react'

type Props = {
    title: string
}

export default function PageTitle(props: Props) {
    return (
        <div className="flex justify-center mt-3">
            <h1 className="text-3xl text-white font-bold">{props.title}</h1>
        </div>
    )
}
