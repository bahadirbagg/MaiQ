import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

function ProfileList(){


    const [userdata,setUserdata] = useState([]);
    const nickname = localStorage.getItem("nickname")
  
    useEffect(() => {
        getBlogPost()
      },[]);


   const getBlogPost = () => {
       axios.get('http://localhost:8080/api/getuser')
       .then((response) =>{
           const data = response.data
           data.map(user => {
            if(user.nickname===nickname){
                setUserdata(user)
            }
            else{
            }
         })
       })
       .catch(()=>{
            alert('erroor')
       })
   }
    return(
            <div className="flex flex-col w-full h-[100vh] items-center   justify-center bg-blue-400">
                <h1 className=" text-white text-3xl p-10 font-bold  ">My Profile</h1>
                <div className="flex bg-white w-1/2 h-[50vh]  rounded-3xl items-center">
                    <CgProfile className=" text-[40vh]  left-0 p-10"/>
                    <div className="p-8 font-bold text-xl">
                        <h1  className=" flex p-5">Fullname:  <h1 className="font-normal ml-3">{userdata.fullname}</h1></h1>
                        <h1 className=" flex p-5">Username:  <h1 className="font-normal ml-3">{userdata.nickname}</h1></h1>
                        <h1  className=" flex p-5">Email:  <h1 className="font-normal ml-3">{userdata.email}</h1></h1>
                        <h1  className=" flex p-5">Current Coin:  <h1 className="font-normal ml-3">{userdata.coin} 💰	</h1></h1>
                        <h1  className=" flex p-5">Lastest Questions</h1>
                    </div>
                </div>
            </div>
    )
}

export default ProfileList;