import Link from "next/link";

const Header = () => {
  return (
    <h2 className="font2 text-2xl md:text-4xl fontFamily-smooch tracking-tight md:tracking-tighter leading-tight mb-20 mt-8">
      <Link href="/" className="hover:underline">
        Kevin Merck
      </Link>
    </h2>
  );
};

export default Header;
