import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
    return (
        <div>
            <div>
                <p className='text-white text-2xl font-semibold md:text-5xl'>Welcome to the Quiz App</p>
            </div>
            <div>
                <p></p>
            </div>
            <Link to={"/quiz"}>
                <div className='m-auto mt-9 text-white bg-indigo-600 w-full mt-8 rounded-lg text-xl font-semibold py-[14px] px-[20px] cursor-pointer text-center lg:px-[0px] lg:w-49'>
                    Take a sample quiz!
                </div>
            </Link>




        </div>
    )
}

export default Landing
