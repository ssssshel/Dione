import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

// LINK PARA CADA TIPO DE FORMULARIO DE ACUERDO A SU CATEGORIA

const Admin = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status == "unauthenticated") {
    return (
      <div>
        <h1>No has iniciado sesión como administrador</h1>

        <Link href="/">
          <a>Inicio</a>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {session ? (
        <div>
          <div>
            <ul>
              <li>Conectado</li>
              <li>{session.user.name}</li>
              <li>{session.user.email} </li>
            </ul>
          </div>
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
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </div>
      ) : (
        <div>
          <h2>No has iniciado sesión</h2>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Admin;
