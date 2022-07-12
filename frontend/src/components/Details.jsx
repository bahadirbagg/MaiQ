import React,{useState,useEffect} from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


function Details(){

    const nickname = localStorage.getItem("nickname")
    const location = useLocation();
    const { from } = location.state;

    const [data,setData] = useState([]);
    const [comm,setComm] = useState([]);

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
            window.location.reload()
    }





    useEffect(() => {
        getQuestPost()
        getCommPost()
      },[comm]);


   const getQuestPost = () => {
       axios.get('http://localhost:8080/api')
       .then((response) =>{
           const data = response.data
           setData(data)
       })
       .catch(()=>{
            alert('erroor')
       })
   }

   const getCommPost = () => {
    axios.get(`http://localhost:8080/api/getcomment/${from}`)
    .then((response) =>{
        const comm = response.data
        setComm(comm)
    })
    .catch(()=>{
         alert('erroor')
    })
}


   

    return(
        <div className="p-9 h-full w-full flex-row  bg-gray-500" >
               {data?.map((post,index) => {
                    return  post._id===from ?
                <div class=" py-4 px-8 bg-white shadow-lg rounded-lg my-20" key={index}>
                    <div class="flex justify-center md:justify-end -mt-16">
                        <img class="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" 
                            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                    </div>
                    <div>
                        <h2 class="flex text-gray-800 text-3xl font-semibold">{post.title}</h2>
                        <p class="flex mt-2 text-gray-600">{post.question}</p>
                    </div>
                    <div class="flex justify-end mt-4">
                        <a href="#" class="text-xl font-medium text-indigo-500">{post.nickname}</a>
                    </div>
                </div>:null
        })}
        <form className="mt-5" onSubmit={handleSubmit}><input type="hidden" />
            <textarea 
                className="w-full shadow-inner h-20 p-4 border-0 mb-4 rounded-lg focus:shadow-outline text-2xl" 
                placeholder="Add comment here." 
                cols="6" rows="6"
                spellCheck="false"
                type='text'
                name='comment'
                onChange={handleChange}
                value={comment.comment}
                required>
            </textarea>
            <button className="font-bold py-2 px-4 w-full bg-blue-500 text-lg text-white shadow-md rounded-lg ">Comment </button>
        </form>


            {comm.comments?.map((post,index) => {
                    return comm.comments!==null ?
                    <div id="task-comments" className="pt-4"  key={index}>
                        <div className="bg-white rounded-lg p-3  flex flex-col justify-center items-center md:items-start shadow-lg mb-4">
                            <div className="flex flex-row justify-center mr-2">
                                <img alt="avatar" width="48" height="48" className="rounded-full w-10 h-10 mr-4 shadow-lg mb-4" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"/>
                                <h3 className="text-blue-500 font-semibold text-lg text-center md:text-left ">{post.nickname}</h3>
                            </div>
                            <p className="text-gray-600 text-lg text-center md:text-left ">{post.comment}</p>
                        </div>
                    </div>:null
        })}

        </div>
    )
}

export default Details;