"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Clock } from 'lucide-react';
import { RepairPackage } from '@/types';
import { cn } from '@/lib/utils';

interface RepairCardProps {
  pkg: RepairPackage;
  index: number;
}

export default function RepairCard({ pkg, index }: RepairCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={cn(
        "relative flex flex-col h-full bg-surface rounded-3xl p-8 border transition-all duration-300",
        pkg.isPopular 
          ? "border-accent shadow-[0_0_30px_rgba(249,115,22,0.15)] md:-mt-4 md:mb-4" 
          : "border-white/10 hover:border-white/20"
      )}
    >
      {pkg.isPopular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
          MOST POPULAR
        </div>
      )}

      <div className="mb-6 border-b border-white/10 pb-6">
        <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-black text-white">₹{pkg.price}</span>
        </div>
        <div className="flex items-start gap-2 bg-primary/50 text-text-secondary text-sm p-3 rounded-lg">
          <span className="font-semibold text-accent shrink-0">Ideal for:</span>
          <span>{pkg.idealFor}</span>
        </div>
      </div>

      <div className="flex-grow">
        <p className="font-semibold text-white mb-4">Includes:</p>
        <ul className="space-y-3 mb-8">
          {pkg.includes.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text-secondary text-sm">
              <Check className="w-5 h-5 text-status-success shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-auto pt-6 border-t border-white/10">
        <div className="flex items-center gap-2 text-text-secondary text-sm mb-6">
          <Clock className="w-4 h-4" />
          <span>Estimated time: {pkg.estimatedTime}</span>
        </div>
        
        <Link 
          href={`/book/checkout?package=${pkg.name}`}
          className={cn(
            "w-full block text-center py-4 rounded-xl font-semibold transition-all",
            pkg.isPopular
              ? "bg-accent hover:bg-accent-hover text-white shadow-lg shadow-accent/25 hover:shadow-accent/40"
              : "bg-primary hover:bg-white/5 border border-white/10 text-white"
          )}
        >
          Book {pkg.name.split(' ')[0]} Repair
        </Link>
      </div>
    </motion.div>
  );
}
