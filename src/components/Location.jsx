import { IconSearch } from "@tabler/icons-react";
import axios from "axios";
import React from "react";

const Location = ({ location, setLocation }) => {
  const handleSumit = (e) => {
    e.preventDefault();
    const idLocation = e.target.idLocation.value;
    axios
      .get(`https://rickandmortyapi.com/api/location/${idLocation}`)
      .then(({ data }) => setLocation(data))
      .catch((err) => console.log(err));
  };

  return (
    <section className="">
      <div className="max-h-screen">
        <img
          className="bg-cover bg-fixed m-auto "
          src="./img/header.png"
          alt=""
        />
      </div>
      <div className="p-3 flex justify-center item-center  m-[15%] mt-[-60px] mb-0  ">
        <img className="" src="./img/nombre 2.png" alt="" />
      </div>

      <form
        onSubmit={handleSumit}
        className="flex justify-center mt-[50px] font-monospac text-lg  "
      >
        <input
          name="idLocation"
          placeholder="type location id"
          className=" border-4 border-green-500/100 outline-none text-black p-2 "
          type="number"
        />
        <button
          type="submit"
          className="hover:bg-green-300  flex gap-1 bg-green-700  items-center p-2"
        >
          Search <IconSearch size={17} />{" "}
        </button>
      </form>

      <section className="justify-center max-w-[855px] mx-auto  px-6 border-2 border-green-500/100 w-4/5  m-10">
        <h3 className="text-center font-monospac p-2 text-lg m-2">
          ¡ Wellcome to {location?.name} !{" "}
        </h3>

        <ul className=" flex justify-between text-center p-2 font-monospac text-lg ">
          <li className="p-1 ">Type: {location?.type} </li>
          <li className="p-1 ">Dimension: {location?.dimension} </li>
          <li className="p-1 ">Population: {location?.residents.length} </li>
        </ul>
      </section>
    </section>
  );
};

export default Location;
lg;
