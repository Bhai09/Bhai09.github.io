import { motion } from 'framer-motion';
import { useMouse } from 'react-use';
import { ArrowRight, MousePointer2 } from 'lucide-react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  const moveX = (elX / window.innerWidth - 0.5) * 20;
  const moveY = (elY / window.innerHeight - 0.5) * 20;

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(76, 29, 149, 0.15) 0%, transparent 70%)',
            transform: `translate(${moveX}px, ${moveY}px)`
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold metallic-text mb-8"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Niche
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              
              Creators
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-300 text-xl mb-12 max-w-3xl mx-auto"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We transform your digital vision into reality with cutting-edge design and development solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="#contact"
              className="group px-8 py-4 bg-purple-600 text-white rounded-full font-semibold flex items-center justify-center hover:bg-purple-700 transition-all"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Get a Quote
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/projects"
              className="group px-8 py-4 border-2 border-purple-500 text-white rounded-full font-semibold flex items-center justify-center hover:bg-purple-500/10 transition-all"
              style={{ fontFamily: 'Orbitron, sans-serif' }}
            >
              Explore Our Work
              <MousePointer2 className="ml-2 group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-white/50"
        >
          <MousePointer2 className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
}