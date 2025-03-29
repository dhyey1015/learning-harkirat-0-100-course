"use client"

export function SomeButton({}){
    function handler(){
        console.log("heelo0");
    }
    return (
        <div>
            <button 
                  onClick={handler}
                  type="button" 
                  className="py-2.5 px-5 text-sm font-medium text-white bg-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full"
                >
                Sign In
              </button>
        </div>
    );
}