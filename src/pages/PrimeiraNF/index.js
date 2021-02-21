import React, { useState } from "react";
import "./index.css";
import api from "../../services/api";

function CadastroPrimeiraNf() {
  const [estado, setEstado] = useState({});
  async function submitForm(form) {
    form.preventDefault();
    const response = await api.post("setar_primeira_nf/", estado);
    if (response.status === 200) {
      alert("TUDO CERTO!");
    }
  }
  return (
    <div className="cadastro-primeira-nf">
      <div className="page-title"> Primeira Nota Fiscal</div>
      <form className="form-content" onSubmit={(e) => submitForm(e)}>
        <div className="input-group">
          <span className="input-label">Município</span>
          <input
            type="text"
            className="form-input"
            onChange={({ target }) =>
              setEstado({ ...estado, municipio: target.value })
            }
          />
        </div>
        <div className="input-group">
          <span className="input-label">Documento</span>
          <input
            type="text"
            className="form-input"
            onChange={({ target }) =>
              setEstado({ ...estado, documento: target.value })
            }
          />
        </div>
        <div className="input-group">
          <span className="input-label">Senha</span>
          <input
            type="text"
            className="form-input"
            onChange={({ target }) =>
              setEstado({ ...estado, senha: target.value })
            }
          />
        </div>
        <div className="input-group">
          <span className="input-label">Primeira NF</span>
          <input
            type="text"
            className="form-input"
            onChange={({ target }) =>
              setEstado({ ...estado, primeiraNF: target.value })
            }
          />
        </div>
        <br />
        <br />
        <button className="form-button"> Enviar </button>
      </form>
    </div>
  );
}

export default CadastroPrimeiraNf;
