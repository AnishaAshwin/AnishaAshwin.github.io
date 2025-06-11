
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, DollarSign } from "lucide-react";
import { useState } from "react";
import { ProductModal } from "./ProductModal";

const products = [
  {
    id: 1,
    name: "TaskFlow Pro",
    description: "Simple project management for small teams",
    url: "https://taskflow.example.com",
    mrr: 1250,
    status: "Profitable",
    statusColor: "bg-green-500",
    detailedDescription: "TaskFlow Pro helps small teams organize their projects with intuitive kanban boards, time tracking, and team collaboration features. Built specifically for remote teams who need simple yet powerful project management.",
    images: ["screenshot1.png", "screenshot2.png"],
    videoUrl: "demo-video.mp4",
    features: [
      "Kanban boards with drag-and-drop",
      "Time tracking and reporting",
      "Team collaboration tools",
      "Real-time notifications",
      "Mobile-responsive design"
    ],
    testimonials: [
      {
        name: "Sarah Johnson",
        text: "TaskFlow Pro completely changed how our team collaborates. The simplicity is exactly what we needed.",
        rating: 5,
        company: "DesignStudio Co"
      },
      {
        name: "Mike Chen",
        text: "Best project management tool for small teams. Clean interface and powerful features.",
        rating: 5,
        company: "DevTeam Inc"
      }
    ]
  },
  {
    id: 2,
    name: "EmailCraft",
    description: "Beautiful email templates in minutes",
    url: "https://emailcraft.example.com",
    mrr: 450,
    status: "Growing",
    statusColor: "bg-blue-500",
    detailedDescription: "Create stunning email templates without any design skills. EmailCraft provides drag-and-drop email builder with responsive templates for newsletters, marketing campaigns, and transactional emails.",
    images: ["email1.png", "email2.png", "email3.png"],
    features: [
      "Drag-and-drop email builder",
      "50+ responsive templates",
      "Custom branding options",
      "A/B testing capabilities",
      "Analytics and tracking"
    ],
    testimonials: [
      {
        name: "Emma Wilson",
        text: "EmailCraft saved us hours of work. The templates are beautiful and professional.",
        rating: 4,
        company: "Marketing Plus"
      }
    ]
  },
  {
    id: 3,
    name: "QuickMetrics",
    description: "Analytics dashboard for SaaS founders",
    url: "https://quickmetrics.example.com",
    mrr: 0,
    status: "Just Launched",
    statusColor: "bg-purple-500",
    detailedDescription: "Get insights into your SaaS business with custom dashboards, real-time metrics, and automated reports. Perfect for indie hackers and small SaaS companies.",
    images: ["dashboard1.png"],
    videoUrl: "quickmetrics-demo.mp4",
    features: [
      "Custom dashboard builder",
      "Real-time data sync",
      "Automated reporting",
      "Revenue tracking",
      "User analytics"
    ],
    testimonials: []
  },
  {
    id: 4,
    name: "CodeSnippet Hub",
    description: "Organize and share your code snippets",
    url: "https://codesnippet.example.com",
    mrr: 75,
    status: "In Beta",
    statusColor: "bg-orange-500",
    detailedDescription: "A developer's best friend for organizing, sharing, and discovering code snippets. Supports syntax highlighting for 100+ languages with team collaboration features.",
    features: [
      "Syntax highlighting for 100+ languages",
      "Team sharing and collaboration",
      "Search and tagging system",
      "VS Code extension",
      "API for integration"
    ],
    testimonials: [
      {
        name: "Alex Rivera",
        text: "Finally, a place to organize all my code snippets. The search feature is incredibly fast.",
        rating: 5,
        company: "FreelanceDev"
      }
    ]
  },
  {
    id: 5,
    name: "SaaS Starter Kit",
    description: "Complete boilerplate for new SaaS projects",
    url: "https://saaskit.example.com",
    mrr: 890,
    status: "Profitable",
    statusColor: "bg-green-500",
    detailedDescription: "Skip months of development with our complete SaaS boilerplate. Includes authentication, payments, admin dashboard, and deployment configurations.",
    features: [
      "Complete authentication system",
      "Stripe payments integration",
      "Admin dashboard",
      "Email templates",
      "Deployment ready"
    ],
    testimonials: [
      {
        name: "David Kim",
        text: "Saved me 3 months of development time. The code quality is excellent.",
        rating: 5,
        company: "StartupBuilder"
      },
      {
        name: "Lisa Zhang",
        text: "Best investment for launching my SaaS quickly. Great documentation too.",
        rating: 4,
        company: "TechVenture"
      }
    ]
  }
];

export const ProductShowcase = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <>
      <div className="h-full overflow-y-auto p-8 lg:p-12">
        <div className="max-w-2xl mx-auto space-y-6">
          {/* Header */}
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold text-foreground">
              Our MicroSaaS Products
            </h2>
            <p className="text-muted-foreground">
              Building useful software, one product at a time
            </p>
          </div>

          {/* Products List */}
          <div className="space-y-4">
            {products.map((product) => (
              <Card 
                key={product.id} 
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover-scale"
                onClick={() => setSelectedProduct(product)}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {product.name}
                        </h3>
                        <Badge 
                          variant="secondary" 
                          className={`${product.statusColor} text-white text-xs`}
                        >
                          {product.status}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-green-600">
                          <DollarSign className="h-4 w-4" />
                          <span className="font-medium">
                            ${product.mrr.toLocaleString()} MRR
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="ml-4">
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center pt-8">
            <p className="text-sm text-muted-foreground">
              Total MRR: <span className="font-semibold text-primary">
                ${products.reduce((sum, product) => sum + product.mrr, 0).toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};
