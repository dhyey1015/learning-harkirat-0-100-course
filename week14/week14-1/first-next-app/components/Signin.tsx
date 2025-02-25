

export function SignInComponent(){
    return (
        <div className="flex justify-center flex-col h-screen">
        <div className="flex justify-center">
          <div className="border border-gray-300 shadow-lg rounded-lg p-10 bg-white">
            <div className="p-5">
              <div className="text-3xl font-extrabold text-center">Sign In</div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-bold text-gray-700">Email</label>
              <input  
                  id="email" 
                  placeholder="Email"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
              <br />
              <label className="block mb-2 text-sm font-bold text-gray-700">Password</label>
              <input  
                  id="password" 
                  placeholder="Password"
                  type="password"
                  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            <div className="pt-5">
              <button 
                  type="button" 
                  className="py-2.5 px-5 text-sm font-medium text-white bg-black rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full"
                >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}