import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectCoverflow } from 'swiper/modules';
import { Book, ScrollText } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import FloatingQuotes from '../components/shared/FloatingQuotes';
import InkSplash from '../components/shared/InkSplash';
import BookSpine from '../components/shared/BookSpine';
import PageTurn from '../components/shared/PageTurn';
import RotatingLogo from '../components/shared/RotatingLogo';
import PageLoader from '../components/shared/PageLoader';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: "Stand Up",
      date: "March 15, 2025",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
    },
    {
      id: 2,
      title: "Kavi Sammelan (Hindi and Marathi)",
      date: "March 20, 2025",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8"
    },
    {
      id: 3,
      title: "International Mother Language Day",
      date: "February 21, 2025",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
    },
    {
      id: 4,
      title: "Marathi Bhasha Diwas",
      date: "February 27, 2025",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
    },
    {
      id: 5,
      title: "Litfest'25",
      date: "April 15, 2025",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8"
    },
    {
      id: 6,
      title: "Unscripted - The Extempore Speech Competition",
      date: "May 10, 2025",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
    },
    {
      id: 7,
      title: "Faceoff",
      date: "June 20, 2025",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
    },
    {
      id: 8,
      title: "Podcast",
      date: "July 15, 2025",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8"
    },
    {
      id: 9,
      title: "VISTA 24",
      date: "August 25, 2025",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570"
    },
    {
      id: 10,
      title: "Bhartiya Bhasha Utsav",
      date: "December 10, 2025",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b"
    }
  ];

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <div className="font-literary">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center ink-bg bg-indigo-950/90 text-white overflow-hidden">
        <FloatingQuotes />
        <InkSplash className="-top-16 -left-16" />
        <InkSplash className="bottom-32 right-16" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
        <div className="flex justify-center">
        <RotatingLogo size="lg" className="mb-8" />
      </div>
          <h1 className="text-7xl font-bold mb-6">Literati</h1>
          <p className="text-2xl italic font-prose">
            "Where words come alive and stories find their voice"
          </p>
        </motion.div>
        
        {/* Decorative Books */}
        <div className="absolute bottom-0 left-0 flex space-x-2 p-4">
          <BookSpine title="Poetry" color="bg-rose-700" />
          <BookSpine title="Fiction" color="bg-emerald-700" />
          <BookSpine title="Essays" color="bg-amber-700" />
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-20 paper-texture bg-amber-50/95">
        <PageTurn>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-center mb-12">
              <ScrollText className="w-8 h-8 mr-3 text-amber-800" />
              <h2 className="text-4xl font-bold text-amber-900">Upcoming Events</h2>
            </div>
            <Swiper
              modules={[Autoplay, Navigation, EffectCoverflow]}
              effect="coverflow"
              spaceBetween={30}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 3000 }}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 }
              }}
              className="pb-12"
            >
              {upcomingEvents.map((event) => (
                <SwiperSlide key={event.id}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg shadow-lg overflow-hidden"
                  >
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-600 font-prose">{event.date}</p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </PageTurn>
      </section>

      {/* Contact Section */}
      <section className="py-20 ink-bg bg-indigo-950/90 text-white">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-center mb-12">
            <Book className="w-8 h-8 mr-3" />
            <h2 className="text-4xl font-bold">Contact Us</h2>
          </div>
          <form
  action="mailto:literaticlub@vcet.edu.in"
  method="GET"
  encType="text/plain"
  className="space-y-6 bg-white/10 p-8 rounded-lg backdrop-blur-sm"
>
  <div>
    <label htmlFor="name" className="block text-sm font-medium">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="mt-1 block w-full rounded-md bg-white/20 border-transparent focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="mt-1 block w-full rounded-md bg-white/20 border-transparent focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </div>
  <div>
    <label htmlFor="message" className="block text-sm font-medium">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={4}
      className="mt-1 block w-full rounded-md bg-white/20 border-transparent focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    ></textarea>
  </div>
  <div>
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      type="submit"
      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
    >
      Send Message
    </motion.button>
  </div>
</form>
        </div>
      </section>
    </div>
  );
};

export default Home;