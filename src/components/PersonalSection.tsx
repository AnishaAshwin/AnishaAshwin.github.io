
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Mail, Users } from "lucide-react";
import { useState } from "react";

export const PersonalSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic would go here
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <div className="h-full min-h-screen flex flex-col justify-center items-center p-8 lg:p-12">
      <div className="max-w-md w-full space-y-8">
        {/* Photo */}
        <div className="text-center">
          <div className="w-48 h-48 mx-auto overflow-hidden  hover-scale">
            <img 
              src="/lovable-uploads/1.png"
              alt="Ann & Ash"
              className="w-full h-full object-cover shadow-2xl rounded-full"
            
            />
          </div>
        </div>

        {/* Intro */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">
           Ann & Ash
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
         Hey there! We’re a couple who builds MicroSaaS (and occasionally, tiny humans 🍼).  </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4">
          <Button variant="ghost" size="icon" className="hover-scale">
            <Twitter className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover-scale">
            <Github className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="hover-scale">
            <Users className="h-5 w-5" />
          </Button>
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-center">
            Follow Our Journey
          </h3>
          <p className="text-sm text-muted-foreground text-center">
            Subscribe to follow our journey and product launches
          </p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="text-center"
              required
            />
            <Button type="submit" className="w-full hover-scale">
              <Mail className="h-4 w-4 mr-2" />
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
