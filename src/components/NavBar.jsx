import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="bg-zinc-700 flex justify-between px-20 py-4">
      <div>
        
      </div>
      <ul className="flex gap-x-4">
        <li>
          <Link
            to="/administrador"
            className="bg-slate-200 px-4 py-2 rounded-md shadow-lg transition duration-300 ease-in-out hover:bg-slate-300 hover:text-slate-700 transform hover:scale-105"
          >
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/administrador/difuntos/new"
            className="bg-slate-200 px-4 py-2 rounded-md shadow-lg transition duration-300 ease-in-out hover:bg-slate-300 hover:text-slate-700 transform hover:scale-105"
          >
            + DIFUNTO
          </Link>
        </li>
      </ul>
    </div>
  );
};
