/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { Dispatch, SetStateAction, useState } from "react";

//components
import Section from "../section";
import Button from "../button";

//utils
import { validateCPF } from "../../utils";

interface TypesProps {
  data: any;
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  formData: any;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

const FormContact = ({
  data,
  handleChange,
  formData,
  setOpenModal,
}: TypesProps) => {
  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    cpf: "",
    dataNascimento: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      nome: "",
      email: "",
      cpf: "",
      dataNascimento: "",
    };

    let isValid = true;

    if (formData.nome === "") {
      newErrors.nome = "O campo Nome é obrigatório";
      isValid = false;
    }
    if (formData.email === "") {
      newErrors.email = "O campo Email é obrigatório";
      isValid = false;
    }
    if (formData.cpf === "") {
      newErrors.cpf = "O campo CPF é obrigatório";
      isValid = false;
    } else {
      const validCPF = validateCPF(formData.cpf);
      if (!validCPF) {
        newErrors.cpf = "CPF inválido";
        isValid = false;
      }
    }
    if (formData.dataNascimento === "") {
      newErrors.dataNascimento = "O campo Data de Nascimento é obrigatório";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      console.log("Formulário enviado", formData);
      setOpenModal(true);
    }
  };

  return (
    <form className="page-contact container" onSubmit={handleSubmit}>
      <h4>Formulário de contato</h4>
      <Section>
        <div className="form-area">
          <h5>Dados do cliente</h5>
          <div className="container">
            <div className="row g-3">
              <div className="col-8">
                <div className="mt-3">
                  <label className="form-label">
                    Nome<span className="required">*</span>
                  </label>
                  <select
                    className="form-select"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                  >
                    <option value="">Buscar cliente</option>
                    {data.map((item: any, index: number) => (
                      <option key={index} value={item.nome}>
                        {item.nome}
                      </option>
                    ))}
                  </select>
                  {errors.nome && <p className="text-danger">{errors.nome}</p>}
                </div>
              </div>
              <div className="col-4">
                <div className="mt-3">
                  <label className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="exemplo@exemplo.com.br"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <p className="text-danger">{errors.email}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-3">
                <div className="mt-3">
                  <label className="form-label">
                    CPF<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="000.000.000-00"
                    name="cpf"
                    value={formData.cpf}
                    onChange={handleChange}
                  />
                  {errors.cpf && <p className="text-danger">{errors.cpf}</p>}
                </div>
              </div>
              <div className="col-3">
                <div className="mt-3">
                  <label className="form-label">RG</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="0000000000"
                    name="rg"
                    value={formData.rg}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="mt-3">
                  <label className="form-label">Telefone</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="(00) 00000-0000"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="mt-3">
                  <label className="form-label">
                    Data de nascimento <span className="required">*</span>
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    name="dataNascimento"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                  />
                  {errors.dataNascimento && (
                    <p className="text-danger">{errors.dataNascimento}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Section>
        <div className="form-area">
          <h5>Endereço</h5>
          <div className="container">
            <div className="row g-3">
              <div className="col-2">
                <div className="mt-3">
                  <label className="form-label">Cep</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="000.000.000-00"
                    name="cep"
                    value={formData.cep}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-5">
                <div className="mt-3">
                  <label className="form-label">Endereço</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Rua olinda"
                    name="endereco"
                    value={formData.endereco}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-2">
                <div className="mt-3">
                  <label className="form-label">Número</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="140"
                    name="numero"
                    value={formData.numero}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-3">
                <div className="mt-3">
                  <label className="form-label">Complemento</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="5º andar"
                    name="complemento"
                    value={formData.complemento}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row g-3">
              <div className="col-4">
                <div className="mt-3">
                  <label className="form-label">Bairro</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="São geraldo"
                    name="bairro"
                    value={formData.bairro}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="mt-3">
                  <label className="form-label">Cidade</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Porto alegre"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-4">
                <div className="mt-3">
                  <label className="form-label">Estado</label>
                  <select
                    className="form-select"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                  >
                    <option value="">Selecione</option>
                    {data.map((item: any, index: number) => (
                      <option key={index} value={item.endereco.estado}>
                        {item.endereco.estado}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <div className="text-center">
        <Button icon={<i className="bi bi-arrow-right"></i>}>Enviar</Button>
      </div>
    </form>
  );
};

export default FormContact;
