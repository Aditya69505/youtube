
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appslice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-full">
      <div className="px-2 md:px-5 flex flex-col md:flex-row w-full gap-4">
        <div className="flex-1">
          <iframe
            className="w-full aspect-video"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          {/* Video Details Section */}
          <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
            <h1 className="text-xl font-bold mb-2">Video Title Here</h1>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  className="w-10 h-10 rounded-full mr-3"
                  src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
                  alt="Channel Avatar"
                />
                <div>
                  <p className="font-semibold">Channel Name</p>
                  <p className="text-sm text-gray-600">1.2M subscribers</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center gap-1">
                  👍 Like
                </button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center gap-1">
                  👎 Dislike
                </button>
                <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full">
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-80">
          <LiveChat />
        </div>
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
