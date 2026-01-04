import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const SideBar = () => {
 const isMenuOpen=useSelector(store=>store.app.isMenuOpen)

 if(!isMenuOpen) return null;

  return (
    <div className=" h-screen w-56 bg-white shadow-md px-4 py-6 text-gray-800">

     
      <ul className="space-y-2 shadow-lg">
  
  <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer
                 hover:bg-gray-400 hover:text-black transition">
    🏠 Home
  </li>

  

        <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer 
                       hover:bg-gray-400 hover:text-black transition">
          🎬 Shorts
        </li>

        <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer 
                       hover:bg-gray-400 hover:text-black transition">
          📺 Videos
        </li>

        <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer 
                       hover:bg-gray-400 hover:text-black transition">
          🔴 Live
        </li>
      </ul>

     
      <div className="my-4 border-t border-gray-200"></div>

     
      <h1 className="text-xs font-semibold text-gray-500  uppercase mb-2">
        Subscriptions
      </h1>

      <ul className="space-y-2 shadow-md">
        <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-400 transition">
          🎵 Music
        </li>
        <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-400 transition">
          🏏 Sports
        </li>
        <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-400 transition">
          🎮 Gaming
        </li>
        <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-400 transition">
          🎥 Movies
        </li>
      </ul>

    
      <div className="my-4 border-t border-gray-200"></div>

     
      <h1 className="text-xs font-semibold text-gray-500 uppercase mb-2">
        Watch Later
      </h1>

      <ul className="space-y-2 shadow-md">
        <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-400 transition">
          🎵 Music
        </li>
        <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-400 transition">
          🏏 Sports
        </li>
        <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-400 transition">
          🎮 Gaming
        </li>
        <li className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-400 transition">
          🎥 Movies
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
