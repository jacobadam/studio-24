"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  setmoreUrl: string;
}

export function BookingModal({
  isOpen,
  onClose,
  setmoreUrl,
}: BookingModalProps): React.JSX.Element {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-primary/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-primary">
                Online Booking
              </h2>
              <button
                onClick={onClose}
                className="group flex items-center gap-2 text-xs font-bold uppercase tracking-tighter text-primary/60 transition-colors hover:text-primary"
                aria-label="Close booking modal"
              >
                <span>Close</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary transition-transform group-hover:rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              </button>
            </div>

            <div className="relative flex-1 bg-white">
              <iframe
                src={setmoreUrl}
                className="h-full w-full border-none"
                title="Setmore Booking"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
