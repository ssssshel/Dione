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
    <div className="w-full">
      {session ? (
        <div className="w-6/12 border-2 border-xiketic mx-auto">
          <div>
            <ul>
              <li>Conectado</li>
              <li>{session.user.name}</li>
              <li>{session.user.email} </li>
            </ul>
          </div>
          <h2>AGREGAR NUEVO</h2>
          <ul className="flex flex-col ">
            <li
              onClick={() => router.push("/admin/new/planetas")}
              className="bg-bluebell cursor-pointer text-white text-center hover:bg-lavander hover:text-xiketic "
            >
              Planeta
            </li>
            <li
              onClick={() => router.push("/admin/new/planetas-enanos")}
              className="bg-bluebell cursor-pointer text-white text-center hover:bg-lavander hover:text-xiketic "
            >
              Planeta Enano
            </li>
            <li
              onClick={() => router.push("/admin/new/satelites")}
              className="bg-bluebell cursor-pointer text-white text-center hover:bg-lavander hover:text-xiketic "
            >
              Satélite
            </li>
            <li
              onClick={() => router.push("/admin/new/asteroides")}
              className="bg-bluebell cursor-pointer text-white text-center hover:bg-lavander hover:text-xiketic "
            >
              Asteroide
            </li>
            <li
              onClick={() => router.push("/admin/new/cometas")}
              className="bg-bluebell cursor-pointer text-white text-center hover:bg-lavander hover:text-xiketic "
            >
              Cometa
            </li>
            <li
              onClick={() => router.push("/admin/new/estrellas")}
              className="bg-bluebell cursor-pointer text-white text-center hover:bg-lavander hover:text-xiketic "
            >
              Estrella
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
