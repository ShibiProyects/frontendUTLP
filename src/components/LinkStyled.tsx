import { Link } from "react-router-dom";

function LinkStyled({ href, children }: { href: string; children: string }) {
  return (
    <Link
      to={href}
      className="bg-purple-400  text-xl h-max w-max px-3 py-2 text-white"
    >
      {children}
    </Link>
  );
}
export default LinkStyled;
