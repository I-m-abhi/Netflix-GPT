const VideoTitle = ({ title, overview }) => {
  
  return (
    <div className="w-full h-screen opacity-40 pt-[13%] px-[10%] absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-3xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-2/4">{overview}</p>
      <div className="my-4">
        <button className=" bg-white text-black p-2 px-8 text-xl  rounded-lg hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="mx-4 bg-white text-black p-2 px-8 text-xl  rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;