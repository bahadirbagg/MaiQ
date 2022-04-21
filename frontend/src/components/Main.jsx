import React from "react";
import {FaSmile, FaPlus} from 'react-icons/fa';

function Main(){




    return(
            <div className=" flex flex-col w-full h-[100vh] items-center   justify-center">
                 <img src="https://i.ibb.co/hVyh7sZ/live.png" alt="live" className=" flex w-24 mr-[330px]"/>
                 <input type="text" className="rounded-lg text-xl h-16 w-[400px] px-4 py-1 border-2 border-blue-500 bg-white" placeholder="What is Your Question?"/>
                 <FaSmile className="absolute text-[30px] mt-4  ml-[150px] "/>
                 <div className="flex flex-row mt-8 ml-[150px] text-black font-bold">
                    <FaPlus className="text-[30px]"/>
                    <p className="mt-3">more professional questions</p>
                 </div>
                
                 
            </div>
    )
}

export default Main;