import Link from "next/link";

// LINK PARA CADA TIPO DE FORMULARIO DE ACUERDO A SU CATEGORIA

const Admin = () => {
  return (
    <div>
      <h2>AGREGAR NUEVO</h2>
      <ul>
        <li>
          <Link href="/admin/new/planetas">
            <a>Planeta</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/new/planetas-enanos">
            <a>Planeta Enano</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/new/satelites">
            <a>Satélite</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/new/asteroides">
            <a>Asteroide</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/new/cometas">
            <a>Cometa</a>
          </Link>
        </li>
        <li>
          <Link href="/admin/new/estrellas">
            <a>Estrella</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Admin;
