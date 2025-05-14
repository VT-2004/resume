
import { Card } from "@/components/ui/card";

const Footer = () => {
  return (
    <Card className="mt-12 p-4 text-center text-sm text-muted-foreground theme-card transition-colors duration-300 responsive-section">
      <p>© {new Date().getFullYear()} Vikas Hanamant Talawar - Resume</p>
    </Card>
  );
};

export default Footer;
