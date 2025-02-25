

export default function Banner({
    children
}:Readonly<{
    children: React.ReactNode
}>){
    return (
        <div>
            <div  className="m-4 p-4 flex justify-center border border-gray-300 bg-green-200">
                20% off for the next 3 days
            </div>
            {children}
        </div>
    )
}