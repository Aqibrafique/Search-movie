
interface ResultProps {
  movies: {
    poster_path: string;
    original_title: string;
    vote_average: number;
  }[];
}
interface BoxProps {
  image: string;
  title: string;
  rating: number;
}
function Result(props: ResultProps) {
  const box = props.movies.map((items ,index) => {
    return (
      <Box
        key={index}
        image={items.poster_path}
        title={items.original_title}
        rating={items.vote_average}
      />
    );
  });

  return (
    <div className="w-full grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 mt-8  gap-4">
      {box}
    </div>
  );
}

export default Result;

const Box = (props: BoxProps) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className=" w-full  grid  border shadow-lg">
      <img className="object-cover" src={IMGPATH + props.image} />
      <div className="flex flex-row justify-between px-2  items-center py-6">
        <span className="font-bold w-1/2 text-xl ">{props.title}</span>
        <span className="text-3xl w-1/2 font-medium text-yellow-400 ">
          {props.rating}
        </span>
      </div>
    </div>
  );
};
