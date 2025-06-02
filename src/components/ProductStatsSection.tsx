
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
const ProductStatsSection: React.FC = () => {
  const statItems = [{
    percent: "94%",
    description: "Built noticeable muscle using just bodyweight training"
  }, {
    percent: "89%",
    description: "Increased their strength and explosive power significantly"
  }, {
    percent: "92%",
    description: "Developed unbreakable mental toughness and discipline"
  }];
  const handleButtonClick = () => {
    window.open('https://www.paypal.com/ncp/payment/AWQDP2YASKJAY', '_blank', 'noopener,noreferrer');
  };
  return <section className="w-full bg-white py-12 px-4">
      <motion.div className="max-w-md mx-auto" initial={{
      opacity: 0,
      y: 50
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.5
    }}>
        <h2 className="text-3xl font-bold text-dark-purple mb-8">TRAIN LIKE A SPARTAN® Build Your Warrior Body 💪</h2>
        
        {statItems.map((item, index) => <div key={index} className="flex items-center mb-5 pb-5 border-b border-gray-200 last:border-b-0">
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-full bg-[FF0B55] bg-[#ff0b55]/[0.11]">
              <span className="font-bold text-[FF0B55] text-[#ff0e57]">{item.percent}</span>
            </div>
            <div className="ml-6">
              <p className="text-gray-700">{item.description}</p>
            </div>
          </div>)}
        
        <p className="text-xs text-gray-500 mt-4 mb-5">
          * Results according to user surveys and testimonials.<br />
          Individual results may vary based on consistency and effort.
        </p>
        
        <button onClick={handleButtonClick} className="w-44 h-12 bg-purple hover:bg-purple-dark text-white font-bold rounded-lg mb-8 relative overflow-hidden">
          {/* Shining effect overlay */}
          <span className="absolute inset-0 overflow-hidden text-slate-950">
            <span className="absolute inset-0 w-1/4 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shine_3s_infinite]" />
          </span>
          <span className="relative z-10">Start Training</span>
        </button>
        
        <div className="flex items-center mt-4">
          <div className="flex mr-1">
            {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-4 h-4 text-purple fill-purple" />)}
          </div>
          <span className="text-sm font-normal mr-1">Excellent</span>
          <span className="text-sm font-bold mr-1">4.8</span>
          <span className="text-sm text-gray-700">| 1,319 warrior reviews</span>
        </div>
      </motion.div>
    </section>;
};
export default ProductStatsSection;
