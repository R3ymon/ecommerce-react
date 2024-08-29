import { NavLink } from "react-router-dom";
import { ShoppingCartContext } from "../../../Context/";
import { useContext } from "react";
import { ShoppingBagIcon } from "@heroicons/react/24/solid";

const NavBar = () => {
  const context = useContext(ShoppingCartContext);
  const activeStyle = " font-semibold  bg-gray-50 shadow rounded";

  const handleCategoryClick = (category) => {
    context.setSelectedCategory(category);
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-4 text-sm font-light">
      <ul className="flex items-center gap-3 ">
        <li className="font-semibold tracking-wider flex  text-lg border-4 border-lime-300 rounded px-2">
          <NavLink className="flex" to="/">
            <ShoppingBagIcon className="h-5 w-5 mt-0.5 mr-0.5 "></ShoppingBagIcon>{" "}
            Shopi
          </NavLink>
        </li>
        <li
          onClick={() => handleCategoryClick("All")}
          className=" hover:font-semibold  hover:bg-gray-50 hover:shadow rounded"
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li
          onClick={() => handleCategoryClick("Clothes")}
          className=" hover:font-semibold  hover:bg-gray-50 hover:shadow rounded"
        >
          <NavLink
            to="/clothes"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Clothes
          </NavLink>
        </li>
        <li
          onClick={() => handleCategoryClick("Electronics")}
          className=" hover:font-semibold  hover:bg-gray-50 hover:shadow rounded"
        >
          <NavLink
            to="/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Electronics
          </NavLink>
        </li>
        <li
          onClick={() => handleCategoryClick("Furnitures")}
          className=" hover:font-semibold  hover:bg-gray-50 hover:shadow rounded"
        >
          <NavLink
            to="/furnitures"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Furnitures
          </NavLink>
        </li>
        <li
          onClick={() => handleCategoryClick("Toys")}
          className=" hover:font-semibold  hover:bg-gray-50 hover:shadow rounded"
        >
          <NavLink
            to="/toys"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Toys
          </NavLink>
        </li>
        <li
          onClick={() => handleCategoryClick("Others")}
          className=" hover:font-semibold  hover:bg-gray-50 hover:shadow rounded"
        >
          <NavLink
            to="/others"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex gap-2 items-center">
        <li className="font-semibold">reymon@developer.com</li>
        <li className=" hover:font-semibold  hover:bg-gray-50 hover:shadow rounded">
          <NavLink
            to="/my-order"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mis Ordenes
          </NavLink>
        </li>
        <li className=" hover:font-semibold  hover:bg-gray-50 hover:shadow rounded">
          <NavLink
            to="/my-account"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Mi Cuenta
          </NavLink>
        </li>

        <li className=" hover:font-semibold  hover:bg-gray-50 hover:shadow rounded ">
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Log In
          </NavLink>
        </li>
        <li className="relative inline-flex items-center border  border-black rounded px-1 hover:bg-lime-300 transition duration-400 hover:border-2">
          <div
            onClick={() => context.openCheckOut()}
            className="text-xl ml-0.5 cursor-pointer "
          >
            🛒
          </div>

          <div className="absolute top-0 right-0 bg-red-500 text-white font-semibold text-xs rounded-full w-4 h-4 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
            {context.cartProducts.length}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
