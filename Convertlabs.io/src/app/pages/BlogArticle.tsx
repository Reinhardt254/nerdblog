import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router';
import {
  ArrowLeft,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Link as LinkIcon,
  BookmarkPlus,
  ChevronRight,
  TrendingUp,
} from 'lucide-react';
import { blogPosts, categories } from '../data/blogData';

export default function BlogArticle() {
  const { slug } = useParams();
  const [readingProgress, setReadingProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);

  const article = blogPosts.find((post) => post.slug === slug);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">Article not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedArticles = blogPosts
    .filter((post) => post.category === article.category && post.id !== article.id)
    .slice(0, 3);

  const tableOfContents = [
    { id: 'intro', title: 'Introduction' },
    { id: 'why-ai', title: 'Why AI Matters for Lead Generation' },
    { id: 'key-strategies', title: 'Key Strategies to Implement' },
    { id: 'tools', title: 'Essential Tools & Technologies' },
    { id: 'case-study', title: 'Real-World Case Study' },
    { id: 'implementation', title: 'Implementation Roadmap' },
    { id: 'conclusion', title: 'Conclusion & Next Steps' },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-2xl font-semibold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent"
            >
              ConvertLabs
            </Link>
          </div>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="hover:text-blue-600 transition-colors">
            {categories.find((c) => c.id === article.category)?.name}
          </span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 truncate max-w-xs">{article.title}</span>
        </div>
      </div>

      {/* Article Hero */}
      <article className="max-w-7xl mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 mb-12">
            <div className="flex items-center gap-3">
              <span className="px-4 py-1.5 bg-gradient-to-r from-blue-50 to-violet-50 text-blue-600 text-sm font-medium rounded-full border border-blue-200">
                {categories.find((c) => c.id === article.category)?.icon}{' '}
                {categories.find((c) => c.id === article.category)?.name}
              </span>
              <span className="flex items-center gap-1.5 text-gray-600 text-sm">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">{article.excerpt}</p>

            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-14 h-14 rounded-full border-2 border-gray-100"
                />
                <div>
                  <p className="text-gray-900 font-medium">{article.author.name}</p>
                  <p className="text-gray-600 text-sm">
                    {new Date(article.publishDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric',
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2.5 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                  <BookmarkPlus className="w-5 h-5 text-gray-700" />
                </button>
                <div className="relative">
                  <button
                    onClick={() => setShowShareMenu(!showShareMenu)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    Share
                  </button>

                  {showShareMenu && (
                    <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-10">
                      <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-50 transition-colors text-left">
                        <Twitter className="w-4 h-4 text-blue-400" />
                        <span className="text-sm text-gray-700">Twitter</span>
                      </button>
                      <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-50 transition-colors text-left">
                        <Facebook className="w-4 h-4 text-blue-600" />
                        <span className="text-sm text-gray-700">Facebook</span>
                      </button>
                      <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-50 transition-colors text-left">
                        <Linkedin className="w-4 h-4 text-blue-700" />
                        <span className="text-sm text-gray-700">LinkedIn</span>
                      </button>
                      <button className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-50 transition-colors text-left">
                        <LinkIcon className="w-4 h-4 text-gray-600" />
                        <span className="text-sm text-gray-700">Copy link</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mb-12 rounded-3xl overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Article Content with Sticky TOC */}
        <div className="max-w-7xl mx-auto relative">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12">
            {/* Sticky Table of Contents */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                    Table of Contents
                  </h3>
                  <ul className="space-y-3">
                    {tableOfContents.map((section) => (
                      <li key={section.id}>
                        <a
                          href={`#${section.id}`}
                          className={`block text-sm transition-colors ${
                            activeSection === section.id
                              ? 'text-blue-600 font-medium'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {section.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Floating Share */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">Share Article</h4>
                  <div className="flex flex-col gap-2">
                    <button className="flex items-center gap-3 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                      <Twitter className="w-4 h-4 text-blue-400" />
                      <span className="text-sm text-gray-700">Twitter</span>
                    </button>
                    <button className="flex items-center gap-3 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left">
                      <Linkedin className="w-4 h-4 text-blue-700" />
                      <span className="text-sm text-gray-700">LinkedIn</span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9">
              <div className="max-w-3xl prose prose-lg">
                <div id="intro" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl mb-4 mt-0">Introduction</h2>
                  <p className="text-gray-700 leading-relaxed">
                    In today's rapidly evolving digital landscape, artificial intelligence has emerged as a
                    game-changing force in lead generation. Companies that leverage AI-powered tools and
                    strategies are seeing unprecedented improvements in lead quality, conversion rates, and
                    overall marketing ROI.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This comprehensive guide will walk you through the most effective AI-driven approaches to
                    generating high-quality leads in 2026 and beyond. Whether you're a startup or an
                    enterprise, these strategies are designed to be practical, scalable, and measurable.
                  </p>
                </div>

                {/* Inline CTA */}
                <div className="my-12 p-8 bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-gray-900 mb-2 mt-0">
                        Want to see these strategies in action?
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Get a personalized demo of how ConvertLabs uses AI to generate qualified leads for
                        your business.
                      </p>
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all">
                        Book a Demo
                      </button>
                    </div>
                  </div>
                </div>

                <div id="why-ai" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl mb-4">Why AI Matters for Lead Generation</h2>
                  <p className="text-gray-700 leading-relaxed">
                    Traditional lead generation methods are becoming increasingly inefficient. Manual
                    processes, generic messaging, and spray-and-pray tactics no longer deliver the results
                    businesses need. Here's why AI is transforming the landscape:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>
                      <strong>Predictive Lead Scoring:</strong> AI algorithms analyze thousands of data
                      points to identify which leads are most likely to convert
                    </li>
                    <li>
                      <strong>Hyper-Personalization:</strong> Deliver tailored content and messaging to each
                      prospect based on their behavior and preferences
                    </li>
                    <li>
                      <strong>24/7 Engagement:</strong> AI-powered chatbots and assistants engage prospects
                      instantly, any time of day
                    </li>
                    <li>
                      <strong>Automated Workflows:</strong> Streamline repetitive tasks and focus your team
                      on high-value activities
                    </li>
                  </ul>
                </div>

                {/* Quote Block */}
                <blockquote className="my-12 pl-6 border-l-4 border-blue-600 italic text-xl text-gray-700 bg-gray-50 py-6 pr-6 rounded-r-xl">
                  "AI-powered lead generation isn't just about efficiency—it's about fundamentally improving
                  the quality of every interaction with potential customers."
                </blockquote>

                <div id="key-strategies" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl mb-4">Key Strategies to Implement</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Based on our work with hundreds of B2B companies, here are the most impactful AI
                    strategies for lead generation:
                  </p>

                  <div className="space-y-8">
                    <div className="p-6 bg-white rounded-xl border border-gray-200">
                      <h3 className="text-xl text-gray-900 mb-3">1. Implement Intelligent Chatbots</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Deploy AI chatbots that can qualify leads, answer questions, and route prospects to
                        the right team members—all while capturing valuable data about their needs and pain
                        points.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-gray-200">
                      <h3 className="text-xl text-gray-900 mb-3">2. Use Predictive Analytics</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Leverage machine learning models to predict which accounts are most likely to buy,
                        when they'll buy, and what messaging will resonate with them.
                      </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl border border-gray-200">
                      <h3 className="text-xl text-gray-900 mb-3">3. Automate Content Personalization</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Create dynamic content that adapts based on visitor behavior, industry, company size,
                        and dozens of other attributes—automatically.
                      </p>
                    </div>
                  </div>
                </div>

                <div id="tools" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl mb-4">Essential Tools & Technologies</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The AI lead generation ecosystem includes several categories of tools:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>AI-powered CRM platforms with predictive scoring</li>
                    <li>Conversational AI and chatbot builders</li>
                    <li>Marketing automation with AI capabilities</li>
                    <li>Predictive analytics and data enrichment tools</li>
                    <li>Content personalization engines</li>
                  </ul>
                </div>

                <div id="case-study" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl mb-4">Real-World Case Study</h2>
                  <div className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Company:</strong> TechSolutions Inc., a mid-market B2B SaaS company
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Challenge:</strong> Low lead quality and poor conversion rates from inbound
                      marketing
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      <strong>Solution:</strong> Implemented AI-powered chatbot, predictive lead scoring, and
                      automated personalization
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Results:</strong>
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>287% increase in qualified leads</li>
                      <li>42% reduction in cost per lead</li>
                      <li>156% improvement in lead-to-customer conversion rate</li>
                      <li>ROI achieved within 3 months</li>
                    </ul>
                  </div>
                </div>

                <div id="implementation" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl mb-4">Implementation Roadmap</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Here's a practical 90-day roadmap for implementing AI-powered lead generation:
                  </p>

                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-lg text-gray-900 mb-2">Days 1-30: Foundation</h3>
                        <p className="text-gray-700">
                          Audit current lead gen processes, select AI tools, and integrate with existing
                          systems
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-violet-100 text-violet-600 rounded-xl flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-lg text-gray-900 mb-2">Days 31-60: Deploy & Test</h3>
                        <p className="text-gray-700">
                          Launch chatbots, implement scoring models, and begin A/B testing personalization
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div className="flex-1 pt-2">
                        <h3 className="text-lg text-gray-900 mb-2">Days 61-90: Optimize & Scale</h3>
                        <p className="text-gray-700">
                          Analyze results, refine strategies, and expand to additional channels
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div id="conclusion" className="scroll-mt-24 mb-12">
                  <h2 className="text-3xl mb-4">Conclusion & Next Steps</h2>
                  <p className="text-gray-700 leading-relaxed">
                    AI-powered lead generation is no longer a futuristic concept—it's a present-day
                    necessity for companies that want to stay competitive. By implementing the strategies
                    outlined in this guide, you can dramatically improve lead quality, reduce acquisition
                    costs, and accelerate revenue growth.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The key is to start small, measure results, and iterate based on data. Don't try to
                    implement everything at once. Pick one or two strategies, execute them well, and build
                    from there.
                  </p>
                </div>

                {/* Article End CTA */}
                <div className="my-16 p-10 bg-gradient-to-br from-blue-600 via-violet-600 to-blue-700 rounded-3xl text-white text-center">
                  <h3 className="text-3xl mb-4">Ready to Transform Your Lead Generation?</h3>
                  <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
                    See how ConvertLabs can help you implement these AI strategies and start generating
                    high-quality leads within weeks, not months.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button className="px-8 py-4 bg-white text-blue-600 rounded-full hover:shadow-xl transition-all font-medium">
                      Get Started Free
                    </button>
                    <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/20 transition-all font-medium">
                      Book a Demo
                    </button>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="my-12 p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200">
                  <div className="flex gap-6">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-20 h-20 rounded-full border-2 border-gray-200"
                    />
                    <div className="flex-1">
                      <h4 className="text-lg text-gray-900 mb-2">About {article.author.name}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {article.author.name} is a marketing strategist specializing in AI-powered growth
                        systems. With over 10 years of experience in B2B SaaS, they've helped dozens of
                        companies scale their lead generation and revenue.
                      </p>
                      <div className="flex gap-3">
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          Follow on Twitter
                        </a>
                        <span className="text-gray-300">•</span>
                        <a
                          href="#"
                          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                        >
                          View all articles
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="my-12">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <section className="max-w-7xl mx-auto mt-20 pt-12 border-t border-gray-200">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl">You May Also Like</h2>
            <div className="h-px flex-1 bg-gradient-to-r from-gray-200 to-transparent ml-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedArticles.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-blue-300 transition-all"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-medium rounded-full">
                      {categories.find((c) => c.id === post.category)?.icon}{' '}
                      {categories.find((c) => c.id === post.category)?.name}
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
                  <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="max-w-3xl mx-auto mt-20 mb-12">
          <div className="p-10 bg-gradient-to-br from-gray-50 to-white rounded-3xl border-2 border-gray-200 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-600 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span className="text-sm font-medium">Join Our Newsletter</span>
            </div>

            <h3 className="text-3xl text-gray-900 mb-4">Don't Miss Our Next Article</h3>
            <p className="text-gray-600 mb-6">
              Get weekly insights, case studies, and strategies delivered to your inbox. Join 10,000+
              marketers.
            </p>

            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-6 py-3 bg-white border border-gray-300 rounded-full outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-gray-900 placeholder:text-gray-400"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all whitespace-nowrap font-medium">
                  Subscribe
                </button>
              </div>
              <p className="text-sm text-gray-500 mt-3">No spam. Unsubscribe anytime.</p>
            </div>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 mt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-4">
                ConvertLabs
              </div>
              <p className="text-sm text-gray-400">
                AI-powered marketing platform helping B2B companies generate and convert leads at scale.
              </p>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">© 2026 ConvertLabs. All rights reserved.</p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
