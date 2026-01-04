import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { title, channelTitle, thumbnails, publishedAt } = snippet;

  return (
    <div className=" w-72 border border-gray-300 rounded-xl p-2 hover:shadow-lg transition">
      <img
        className="rounded-lg w-full"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />

      <div className="mt-2">
        <h3 className="font-semibold text-sm line-clamp-2">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mt-1">
          {channelTitle}
        </p>

        <p className="text-gray-500 text-xs">
          {statistics.viewCount} views •{" "}
          {new Date(publishedAt).toDateString()}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
