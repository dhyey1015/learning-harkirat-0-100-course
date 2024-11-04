export function RevenueCard({
    title,
    orderCount,
    amount,
    count,
}){
    return(
        <div className="bg-white rounded-lg shadow-md p-4">
            <div className="flex justify-center flex-col  text-gray-600  pb-5">
                <div className="flex">
                    <div className="text-base">
                        {title}
                    </div>
                    <div className="ml-1 flex justify-center flex-col">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 h-4 w-4">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <div className="font-semibold text-2xl">
                   $ {amount}
                </div>
                <div>
                    {orderCount ? 
                    <div className="flex cursor-pointer underline font-medium">
                        <div className="text-blue-700">
                            {count} Orders 
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-blue-700">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </div>: null }
                </div>
            </div>
        </div>
    )
}