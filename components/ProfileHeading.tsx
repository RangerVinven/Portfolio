import React from 'react'

export default function ProfileHeading() {
  return (
    <div className='flex'>
        <div className="rounded-full w-28 h-28 bg-gray-400"></div>
        <div className="flex flex-col ml-12">
            <div className="flex items-baseline mb-1">
                <div className="mr-4 text-2xl font-light">Daniel McPherson</div>
                <button className="bg-blue-400 font-semibold h-6 rounded-sm text-white px-1">Contact Me</button>
            </div>

            <div>
                Software Development Student at NESCOL
            </div>
        </div>
    </div>
  )
}
