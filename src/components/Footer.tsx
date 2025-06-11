
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Twitter, Github, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        {/* Newsletter section */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Get the latest updates on our products and exclusive offers
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button>
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </div>
        </div>
        
        {/* Footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Analytics Pro</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Team Sync</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Email Boost</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Schedule Master</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
          <div className="text-muted-foreground mb-4 md:mb-0">
            © 2024 SaaS Portfolio. All rights reserved.
          </div>
          
          <div className="flex gap-4">
            <Button variant="ghost" size="icon" className="hover-scale">
              <Twitter className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Github className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="icon" className="hover-scale">
              <Linkedin className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
