/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
//data
import data from "./data.json";
//components
import FormContact from "../../components/formContact";
import ModalComponent from "../../components/modal";
//styles
import "./styles.css";
//utils
import { formatCPF, formatPhoneNumber } from "../../utils";

const PageContact = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    cpf: "",
    rg: "",
    telefone: "",
    dataNascimento: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });
  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    const formattedValue =
      name === "cpf"
        ? formatCPF(value)
        : name === "telefone"
        ? formatPhoneNumber(value)
        : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  return (
    <div>
      <FormContact
        data={data}
        handleChange={handleChange}
        formData={formData}
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <ModalComponent
          closeModal={() => setOpenModal(false)}
          formData={formData}
        />
      )}
    </div>
  );
};

export default PageContact;
