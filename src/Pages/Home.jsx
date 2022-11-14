import React from 'react'
import Navbar from '../Components/Navbar'
import Lesson from "../Components/Lesson"
import VGroupList from "../Components/VGroupList"

function Home() {
    return (
        <div className='bg-violet-500 h-full'>
            <Navbar />
            <div className="w-full flex">
                <Lesson />
                <VGroupList />
            </div>
        </div>
    )
}

export default Home