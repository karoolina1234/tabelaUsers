/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

//componentes
import FilterComponent from "../../components/filter";
import TableComponent from "../../components/table";
//styles
import "./styles.css";
//data
import data from "./data.json";

interface Data {
  id: number;
  produto: string;
  status: string;
  data: string;
}

const PageProducts = () => {
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const [currentData, setCurrentData] = useState<Data[]>([]);
  const [filteredData, setFilteredData] = useState<Data[]>(data);
  const [isFilter, setIsFilter] = useState<boolean>(false);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    if (filteredData.length > 0) {
      setCurrentData(filteredData.slice(startIndex, startIndex + itemsPerPage));
    } else if (filteredData.length <= 0 && isFilter) {
      setCurrentData([]);
    } else {
      setCurrentData(data.slice(startIndex, startIndex + itemsPerPage));
    }
  }, [filteredData, currentPage, isFilter]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

    const handleFilter = (filters: any) => {
      let newFilteredData = data;

      if (filters.id) {
      newFilteredData = newFilteredData.filter((item) =>
        item.id.toString().includes(filters.id)
      );
    }

    if (filters.produto !== "Todos") {
      newFilteredData = newFilteredData.filter(
        (item) => item.id === Number(filters.produto)
      );
    }

    if (filters.status !== "Todos") {
      newFilteredData = newFilteredData.filter(
        (item) => item.status === filters.status
      );
    }

    if (filters.startDate) {
      newFilteredData = newFilteredData.filter(
        (item) => new Date(item.startDate) >= new Date(filters.startDate)
      );
    }

    if (filters.endDate) {
      newFilteredData = newFilteredData.filter(
        (item) => new Date(item.startDate) <= new Date(filters.endDate)
      );
    }
    setIsFilter(true);
    setFilteredData(newFilteredData);
    setCurrentPage(1);
  };

  return (
    <div className="mx-5 mt-5">
      <h5>Busca</h5>
      <FilterComponent data={data} onFilter={handleFilter} />

      <TableComponent
        currentData={currentData}
        currentPage={currentPage}
        startIndex={startIndex}
        itemsPerPage={itemsPerPage}
        totalPages={totalPages}
        data={data}
        handleNextPage={handleNextPage}
        handlePreviousPage={handlePreviousPage}
      />
    </div>
  );
};

export default PageProducts;
