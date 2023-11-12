import Link from "next/link";

const NavLink = ({ link, content }) => {
  return (
    <li className="m-2 p-2">
      <Link className="custom-link-pseudo relative" href={link}>
        {" "}
        {content}{" "}
      </Link>
    </li>
  );
};

export default NavLink;
