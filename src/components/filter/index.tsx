import React, { useState } from "react";

//components
import Section from "../section";

type Data = {
  id: number;
  produto: string;
  status: string;
  data: string;
};

interface FilterProps {
  data: Data[];
  onFilter: (filters: {
    id: string;
    produto: string;
    status: string;
    startDate: string;
    endDate: string;
  }) => void;
}

const FilterComponent = ({ data, onFilter }: FilterProps) => {
  const [id, setId] = useState("");
  const [produto, setProduto] = useState("Todos");
  const [status, setStatus] = useState("Todos");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleFilter = () => {
    onFilter({ id, produto, status, startDate, endDate });
  };

  return (
    <Section>
      <div className="filter-area mb-3 mt-2">
        <div className="search-by-id">
          <div className="form-label">Pesquise por ID</div>
          <div className="input-group">
            <span className="input-group-text" id="search-icon">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Pesquisar"
              value={id}
              onChange={(e) => setId(e.target.value)}
              aria-describedby="search-icon"
            />
          </div>
        </div>

        <div className="product-filter">
          <div className="form-label">Produto</div>
          <select
            className="form-select"
            value={produto}
            onChange={(e) => setProduto(e.target.value)}
          >
            <option value="Todos">Todos</option>
            {data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.produto}
              </option>
            ))}
          </select>
        </div>

        <div className="status-filter">
          <div className="form-label">Status</div>
          <select
            className="form-select"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Todos">Todos</option>
            <option value="ativo">Ativo</option>
            <option value="inativo">Inativo</option>
          </select>
        </div>

        <div className="validity-start">
          <div className="form-label">Vigência de:</div>
          <input
            className="form-control"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div className="validity-end">
          <div className="form-label">Até:</div>
          <input
            className="form-control"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="find-items">
          <button className="link" onClick={handleFilter}>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </Section>
  );
};

export default FilterComponent;
