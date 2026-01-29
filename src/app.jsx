import { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, Star, ArrowRight, Leaf, Truck, Shield, Phone, Facebook, Instagram, Twitter, ChevronRight, Calendar, User, Clock, Filter, Grid3X3, List } from 'lucide-react';

// Plant data
const featuredPlants = [
  { id: 1, name: 'Monstera Deliciosa', category: 'Indoor', price: 45, rating: 4.9, image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=500&fit=crop', isNew: true },
  { id: 2, name: 'Fiddle Leaf Fig', category: 'Indoor', price: 65, rating: 4.8, image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=400&h=500&fit=crop', isNew: false },
  { id: 3, name: 'Snake Plant', category: 'Low Light', price: 35, rating: 4.9, image: 'https://images.unsplash.com/photo-1599598425947-630e94d3a01b?w=400&h=500&fit=crop', isNew: false },
  { id: 4, name: 'Pothos Golden', category: 'Hanging', price: 25, rating: 4.7, image: 'https://images.unsplash.com/photo-1596724857861-d277d5e25133?w=400&h=500&fit=crop', isNew: true },
];

const allPlants = [
  ...featuredPlants,
  { id: 5, name: 'Peace Lily', category: 'Indoor', price: 40, rating: 4.8, image: 'https://images.unsplash.com/photo-1593691509543-c55ce32e045c?w=400&h=500&fit=crop', isNew: false },
  { id: 6, name: 'Rubber Plant', category: 'Indoor', price: 55, rating: 4.7, image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?w=400&h=500&fit=crop', isNew: false },
  { id: 7, name: 'ZZ Plant', category: 'Low Light', price: 38, rating: 4.9, image: 'https://images.unsplash.com/photo-1632207691143-643e2a9a9361?w=400&h=500&fit=crop', isNew: true },
  { id: 8, name: 'Spider Plant', category: 'Hanging', price: 22, rating: 4.6, image: 'https://images.unsplash.com/photo-1572688484279-a2e897067b2d?w=400&h=500&fit=crop', isNew: false },
  { id: 9, name: 'Aloe Vera', category: 'Succulent', price: 28, rating: 4.8, image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?w=400&h=500&fit=crop', isNew: false },
  { id: 10, name: 'Jade Plant', category: 'Succulent', price: 32, rating: 4.7, image: 'https://images.unsplash.com/photo-1509423355108-74d69741a2c9?w=400&h=500&fit=crop', isNew: false },
  { id: 11, name: 'Boston Fern', category: 'Indoor', price: 42, rating: 4.5, image: 'https://images.unsplash.com/photo-1596326215216-4e0f5c7c5b6d?w=400&h=500&fit=crop', isNew: true },
  { id: 12, name: 'Calathea', category: 'Indoor', price: 48, rating: 4.6, image: 'https://images.unsplash.com/photo-1600417148543-515eed049e9d?w=400&h=500&fit=crop', isNew: false },
];

const categories = [
  { id: 1, name: 'Indoor Plants', count: '120+', image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=400&h=300&fit=crop' },
  { id: 2, name: 'Outdoor Plants', count: '85+', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop' },
  { id: 3, name: 'Succulents', count: '60+', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=400&h=300&fit=crop' },
  { id: 4, name: 'Flowering', count: '45+', image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop' },
];

const testimonials = [
  { id: 1, name: 'Sarah Johnson', role: 'Plant Enthusiast', text: 'The quality of plants from Greenleaf is exceptional. My Monstera arrived healthy and has been thriving for months!', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
  { id: 2, name: 'Michael Chen', role: 'Interior Designer', text: 'I recommend Greenleaf to all my clients. Their selection and care guides make plant parenting so much easier.', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
  { id: 3, name: 'Emma Davis', role: 'Gardening Blogger', text: 'Fast shipping, beautiful packaging, and the plants are always in perfect condition. My go-to nursery!', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
];

const blogPosts = [
  { id: 1, title: '10 Easy Care Plants for Beginners', excerpt: 'Start your plant journey with these low-maintenance beauties that thrive in any home.', image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=600&h=400&fit=crop', author: 'Sarah Green', date: 'Jan 15, 2024', readTime: '5 min read', category: 'Plant Care' },
  { id: 2, title: 'How to Create an Indoor Jungle', excerpt: 'Transform your living space into a lush green paradise with our expert styling tips.', image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop', author: 'Mike Plant', date: 'Jan 12, 2024', readTime: '7 min read', category: 'Home Decor' },
  { id: 3, title: 'The Benefits of Houseplants', excerpt: 'Discover how indoor plants can improve your air quality, mood, and productivity.', image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&h=400&fit=crop', author: 'Dr. Emma Leaf', date: 'Jan 10, 2024', readTime: '4 min read', category: 'Wellness' },
  { id: 4, title: 'Succulent Care 101', excerpt: 'Everything you need to know about keeping your succulents happy and healthy.', image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=600&h=400&fit=crop', author: 'Jade Cactus', date: 'Jan 8, 2024', readTime: '6 min read', category: 'Plant Care' },
  { id: 5, title: 'Best Plants for Small Spaces', excerpt: 'Maximize your greenery even in the tiniest apartments with these compact favorites.', image: 'https://images.unsplash.com/photo-1599598425947-630e94d3a01b?w=600&h=400&fit=crop', author: 'Tiny Green', date: 'Jan 5, 2024', readTime: '5 min read', category: 'Home Decor' },
  { id: 6, title: 'Seasonal Plant Care Guide', excerpt: 'Adjust your plant care routine for winter, spring, summer, and fall.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop', author: 'Season Sage', date: 'Jan 3, 2024', readTime: '8 min read', category: 'Plant Care' },
];

export function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(2);
  const [activeTab, setActiveTab] = useState<'home' | 'shop' | 'blogs'>('home');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredPlants = selectedCategory === 'All' 
    ? allPlants 
    : allPlants.filter(plant => plant.category === selectedCategory);

  const renderHome = () => (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 hero-pattern">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#2D5A3D]/10 rounded-full">
                <Leaf className="w-4 h-4 text-[#2D5A3D]" />
                <span className="text-sm font-medium text-[#2D5A3D]">Welcome to Greenleaf</span>
              </div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-[#1A1A1A] leading-tight">
                Bring Nature<br />
                <span className="gradient-text">Into Your Home</span>
              </h1>
              <p className="text-lg text-[#6B7280] max-w-lg leading-relaxed">
                Discover our curated collection of beautiful houseplants, succulents, and outdoor plants. Transform your space with the perfect green companion.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setActiveTab('shop')}
                  className="btn-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2"
                >
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="btn-outline px-8 py-4 rounded-full font-semibold">
                  View Collection
                </button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <p className="text-3xl font-bold text-[#2D5A3D]">500+</p>
                  <p className="text-sm text-[#6B7280]">Plant Varieties</p>
                </div>
                <div className="w-px h-12 bg-[#E5E7EB]"></div>
                <div>
                  <p className="text-3xl font-bold text-[#2D5A3D]">10k+</p>
                  <p className="text-sm text-[#6B7280]">Happy Customers</p>
                </div>
                <div className="w-px h-12 bg-[#E5E7EB]"></div>
                <div>
                  <p className="text-3xl font-bold text-[#2D5A3D]">4.9</p>
                  <p className="text-sm text-[#6B7280]">Average Rating</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=600&h=700&fit=crop" 
                  alt="Monstera Plant"
                  className="w-full max-w-lg mx-auto rounded-3xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#E07A5F]/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#2D5A3D]/20 rounded-full blur-2xl"></div>
              
              <div className="absolute bottom-8 -left-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-[#2D5A3D]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">Plant Care</p>
                    <p className="text-sm text-[#6B7280]">Free guides included</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#FAF8F5] hover-lift">
              <div className="w-12 h-12 bg-[#2D5A3D] rounded-xl flex items-center justify-center flex-shrink-0">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">Free Shipping</h3>
                <p className="text-sm text-[#6B7280]">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#FAF8F5] hover-lift">
              <div className="w-12 h-12 bg-[#2D5A3D] rounded-xl flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">30-Day Guarantee</h3>
                <p className="text-sm text-[#6B7280]">Money back guarantee</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#FAF8F5] hover-lift">
              <div className="w-12 h-12 bg-[#2D5A3D] rounded-xl flex items-center justify-center flex-shrink-0">
                <Leaf className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">Healthy Plants</h3>
                <p className="text-sm text-[#6B7280]">Hand-picked & inspected</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 rounded-2xl bg-[#FAF8F5] hover-lift">
              <div className="w-12 h-12 bg-[#2D5A3D] rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">Expert Support</h3>
                <p className="text-sm text-[#6B7280]">24/7 plant care advice</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#2D5A3D]/10 text-[#2D5A3D] rounded-full text-sm font-medium mb-4">Categories</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">Shop by Category</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">Explore our wide range of plant categories and find the perfect addition to your home or garden.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div 
                key={category.id} 
                onClick={() => { setActiveTab('shop'); setSelectedCategory(category.name.split(' ')[0]); }}
                className="category-card group cursor-pointer h-80"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="font-display text-xl font-semibold text-white mb-1">{category.name}</h3>
                  <p className="text-white/80 text-sm">{category.count} Products</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Plants Section */}
      <section id="plants" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="inline-block px-4 py-2 bg-[#2D5A3D]/10 text-[#2D5A3D] rounded-full text-sm font-medium mb-4">Featured</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A]">Popular Plants</h2>
            </div>
            <button 
              onClick={() => setActiveTab('shop')}
              className="btn-outline px-6 py-3 rounded-full font-medium flex items-center gap-2 self-start sm:self-auto"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPlants.map((plant) => (
              <div key={plant.id} className="plant-card group">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img 
                    src={plant.image} 
                    alt={plant.name}
                    className="plant-image w-full h-full object-cover"
                  />
                  {plant.isNew && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-[#E07A5F] text-white text-xs font-semibold rounded-full">
                      New
                    </span>
                  )}
                  <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#E07A5F] hover:text-white">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="absolute bottom-4 left-4 right-4 py-3 bg-white/90 backdrop-blur-sm rounded-xl font-semibold text-[#2D5A3D] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 hover:bg-[#2D5A3D] hover:text-white">
                    Add to Cart
                  </button>
                </div>
                <div className="p-5">
                  <p className="text-sm text-[#6B7280] mb-1">{plant.category}</p>
                  <h3 className="font-display text-lg font-semibold text-[#1A1A1A] mb-2">{plant.name}</h3>
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-bold text-[#2D5A3D]">${plant.price}</p>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#E07A5F] text-[#E07A5F]" />
                      <span className="text-sm font-medium text-[#1A1A1A]">{plant.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=700&fit=crop" 
                alt="Plant care"
                className="w-full rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-[#2D5A3D] p-8 rounded-3xl text-white">
                <p className="text-4xl font-bold mb-2">15+</p>
                <p className="text-white/80">Years of Experience</p>
              </div>
            </div>
            <div className="space-y-6">
              <span className="inline-block px-4 py-2 bg-[#2D5A3D]/10 text-[#2D5A3D] rounded-full text-sm font-medium">About Us</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A]">We're Passionate About Plants</h2>
              <p className="text-[#6B7280] leading-relaxed">
                Founded in 2008, Greenleaf Nursery has grown from a small local shop to one of the most trusted online plant retailers. We believe everyone deserves to experience the joy of growing plants.
              </p>
              <p className="text-[#6B7280] leading-relaxed">
                Our team of horticulturists carefully selects and nurtures each plant before it reaches your doorstep. We're committed to sustainable practices and helping you create your own urban jungle.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-[#2D5A3D]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">Organic</p>
                    <p className="text-sm text-[#6B7280]">100% Natural</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#2D5A3D]/10 rounded-xl flex items-center justify-center">
                    <Shield className="w-6 h-6 text-[#2D5A3D]" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">Quality</p>
                    <p className="text-sm text-[#6B7280]">Premium Grade</p>
                  </div>
                </div>
              </div>
              <button className="btn-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 mt-4">
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-[#2D5A3D]/10 text-[#2D5A3D] rounded-full text-sm font-medium mb-4">Testimonials</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card p-8 hover-lift">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E07A5F] text-[#E07A5F]" />
                  ))}
                </div>
                <p className="text-[#1A1A1A] leading-relaxed mb-6">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-[#1A1A1A]">{testimonial.name}</p>
                    <p className="text-sm text-[#6B7280]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="newsletter-bg rounded-3xl p-12 sm:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Join Our Plant Community</h2>
              <p className="text-white/80 mb-8">Subscribe to our newsletter for plant care tips, exclusive offers, and new arrival updates.</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-8 py-4 bg-white text-[#2D5A3D] rounded-full font-semibold hover:bg-[#F5F0E8] transition-colors">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  const renderShop = () => (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Shop Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#2D5A3D]/10 text-[#2D5A3D] rounded-full text-sm font-medium mb-4">Shop</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">All Plants</h1>
          <p className="text-[#6B7280] max-w-2xl mx-auto">Browse our complete collection of beautiful, healthy plants ready for your home.</p>
        </div>

        {/* Filters & View Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 pb-8 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-2 flex-wrap">
            <Filter className="w-5 h-5 text-[#6B7280]" />
            <span className="text-[#6B7280] mr-2">Filter:</span>
            {['All', 'Indoor', 'Outdoor', 'Succulent', 'Hanging', 'Low Light'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat 
                    ? 'bg-[#2D5A3D] text-white' 
                    : 'bg-[#F5F0E8] text-[#6B7280] hover:bg-[#2D5A3D]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-[#2D5A3D] text-white' : 'bg-[#F5F0E8] text-[#6B7280]'}`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-[#2D5A3D] text-white' : 'bg-[#F5F0E8] text-[#6B7280]'}`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-[#6B7280] mb-6">Showing {filteredPlants.length} plants</p>

        {/* Products Grid/List */}
        <div className={viewMode === 'grid' ? 'grid sm:grid-cols-2 lg:grid-cols-4 gap-8' : 'space-y-6'}>
          {filteredPlants.map((plant) => (
            <div key={plant.id} className={`plant-card group ${viewMode === 'list' ? 'flex gap-6' : ''}`}>
              <div className={`relative overflow-hidden ${viewMode === 'list' ? 'w-48 h-48 flex-shrink-0' : 'aspect-[4/5]'}`}>
                <img 
                  src={plant.image} 
                  alt={plant.name}
                  className={`plant-image w-full h-full object-cover ${viewMode === 'list' ? 'rounded-2xl' : ''}`}
                />
                {plant.isNew && (
                  <span className="absolute top-4 left-4 px-3 py-1 bg-[#E07A5F] text-white text-xs font-semibold rounded-full">
                    New
                  </span>
                )}
                <button className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#E07A5F] hover:text-white">
                  <Heart className="w-5 h-5" />
                </button>
                {viewMode === 'grid' && (
                  <button className="absolute bottom-4 left-4 right-4 py-3 bg-white/90 backdrop-blur-sm rounded-xl font-semibold text-[#2D5A3D] opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 hover:bg-[#2D5A3D] hover:text-white">
                    Add to Cart
                  </button>
                )}
              </div>
              <div className={`p-5 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-center' : ''}`}>
                <p className="text-sm text-[#6B7280] mb-1">{plant.category}</p>
                <h3 className="font-display text-lg font-semibold text-[#1A1A1A] mb-2">{plant.name}</h3>
                <div className="flex items-center gap-4">
                  <p className="text-xl font-bold text-[#2D5A3D]">${plant.price}</p>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-[#E07A5F] text-[#E07A5F]" />
                    <span className="text-sm font-medium text-[#1A1A1A]">{plant.rating}</span>
                  </div>
                </div>
                {viewMode === 'list' && (
                  <button className="mt-4 px-6 py-3 bg-[#2D5A3D] text-white rounded-full font-semibold hover:bg-[#234a30] transition-colors w-fit">
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBlogs = () => (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#2D5A3D]/10 text-[#2D5A3D] rounded-full text-sm font-medium mb-4">Blog</span>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1A1A] mb-4">Plant Care Tips & Guides</h1>
          <p className="text-[#6B7280] max-w-2xl mx-auto">Learn everything about plant care, home decoration, and creating your own urban jungle.</p>
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer">
            <img 
              src={blogPosts[0].image} 
              alt={blogPosts[0].title}
              className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <span className="inline-block px-3 py-1 bg-[#E07A5F] text-white text-sm font-medium rounded-full mb-4">
                {blogPosts[0].category}
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">{blogPosts[0].title}</h2>
              <p className="text-white/80 mb-6 max-w-2xl">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-white/70">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{blogPosts[0].date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{blogPosts[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="blog-card group cursor-pointer">
              <div className="relative overflow-hidden aspect-[16/10] mb-6">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="blog-image w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-[#2D5A3D] text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-xl font-semibold text-[#1A1A1A] group-hover:text-[#2D5A3D] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-[#6B7280] pt-2">
                  <div className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter CTA */}
        <div className="mt-16 bg-[#2D5A3D] rounded-3xl p-8 sm:p-12 text-center">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">Never Miss a Post</h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">Subscribe to get the latest plant care tips, exclusive offers, and gardening inspiration delivered to your inbox.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="px-8 py-4 bg-white text-[#2D5A3D] rounded-full font-semibold hover:bg-[#F5F0E8] transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#F5F0E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div 
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setActiveTab('home')}
            >
              <div className="w-10 h-10 bg-[#2D5A3D] rounded-full flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-display text-2xl font-bold text-[#1A1A1A]">Greenleaf</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => setActiveTab('home')}
                className={`nav-link font-medium transition-colors ${activeTab === 'home' ? 'text-[#2D5A3D]' : 'text-[#6B7280] hover:text-[#2D5A3D]'}`}
              >
                Home
              </button>
              <button 
                onClick={() => setActiveTab('shop')}
                className={`nav-link font-medium transition-colors ${activeTab === 'shop' ? 'text-[#2D5A3D]' : 'text-[#6B7280] hover:text-[#2D5A3D]'}`}
              >
                Shop Now
              </button>
              <button 
                onClick={() => setActiveTab('blogs')}
                className={`nav-link font-medium transition-colors ${activeTab === 'blogs' ? 'text-[#2D5A3D]' : 'text-[#6B7280] hover:text-[#2D5A3D]'}`}
              >
                Blogs
              </button>
              <a href="#about" onClick={() => setActiveTab('home')} className="nav-link text-[#6B7280] font-medium hover:text-[#2D5A3D]">About</a>
              <a href="#contact" onClick={() => setActiveTab('home')} className="nav-link text-[#6B7280] font-medium hover:text-[#2D5A3D]">Contact</a>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-[#F5F0E8] rounded-full transition-colors">
                <Search className="w-5 h-5 text-[#1A1A1A]" />
              </button>
              <button className="relative p-2 hover:bg-[#F5F0E8] rounded-full transition-colors">
                <ShoppingBag className="w-5 h-5 text-[#1A1A1A]" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#E07A5F] text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                className="md:hidden p-2 hover:bg-[#F5F0E8] rounded-full transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-[#F5F0E8]">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }} className={`block w-full text-left py-2 font-medium ${activeTab === 'home' ? 'text-[#2D5A3D]' : 'text-[#6B7280]'}`}>Home</button>
              <button onClick={() => { setActiveTab('shop'); setIsMenuOpen(false); }} className={`block w-full text-left py-2 font-medium ${activeTab === 'shop' ? 'text-[#2D5A3D]' : 'text-[#6B7280]'}`}>Shop Now</button>
              <button onClick={() => { setActiveTab('blogs'); setIsMenuOpen(false); }} className={`block w-full text-left py-2 font-medium ${activeTab === 'blogs' ? 'text-[#2D5A3D]' : 'text-[#6B7280]'}`}>Blogs</button>
              <button onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }} className="block w-full text-left py-2 text-[#6B7280] font-medium">About</button>
              <button onClick={() => { setActiveTab('home'); setIsMenuOpen(false); }} className="block w-full text-left py-2 text-[#6B7280] font-medium">Contact</button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      {activeTab === 'home' && renderHome()}
      {activeTab === 'shop' && renderShop()}
      {activeTab === 'blogs' && renderBlogs()}

      {/* Footer */}
      <footer id="contact" className="bg-[#1A1A1A] text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div className="space-y-6">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
                <div className="w-10 h-10 bg-[#2D5A3D] rounded-full flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-white" />
                </div>
                <span className="font-display text-2xl font-bold">Greenleaf</span>
              </div>
              <p className="text-gray-400 leading-relaxed">Bringing nature into your home with carefully curated plants and expert care advice.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2D5A3D] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2D5A3D] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#2D5A3D] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li><button onClick={() => setActiveTab('home')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Home</button></li>
                <li><button onClick={() => setActiveTab('shop')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Shop</button></li>
                <li><button onClick={() => setActiveTab('home')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> About Us</button></li>
                <li><button onClick={() => setActiveTab('blogs')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Blog</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Categories</h4>
              <ul className="space-y-4">
                <li><button onClick={() => { setActiveTab('shop'); setSelectedCategory('Indoor'); }} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Indoor Plants</button></li>
                <li><button onClick={() => { setActiveTab('shop'); setSelectedCategory('Outdoor'); }} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Outdoor Plants</button></li>
                <li><button onClick={() => { setActiveTab('shop'); setSelectedCategory('Succulent'); }} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> Succulents</button></li>
                <li><button onClick={() => { setActiveTab('shop'); setSelectedCategory('All'); }} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"><ChevronRight className="w-4 h-4" /> All Plants</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 text-[#2D5A3D]" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 text-[#2D5A3D]">@</div>
                  <span>hello@greenleaf.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 mt-0.5 text-[#2D5A3D]">📍</div>
                  <span>123 Garden Street<br />New York, NY 10001</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 Greenleaf Nursery. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
