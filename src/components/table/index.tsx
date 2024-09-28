import React from "react";

//bootstrap
import { Table } from "react-bootstrap";

type Data = {
  id: number;
  produto: string;
  status: string;
  data: string;
};

interface TableTypes {
  currentData: Data[];
  currentPage: number;
  startIndex: number;
  itemsPerPage: number;
  totalPages: number;
  data: Data[];
  handleNextPage: () => void;
  handlePreviousPage: () => void;
}

const TableComponent = ({
  currentData,
  currentPage,
  startIndex,
  itemsPerPage,
  totalPages,
  data,
  handleNextPage,
  handlePreviousPage,
}: TableTypes) => {
  return (
    <div className="mt-4">
      <Table className="table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>PRODUTO</th>
            <th>STATUS</th>
            <th>DATA</th>
          </tr>
        </thead>
        <tbody>
          {currentData && currentData.length > 0 ? (
            currentData.map((item) => (
              <tr key={item.id}>
                <td>
                  <span className="item-id">{item.id}</span>
                </td>
                <td>{item.produto}</td>
                <td>
                  <span
                    className={item.status === "ativo" ? "active" : "inactive"}
                  >
                    {item.status}
                  </span>
                </td>
                <td>
                  <span
                    className={
                      item.status === "ativo" ? "active" : "inactive-date"
                    }
                  >
                    {item.data}
                  </span>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center">
                Nenhum dado encontrado
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <div className="pagination">
            <p>
              {currentPage} - {Math.min(startIndex + itemsPerPage, data.length)}
              de {totalPages}
            </p>
            <a onClick={handlePreviousPage}>&lt;</a>
            <a onClick={handleNextPage}>&gt;</a>
          </div>
        </tfoot>
      </Table>
    </div>
  );
};

export default TableComponent;
