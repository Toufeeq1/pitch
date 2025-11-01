"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2, MapPin, ExternalLink, Star, Mail } from "lucide-react";
import { organisations } from "@/data/MockData";
import { ImageWithFallback } from "./ImageFallback";

export function OrganisationDirectory() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const featuredOrgs = organisations.filter((org) => org.featured);
  const regularOrgs = organisations.filter((org) => !org.featured);

  return (
    <div className="py-16 px-6 bg-gradient-to-b from-white via-blue-50/30 to-sky-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#1d283a] mb-3 text-center">
            Space Organisations
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Connect with South Africa&apos;s leading space agencies, companies,
            and STEM organisations
          </p>

          {featuredOrgs.length > 0 && (
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-5 h-5 text-[#21c45d] fill-[#21c45d]" />
                <h3 className="text-[#1d283a]">Featured Organisations</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {featuredOrgs.map((org, index) => (
                  <motion.div
                    key={org.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    onHoverStart={() => setHoveredId(org.id)}
                    onHoverEnd={() => setHoveredId(null)}
                  >
                    <Card className="overflow-hidden hover:shadow-2xl transition-all border-2 border-[#2463eb]/30 bg-gradient-to-br from-blue-50 via-white to-sky-50">
                      <div className="relative h-48 overflow-hidden">
                        <ImageWithFallback
                          src={org.image || "/placeholder.svg"}
                          alt={org.name}
                          className="w-full h-full object-cover"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-[#1d283a]/80 to-transparent"
                          animate={{
                            opacity: hoveredId === org.id ? 0.9 : 0.6,
                          }}
                        />
                        <div className="absolute bottom-4 left-4 right-4">
                          <Badge className="bg-[#21c45d] text-white mb-2">
                            Featured
                          </Badge>
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <Building2 className="w-5 h-5 text-[#2463eb]" />
                            <h3 className="text-[#1d283a]">{org.name}</h3>
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm mb-4">
                          {org.description}
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                          <MapPin className="w-4 h-4 text-[#2463eb]" />
                          {org.location}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {org.focus.map((focus) => (
                            <Badge
                              key={focus}
                              variant="outline"
                              className="text-xs"
                            >
                              {focus}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2">
                          <Button
                            className="flex-1 bg-[#2463eb] hover:bg-[#2463eb]/90 text-white gap-2"
                            size="sm"
                          >
                            <Mail className="w-4 h-4" />
                            Contact
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="gap-2 bg-transparent"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-[#1d283a] mb-6">All Organisations</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularOrgs.map((org, index) => (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all hover:scale-[1.02] border-blue-200 bg-gradient-to-br from-white to-blue-50/40">
                  <div className="relative h-40 overflow-hidden">
                    <ImageWithFallback
                      src={org.image || "/placeholder.svg"}
                      alt={org.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1d283a]/60 to-transparent" />
                  </div>

                  <div className="p-4 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <Building2 className="w-4 h-4 text-[#2463eb]" />
                      <h4 className="text-[#1d283a]">{org.name}</h4>
                    </div>

                    <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                      {org.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin className="w-3 h-3 text-[#2463eb]" />
                      {org.location}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {org.focus.slice(0, 3).map((focus) => (
                        <Badge
                          key={focus}
                          variant="outline"
                          className="text-xs"
                        >
                          {focus}
                        </Badge>
                      ))}
                    </div>

                    <div className="mt-auto flex gap-2">
                      <Button
                        className="flex-1 bg-[#2463eb] hover:bg-[#2463eb]/90 text-white"
                        size="sm"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
