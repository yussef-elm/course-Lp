
import React from 'react';

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "Dr. Elena Rossi",
      clinic: "Aura Aesthetics, Miami",
      text: "We were spending $4k/month on a management fee. After 3 weeks in Sbitis, we brought it in-house. Our cost per lead dropped by 60%."
    },
    {
      name: "Marcus Vane",
      clinic: "The Grooming Room, London",
      text: "The sales scripting module alone is worth 10x the price. We doubled our consultation show-up rate in 14 days."
    },
    {
      name: "Sarah Jenkins",
      clinic: "Radiance Medical, LA",
      text: "Finally, a system that understands the luxury aesthetic market. No cheesy ads, just pure psychological positioning."
    }
  ];

  return (
    <section className="py-24 relative bg-brand-dark">
       <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-pink text-sm font-black tracking-[0.3em] uppercase mb-4">Success Stories</h2>
          <h3 className="text-4xl md:text-6xl font-black italic uppercase">THE PROOF OF THE PROTOCOL</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {reviews.map((rev, i) => (
            <div key={i} className="glass-card p-8 rounded-3xl border-white/5">
              <p className="text-gray-300 italic mb-8 leading-relaxed">"{rev.text}"</p>
              <div>
                <p className="font-bold text-lg">{rev.name}</p>
                <p className="text-brand-pink text-sm font-medium">{rev.clinic}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="#pricing" 
            className="inline-block bg-brand-pink text-brand-dark px-14 py-6 text-xl font-black uppercase hover:bg-white transition-all duration-500"
          >
            Secure Your Spot Now
          </a>
        </div>
       </div>
    </section>
  );
};

export default Testimonials;
