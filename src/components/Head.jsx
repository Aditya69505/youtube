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

  // ✅ FIXED TYPO
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const query = searchQuery.trim().toLowerCase();

    if (!query) {
      setSuggestions([]);
      return;
    }

    const timer = setTimeout(() => {
      // ✅ CACHE CHECK
      if (searchCache[query]) {
        setSuggestions(searchCache[query]);
      } else {
        getSearchSuggestions(query);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery, searchCache]);

  const getSearchSuggestions = async (query) => {
    try {
      const res = await fetch(YOUTUBE_SEARCH_API + query);
      const json = await res.json();

      setSuggestions(json[1]);

      // ✅ STORE IN CACHE
      dispatch(
        cacheResults({
          [query]: json[1],
        })
      );
    } catch (err) {
      console.error(err);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 shadow-md bg-white relative">
      {/* LEFT */}
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

      {/* SEARCH */}
      <div className="flex items-center w-1/2 relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
          placeholder="Search"
          className="w-full px-4 py-2 border border-gray-900 rounded-l-full focus:outline-none"
        />

        <button className="px-5 py-2 border border-gray-900 bg-gray-200 rounded-r-full">
          Search
        </button>

        {/* SUGGESTIONS */}
        {showSuggestions && suggestions.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-50">
            <ul>
              {suggestions.map((item) => (
                <li
                  key={item}
                  onMouseDown={() => setSearchQuery(item)}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  🔍 {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* PROFILE */}
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
