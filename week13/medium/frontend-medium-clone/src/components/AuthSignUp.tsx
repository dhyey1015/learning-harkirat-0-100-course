import { SignUpInput } from "@dhyey1015/medium-clone-common";
import { ChangeEvent, useState } from "react";
import { AuthButton, AuthHeader } from "./AuthConstants";


export function AuthSignUp(){
    const [postInput, setPostInput] = useState<SignUpInput>({
        name: "",
        password: "",
        username: ""
    })

    return(
        <div className="flex justify-center flex-col h-screen">
            <div className="flex justify-center">
                <div>
                    <AuthHeader type="signup"/>
                    <div>
                        <br />
                        <LabledInput 
                            placeHolder="example@gmail.com" 
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
                            placeHolder="Password" 
                            type="password"
                            label="Password" 
                            OnChange={(e)=>{
                                setPostInput(c => ({
                                    ...c,
                                    password: e.target.value
                                }))
                            }}
                        />
                        <br />
                    </div>
                    <AuthButton type ="signup"/>
                </div>
            </div>  
        </div>
    )
}

interface LabelledInputType{
    label: string;
    placeHolder: string;
    type? : string;
    OnChange: (e: ChangeEvent<HTMLInputElement>) => void
}
function LabledInput({placeHolder, label, OnChange, type} : LabelledInputType){
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