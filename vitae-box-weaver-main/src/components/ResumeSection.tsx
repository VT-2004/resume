
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ReactNode } from "react";

interface ResumeSectionProps {
  title: string;
  children: ReactNode;
}

const ResumeSection = ({ title, children }: ResumeSectionProps) => {
  return (
    <Card className="mb-6 shadow-md theme-card transition-colors duration-300 responsive-section">
      <CardHeader className="pb-2">
        <CardTitle className="text-2xl font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default ResumeSection;
