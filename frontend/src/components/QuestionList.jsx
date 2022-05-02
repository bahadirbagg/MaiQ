import React from "react";
import {Link} from "react-router-dom"

function QuestionList({post}){



    return(
        <div className="mt-6">
                <Link to={'/Details'}
                state={{ from: post._id }}>
                    <div className="w-[40rem] px-10 py-6 bg-white rounded-lg shadow-md  hover:bg-slate-200">
                        <div className="flex justify-between items-center"><span className="font-light text-gray-600">Jun 1,
                                2020</span>
                        </div>
                        <div className="mt-2 ">
                            <p className="text-2xl text-gray-700 font-bold">{post.title}</p>
                            <p className="mt-2 text-gray-600">{post.question}</p>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <p className="text-blue-500 hover:underline">Read more</p>
                            <div>
                                <div  className="flex items-center">
                                    <img
                                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                                        alt="avatar" className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"/>
                                    <h1 className="text-gray-700 font-bold hover:underline">{post.nickname}</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                </div>
    )
}

export default QuestionList;