import React from "react";

function Result(props:any) {

        const box = props.movies.map(
                (items:any, index:any) =>{
                        return(
                               <Box key={index} image={items.poster_path} title={items.original_title} rating={items.vote_average}/> 
                        )
                }
        )
        
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-8  gap-4">
      {box}
      
    </div>
  );
}

export default Result;


const Box = (props:any) => {
        const IMGPATH = "https://image.tmdb.org/t/p/w1280";
        return(
<div className=" w-full  flex flex-col">
        <img src={IMGPATH+props.image} />
        <div className="flex flex-row justify-between px-2 bg-slate-600 items-center py-6">
          <span className="font-bold text-xl text-white">{props.title}</span>
          <span className="text-3xl font-medium text-yellow-400 ">{props.rating}</span>
        </div>
      </div>)
}
