import { Button } from "./Button"

export function Users(){

    return(
        <>
            <div className="font-bold mt-6 text-3xl pb-6 ">
                Users
            </div>
            <div className="my-2 pb-5">
                <input 
                onChange={function(e){

                }}
                className="w-full px-2 py-1 border rounded border-slate-200"
                type="text"
                placeholder="Search users..."
                  />
            </div>
            <div>
                {/* {users.map(function(user){
                    <User user={user}/>
                })} */}
                <User/>
            </div>
        </>
    )
}

function User({user}){

    return(
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full w-12 h-12 bg-slate-200 flex justify-center mt-1 mr-2 ml-8">
                    <div className="flex flex-col justify-center h-full text-xl">
                        U{/* {user.firstName[0]} */}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full ml-3">
                    <div>
                        firstname Lastname{/* {user.firstName} {user.lastName} */}
                    </div>
                </div>
                
            </div>
            <div className="flex flex-col justify-center h-full mr-8">
                <Button onClick={function(e){
                    
                }} label={"Send Money"}/>
            </div>

        </div>
    )
}