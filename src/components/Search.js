import React, { useState, useEffect } from "react";
import searchSvg from "../icons/search-svgrepo-com.svg";

const data = [
  {
    _id: "664991c7a354578bd5ee4f5e",
    name: "Kelley Hansen",
    gender: "female",
    company: "ENTROFLEX",
    email: "kelleyhansen@entroflex.com",
    phone: "+1 (955) 461-2017",
    address: "126 Apollo Street, Galesville, Northern Mariana Islands, 5690",
  },
  {
    _id: "664991c7c4c3d201e3b04974",
    name: "Tamera Travis",
    gender: "female",
    company: "AMTAS",
    email: "tameratravis@amtas.com",
    phone: "+1 (848) 559-2981",
    address: "587 Lorimer Street, Gerton, Vermont, 4426",
  },
  {
    _id: "664991c7bd016e0c39fec668",
    name: "Sykes Carpenter",
    gender: "male",
    company: "PYRAMIA",
    email: "sykescarpenter@pyramia.com",
    phone: "+1 (899) 526-2253",
    address: "473 Merit Court, Dargan, Pennsylvania, 6237",
  },
  {
    _id: "664991c732456d20e0f74339",
    name: "Buchanan Garner",
    gender: "male",
    company: "UNI",
    email: "buchanangarner@uni.com",
    phone: "+1 (917) 558-2031",
    address: "764 Neptune Avenue, Maxville, New York, 6703",
  },
  {
    _id: "664991c7a084b4de7e55db19",
    name: "Shaffer Durham",
    gender: "male",
    company: "TRASOLA",
    email: "shafferdurham@trasola.com",
    phone: "+1 (922) 575-2704",
    address: "274 Veranda Place, Benson, Missouri, 3563",
  },
  {
    _id: "664991c73c58fceff0d3737c",
    name: "Christine Barton",
    gender: "female",
    company: "INVENTURE",
    email: "christinebarton@inventure.com",
    phone: "+1 (897) 485-3818",
    address: "806 Troutman Street, Jugtown, New Jersey, 9952",
  },
  {
    _id: "664991c758d460e11d914a98",
    name: "Susanna Kinney",
    gender: "female",
    company: "DIGIFAD",
    email: "susannakinney@digifad.com",
    phone: "+1 (814) 539-3435",
    address: "385 High Street, Whitestone, Delaware, 7048",
  },
  {
    _id: "664991c79336c9fa4de0b81f",
    name: "Katy Larsen",
    gender: "female",
    company: "TERSANKI",
    email: "katylarsen@tersanki.com",
    phone: "+1 (912) 542-3001",
    address: "845 Summit Street, Cartwright, Marshall Islands, 9306",
  },
  {
    _id: "664991c7e7e1547880042019",
    name: "Estella Lewis",
    gender: "female",
    company: "TUBESYS",
    email: "estellalewis@tubesys.com",
    phone: "+1 (975) 445-3625",
    address: "527 Henderson Walk, Vivian, Washington, 764",
  },
  {
    _id: "664991c7ed5ee87b4d37826d",
    name: "Ora Blair",
    gender: "female",
    company: "EXERTA",
    email: "orablair@exerta.com",
    phone: "+1 (840) 405-3391",
    address: "831 Woodruff Avenue, Newry, New Hampshire, 5692",
  },
];

const Search = () => {
  const [search, setSearch] = useState("");
  const [updatedData, setUpdatedData] = useState(data);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      if (search) {
        const filteredObject = data.filter((item) =>
          Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(search.toLowerCase())
          )
        );
        setUpdatedData(filteredObject);
      } else {
        setUpdatedData(data);
      }
    }, 600);

    return () => {
      clearTimeout(handleDebounce);
    };
  }, [search]);

  return (
    <div className="  flex w-full  justify-center  flex-col gap-6 py-12 px-10 overflow-y-auto">
      <div className="flex mx-auto gap-6 text-2xl uppercase text-ani-secondry-light-color">
        <img
          src={searchSvg}
          alt="search icon"
          className="w-8 aspect-square cursor-pointer"
        />
        <input
          type="text"
          placeholder="search your products"
          className="border px-6 py-2 pb-3 rounded-full leading-snug text-ani-default-dark font-medium text-lg shadow-ani-default-shadow"
          value={search}
          onChange={handleSearch}
        />
      </div>
      <table className="border-collapse border border-gray-400 w-full mt-4 shadow-ani-default-shadow">
        <thead className="bg-ani-default-dark text-white ">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Company</th>
            <th className="border border-gray-300 px-4 py-2">Email</th>
            <th className="border border-gray-300 px-4 py-2">Phone</th>
            <th className="border border-gray-300 px-4 py-2">Address</th>
          </tr>
        </thead>
        <tbody>
          {updatedData.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 == 0
                  ? "bg-ani-primary-color"
                  : "bg-ani-secondry-color"
              } text-white`}
            >
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {item.company}
              </td>
              <td className="border border-gray-300 px-4 py-2">{item.email}</td>
              <td className="border border-gray-300 px-4 py-2">{item.phone}</td>
              <td className="border border-gray-300 px-4 py-2">
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
