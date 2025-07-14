"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Award,
  Clock,
  Star,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Linkedin,
  Camera,
  Film,
  Scissors,
  Palette,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { VideoModal } from "@/components/video-modal"; // Import the new VideoModal component

export default function VideoEditorPortfolio() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const [currentVideoUrl, setCurrentVideoUrl] = useState(""); // State for current video URL

  const allProjects = [
    {
      title: "Brand Commercial",
      category: "Commercial",
      duration: "2:30",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail:
        "https://res.cloudinary.com/dhvp7kton/video/upload/v1752517046/119400-717695274_tiny_t1vcfm.mp4", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/f4s9ItDy7eo?autoplay=1", // Example YouTube embed URL
      orientation: "landscape",
    },
    {
      title: "Instagram Reel",
      category: "Social Media",
      duration: "0:30",
      thumbnail: "/placeholder.svg?height=400&width=300",
      gifThumbnail: "/placeholder.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      orientation: "portrait",
    },
    {
      title: "Music Video",
      category: "Music",
      duration: "3:45",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/s.gif",
      youtubeEmbedUrl: "https://www.youtube.com/embed/5rlKxDscqKg?autoplay=1",
      orientation: "landscape",
    },
    {
      title: "TikTok Campaign",
      category: "Social Media",
      duration: "0:15",
      thumbnail: "/placeholder.svg?height=400&width=300",
      gifThumbnail: "/placeholder.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      orientation: "portrait",
    },
    {
      title: "Documentary",
      category: "Documentary",
      duration: "45:00",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/placeholder.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      orientation: "landscape",
    },
    {
      title: "Vertical Ad",
      category: "Commercial",
      duration: "1:00",
      thumbnail: "/placeholder.svg?height=400&width=300",
      gifThumbnail: "/placeholder.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      orientation: "portrait",
    },
    {
      title: "Corporate Video",
      category: "Corporate",
      duration: "5:20",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/placeholder.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      orientation: "landscape",
    },
    {
      title: "Short Film",
      category: "Film",
      duration: "12:15",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/placeholder.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      orientation: "landscape",
    },
    // Additional projects for load more
    {
      title: "YouTube Intro",
      category: "Social Media",
      duration: "0:10",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/placeholder.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      orientation: "landscape",
    },
    {
      title: "Product Demo",
      category: "Commercial",
      duration: "1:45",
      thumbnail: "/placeholder.svg?height=400&width=300",
      gifThumbnail: "/placeholder.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      orientation: "portrait",
    },
    {
      title: "Event Highlight",
      category: "Corporate",
      duration: "3:20",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/placeholder.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      orientation: "landscape",
    },
    {
      title: "Podcast Teaser",
      category: "Social Media",
      duration: "0:45",
      thumbnail: "/placeholder.svg?height=400&width=300",
      gifThumbnail: "/placeholder.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      orientation: "portrait",
    },
    {
      title: "Training Video",
      category: "Corporate",
      duration: "8:30",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/placeholder.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
      orientation: "landscape",
    },
  ];

  const displayedProjects = showAllProjects
    ? allProjects
    : allProjects.slice(0, 8);

  const openVideoModal = (url: string) => {
    setCurrentVideoUrl(url);
    setIsModalOpen(true);
  };

  const closeVideoModal = () => {
    setIsModalOpen(false);
    setCurrentVideoUrl("");
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Film className="h-8 w-8 text-red-500" />
            <span className="text-xl font-bold">Alex Chen</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="hover:text-red-500 transition-colors">
              Home
            </Link>
            <Link
              href="#portfolio"
              className="hover:text-red-500 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              href="#services"
              className="hover:text-red-500 transition-colors"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="hover:text-red-500 transition-colors"
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-red-500 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          <Button className="hidden md:block bg-red-600 hover:bg-red-700">
            Get Quote
          </Button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[73px] left-0 right-0 bg-black/95 backdrop-blur-md border-b border-gray-800 z-40">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link
              href="#home"
              className="hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#portfolio"
              className="hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#services"
              className="hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#about"
              className="hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#contact"
              className="hover:text-red-500 transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-red-600 hover:bg-red-700 w-fit">
              Get Quote
            </Button>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 min-h-screen flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/60 z-10" />
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-40"
            onLoadedData={(e) => {
              e.currentTarget.play().catch(console.error);
            }}
          >
            <source src="/showreel.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container mx-auto px-4 relative z-20 pb-7 pt-2.5">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600">
              Professional Video Editor
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Bringing Your
              <span className="text-red-500"> Vision</span>
              <br />
              to Life
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Award-winning video editor with 8+ years of experience creating
              compelling content for brands, films, and digital platforms. Let's
              transform your raw footage into cinematic masterpieces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#portfolio">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-lg px-8"
                >
                  <Play className="mr-2 h-5 w-5" />
                  View My Work
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-lg px-8 bg-transparent"
                >
                  Connect with Me
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">500+</div>
                <div className="text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">50+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">8+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-900 pb-[60px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600">
              Featured Work
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore my latest video editing projects across various industries
              and styles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
            {displayedProjects.map((project, index) => (
              <Card
                key={index}
                className={`bg-gray-800 border-gray-700 overflow-hidden group hover:scale-105 transition-transform duration-300 ${
                  project.orientation === "portrait" ? "row-span-2" : ""
                }`}
              >
                <div className="relative">
                  {project.gifThumbnail ? (
                    project.gifThumbnail.endsWith(".mp4") ? (
                      <video
                        src={project.gifThumbnail}
                        autoPlay
                        loop
                        muted
                        playsInline
                        width={project.orientation === "landscape" ? 400 : 300}
                        height={project.orientation === "landscape" ? 300 : 400}
                        className={`w-full object-cover ${
                          project.orientation === "landscape" ? "h-48" : "h-80"
                        }`}
                      />
                    ) : (
                      <Image
                        src={project.gifThumbnail}
                        alt={project.title}
                        width={project.orientation === "landscape" ? 400 : 300}
                        height={project.orientation === "landscape" ? 300 : 400}
                        unoptimized
                        className={`w-full object-cover ${
                          project.orientation === "landscape" ? "h-48" : "h-80"
                        }`}
                      />
                    )
                  ) : (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      width={project.orientation === "landscape" ? 400 : 300}
                      height={project.orientation === "landscape" ? 300 : 400}
                      className={`w-full object-cover ${
                        project.orientation === "landscape" ? "h-48" : "h-80"
                      }`}
                    />
                  )}

                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-red-600 hover:bg-red-700"
                      onClick={() => openVideoModal(project.youtubeEmbedUrl)}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch
                    </Button>
                  </div>
                  <Badge className="absolute top-4 left-4 bg-red-600">
                    {project.category}
                  </Badge>
                  <div className="absolute bottom-4 right-4 bg-black/70 px-2 py-1 rounded text-sm">
                    {project.duration}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400">
                    Professional video editing with cinematic color grading and
                    smooth transitions
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Section */}
          <div className="text-center mt-12">
            {!showAllProjects && (
              <>
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 mb-4"
                  onClick={() => setShowAllProjects(true)}
                >
                  Load More Work
                </Button>
                <div className="text-gray-400 text-sm">
                  Showing 8 of {allProjects.length} projects
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600">
              What I Offer
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">My Services</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive video editing solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Scissors className="h-8 w-8" />,
                title: "Video Editing",
                description:
                  "Professional cutting, trimming, and sequencing of your footage",
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Color Grading",
                description:
                  "Cinematic color correction and grading for visual impact",
              },
              {
                icon: <Camera className="h-8 w-8" />,
                title: "Motion Graphics",
                description:
                  "Custom animations and motion graphics integration",
              },
              {
                icon: <Film className="h-8 w-8" />,
                title: "Post Production",
                description:
                  "Complete post-production workflow from raw to final",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gray-900 border-gray-800 p-6 text-center hover:bg-gray-800 transition-colors"
              >
                <div className="text-red-500 mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gray-900 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Ready to Start Your Project?
                </h3>
                <p className="text-gray-400 mb-6">
                  Get a custom quote for your video editing needs. Fast
                  turnaround, professional quality, and unlimited revisions
                  included.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    24-48h delivery
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Premium quality
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-lg px-8"
                >
                  Get Free Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600">
              Client Reviews
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Clients Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Marketing Director",
                company: "TechCorp",
                content:
                  "Alex transformed our raw footage into a compelling brand story. The attention to detail and creative vision exceeded our expectations.",
                rating: 5,
              },
              {
                name: "Mike Rodriguez",
                role: "Film Producer",
                company: "Independent Films",
                content:
                  "Working with Alex was a game-changer for our documentary. The editing brought emotional depth and perfect pacing to our story.",
                rating: 5,
              },
              {
                name: "Emma Davis",
                role: "Content Creator",
                company: "Social Media Agency",
                content:
                  "Fast turnaround, professional quality, and great communication. Alex understands what works for social media platforms.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700 p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600">
                About Me
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Passionate About
                <span className="text-red-500"> Storytelling</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                With over 8 years in the industry, I've had the privilege of
                working with brands, filmmakers, and content creators to bring
                their visions to life. My approach combines technical expertise
                with creative storytelling to deliver videos that not only look
                great but also connect with audiences.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I specialize in narrative-driven editing, color grading, and
                motion graphics, always staying current with the latest tools
                and techniques in the industry.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Software Expertise</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Adobe Premiere Pro</li>
                    <li>• DaVinci Resolve</li>
                    <li>• After Effects</li>
                    <li>• Final Cut Pro</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Specializations</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Commercial Videos</li>
                    <li>• Music Videos</li>
                    <li>• Documentaries</li>
                    <li>• Social Media Content</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/profile.jpg?height=600&width=500"
                alt="Alex Chen - Video Editor"
                width={500}
                height={600}
                className="rounded-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-2xl">
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 pb-[55px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600/20 text-red-400 border-red-600">
              Get In Touch
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Create Something Amazing
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your vision to life? Connect with me and let's
              discuss your next project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Email Card */}
            <Card className="bg-gray-800 border-gray-700 p-8 text-center hover:bg-gray-750 transition-colors group">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-gray-400 mb-4">
                Get in touch for project inquiries
              </p>
              <p className="text-red-400 font-medium">alex@videoeditor.com</p>
            </Card>

            {/* Phone Card */}
            <Card className="bg-gray-800 border-gray-700 p-8 text-center hover:bg-gray-750 transition-colors group">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <p className="text-gray-400 mb-4">Let's discuss your project</p>
              <p className="text-red-400 font-medium">+1 (555) 123-4567</p>
            </Card>

            {/* Location Card */}
            <Card className="bg-gray-800 border-gray-700 p-8 text-center hover:bg-gray-750 transition-colors group">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400 mb-4">Based in sunny California</p>
              <p className="text-red-400 font-medium">Los Angeles, CA</p>
            </Card>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">
              Follow My Creative Journey
            </h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Stay updated with my latest work, behind-the-scenes content, and
              video editing tips
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"
              >
                <Instagram className="h-5 w-5 mr-2" />
                Follow on Instagram
              </Button>
              <Button
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                <Youtube className="h-5 w-5 mr-2" />
                Subscribe on YouTube
              </Button>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>

            {/* CTA Section */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Film className="h-8 w-8 text-red-500" />
              <span className="text-xl font-bold">Alex Chen</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 Alex Chen Video Editor. All rights reserved.</p>
              <p className="text-sm mt-1">
                Bringing stories to life through the art of editing
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={closeVideoModal}
        videoUrl={currentVideoUrl}
      />
    </div>
  );
}
