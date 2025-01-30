import { SignInInput } from "@dhyey1015/medium-clone-common";
import { useState } from "react";
import { AuthButton, AuthHeader, LabledInput } from "./AuthConstants";
import axios from "axios"
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";


export function AuthSignIn(){
    const navigate = useNavigate();
    const [postInput, setPostInput] = useState<SignInInput>({
        password: "",
        username: ""
    })

    async function userLogin() {
        try{
            const resposne = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, postInput);
            const token = resposne.data['Token'];
            localStorage.setItem("token", token);
            navigate('/blogs')
        } catch(e){
            // TODO: can do better
            alert("something went wrong while logging in")
        }
    }


    return(
        <div className="flex justify-center flex-col h-screen">
            <div className="flex justify-center">
                <div>
                    <AuthHeader type="signin"/>
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
                    <AuthButton onClick={userLogin}  type="signin"/>
                </div>
            </div>  
        </div>
    )
}

