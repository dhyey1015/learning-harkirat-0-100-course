"use client";


export default function Signup(){

    return (
        <div style={{width: "100vh", justifyContent: "center", display: "flex"}}>
            <div style={{width: 400, border: "1px solid black"}}>
                <input type="text" placeholder="email" />
                <input type="text" placeholder="password"/>\
                <button>Submit</button>
            </div>
        </div>
        
    )
}