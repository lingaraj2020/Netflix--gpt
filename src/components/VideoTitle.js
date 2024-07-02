const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute px-6 md:px-20 text-white bg-gradient-to-r from-black">
      <div className="pt-[40%] md:pt-[20%]">
        <h1 className="text-2xl md:text-6xl font-bold"> {title}</h1>
        <p className="py-6 hidden md:inline-block text-lg w-1/2">{overview}</p>
      </div>
      <div className="my-2">
        <button className="bg-white text-black rounded-md px-6 md:px-8 p-0 md:p-2 text-xl hover:bg-opacity-80">
          ► Play
        </button>
        <button className="hidden md:inline-block bg-slate-700 text-white rounded-md px-8 p-2 text-xl mx-2 hover:bg-opacity-55 border border-white">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
