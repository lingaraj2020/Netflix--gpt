const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video absolute text-white bg-gradient-to-r from-black">
      <div className="pt-[18%] px-24">
        <h1 className="text-6xl font-bold"> {title}</h1>
        <p className="py-6 text-lg w-1/2">{overview}</p>
      </div>
      <div className="px-24">
        <button className="bg-white text-black rounded-md px-8 p-2 text-xl hover:bg-opacity-80">
          ► Play
        </button>
        <button className="bg-slate-700 text-white rounded-md px-8 p-2 text-xl mx-2 hover:bg-opacity-55 border border-white">
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
