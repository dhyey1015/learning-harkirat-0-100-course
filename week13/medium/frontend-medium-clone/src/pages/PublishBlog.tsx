import { AppBar } from "../components/AppBar"


export function PublishBlog(){
    return(
        <div className="">
            <AppBar/>
            <div className="p-15">
                <div className="mb-6 ">
                    
                    <input 
                        type="text" 
                        id="large-input" 
                        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-white text-base focus:ring-blue-500 focus:border-blue-500 placeholder:text-2xl"
                        placeholder="Title"
                    />
                </div>
                <div>
                   
                    <textarea 
                        id="message" 
                        rows={20}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 placeholder:text-2xl" 
                        placeholder="Write your thoughts here..."
                    ></textarea>
                </div>
                <div className="flex justify-end py-5">
                    <button 
                        type="button" 
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ">
                            Publish
                    </button>

                </div>

            </div>  
        </div>
    )
}