import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appslice";

const Head = () => {

  const [seachQuery,setSearchQuery]=useState("");
   console.log(seachQuery); 
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md bg-white">
      
    
      <div className="flex items-center gap-4">
        <img
          onClick={toggleMenuHandler}
          src="https://tse3.mm.bing.net/th/id/OIP.8NNtIxQir7wftsYrxi67DgAAAA"
          alt="menu"
          className="h-6 cursor-pointer"
        />

        <a href="/">
          <img
            src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2015-2017.png"
            alt="youtube"
            className="h-8 cursor-pointer"
          />
        </a>
      </div>

      
      <div className="flex items-center w-1/2">
        <input
        value={seachQuery}
        onChange={(e)=>setSearchQuery(e.target.value)}
          type="text"
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-900 rounded-l-full focus:outline-none"
        />
        <button className="px-5 py-2 border border-gray-900 bg-gray-200 rounded-r-full hover:bg-gray-300">
          Search
        </button>
      </div>

    
      <div className="flex items-center gap-4">
        <img
          src="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png"
          alt="profile"
          className="h-8 w-8 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Head;
