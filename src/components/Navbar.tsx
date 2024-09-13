import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              className="text-2xl font-extrabold hover:text-secondary/50"
              href="/mhs"
            >
              AkuMahasigma
            </Link>
          </div>
          <div className="ml-auto">
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
