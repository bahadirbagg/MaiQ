import React, { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";
import axios from "axios";

function Center(){



    return(
            <div className="flex flex-row w-full items-center   justify-center bg-blue-400">
                <ul className="flex   p-6">
                    <li className="flex w-9  bg-slate-50"><h1>Total Blood Sugar events</h1></li>
                   
                </ul>
            </div>
    )
}

export default Center;