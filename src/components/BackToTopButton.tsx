"use client";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5">
      {isVisible && (
        <Button
          onClick={scrollToTop}
          variant="outline"
          className="rounded-full p-2 shadow-lg "
        >
          👆🏻
        </Button>
      )}
    </div>
  );
};

export default BackToTopButton;
