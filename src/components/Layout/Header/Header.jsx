"use server";
import EnterButton from "@/components/EnterButton";
import LoginModal from "@/components/EnterButton/LoginModal";

const Header = () => {
  return (
    <>
      <header className="w-full mb-2">
        <nav className="w-full flex items-center justify-end">
          <EnterButton />
        </nav>
      </header>
      <LoginModal />
    </>
  );
};

export default Header;
