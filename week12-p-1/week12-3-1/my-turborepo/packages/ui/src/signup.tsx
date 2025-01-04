
export function SignUp(){

    return(

        <div style={{display:"flex", justifyContent: "center",}}>
            <div style={{border:"1px solid black"}}>
                <input type="text" placeholder="email" /><br />
                <input type="password" placeholder="password" /><br />
                <button>Submit</button>
            </div>
        </div>
    );
}