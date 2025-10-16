"use client"

import { motion } from "motion/react"
import { Button } from "@/components/ui/button"
import { Rocket, Users, Building2 } from "lucide-react"


export function HeroSection() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const stars = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 3 + 2,
  }))

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1d283a] via-[#1e40af] to-[#2463eb]/30">
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            className="absolute rounded-full"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              backgroundColor: star.id % 3 === 0 ? "#38bdf8" : star.id % 2 === 0 ? "#2463eb" : "#ffffff",
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: star.duration,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <motion.ellipse
          cx="50%"
          cy="50%"
          rx="40%"
          ry="30%"
          fill="none"
          stroke="#2463eb"
          strokeWidth="2"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />
        <motion.ellipse
          cx="50%"
          cy="50%"
          rx="30%"
          ry="40%"
          fill="none"
          stroke="#21c45d"
          strokeWidth="2"
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          style={{ transformOrigin: "center" }}
        />
      </svg>

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            className="mb-6"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Rocket className="w-20 h-20 mx-auto text-[#2463eb] mb-4" />
          </motion.div>

          <h1 className="text-white mb-6">Space Education Hub</h1>

          <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto">
            Connecting schools and communities with South Africa&apos;s space and STEM opportunities
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-20">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => handleNavigate("events")}
                className="bg-[#2463eb] hover:bg-[#2463eb]/90 text-white px-8 py-6 gap-2"
              >
                <Users className="w-5 h-5" />
                For Schools & Educators
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={() => handleNavigate("organisations")}
                variant="outline"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 px-8 py-6 gap-2"
              >
                <Building2 className="w-5 h-5" />
                For Organisations
              </Button>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-16">
            {[
              {
                title: "Explore Events",
                description: "Discover workshops, webinars, and visits from space organisations",
                icon: "🎯",
                gradient: "from-blue-50 to-blue-100",
              },
              {
                title: "Connect & Collaborate",
                description: "Bridge the gap between schools and space education providers",
                icon: "🤝",
                gradient: "from-sky-50 to-sky-100",
              },
              {
                title: "Track Progress",
                description: "Manage your calendar and earn engagement badges",
                icon: "📊",
                gradient: "from-indigo-50 to-indigo-100",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className={`bg-gradient-to-br ${feature.gradient} backdrop-blur-md rounded-lg p-6 border-2 border-[#2463eb]/40 shadow-xl hover:shadow-2xl transition-all hover:scale-105`}
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-[#1d283a] mb-2">{feature.title}</h3>
                <p className="text-[#1e40af] text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-50 to-transparent" />
    </div>
  )
}
