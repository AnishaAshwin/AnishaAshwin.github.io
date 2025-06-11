
import { PersonalSection } from "@/components/PersonalSection";
import { ProductShowcase } from "@/components/ProductShowcase";
import { ThemeToggle } from "@/components/ThemeToggle";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      {/* Left Section - Personal Info (Fixed) */}
      <div className="lg:w-1/2 w-full lg:fixed lg:h-screen">
        <PersonalSection />
      </div>
      
      {/* Right Section - Products (Scrollable) */}
      <div className="lg:w-1/2 w-full lg:ml-[50%] lg:border-l border-border">
        <ProductShowcase />
      </div>
    </div>
  );
};

export default Index;
