import React,{useState } from "react";
import {FaSmile, FaPlus} from 'react-icons/fa';
import axios from "axios";

function Main(){

    const nickname = localStorage.getItem("nickname")

    const [question,setQuestion] = useState({
        nickname:`${nickname}`,
        title:"",
        question:""

    });


    const handleChange = ({currentTarget:input}) => {
        setQuestion({...question,[input.name]:input.value});
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
            const url = "http://localhost:8080/api/question"
            axios.post(url,question)
            .then(res => {
                if (res.status === 201){
                    console.log("ress",res.data.message)  
                }         
            })
            .catch((err)=> {
                console.log("err",err.response)
            })
    }

    return(
            <div className=" flex flex-col w-full h-[100vh] items-center  justify-center">
                 <form onSubmit={handleSubmit}>
                 <input
                        type='text'
                        className="flex rounded-lg text-xl h-12 w-[400px] px-4 py-1 border-2 border-blue-500 bg-white"
                        name='title'
                        onChange={handleChange}
                        value={question.title}
                        placeholder="Question Title" 
                        required
                    />
                 <input
                        type='text'
                        className="flex rounded-lg text-xl h-16 w-[400px] px-4 py-1 border-2 border-blue-500 bg-white"
                        name='question'
                        onChange={handleChange}
                        value={question.question}
                        placeholder="What is Your Question?" 
                        required
                    />
                <button
                        type="submit"
                        className={` flex ml-32 bg-green-600 py-2 px-4 text-sm text-black rounded border border-green focus:outline-none focus:border-green-dark`}
                    >
                        Enter Question
                    </button>
                </form>
                
                 
            </div>
    )
}

export default Main;