import { useState } from "react";
import BackgroundToggle from "../components/BackgroundToggle";
import Header from "../components/Header";
import ResumeSection from "../components/ResumeSection";
import Footer from "../components/Footer";
import { Badge } from "../components/ui/badge";
import { Separator } from "../components/ui/separator";
import { Button } from "../components/ui/button";
import { ExternalLink } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen pb-8 transition-colors duration-300">
      <BackgroundToggle />
      
      <div className="container mx-auto px-4 py-5 md:py-10">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-1">
            <ResumeSection title="Education">
              <div className="space-y-4">
                <div className="p-2 md:p-3 rounded-lg responsive-subsection">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h3 className="font-semibold">Indian Institute of Information Technology, Manipur</h3>
                    <span className="text-sm whitespace-nowrap">2022 - Present</span>
                  </div>
                  <p className="text-sm">Computer Science Engineering Specialized in Artificial Intelligence in Data Science</p>
                  <div className="flex justify-end">
                    <p className="text-sm font-medium">CPI: 7.16</p>
                  </div>
                </div>
                
                <Separator className="theme-separator" />
                
                <div className="p-2 md:p-3 rounded-lg responsive-subsection">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h3 className="font-semibold">Narayana Junior College, Cheemasandra, Karnataka</h3>
                    <span className="text-sm whitespace-nowrap">2020 - 2022</span>
                  </div>
                  <p className="text-sm">The Department of Pre-University Education, Government of Karnataka</p>
                  <div className="flex justify-end">
                    <p className="text-sm font-medium">Percentage: 89.7</p>
                  </div>
                </div>
                
                <Separator className="theme-separator" />
                
                <div className="p-2 md:p-3 rounded-lg responsive-subsection">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h3 className="font-semibold">Sanganabasava International Residential School, Kavalagi</h3>
                    <span className="text-sm whitespace-nowrap">2019 - 2020</span>
                  </div>
                  <p className="text-sm">Central Board of Secondary Education</p>
                  <div className="flex justify-end">
                    <p className="text-sm font-medium">Percentage: 90.6</p>
                  </div>
                </div>
              </div>
            </ResumeSection>
            
            <ResumeSection title="Technical Skills">
              <div className="space-y-4">
                <div className="p-2 md:p-3 rounded-lg responsive-subsection">
                  <h3 className="font-semibold mb-2">Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["C", "C++", "Python", "JavaScript", "HTML", "CSS", "LaTeX"].map((skill) => (
                      <Badge key={skill} variant="outline" className="transition-colors">{skill}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="p-2 md:p-3 rounded-lg responsive-subsection">
                  <h3 className="font-semibold mb-2">Developer Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["VSCode", "Git", "GitHub"].map((tool) => (
                      <Badge key={tool} variant="outline" className="transition-colors">{tool}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="p-2 md:p-3 rounded-lg responsive-subsection">
                  <h3 className="font-semibold mb-2">Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "Bootstrap"].map((framework) => (
                      <Badge key={framework} variant="outline" className="transition-colors">{framework}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="p-2 md:p-3 rounded-lg responsive-subsection">
                  <h3 className="font-semibold mb-2">Cloud/Databases</h3>
                  <div className="flex flex-wrap gap-2">
                    {["MySQL", "MongoDB", "Firebase"].map((db) => (
                      <Badge key={db} variant="outline" className="transition-colors">{db}</Badge>
                    ))}
                  </div>
                </div>
                
                <div className="p-2 md:p-3 rounded-lg responsive-subsection">
                  <h3 className="font-semibold mb-2">Soft Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Leadership", "Public Speaking", "Self-learning", "Presentation", "Adaptability", "Management"].map((skill) => (
                      <Badge key={skill} variant="outline" className="transition-colors">{skill}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </ResumeSection>
            
            <ResumeSection title="Certifications">
              <div className="space-y-4">
                <div className="p-2 md:p-3 rounded-lg responsive-subsection">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h3 className="font-semibold">The Joy of Computing Using Python</h3>
                    <span className="text-sm whitespace-nowrap">November 2024</span>
                  </div>
                  <p className="text-sm">NPTEL Online Certification</p>
                  <div className="flex justify-end mt-2">
                    <a
  href="https://drive.google.com/file/d/1xZz4uLEB0p__ICa0XigyLEg7vRu3pWig/view?usp=drive_link"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button variant="outline" size="sm" className="text-sm flex items-center gap-1 responsive-button">
    Certificate <ExternalLink size={14} />
  </Button>
</a>

                  </div>
                </div>
                
                <Separator className="theme-separator" />
                
                <div className="p-2 md:p-3 rounded-lg responsive-subsection">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                    <h3 className="font-semibold">Introduction to MongoDB</h3>
                    <span className="text-sm whitespace-nowrap">January 2024</span>
                  </div>
                  <p className="text-sm">MongoDB University</p>
                  <div className="flex justify-end mt-2">
                    <a
                     href="https://drive.google.com/file/d/1BRITzXSQvaxB4UJtDdGZ7ZYSmOF4J6De/view?usp=drive_link"
                    target="_blank"
                    rel="noopener noreferrer"
>
                  <Button variant="outline" size="sm" className="text-sm flex items-center gap-1 responsive-button">
                       Certificate <ExternalLink size={14} />
                  </Button>
                </a>

                  </div>
                </div>
              </div>
            </ResumeSection>
          </div>
          
          <div className="lg:col-span-2">
            <ResumeSection title="Profile">
              <div className="p-2 md:p-3 rounded-lg responsive-subsection">
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Aspiring Software Developer | Enthusiastic Learner | Tech Explorer</li>
                  <li>Passionate and motivated fresher with a strong foundation in computer science and hands-on experience in coding and web development.</li>
                  <li>Languages: C, C++, Python, JavaScript, React, Node.js, HTML, CSS, LaTeX</li>
                  <li>Familiar with web technologies including HTML, CSS, and REST APIs, with experience in building responsive and dynamic web applications.</li>
                  <li>Basic knowledge in machine learning concepts such as supervised learning, classification, regression, and model evaluation using Python libraries like scikit-learn and pandas.</li>
                  <li>Quick learner with a keen interest in open-source contributions, real-world projects, and emerging technologies like AI and cloud computing.</li>
                </ul>
              </div>
            </ResumeSection>
            
            <ResumeSection title="Projects">
              <div className="space-y-5">
                <div className="p-2 md:p-4 rounded-lg responsive-subsection">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="font-semibold">Image Generation Web Application (Full Stack Project)</h3>
                    <a href="https://preview--visual-audio-alchemy.lovable.app/" className="text-sm text-blue-600 hover:underline whitespace-nowrap hover:text-blue-400 transition-colors">Live Link</a>
                  </div>
                  <p className="text-sm font-medium mb-2">Tech Stack: React, Next.js, Supabase, Gemini API, Tailwind CSS, MongoDB</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Built a full-stack image generation website using React, Next.js, Supabase, and Gemini API.</li>
                    <li>Implemented real-time image generation from text prompts with smooth UI/UX.</li>
                    <li>Ensured fast, high-quality image rendering with scalable backend using MongoDB.</li>
                    <li>Integrated secure download functionality for generated images.</li>
                  </ul>
                </div>
                
                <Separator className="theme-separator" />
                
                <div className="p-2 md:p-4 rounded-lg responsive-subsection">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="font-semibold">Object Detection Model</h3>
                    <a href="https://preview--picture-seer-object-find.lovable.app/" className="text-sm text-blue-600 hover:underline whitespace-nowrap hover:text-blue-400 transition-colors">Live Link</a>
                  </div>
                  <p className="text-sm font-medium mb-2">Tech Stack: React, Next.js, Supabase, Gemini API, Tailwind CSS, MongoDB</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Identifies and draws bounding boxes around specific objects within images or videos.</li>
                    <li>Employs computer vision algorithms, often leveraging deep learning architectures.</li>
                    <li>Aims to automate the process of locating and categorizing objects visually.</li>
                    <li>Performance is typically measured by accuracy metrics like mAP and inference speed.</li>
                    <li>Has diverse applications across fields like autonomous driving, security, and robotics.</li>
                  </ul>
                </div>
                
                <Separator className="theme-separator" />
                
                <div className="p-2 md:p-4 rounded-lg responsive-subsection">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                    <h3 className="font-semibold">Hotel Management Web-API</h3>
                    <a href="https://github.com/VT-2004/hotle-mmagagement-web-API" className="text-sm text-blue-600 hover:underline whitespace-nowrap hover:text-blue-400 transition-colors">Live Link</a>
                  </div>
                  <p className="text-sm font-medium mb-2">Technologies used: HTML, CSS, JavaScript, React Js, MongoDB</p>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Full-stack website for hotel room booking and management (React, Node.js, MongoDB).</li>
                    <li>Intuitive front-end for registration, availability, and payments (HTML, CSS, JavaScript).</li>
                    <li>Secure user authentication and admin dashboard for hotel operations.</li>
                    <li>RESTful APIs integrated for seamless data exchange between front-end and back-end.</li>
                    <li>Deployed online (e.g., Render) for live testing and demonstration.</li>
                  </ul>
                </div>
              </div>
            </ResumeSection>
          </div>
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
