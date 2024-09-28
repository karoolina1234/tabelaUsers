/* eslint-disable @typescript-eslint/no-explicit-any */
//components
import Button from "../button";
//styles
import "./styles.css";

type FormData = {
  nome: string;
  email: string;
  rg: string;
  cpf: string;
  telefone: string;
  dataNascimento: string;
  endereco: string;
  numero: string;
  bairro: string;
  cidade: string;
  cep: string;
};

interface ModalTypes {
  closeModal: () => void;
  formData: FormData;
}
const ModalComponent = ({ closeModal, formData }: ModalTypes) => {
  return (
    <div className="modal show modal-confirmation">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              onClick={closeModal}
            ></button>
            <div className="icon">
              <i className="bi bi-check-circle-fill"></i>
            </div>
            <h5>
              <strong>Por favor, revise seus dados antes de continuar:</strong>
            </h5>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <p className="label">NOME</p>
                <p className="info">{formData.nome}</p>
              </div>
              <div className="col-6">
                <p className="label">E-mail</p>
                <p className="info">{formData.email}</p>
              </div>
              <div className="col-6">
                <p className="label">RG</p>
                <p className="info">{formData.rg}</p>
              </div>
              <div className="col-6">
                <p className="label">CPF</p>
                <p className="info">{formData.cpf}</p>
              </div>
              <div className="col-6">
                <p className="label">Telefone</p>
                <p className="info">{formData.telefone}</p>
              </div>
              <div className="col-6">
                <p className="label">Data de Nascimento</p>
                <p className="info">{formData.dataNascimento}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p className="label">Endereço</p>
                <p className="info">
                  {`${formData.endereco} ${formData.numero} ${formData.bairro} ${formData.cidade}`}
                  {formData.cep}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <Button>Confirmar</Button>
            <Button onClick={closeModal} className="outlined">
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalComponent;
