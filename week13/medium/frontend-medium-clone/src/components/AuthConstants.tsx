import { ChangeEvent } from "react";
import { Link } from "react-router-dom";


export function AuthHeader({type} :{type : "signup" | "signin"}){
    return(
        <div className="px-14">
            <div className="text-3xl font-extrabold">
                {type === "signin" ? "Welcome Back":"Create an account"} 
            </div>
            <div className="text-sm text-stone-400 text-center">
                {type === "signin"? "Don't have an account?" : "Already have and account?"} 
                <Link to={type === "signin" ? "/signup": "/signin"} className="underline pl-2 text-blue-500">
                    {type ==="signin" ? "SignUp" : "SignIn"}
                </Link>
            </div>
        </div>
    )
}

export function AuthButton({type} :{type : "signup" | "signin"}){

    return(
        <button 
            type="button" 
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 w-full"
        >{type === "signup" ? "Sign Up" : "Sign In"}
        </button>
    )
}


interface LabelledInputType{
    label: string;
    placeHolder: string;
    type? : string;
    OnChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function LabledInput({placeHolder, label, OnChange, type} : LabelledInputType){
    return(
        <div>
            <label className="block mb-2 text-sm font-bold text-gray-700 font-">{label}</label>
            <input 
                onChange={OnChange} 
                type={type || "text"} 
                id="first_name" 
                placeholder={placeHolder}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />

        </div>
    )
}