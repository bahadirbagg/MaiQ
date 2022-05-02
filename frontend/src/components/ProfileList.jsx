import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";

function ProfileList(){

    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems]= useState([]);

    const fetchItems = async () => {
        const data= await fetch('/Profile')
        const items = await data.json();
        setItems(items);
    }
    console.log("hey",items)


    return(
            <div className="flex flex-col w-full h-[100vh] items-center   justify-center bg-blue-400">
                <h1 className=" text-white text-3xl p-10 font-bold  ">My Profile</h1>
                {items.map(item => (
                            <div className="flex p-8 bg-slate-500">
                                <p>{item.name}hey</p>
                                <p>{item.msg}</p>
                                <p>{item.username}</p>
                            </div>
                        ))}
                <div className="flex bg-white w-1/2 h-[50vh]  rounded-3xl items-center">
                    <CgProfile className=" text-[40vh]  left-0 p-10"/>
                    <div className="p-8 font-bold text-xl">
                        <h1 className=" flex p-5">Username:  <h1 className="font-normal ml-3">NullNull</h1></h1>
                        <h1  className=" flex p-5">Current Coin:  <h1 className="font-normal ml-3">100 💰	</h1></h1>
                        <h1  className=" flex p-5">Following:  <h1 className="font-normal ml-3">20</h1></h1>
                        <h1  className=" flex p-5">Followers:  <h1 className="font-normal ml-3">20</h1></h1>
                        <h1  className=" flex p-5">Lastest Questions</h1>
                    </div>
                </div>
            </div>
    )
}

export default ProfileList;