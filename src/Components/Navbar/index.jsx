import { useContext } from "react";
import { NavLink } from "../NavLink";
import { ShoppingCartContext } from "../../Context";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  const { countProductsCart } = useContext(ShoppingCartContext);

  return (
    <nav className="flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-md font-normal bg-white">
      <ul className="flex items-center gap-4">
        <li className="text-lg font-semibold">
          <NavLink to="/">Shopi</NavLink>
        </li>
        <li>
          <NavLink to="/" activeSyle="selected">
            All
          </NavLink>
        </li>
        <li>
          <NavLink to="/mens-clothing" activeSyle="selected">
            Men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink to="/womens-clothing" activeSyle="selected">
            Women's clothing
          </NavLink>
        </li>
        <li>
          <NavLink to="/jewelery" activeSyle="selected">
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink to="/electronics" activeSyle="selected">
            Electronics
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-4">
        <li className="text-black/60">korels@platzi.com</li>
        <li>
          <NavLink to="my-orders" activeSyle="selected">
            My orders
          </NavLink>
        </li>
        <li>
          <NavLink to="my-account" activeSyle="selected">
            My account
          </NavLink>
        </li>
        <li>
          <NavLink to="sign-in" activeSyle="selected">
            Sign in
          </NavLink>
        </li>
        <li className="relative">
          <BsFillCartFill className="text-2xl" />
          <div className="-top-[7px] -right-[11px] absolute text-sm rounded-md bg-emerald-200 leading-none px-[3px] py-[2px]">
            {countProductsCart}
          </div>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
