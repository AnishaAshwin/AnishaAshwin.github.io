
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, DollarSign, Star, Play } from "lucide-react";

interface ProductModalProps {
  product: {
    id: number;
    name: string;
    description: string;
    url: string;
    mrr: number;
    status: string;
    statusColor: string;
    detailedDescription?: string;
    images?: string[];
    videoUrl?: string;
    testimonials?: {
      name: string;
      text: string;
      rating: number;
      company?: string;
    }[];
    features?: string[];
  };
  isOpen: boolean;
  onClose: () => void;
}

export const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-4">
            <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
            <Badge 
              variant="secondary" 
              className={`${product.statusColor} text-white`}
            >
              {product.status}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Description */}
          <div>
            <p className="text-lg text-muted-foreground mb-4">{product.description}</p>
            {product.detailedDescription && (
              <p className="text-sm text-muted-foreground">{product.detailedDescription}</p>
            )}
          </div>

          {/* Video Section */}
          {product.videoUrl && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Product Demo</h3>
              <div className="relative bg-muted rounded-lg aspect-video flex items-center justify-center">
                <Button variant="outline" size="lg">
                  <Play className="h-6 w-6 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
          )}

          {/* Images Section */}
          {product.images && product.images.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Screenshots</h3>
              <div className="grid grid-cols-2 gap-4">
                {product.images.map((image, index) => (
                  <div key={index} className="bg-muted rounded-lg aspect-video flex items-center justify-center">
                    <span className="text-muted-foreground">Screenshot {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Key Features</h3>
              <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Testimonials */}
          {product.testimonials && product.testimonials.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What Users Say</h3>
              <div className="space-y-4">
                {product.testimonials.map((testimonial, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-muted/50">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < testimonial.rating
                              ? "text-yellow-500 fill-yellow-500"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm mb-2">"{testimonial.text}"</p>
                    <div className="text-xs text-muted-foreground">
                      — {testimonial.name}
                      {testimonial.company && `, ${testimonial.company}`}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* MRR and Links */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-1 text-green-600">
              <DollarSign className="h-5 w-5" />
              <span className="font-semibold text-lg">
                ${product.mrr.toLocaleString()} MRR
              </span>
            </div>
            <Button onClick={() => window.open(product.url, '_blank')}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Visit Product
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
