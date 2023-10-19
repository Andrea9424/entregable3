import axios from "axios";
import React, { useEffect, useState } from "react";
import { statusResident } from "../constants/residents";

const ResidentCard = ({ residentEndpoint }) => {
  const [resident, setResident] = useState(null);

  useEffect(() => {
    axios
      .get(residentEndpoint)
      .then(({ data }) => setResident(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article className="border-2 border-green-500/100">
      <header className="relative">
        <img src={resident?.image} alt="" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2  text-white px-5 py-2 rounded-md  flex items-center gap-2">
          <div
            className={`h-3 w-3 ${
              statusResident[resident?.status]
            } rounded-full`}
          ></div>
          <span>{resident?.status} </span>
        </div>
      </header>
      <div>
        <h4 className=" p-2 text-lg font-monospac">
          {resident?.name}
          <ul className="text-lg font-serif text-green-400">
            <li className="p-1">
              <span>Species</span> {resident?.species}{" "}
            </li>
            <li className="p-1">
              <span>Origin</span> {resident?.origin.name}{" "}
            </li>
            <li className="p-1">
              <span>Time appear</span> {resident?.episode.length}{" "}
            </li>
          </ul>
        </h4>
      </div>
    </article>
  );
};

export default ResidentCard;
