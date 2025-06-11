
import { Shield, Zap, Users, BarChart3, Globe, Headphones } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built for speed with optimized performance and instant responses"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption and compliance"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless collaboration tools for teams of any size"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights and actionable data to drive growth"
  },
  {
    icon: Globe,
    title: "Global Scale",
    description: "Worldwide infrastructure ensuring reliability and performance"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock expert support whenever you need it"
  }
];

export const Features = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose Our SaaS Solutions?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge technology and designed for modern businesses
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group text-center p-6 rounded-2xl hover:bg-accent/10 transition-all duration-300 hover-scale">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
