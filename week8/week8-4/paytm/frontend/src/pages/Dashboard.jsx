import { Appbar } from "../components/Appbar"
import { Balance } from "../components/Balance"
import { Users } from "../components/Users"
import { Heading } from "../components/Heading"
export function Dashboard(){
    return(
        <div>
            <Appbar/>
            <div className=" flex justify-center">
                <Heading label={"Send Money"}/> 
            </div>
            <div className="m-8">
                <div className="border-t-2 border-gray-300 my-8"></div>
                    <Balance value={"10,000"}/>
                <div className="border-t-2 border-gray-300 my-8"></div>
                <Users/>
            </div>
        </div>
    )
}