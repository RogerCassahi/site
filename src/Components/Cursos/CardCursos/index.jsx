import { Cursos } from "../../../Dados/db";
import "./style.scss";
export default function CardCursos() {
  return (
    <>
      {Cursos.map((curso, index) => {
        return (
          <li className="card-curso" key={index}>
            <div className="local">{curso.local}</div>
            <div className="nome">{curso.nome}</div>
            {curso.status === "Em andamento" && (
              <div className="status-andamento">{curso.status}</div>
            )}

            {curso.status === "Concluido" && (
              <div className="status-concluido">{curso.status}</div>
            )}
          </li>
        );
      })}
    </>
  );
}
