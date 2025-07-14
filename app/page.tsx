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
      title: "Wedding",
      category: "Wedding",
      duration: "2:30",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/wedding.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/wOjM6FtgIh8?autoplay=1", // Example YouTube embed URL
      orientation: "landscape",
    },
    {
      title: "Gaming Reel",
      category: "Instagram Reel",
      duration: "0:30",
      thumbnail: "/placeholder.svg?height=400&width=300",
      gifThumbnail: "/Gaming.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/0l3OfN9bQxs?autoplay=1",
      orientation: "portrait",
    },
    {
      title: "Podcast Episode",
      category: "Podcast",
      duration: "3:45",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/Podcast.gif",
      youtubeEmbedUrl: "https://www.youtube.com/embed/SzHh8WFu1ps?autoplay=1",
      orientation: "landscape",
    },
    {
      title: "Vlog Reel",
      category: "Instagram Reel",
      duration: "0:15",
      thumbnail: "/placeholder.svg?height=400&width=300",
      gifThumbnail: "/vlog.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/9T-N9D74hNw?autoplay=1",
      orientation: "portrait",
    },
    {
      title: "CS2 Montage",
      category: "Gaming",
      duration: "45:00",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/cs2.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/aZVOk0qeGu8?autoplay=1",
      orientation: "landscape",
    },
    {
      title: "Event Trailer",
      category: "Trailer",
      duration: "1:00",
      thumbnail: "/placeholder.svg?height=400&width=300",
      gifThumbnail: "/event.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/44RqwDFs7i8?autoplay=1",
      orientation: "portrait",
    },
    {
      title: "Valorant Montage",
      category: "Montage",
      duration: "5:20",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/montage.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/xzmadKWfjqQ?autoplay=1",
      orientation: "landscape",
    },
    {
      title: "PUBG Montage",
      category: "Montage",
      duration: "12:15",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/pubg.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/I3cBS4Yg8lw?autoplay=1",
      orientation: "landscape",
    },
    // Additional projects for load more
    {
      title: "Esports Game Highlights",
      category: "Highlights",
      duration: "0:10",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/Highlights.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/nu_DNbXJG9M?autoplay=1",
      orientation: "landscape",
    },
    {
      title: "Meme Videos",
      category: "Reels",
      duration: "1:45",
      thumbnail: "/placeholder.svg?height=400&width=300",
      gifThumbnail: "/meme.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/9ErSb32e7d0?autoplay=1",
      orientation: "portrait",
    },
    {
      title: "Storytelling Video",
      category: "Storytelling ",
      duration: "3:20",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/Storytelling.gif", // Placeholder GIF
      youtubeEmbedUrl: "https://www.youtube.com/embed/f4s9ItDy7eo?autoplay=1",
      orientation: "landscape",
    },
    // {
    //   title: "Podcast Teaser",
    //   category: "Social Media",
    //   duration: "0:45",
    //   thumbnail: "/placeholder.svg?height=400&width=300",
    //   gifThumbnail: "/placeholder.gif", // Placeholder GIF
    //   youtubeEmbedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    //   orientation: "portrait",
    // },
    {
      title: "Portfolio",
      category: "Portfolio",
      duration: "8:30",
      thumbnail: "/placeholder.svg?height=300&width=400",
      gifThumbnail: "/s.gif", // Placeholder GIF
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
            <span className="text-xl font-bold">IMAQTBRUH</span>
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
            className="md:hidden ml-auto"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
          <a href="#tel:+919832593566">
            <Button className="hidden md:block bg-red-600 hover:bg-red-700">
              Contact Me
            </Button>
          </a>
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
            <Link href="#contact">
              <Button className="bg-red-600 hover:bg-red-700 w-fit">
                Contact Me
              </Button>
            </Link>
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
              From raw clips to cinematic gold—I help brands, artists, and
              storytellers turn vision into video. Let’s edit something
              unforgettable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#portfolio">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-lg px-8"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch My Work
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-lg px-8 bg-transparent"
                >
                  Let’s Connect
                </Button>
              </Link>
            </div>
            <div className="flex items-center gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">100+</div>
                <div className="text-gray-400">Projects Brought to Life</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">20+</div>
                <div className="text-gray-400">
                  Clients Who Keep Coming Back
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-500">3+</div>
                <div className="text-gray-400">Years Behind the Timeline</div>
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
              Featured Projects
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My Edits, Your Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A selection of recent work that speaks louder than words. Watch
              how I turn moments into motion.
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
                          project.orientation === "landscape" ? "h-48" : "h-100"
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
                          project.orientation === "landscape" ? "h-48" : "h-100"
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
                        project.orientation === "landscape" ? "h-48" : "h-100"
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
              Service Offerings
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What I Bring to Your Vision
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              End-to-end video editing services designed for creators who demand
              more than just “cut and paste.”
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Scissors className="h-8 w-8" />,
                title: "Precision Editing",
                description: "From structure to pacing—every second counts.",
              },
              {
                icon: <Palette className="h-8 w-8" />,
                title: "Color Grading",
                description: "Visual tones that set the mood and raise the bar",
              },
              {
                icon: <Camera className="h-8 w-8" />,
                title: "Motion Graphics",
                description: "Custom animation that moves your message.",
              },
              {
                icon: <Film className="h-8 w-8" />,
                title: "Full Post-Production",
                description: "Sound. Sync. Style. Delivered with finesse.",
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
                  Got Footage? I’ve Got Vision.
                </h3>
                <p className="text-gray-400 mb-6">
                  Let’s build something scroll-stopping, binge-worthy, or
                  brand-defining. Hit me up—quotes are free, revisions are
                  unlimited, and results speak for themselves.
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Fast Delivery (24–48h)
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4" />
                    Premium Output
                  </div>
                </div>
              </div>
              <div className="text-center">
                <Link href="#contact">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 text-lg px-8"
                  >
                    Let's Connect
                  </Button>
                </Link>
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
              Real Words. Real Impact.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Mehra",
                role: "Brand Strategist",
                company: "TechCorp",
                content:
                  "Bishal didn’t just edit a video—he brought our brand to life with rhythm, emotion, and energy.",
                rating: 5,
              },
              {
                name: "Rohit Banerjee",
                role: "Documentary Filmmaker",
                company: "Independent Films",
                content:
                  "I handed him 5 hours of rough footage. He returned a story that moved us to tears.",
                rating: 5,
              },
              {
                name: "Ananya Das",
                role: "Content Creator",
                company: "Social Media Agency",
                content:
                  "He gets the platform, the pace, and the pulse of online content. He’s my go-to editor.",
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
                Hi, I’m Bishal.
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                An Editor
                <span className="text-red-500"> Obsessed </span>with
                Storytelling.
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                With over 3 years of cutting, grading, syncing, and finessing
                frames—I’ve edited for brands, indie filmmakers, musicians, and
                social media creators. I don’t just polish video—I shape
                emotion.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                If you're looking for edits that connect, content that performs,
                and someone who speaks the language of storytelling through
                video—you're in the right place.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Tools of the Trade</h4>
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
                    <li>• Gamming Videos</li>
                    <li>• Commercial Videos</li>
                    <li>• Wedding Videos</li>
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
                <div className="text-2xl font-bold">3+</div>
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
              Let’s Make Something Amazing Together
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your story is waiting to be told—and I’m ready to cut, color, and
              create it.
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
              <a
                href="mailto:bishalhaldar2@gmail.com"
                className="text-red-400 font-medium hover:underline"
              >
                bishalhaldar2@gmail.com
              </a>
            </Card>

            {/* Phone Card */}
            <Card className="bg-gray-800 border-gray-700 p-8 text-center hover:bg-gray-750 transition-colors group">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Me</h3>
              <p className="text-gray-400 mb-4">Let's discuss your project</p>
              <a
                href="tel:+919832593566"
                className="text-red-400 font-medium hover:underline"
              >
                +91 98325 93566
              </a>
            </Card>

            {/* Location Card */}
            <Card className="bg-gray-800 border-gray-700 p-8 text-center hover:bg-gray-750 transition-colors group">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-gray-400 mb-4">Pradhan Nagar, Siliguri</p>
              <p className="text-red-400 font-medium">Darjeeling, WB</p>
            </Card>
          </div>

          {/* Social Media Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-6">Follow My Journey</h3>
            <p className="text-gray-400 mb-8 max-w-lg mx-auto">
              Behind-the-scenes, Work-in-progress, and Editing Tips
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <a
                href="https://www.instagram.com/imaqtbruh?igsh=MTQxbG8waGQyeGtlYg%3D%3D&utm_source=qr
"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white"
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Follow on Instagram
                </Button>
              </a>
              <a
                href="https://youtube.com/@imaqtbruh?si=5TtUvH3on5OJ7dkW"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white"
                >
                  <Youtube className="h-5 w-5 mr-2" />
                  Subscribe on YouTube
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/bishal-kr-118910217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app
"
                target="_blank"
              >
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <Linkedin className="h-5 w-5 mr-2" />
                  Connect on LinkedIn
                </Button>
              </a>
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
              <span className="text-xl font-bold">IMAQTBRUH</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2025 Bishal Kr Haldar | Professional Video Editor</p>
              <p className="text-sm mt-1">
                Crafted with creativity. Delivered with passion.
                <span className="text-red-500">
                  {" "}
                  <a href="https://www.linkedin.com/in/joy-webdesigner/">Joy</a>
                </span>
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
