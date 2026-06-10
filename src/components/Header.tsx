import { IoMenu } from "react-icons/io5";

function Header() {
  return (
    <header className="absolute top-0 left-0 z-20 flex w-full items-center justify-between p-6">
      <img
        src="./logonanno.png"
        alt="Logo"
        className="h-10 object-contain"
      />

      <button>
        <IoMenu size={32} />
      </button>
    </header>
  );
}

export default Header;