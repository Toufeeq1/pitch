"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, MapPin, Users, Download, ExternalLink } from "lucide-react";
import { events, type Event } from "@/data/MockData";

export function EventDirectory() {
  const [filterType, setFilterType] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const filteredEvents = events.filter((event) => {
    if (filterType !== "all" && event.type !== filterType) return false;
    if (filterCategory !== "all" && event.category !== filterCategory)
      return false;
    return true;
  });

  const handleAddToCalendar = (event: Event) => {
    // Generate Google Calendar link
    const startDate =
      new Date(event.date).toISOString().replace(/[-:]/g, "").split(".")[0] +
      "Z";
    const endDate =
      new Date(new Date(event.date).getTime() + 2 * 60 * 60 * 1000)
        .toISOString()
        .replace(/[-:]/g, "")
        .split(".")[0] + "Z";
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title
    )}&dates=${startDate}/${endDate}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, "_blank");
  };

  return (
    <div className="py-16 px-6 bg-gradient-to-b from-blue-50 via-sky-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#1d283a] mb-3 text-center text-3xl font-bold">
            Upcoming Events
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Explore workshops, webinars, and visits from South Africa&apos;s
            leading space organisations
          </p>

          {/* Filters */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            <Select value={filterType} onValueChange={setFilterType}>
              <SelectTrigger className="w-[200px] bg-white">
                <SelectValue placeholder="Event Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Workshop">Workshop</SelectItem>
                <SelectItem value="Webinar">Webinar</SelectItem>
                <SelectItem value="Visit">Visit</SelectItem>
                <SelectItem value="Conference">Conference</SelectItem>
                <SelectItem value="Exhibition">Exhibition</SelectItem>
              </SelectContent>
            </Select>

            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="w-[200px] bg-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Astronomy">Astronomy</SelectItem>
                <SelectItem value="Robotics">Robotics</SelectItem>
                <SelectItem value="Satellites">Satellites</SelectItem>
                <SelectItem value="Engineering">Engineering</SelectItem>
                <SelectItem value="Data Science">Data Science</SelectItem>
                <SelectItem value="Physics">Physics</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Event Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden h-full flex flex-col hover:shadow-xl transition-all hover:scale-[1.02] border-blue-200 bg-gradient-to-br from-white to-blue-50/50">
                  {/* Event Type Badge */}
                  <div className="p-4 pb-0">
                    <div className="flex justify-between items-start mb-3">
                      <Badge
                        className={
                          event.type === "Workshop"
                            ? "bg-[#2463eb] text-white"
                            : event.type === "Webinar"
                            ? "bg-[#38bdf8] text-white"
                            : event.type === "Visit"
                            ? "bg-[#1e40af] text-white"
                            : "bg-[#0284c7] text-white"
                        }
                      >
                        {event.type}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-blue-300 text-[#1e40af]"
                      >
                        {event.category}
                      </Badge>
                    </div>

                    <h3 className="text-[#1d283a] mb-2 font-semibold">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {event.description}
                    </p>

                    {/* Event Details */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4 text-[#2463eb]" />
                        {new Date(event.date).toLocaleDateString("en-ZA", {
                          weekday: "short",
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4 text-[#2463eb]" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-[#2463eb]" />
                        Max {event.maxAttendees} attendees
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Users className="w-4 h-4 text-[#2463eb]" />
                        {event.organisation}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-auto p-4 pt-0 flex gap-2">
                    <Button
                      className="flex-1 bg-[#2463eb] hover:bg-[#2463eb]/90 text-white gap-2"
                      size="sm"
                      onClick={() => handleAddToCalendar(event)}
                    >
                      <Download className="w-4 h-4" />
                      Add to Calendar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 bg-transparent"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No events found matching your filters
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
