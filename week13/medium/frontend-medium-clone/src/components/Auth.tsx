import { SignUpInput } from "@dhyey1015/medium-clone-common";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";


export function Auth({type} :{type : "signup" | "signin"}){
    const [postInput, setPostInput] = useState<SignUpInput>({
        name: "",
        password: "",
        username: ""
    })
    


    return(
        <div className="flex justify-center flex-col h-screen">
            <div className="flex justify-center">
                <div>
                    <div className="text-3xl font-extrabold ">
                        Create an account   
                    </div>
                    <div className="text-xl text-stone-400">
                        Already have and account? 
                        <Link to={"/signin"} className="underline pl-2 text-blue-500">
                            Login
                        </Link>
                    </div>
                    <br />
                    <LabledInput 
                        placeHolder="Username" 
                        label="Username" 
                        OnChange={(e)=>{
                            setPostInput(c => ({
                                ...c,
                                username: e.target.value
                            }))
                        }}
                    />
                        <br />
                    <LabledInput 
                        placeHolder="Name" 
                        label="Name" 
                        OnChange={(e)=>{
                            setPostInput(c => ({
                                ...c,
                                name: e.target.value
                            }))
                        }}
                    />
                        <br />
                    <LabledInput 
                        placeHolder="password" 
                        label="Password" 
                        OnChange={(e)=>{
                            setPostInput(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }}
                    />
                    <br />
                    <button 
                        type="button" 
                        className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                        SignUp
                    </button>

                </div>
                

            </div>  
        </div>
    )
}

interface LabelledInputType{
    label: string;
    placeHolder: string;
    OnChange: (e: ChangeEvent<HTMLInputElement>) => void
}
function LabledInput({placeHolder, label, OnChange} : LabelledInputType){
    return(
        <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">{label}</label>
            <input 
                onChange={OnChange} 
                type="text" 
                id="first_name" 
                placeholder={placeHolder}
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />

        </div>
    )
}