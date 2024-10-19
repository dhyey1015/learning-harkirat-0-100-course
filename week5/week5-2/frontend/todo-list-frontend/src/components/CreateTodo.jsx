import { useState } from "react";

export function CreateTodo(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    return(
        <div>

            {/* title input */}
            <input style={{
                padding: 10,
                margin: 10
            }} type="text" placeholder="title" onChange={function(event){
                const value = event.target.value
                setTitle(value)
            }}></input>
            <br />

            {/* description input */}
            <input style={{
                padding: 10,
                margin: 10
            }}  type="text" placeholder="description"onChange={function(event){
                const value = event.target.value
                setDescription(value)
            }}></input>
            <br />


            {/* here is the button */}
            <button style={{
                padding: 10,
                margin: 10
            }} onClick={function(){
                fetch("http://localhost:3000/add-todo", {
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }), 
                    headers: {
                        'Content-Type': 'application/json',
                    }
                })
                .then(async function(response){
                    const josn = await response.json()
                    alert("todo added")
                })
            }} >Add a todo</button>
        </div>
    )
}