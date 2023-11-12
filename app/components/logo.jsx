import Image from "next/image";

const Logo = () => {
  return (
    <Image
      src={"/logo.png"}
      alt={"Logo image"}
      className="shadow-sm "
      width={200}
      height={100}
    />
  );
};

export default Logo;
