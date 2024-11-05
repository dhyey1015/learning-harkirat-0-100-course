import { Heading } from "../components/Heading";
import { SubHeading } from "../components/SubHeading";
import { InputBox } from "../components/InputBox";
import { Button } from "../components/Button";
import { BottomWarning } from "../components/BottomWarning";

export default function Signup(){
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    
                    <Heading label={"Sign Up"}/>
                    <SubHeading label={"Enter your infromation to create an account"} />
                    <div className="border-t-2 border-gray-300 my-4"></div>
                    <InputBox label={"First Name"} placeholder={"First Name"}/>
                    <InputBox label={"Last Name"} placeholder={"Last Name"}/>
                    <InputBox label={"Email"} placeholder={"example@gmail.com"}/>
                    <InputBox label={"Password"} placeholder={"Password"}/>
                    <div className="border-t-2 border-gray-300 my-7"></div>
                    <div className="pt-4">
                        <Button label={"Sign up"}/>
                    </div>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"}/>
                </div>
                
            </div>
            
        </div>
        
    )
}