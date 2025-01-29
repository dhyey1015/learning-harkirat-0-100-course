import { SignInInput, SignUpInput } from "@dhyey1015/medium-clone-common";
import { useState } from "react";
import { AuthButton, AuthHeader, LabledInput } from "./AuthConstants";


export function AuthSignIn(){
    const [postInput, setPostInput] = useState<SignInInput>({
        password: "",
        username: ""
    })
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
                    <AuthButton type="signin"/>
                </div>
            </div>  
        </div>
    )
}

