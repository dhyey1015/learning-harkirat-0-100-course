import { VideoCard } from "./VideoCard"

const VIDEOS = [
    {
        id: 1,
        title : "Taarak Mehta Ka Ooltah Chashmah - तारक मेहता का उल्टा चशमाह - Episode 789 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    }, 
    {
        id: 2,
        title : "Taarak Mehta Ka Ooltah Chashmah - तारक मेहता का उल्टा चशमाह - Episode 789 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    }, 
    {
        id: 3,
        title : "how to play mobile games  on pc | latest 2024",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    }, 
    {
        id: 4,
        title : "how to jump - learn in 20 days - Episode 789 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    }, 
    {
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },  
    {
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },{
        id: 5,
        title : "how to master codeing - Episode 790 - Full Episode",
        channel: "Dhyey Kakadiya",
        views: "48M",
        dmyNumber: "13",
        dmy :"days",
    },
]


export function VideoGrid(){
    return(
        <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-2 xl:grid-cols-4 xl:gap-4">
            {VIDEOS.map(function(video){
               return (
                <VideoCard 
                    title={video.title} 
                    channel={video.channel} 
                    views={video.views} 
                    dmyNumber={video.dmyNumber} 
                    dmy={video.dmy}
                />
               )
            })}
        </div>
    )
}