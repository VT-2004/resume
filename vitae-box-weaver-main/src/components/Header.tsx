
import { Card } from "@/components/ui/card";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Header = () => {
  return (
    <Card className="mb-6 p-4 md:p-6 shadow-md theme-card transition-colors duration-300 responsive-section">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Vikas Hanamant Talawar</h1>
          <h2 className="text-lg md:text-xl text-muted-foreground">
            Computer Science Engineering
          </h2>
          <p className="text-sm text-muted-foreground">
            Specialized in Artificial Intelligence in Data Science
          </p>
          <p className="text-sm text-muted-foreground">
            Bachelor of Technology
          </p>
          <p className="text-sm text-muted-foreground">
            Indian Institute Of Information Technology, Manipur
          </p>
        </div>
        
        <div className="flex flex-col gap-2 mt-2 md:mt-0">
          <div className="flex items-center gap-2 hover:translate-x-1 transition-all duration-200">
            <Phone size={16} className="shrink-0" />
            <a href="tel:+916360681710" className="hover:underline">+91-6360681710</a>
          </div>
          <div className="flex items-center gap-2 hover:translate-x-1 transition-all duration-200">
            <Mail size={16} className="shrink-0" />
            <a href="mailto:talawarh316@gmail.com" className="hover:underline">
              talawarh316@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2 hover:translate-x-1 transition-all duration-200">
            <Github size={16} className="shrink-0" />
            <a href="https://github.com/dashboard" className="hover:underline">GitHub Profile</a>
          </div>
          <div className="flex items-center gap-2 hover:translate-x-1 transition-all duration-200">
            <Linkedin size={16} className="shrink-0" />
            <a href="https://www.linkedin.com/in/vikas-talawar-407a61257/" className="hover:underline">LinkedIn Profile</a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Header;
