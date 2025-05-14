
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

type BackgroundColor = "white" | "hackergreen";

const BackgroundToggle = () => {
  const [bgColor, setBgColor] = useState<BackgroundColor>("white");

  useEffect(() => {
    // Apply the background color to the document body
    if (bgColor === "hackergreen") {
      document.body.classList.add("bg-hackergreen");
      document.body.classList.remove("bg-white");
      // Add a custom data attribute to indicate theme for component styling
      document.documentElement.setAttribute('data-theme', 'green');
    } else {
      document.body.classList.add("bg-white");
      document.body.classList.remove("bg-hackergreen");
      document.documentElement.setAttribute('data-theme', 'white');
    }
  }, [bgColor]);

  const toggleBackground = () => {
    setBgColor(prev => prev === "white" ? "hackergreen" : "white");
  };

  return (
    <Button 
      onClick={toggleBackground}
      variant="outline"
      size="icon"
      className={`fixed top-4 right-4 z-50 rounded-full shadow-md ${
        bgColor === "hackergreen" ? "bg-opacity-80 text-white border-green-400" : ""
      }`}
      aria-label={bgColor === "white" ? "Switch to green theme" : "Switch to white theme"}
    >
      {bgColor === "white" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem] text-green-300" />}
    </Button>
  );
};

export default BackgroundToggle;
