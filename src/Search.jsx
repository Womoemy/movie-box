/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = ({ onClose }) => {
  // if (!isOpen) return null;

  return (
    <div id="search-modal" className="w-full border border-red-700 flex flex-col my-16 blur-0">
      <header className="searchbar">
        <form>
          <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
          <div className="relative flex">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <FontAwesomeIcon icon={faMagnifyingGlass} className={`w-4 h-4 text-gray-500`} />
            </div>
            <input className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-rose-700 focus:border-rose-700" type="search" name="searchMovies" id="searchMovies" placeholder="Search..." required />
            <button onClick={onClose} className="text-white absolute right-2.5 bottom-3.5 bg-rose-700 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded text-xs px-1 py-1">ESC</button>
          </div>
        </form>
      </header> 
      <div className="search-dropdown">
        <p>dhh</p>
        <p>milk or malt</p>
        <p>steal the keys to you heart</p>
      </div>
    </div>
  );
};

export default Search;
