import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


function Details(){

    const nickname = localStorage.getItem("nickname")
    const location = useLocation();
    const { from } = location.state;

    const [data,setData] = useState([]);

    const [comment,setComment] = useState({
        nickname:`${nickname}`,
        comment:""

    });

    const handleChange = ({currentTarget:input}) => {
        setComment({...comment,[input.name]:input.value});
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
            const url = `http://localhost:8080/api/comment/${from}`
            axios.post(url,comment)
            .then(res => {
                if (res.status === 201){
                    console.log("ress",res.data.message)  
                }         
            })
            .catch((err)=> {
                console.log("err",err.response)
            })
    }





    useEffect(() => {
        getQuestPost()
      },[]);


   const getQuestPost = () => {
       axios.get('http://localhost:8080/api')
       .then((response) =>{
           const data = response.data
           setData(data)
            console.log('data has been recieved',data)
       })
       .catch(()=>{
            alert('erroor')
       })
   }

   

    return(
        <div className="p-9 h-screen w-full flex-row  bg-gray-500" >
               {data?.map((post,index) => {
                    return  post._id===from ?
                    
                <div className="flex flex-row p-8 mt-8  bg-gray-300   rounded-xl" key={index}>
                    <div>
                        <h1 className=" flex text-2xl text-gray-800">{post.title}</h1>
                        <h1 className=" flex text-xl mt-6">{post.question}</h1>
                        <h1 className=" flex right-0 bottom-0 text-sm">soran:{post.nickname}</h1>
                    </div>
                </div>
                :null
        })}
        
        <div className="absolute max-w-lg bg-slate-400 shadow-md mt-24 bottom-0">
            <form onSubmit={handleSubmit} className="w-full p-4">
                <div className="mb-2">
                    <label htmlFor="comment" className="text-lg text-gray-600">Add a comment</label>
                         <textarea 
                            className="w-full h-20 p-2 border rounded focus:outline-none focus:ring-gray-300 focus:ring-1"
                            type='text'
                            name='comment'
                            onChange={handleChange}
                            value={comment.comment}
                            placeholder="Enter Comment" 
                            required>
                             </textarea>
                </div>
                    <button className="px-3 py-2 text-sm text-blue-100 bg-blue-600 rounded">Comment</button>
            </form>
        </div>

        </div>
    )
}

export default Details;