// components/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" right-0 left-0 bottom-0 text-center py-7">
      <span>
        Dibangun oleh{" "}
        <a
          href="https://github.com/kyyril"
          className="hover:text-blue-700 underline"
        >
          Kyyril
        </a>
        <a> dengan☕</a>
      </span>
    </footer>
  );
};

export default Footer;
