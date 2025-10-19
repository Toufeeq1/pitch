"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Calendar } from "@/components/ui/calendar"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Download, Apple, Mail } from "lucide-react"
import { events } from "@/data/MockData"

export function CalendarView() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedEvents, setSelectedEvents] = useState(events.slice(0, 3))


  const eventsOnDate = events.filter((event) => {
    if (!selectedDate) return false
    const eventDate = new Date(event.date)
    return (
      eventDate.getDate() === selectedDate.getDate() &&
      eventDate.getMonth() === selectedDate.getMonth() &&
      eventDate.getFullYear() === selectedDate.getFullYear()
    )
  })

  const handleExportCalendar = (format: "google" | "apple" | "outlook") => {
    // Generate calendar export links
    const event = selectedEvents[0]
    if (!event) return

    const startDate = new Date(event.date).toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
    const endDate =
      new Date(new Date(event.date).getTime() + 2 * 60 * 60 * 1000).toISOString().replace(/[-:]/g, "").split(".")[0] +
      "Z"

    if (format === "google") {
      const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Space Education Hub Events")}&dates=${startDate}/${endDate}`
      window.open(url, "_blank")
    } else if (format === "apple") {
      // Apple Calendar uses .ics format
      alert("Download .ics file to import to Apple Calendar")
    } else if (format === "outlook") {
      const url = `https://outlook.office.com/calendar/0/deeplink/compose?subject=${encodeURIComponent("Space Education Hub Events")}&startdt=${startDate}&enddt=${endDate}`
      window.open(url, "_blank")
    }
  }

  return (
    <div className="py-16 px-6 bg-gradient-to-b from-sky-50 via-blue-50 to-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-[#1d283a] mb-3 text-center">My Calendar</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Track your saved events and sync them with your preferred calendar app
          </p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Calendar */}
            <div className="lg:col-span-2">
              <Card className="p-6 bg-gradient-to-br from-white to-blue-50/50 border-blue-200">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="w-5 h-5 text-[#2463eb]" />
                    <h3 className="text-[#1d283a]">Event Calendar</h3>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleExportCalendar("google")}
                      className="gap-2"
                    >
                      <Mail className="w-4 h-4" />
                      Google
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => handleExportCalendar("apple")} className="gap-2">
                      <Apple className="w-4 h-4" />
                      Apple
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleExportCalendar("outlook")}
                      className="gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Outlook
                    </Button>
                  </div>
                </div>

                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="rounded-md border w-full"
                />

                {eventsOnDate.length > 0 && (
                  <div className="mt-6">
                    <h4 className="text-[#1d283a] mb-3">Events on {selectedDate?.toLocaleDateString()}</h4>
                    <div className="space-y-2">
                      {eventsOnDate.map((event) => (
                        <div key={event.id} className="p-3 rounded-lg border border-gray-200 bg-gray-50">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-sm text-[#1d283a]">{event.title}</p>
                              <p className="text-xs text-gray-600 mt-1">{event.organisation}</p>
                            </div>
                            <Badge className="bg-[#2463eb] text-white">{event.type}</Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </div>

            <div>
              <Card className="p-6 bg-gradient-to-br from-white to-sky-50/50 border-blue-200">
                <h3 className="text-[#1d283a] mb-4">Saved Events</h3>
                <div className="space-y-4">
                  {selectedEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-lg border border-blue-200 hover:shadow-md transition-shadow bg-gradient-to-br from-white to-blue-50"
                    >
                      <Badge className="bg-gradient-to-r from-[#2463eb] to-[#38bdf8] text-white mb-2">
                        {event.type}
                      </Badge>
                      <h4 className="text-[#1d283a] text-sm mb-1">{event.title}</h4>
                      <p className="text-xs text-gray-600 mb-2">
                        {new Date(event.date).toLocaleDateString("en-ZA", {
                          month: "short",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-xs text-gray-500">{event.organisation}</p>
                    </motion.div>
                  ))}
                </div>

                <Button className="w-full mt-4 bg-gradient-to-r from-[#2463eb] to-[#38bdf8] hover:from-[#2463eb]/90 hover:to-[#38bdf8]/90 text-white">
                  View All Saved Events
                </Button>
              </Card>

              <Card className="p-6 mt-6 bg-gradient-to-br from-blue-100 via-sky-100 to-indigo-100 border-blue-300">
                <h4 className="text-[#1d283a] mb-4">Your Progress</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Events Attended</span>
                    <Badge variant="outline">12</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Organisations Connected</span>
                    <Badge variant="outline">5</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Badges Earned</span>
                    <Badge className="bg-[#21c45d] text-white">3 🏆</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
