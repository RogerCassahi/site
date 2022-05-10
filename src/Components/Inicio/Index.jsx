import CardApresentacao from "./CardApresentacao";
import Texto from "./Texto";
import './style.scss';

export default function PaginaInicio() {
  return (
    <div className="pagina-inicial">
      <Texto />
      <CardApresentacao />
    </div>
  );
}
