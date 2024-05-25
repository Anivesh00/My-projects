import React, { useState, useEffect } from "react";
import searchSvg from "../icons/search-svgrepo-com.svg";
import { data } from "../JSON Data/data";

/**
 * Search component that allows searching through data with various criteria.
 *
 * @component
 */
const Search = () => {
  // State variable for the general search input
  const [search, setSearch] = useState("");
  // State variable for the facet search input
  const [fecetSearch, setFecetSearch] = useState("");
  // State variable to store facet labels based on the facet search input
  const [fecetLabel, setFecetLabel] = useState([]);
  // State variable to store the updated data based on search and facet filters
  const [updatedData, setUpdatedData] = useState(data);

  /**
   * Handles changes in the general search input.
   * @param {Event} e - The input change event.
   */
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  /**
   * Handles changes in the facet search input.
   * @param {Event} e - The input change event.
   */
  const handleFecetSearch = (e) => {
    setFecetSearch(e.target.value);
  };

  /**
   * Filters the data based on the selected facet filter.
   * @param {string} name - The name to filter by.
   */
  const handleFecetFilter = (name) => {
    if (name) {
      const recentData = data.filter((item) =>
        item.name.toString().toLowerCase().startsWith(name.toLowerCase())
      );
      setUpdatedData(recentData);
      setFecetLabel(recentData);
    }
  };

  /**
   * useEffect hook to handle debounce for search and facet search inputs.
   */
  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      if (search) {
        const filteredObject = data.filter((item) =>
          Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(search.toLowerCase())
          )
        );
        setUpdatedData(filteredObject);
      } else if (fecetSearch) {
        const filteredFecet = data.filter((check) =>
          check.name
            .toString()
            .toLowerCase()
            .startsWith(fecetSearch.toLowerCase())
        );
        setFecetLabel(filteredFecet);
      } else {
        setUpdatedData(data);
      }
    }, 600);
    return () => {
      clearTimeout(handleDebounce);
    };
  }, [search, fecetSearch]);
  return (
    <div className="  flex w-full  justify-center  flex-col gap-6 py-12 px-10 overflow-y-auto">
      <div className="flex flex-col md:flex-row mx-auto gap-6 text-2xl uppercase text-ani-secondry-light-color">
        <div className="flex gap-6">
          <img
            src={searchSvg}
            alt="search icon"
            className="w-8 aspect-square cursor-pointer hidden md:block"
          />
          <input
            type="search"
            placeholder="search with any data"
            className="border px-6 py-2 pb-3 rounded-full leading-snug text-ani-default-dark font-medium text-lg shadow-ani-default-shadow"
            value={search}
            onChange={handleSearch}
          />
        </div>
        <div>
          <input
            type="search"
            placeholder="search with name"
            className="border px-6 py-2 pb-3 rounded-full leading-snug text-ani-default-dark font-medium text-lg shadow-ani-default-shadow"
            value={fecetSearch}
            onChange={handleFecetSearch}
          />
        </div>
      </div>

      <div
        className={`flex ${
          fecetSearch && fecetLabel ? "block" : "hidden"
        } justify-center gap-4`}
      >
        {fecetLabel.map((item, index) => (
          <button
            key={index}
            onClick={() => handleFecetFilter(item.name)}
            className="px-4 py-2 border border-white rounded-full text-white shadow-ani-default-shadow"
          >
            {item?.name}
          </button>
        ))}
      </div>

      <table className="border-collapse border border-gray-400 w-full mt-4 shadow-ani-default-shadow">
        <thead className="bg-ani-default-dark text-white ">
          <tr>
            <th className="border border-gray-300 px-4 py-2 break-all">Name</th>
            <th className="border border-gray-300 px-4 py-2 break-all">
              Company
            </th>
            <th className="border border-gray-300 px-4 py-2 break-all">
              Email
            </th>
            <th className="border border-gray-300 px-4 py-2 break-all">
              Phone
            </th>
            <th className="border border-gray-300 px-4 py-2 break-all ">
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          {updatedData.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-ani-primary-color"
                  : "bg-ani-secondry-color"
              } text-white`}
            >
              <td className="border border-gray-300 px-4 py-2 break-all">
                {item.name}
              </td>
              <td className="border border-gray-300 px-4 py-2 break-all">
                {item.company}
              </td>
              <td className="border border-gray-300 px-4 py-2 break-all">
                {item.email}
              </td>
              <td className="border border-gray-300 px-4 py-2 break-all">
                {item.phone}
              </td>
              <td className="border border-gray-300 px-4 py-2 break-all">
                {item.address}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;
