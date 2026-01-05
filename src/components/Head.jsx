import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appslice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache=useSelector((store)=>store.seach);
  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
        
     else{  
      getSearchSuggestions();}

    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await res.json();
      setSuggestions(json[1]); // IMPORTANT
      dispatch(cacheResults({
        [searchQuery]:json[1],
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md bg-white relative">
     
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

      
      <div className="flex items-center w-1/2 relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-900 rounded-l-full focus:outline-none"
        />

        <button className="px-5 py-2 border border-gray-900 bg-gray-200 rounded-r-full">
          Search
        </button>

        
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg">
            <ul>
              {suggestions.map((item) => (
                <li
                  key={item}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      
      <div className="flex items-center gap-4">
        <img
          src="https://www.seekpng.com/png/detail/41-410093_circled-user-icon-user-profile-icon-png.png"
          alt="profile"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Head;
