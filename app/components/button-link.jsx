import Link from "next/link";

const ButtonLink = ({ link, content }) => {
  return (
    <Link
      href={link}
      className="btn bg-gradient-TS text-black font-bold hover:bg-gradient-EP "
    >
      {" "}
      {content}{" "}
    </Link>
  );
};

export default ButtonLink;
