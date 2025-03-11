
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Star, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Sample product data for the form
const productData = {
  'solar-panels': {
    name: 'Premium Monocrystalline Solar Panel',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=500&auto=format&fit=crop',
  },
  'inverters': {
    name: 'Hybrid Solar Inverter with MPPT',
    image: 'https://images.unsplash.com/photo-1559347429-b413a197542a?q=80&w=500&auto=format&fit=crop',
  },
  'batteries': {
    name: 'Lithium Iron Phosphate Battery',
    image: 'https://images.unsplash.com/photo-1515525941374-bdb06f80966e?q=80&w=500&auto=format&fit=crop',
  },
  'solar-kits': {
    name: 'Complete Solar Home System',
    image: 'https://images.unsplash.com/photo-1623227413711-25ee4388dae3?q=80&w=500&auto=format&fit=crop',
  }
};

const WriteReview = () => {
  const { productType, productId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [title, setTitle] = useState<string>('');
  const [reviewText, setReviewText] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [photos, setPhotos] = useState<File[]>([]);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Get product info based on URL parameters
  const product = productType ? productData[productType as keyof typeof productData] : null;
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (rating === 0) newErrors.rating = "Please select a rating";
    if (!title.trim()) newErrors.title = "Please enter a review title";
    if (reviewText.length < 10) newErrors.reviewText = "Review must be at least 10 characters";
    if (!name.trim()) newErrors.name = "Please enter your name";
    if (!email.trim()) newErrors.email = "Please enter your email";
    if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Please enter a valid email address";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files);
      setPhotos([...photos, ...fileArray].slice(0, 5)); // Limit to 5 photos
    }
  };
  
  const removePhoto = (index: number) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, this would submit to an API
      console.log({
        productId,
        productType,
        rating,
        title,
        reviewText,
        name,
        email,
        photos
      });
      
      toast({
        title: "Review Submitted",
        description: "Thank you for your feedback! Your review will be published soon.",
      });
      
      // Navigate back to product page after submission
      setTimeout(() => {
        navigate(`/products/${productType}`);
      }, 1500);
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Write a Review</h1>
        
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 bg-gray-100 rounded overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-500">Product ID: {productId}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <form onSubmit={handleSubmit}>
          <Card>
            <CardContent className="p-6 space-y-6">
              {/* Rating */}
              <div>
                <Label htmlFor="rating" className="text-base font-medium">
                  Overall Rating <span className="text-red-500">*</span>
                </Label>
                <div className="flex items-center gap-1 mt-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      size={32} 
                      className={`cursor-pointer ${
                        star <= (hoverRating || rating) 
                          ? 'text-amber-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {rating > 0 ? (
                      ['Poor', 'Fair', 'Good', 'Very Good', 'Excellent'][rating - 1]
                    ) : 'Click to rate'}
                  </span>
                </div>
                {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
              </div>
              
              {/* Review Title */}
              <div>
                <Label htmlFor="title" className="text-base font-medium">
                  Review Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="title"
                  placeholder="Summarize your experience"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1"
                />
                {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
              </div>
              
              {/* Review Text */}
              <div>
                <Label htmlFor="reviewText" className="text-base font-medium">
                  Your Review <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="reviewText"
                  placeholder="What did you like or dislike? How was your experience with the product?"
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="mt-1 min-h-32"
                />
                <p className="text-sm text-gray-500 mt-1">
                  {reviewText.length}/500 characters (minimum 10)
                </p>
                {errors.reviewText && <p className="text-red-500 text-sm mt-1">{errors.reviewText}</p>}
              </div>
              
              {/* Add Photos */}
              <div>
                <Label className="text-base font-medium">Add Photos (Optional)</Label>
                <div className="mt-2">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {photos.map((photo, index) => (
                      <div 
                        key={index} 
                        className="relative h-20 w-20 bg-gray-100 rounded overflow-hidden group"
                      >
                        <img 
                          src={URL.createObjectURL(photo)} 
                          alt={`Preview ${index}`}
                          className="h-full w-full object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removePhoto(index)}
                          className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <span className="text-white text-xs">Remove</span>
                        </button>
                      </div>
                    ))}
                    
                    {photos.length < 5 && (
                      <label className="flex items-center justify-center h-20 w-20 border-2 border-dashed border-gray-300 rounded cursor-pointer hover:border-gray-400 transition-colors">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <Upload size={24} className="text-gray-400" />
                      </label>
                    )}
                  </div>
                  <p className="text-sm text-gray-500">
                    You can upload up to 5 photos (max 5MB each)
                  </p>
                </div>
              </div>
              
              {/* About You */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="text-lg font-medium mb-4">About You</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="font-medium">
                      Name <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="mt-1"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="font-medium">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email (not published)"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>
              </div>
              
              <div className="pt-4">
                <Button type="submit" className="bg-solar-blue hover:bg-solar-blue-dark min-w-32">
                  Submit Review
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default WriteReview;
