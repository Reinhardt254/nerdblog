import { useState } from 'react';
import { Link } from 'react-router';
import { Search, ArrowRight, Clock, ChevronDown, ExternalLink } from 'lucide-react';
import { blogPosts, categories, trendingTags } from '../data/blogData';
import logoImage from 'figma:asset/f32121a5963360475ce9ba554d6fb24e605c1a9a.png';

export default function BlogListing() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'trending'>('latest');

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const mainFeatured = featuredPosts[0];
  const secondaryFeatured = featuredPosts.slice(1, 3);
  const popularPosts = blogPosts.filter(post => post.popular);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Ribbon */}
      <div className="bg-[#5956E9] text-white py-2.5">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-center gap-3">
          <span className="text-sm font-medium">Just a click away, explore ConvertLabs in real-time</span>
          <button className="flex items-center gap-2 px-4 py-1.5 bg-white text-[#5956E9] hover:bg-gray-100 rounded-md text-sm font-medium transition-colors">
            Live Demo
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#1B1B1B] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center">
              <img src={logoImage} alt="ConvertLabs" className="h-8" />
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Services</a>
              <a href="#" className="text-sm text-white font-medium">Blog</a>
              <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-sm text-white hover:text-gray-300 transition-colors font-medium">
              Login
            </button>
            <button className="px-5 py-2 bg-[#5956E9] text-white text-sm rounded-md hover:bg-[#4845d6] transition-colors font-medium">
              Start Free Trial
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-violet-50 to-white">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content and Email Signup */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
                  <span className="text-gray-900">Transform Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent">
                    Cleaning Business
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-600 max-w-xl font-normal leading-relaxed">
                  Expert strategies, insider knowledge, and practical tools to take your cleaning business to new heights
                </p>
              </div>

              {/* Email Signup */}
              <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Get Expert Cleaning Tips</h3>
                <p className="text-sm text-gray-600 mb-4 font-normal">
                  Subscribe to receive weekly insights, checklists, and exclusive guides
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none text-gray-900 placeholder:text-gray-400 focus:border-[#5956E9] focus:ring-2 focus:ring-[#5956E9]/20 font-normal"
                  />
                  <button className="px-6 py-3 bg-[#5956E9] text-white rounded-lg hover:bg-[#4845d6] transition-colors whitespace-nowrap font-semibold">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2 font-normal">
                  No spam, unsubscribe anytime
                </p>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1758272421772-5b08f08dc2ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Professional cleaner at work"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-violet-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Tags with Search Bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  !selectedCategory
                    ? 'bg-[#5956E9] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Articles
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-[#5956E9] text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-1.5">{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Search Bar - Right Side */}
            <div className="w-full lg:w-auto lg:min-w-[320px]">
              <label className="block text-sm font-medium text-gray-700 mb-2">Search Articles</label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Restaurant Cleaning Guide, Deep Cleaning Tips..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-11 pr-4 py-2.5 bg-gray-50 rounded-lg border border-gray-200 focus:border-[#5956E9] focus:ring-2 focus:ring-[#5956E9]/20 outline-none transition-all text-sm text-gray-900 placeholder:text-gray-400"
                />
              </div>
            </div>
          </div>

          {/* Sort Options */}
          <div className="flex items-center gap-2 mt-4">
            <span className="text-sm text-gray-500">Sort by:</span>
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="appearance-none pl-4 pr-10 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 font-medium outline-none cursor-pointer hover:border-gray-300 transition-colors"
              >
                <option value="latest">Latest</option>
                <option value="popular">Popular</option>
                <option value="trending">Trending</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles - Asymmetrical Layout */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">Featured Articles</h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Large Featured Card */}
          <Link
            to={`/blog/${mainFeatured.slug}`}
            className="md:row-span-2 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 hover:shadow-2xl transition-all duration-500"
          >
            <img
              src="https://images.unsplash.com/photo-1758272421751-963195322eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              alt={mainFeatured.title}
              className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
            />
            <div className="relative p-8 md:p-12 h-full flex flex-col justify-end min-h-[500px]">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="px-3 py-1 bg-blue-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                    Featured
                  </span>
                  <span className="flex items-center gap-1.5 text-white/80 text-sm">
                    <Clock className="w-4 h-4" />
                    {mainFeatured.readTime}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl text-white group-hover:text-blue-200 transition-colors">
                  {mainFeatured.title}
                </h3>
                <p className="text-gray-300 text-lg">
                  {mainFeatured.excerpt}
                </p>
                <div className="flex items-center gap-3 pt-4">
                  <img
                    src={mainFeatured.author.avatar}
                    alt={mainFeatured.author.name}
                    className="w-10 h-10 rounded-full border-2 border-white/20"
                  />
                  <div>
                    <p className="text-white text-sm font-medium">{mainFeatured.author.name}</p>
                    <p className="text-gray-400 text-xs">{new Date(mainFeatured.publishDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Secondary Featured Cards */}
          {secondaryFeatured.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-50 to-violet-50 border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300"
            >
              <div className="p-6 space-y-4">
                <img
                  src={index === 0 ? "https://images.unsplash.com/photo-1758272421615-d1f76c306178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080" : "https://images.unsplash.com/photo-1579141132886-e86d831034ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white text-blue-600 text-xs font-medium rounded-full border border-blue-200">
                    {categories.find(c => c.id === post.category)?.name}
                  </span>
                  <span className="flex items-center gap-1.5 text-gray-600 text-sm">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-gray-900 text-sm font-medium">{post.author.name}</p>
                    <p className="text-gray-500 text-xs">{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Posts - Horizontal Layout */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">Popular Posts</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-6"></div>
          </div>

          <div className="grid gap-6">
            {popularPosts.map((post, index) => {
              const cleaningImages = [
                "https://images.unsplash.com/photo-1758273238795-c284e5ae09b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1758273238698-c98a45a8df9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1654138641985-fe5a85c0af60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1758272421995-e993f97fae22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
                "https://images.unsplash.com/photo-1758273238738-9410f7e9d53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
              ];

              return (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all"
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image on Left */}
                    <div className="sm:w-80 flex-shrink-0 relative overflow-hidden">
                      <img
                        src={cleaningImages[index % cleaningImages.length]}
                        alt={post.title}
                        className="w-full h-48 sm:h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded-full">
                          {categories.find(c => c.id === post.category)?.icon} {categories.find(c => c.id === post.category)?.name}
                        </span>
                      </div>
                    </div>

                    {/* Details on Right */}
                    <div className="flex-1 p-6 flex flex-col justify-center">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                          <span>•</span>
                          <span>{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <h3 className="text-2xl text-gray-900 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between pt-3">
                          <div className="flex items-center gap-3">
                            <img
                              src={post.author.avatar}
                              alt={post.author.name}
                              className="w-10 h-10 rounded-full"
                            />
                            <div>
                              <p className="text-sm text-gray-900 font-medium">{post.author.name}</p>
                              <p className="text-xs text-gray-500">Author</p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl font-bold">
            {selectedCategory
              ? categories.find(c => c.id === selectedCategory)?.name
              : 'Latest Articles'}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-6"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => {
            const cleaningImages = [
              "https://images.unsplash.com/photo-1758272421751-963195322eaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "https://images.unsplash.com/photo-1758273238903-b5ca5f9988d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "https://images.unsplash.com/photo-1758273238795-c284e5ae09b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "https://images.unsplash.com/photo-1758273238698-c98a45a8df9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "https://images.unsplash.com/photo-1758272421615-d1f76c306178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "https://images.unsplash.com/photo-1758272421995-e993f97fae22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "https://images.unsplash.com/photo-1758273238594-9a9d6c20eaa2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "https://images.unsplash.com/photo-1758273238415-01ec03d9ef27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "https://images.unsplash.com/photo-1758273238738-9410f7e9d53c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "https://images.unsplash.com/photo-1654138641985-fe5a85c0af60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "https://images.unsplash.com/photo-1579141132886-e86d831034ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
              "https://images.unsplash.com/photo-1559781309-e3562fb80e9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            ];

            return (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cleaningImages[index % cleaningImages.length]}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded-full">
                      {categories.find(c => c.id === post.category)?.icon} {categories.find(c => c.id === post.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                  <h3 className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1">
                      <p className="text-sm text-gray-900 font-medium">{post.author.name}</p>
                      <p className="text-xs text-gray-500">{new Date(post.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory(null);
              }}
              className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {/* Lead Capture CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-violet-600 to-blue-700"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span className="text-sm text-white font-medium">Join 10,000+ home service professionals</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight">
              Get Expert Cleaning Tips & Strategies
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto font-normal">
              Subscribe to receive weekly insights, checklists, and exclusive guides directly to your inbox.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/95 backdrop-blur-sm rounded-full outline-none text-gray-900 placeholder:text-gray-500 focus:ring-2 focus:ring-white/50 font-normal"
                />
                <button className="px-8 py-4 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors whitespace-nowrap font-semibold">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-blue-100 mt-4 font-normal">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <img src={logoImage} alt="ConvertLabs" className="h-7 brightness-0 invert" />
              </div>
              <p className="text-sm text-gray-400">
                Your trusted resource for home service success. Expert guides and practical strategies.
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Categories</h4>
              <ul className="space-y-2 text-sm">
                {categories.slice(0, 4).map((cat) => (
                  <li key={cat.id}>
                    <button onClick={() => setSelectedCategory(cat.id)} className="hover:text-white transition-colors">
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Checklists</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2026 ConvertLabs. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
