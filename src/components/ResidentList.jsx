import React, { useEffect, useState } from "react";
import ResidentCard from "./ResidentCard";
import { paginationLogic } from "../utils/pagination";

const ResidentList = ({ residents }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { pages, residentsInPage } = paginationLogic(currentPage, residents);
  useEffect(() => {
    setCurrentPage(1);
  }, [residents]);

  return (
    <section>
      <section className=" grid grid-cols-[repeat(auto-fit,_200px)] justify-center  gap-5 max-w-[1000px] mx-auto px-10">
        {residentsInPage.map((resident) => (
          <ResidentCard key={resident} residentEndpoint={resident} />
        ))}
      </section>
      <ul className="tex-lg flex gap-3 justify-center flex-wrap pt-5 pb-5">
        {pages.map((page) => (
          <li key={page}>
            <button
              className={`text-white p-2 ${
                page === currentPage && "bg-green-400"
              }`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ResidentList;
