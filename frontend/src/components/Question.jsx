import React, {useEffect, useState } from "react";
import axios from "axios";
import QuestionList from "./QuestionList"
function Question(){

    const [data,setData] = useState([]);
  
    useEffect(() => {
        getBlogPost()
      },[]);


   const getBlogPost = () => {
       axios.get('http://localhost:8080/api')
       .then((response) =>{
           const data = response.data
           setData(data)
            console.log('data has been recieved',data)
            console.log('data has been recieved',response.data)
       })
       .catch(()=>{
            alert('erroor')
       })
   }

    return(
        <div className=' flex p-9 h-full w-full flex-col items-center justify-center  bg-gray-500'>
           {data?.map((post,i) => {
            return <QuestionList post={post} key={i}/>
        })}
        
    </div>
    )
}

export default Question;