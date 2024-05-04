import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <ul className="h-74  w-52 flex justify-center items-center flex-col gap-2  m-4  cursor-pointer border-r-2 ">
      <NavLink to="/">Woman’s Fashion</NavLink>
      <NavLink to="/">Men’s Fashion</NavLink>
      <NavLink to="/">Electronics</NavLink>
      <NavLink to="/"> Home & NavLinkfestyle</NavLink>
      <NavLink to="/">Medicine</NavLink>
      <NavLink to="/">Sports & Outdoor</NavLink>
      <NavLink to="/">Baby’s & Toys</NavLink>
      <NavLink to="/">Groceries & Pets</NavLink>
      <NavLink to="/">Health & Beauty</NavLink>
    </ul>
  );
}

export default Sidebar;
