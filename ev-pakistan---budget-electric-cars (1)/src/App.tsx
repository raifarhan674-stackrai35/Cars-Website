import { motion } from 'motion/react';
import { MessageCircle, Zap, Battery, Navigation, Phone, Info } from 'lucide-react';
import { CARS, DEALER_WHATSAPP } from './constants';
import { Car } from './types';

interface CarCardProps {
  car: Car;
  key?: string | number;
}

function CarCard({ car }: CarCardProps) {
  const whatsappUrl = `https://wa.me/${DEALER_WHATSAPP}?text=Hi, I'm interested in the ${car.brand} ${car.name} priced at PKR ${car.price}.`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-3xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full"
      id={`car-${car.id}`}
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-zinc-900 text-xs font-bold rounded-full uppercase tracking-wider border border-zinc-200/50">
            {car.brand}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white text-2xl font-display font-bold">{car.name}</h3>
          <p className="text-white/80 text-sm font-medium">PKR {car.price}</p>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-2 text-zinc-600">
            <div className="p-2 bg-zinc-100 rounded-lg">
              <Navigation size={16} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-zinc-400 leading-none">Range</p>
              <p className="text-sm font-semibold">{car.range}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-zinc-600">
            <div className="p-2 bg-zinc-100 rounded-lg">
              <Battery size={16} className="text-emerald-600" />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-zinc-400 leading-none">Battery</p>
              <p className="text-sm font-semibold">{car.battery}</p>
            </div>
          </div>
        </div>

        <p className="text-zinc-500 text-sm leading-relaxed mb-8 flex-grow">
          {car.description}
        </p>

        <div className="flex gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg shadow-emerald-600/20"
            id={`whatsapp-btn-${car.id}`}
          >
            <MessageCircle size={18} />
            Contact Dealer
          </a>
          <button 
            className="p-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-600 rounded-2xl transition-colors"
            title="More Info"
            id={`info-btn-${car.id}`}
          >
            <Info size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen pb-20">
      {/* Hero Section */}
      <header className="relative py-24 px-6 overflow-hidden bg-zinc-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_70%)]" />
          <img 
            src="https://picsum.photos/seed/ev-hero/1920/1080?grayscale" 
            className="w-full h-full object-cover"
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <Zap size={14} />
            The Future is Electric
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight"
          >
            Budget EVs in <span className="text-emerald-500">Pakistan</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Explore the best electric vehicles available between 45 Lakh and 55 Lakh PKR. 
            Sustainable mobility is now within your reach.
          </motion.p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 -mt-12 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CARS.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </main>

      {/* Footer / CTA */}
      <footer className="max-w-4xl mx-auto mt-24 px-6 text-center">
        <div className="bg-zinc-900 rounded-[3rem] p-12 border border-zinc-800 shadow-2xl">
          <h2 className="text-3xl font-display font-bold text-white mb-4">Ready to make the switch?</h2>
          <p className="text-zinc-400 mb-8">
            Our dealers are ready to assist you with test drives, financing, and technical specifications.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`https://wa.me/${DEALER_WHATSAPP}`}
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
              id="footer-whatsapp-btn"
            >
              <MessageCircle size={20} />
              Chat with an Expert
            </a>
            <a
              href={`tel:${DEALER_WHATSAPP}`}
              className="w-full sm:w-auto bg-white hover:bg-zinc-100 text-zinc-900 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all"
              id="footer-call-btn"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>
        </div>
        
        {/* Sticky WhatsApp Button for Mobile */}
      <motion.a
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href={`https://wa.me/${DEALER_WHATSAPP}`}
        className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl md:hidden flex items-center justify-center"
        id="sticky-whatsapp"
      >
        <MessageCircle size={24} />
      </motion.a>

      <p className="mt-12 text-zinc-400 text-sm">
          © {new Date().getFullYear()} EV Pakistan. All prices are indicative and subject to change based on market conditions.
        </p>
      </footer>
    </div>
  );
}
