import React from 'react'
import Search from '../assets/search.png'

function VGroupList() {
    return (
        <div className="w-1/3 h-full border-[0.4rem] border-white">
            <div className="w-full flex p-6 justify-around border-b-[0.4rem] border-white">
                <h2 className="text-2xl text-white font-bold">V-Groups</h2>
                <img className="w-8 h-8" src={Search} alt="" />
            </div>
            <div className="w-full flex flex-col items-center py-6">
                <ul className="w-full flex flex-col gap-5 items-center">
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                    <li className="text-lg text-white list-disc">Nature - Fauna</li>
                </ul>
            </div>
        </div>
    )
}

export default VGroupList