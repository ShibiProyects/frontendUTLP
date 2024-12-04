import { Link } from "react-router-dom";

function LinkStyled({
  href,
  children,
  primary,
}: {
  href: string;
  children: string;
  primary?: boolean;
}) {
  return (
    <Link
      to={href}
      className={`text-xl h-max w-max px-3 py-2 border-[2px] font-semi rounded-xl ${
        primary ? " bg-primary text-white" : "  border-secondary text-black"
      }`}
    >
      {children}
    </Link>
  );
}
export default LinkStyled;
