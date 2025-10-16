export interface Event {
  id: string
  title: string
  description: string
  date: string
  location: string
  organisation: string
  type: "Workshop" | "Webinar" | "Visit" | "Conference" | "Exhibition"
  category: "Astronomy" | "Robotics" | "Satellites" | "Engineering" | "Data Science" | "Physics"
  maxAttendees: number
}

export const events: Event[] = [
  {
    id: "1",
    title: "Introduction to Astronomy",
    description: "Learn the basics of astronomy and explore the night sky with expert astronomers.",
    date: "2025-11-15",
    location: "Cape Town Observatory",
    organisation: "South African Astronomical Society",
    type: "Workshop",
    category: "Astronomy",
    maxAttendees: 30,
  },
  {
    id: "2",
    title: "Robotics for Beginners",
    description: "Build and program your first robot in this hands-on workshop for all ages.",
    date: "2025-11-20",
    location: "Johannesburg Tech Hub",
    organisation: "RoboTech Academy",
    type: "Workshop",
    category: "Robotics",
    maxAttendees: 25,
  },
  {
    id: "3",
    title: "Satellite Technology Webinar",
    description: "Discover how satellites are revolutionizing communication and Earth observation.",
    date: "2025-11-22",
    location: "Online",
    organisation: "Space Agency South Africa",
    type: "Webinar",
    category: "Satellites",
    maxAttendees: 500,
  },
  {
    id: "4",
    title: "Engineering Excellence Conference",
    description: "Join leading engineers discussing the future of space engineering in Africa.",
    date: "2025-12-01",
    location: "Pretoria Convention Centre",
    organisation: "Engineering Council of South Africa",
    type: "Conference",
    category: "Engineering",
    maxAttendees: 200,
  },
  {
    id: "5",
    title: "Data Science in Space Exploration",
    description: "Explore how data science is transforming space research and discovery.",
    date: "2025-12-05",
    location: "Durban Innovation Hub",
    organisation: "Data Science Institute",
    type: "Webinar",
    category: "Data Science",
    maxAttendees: 300,
  },
  {
    id: "6",
    title: "Physics of the Universe",
    description: "Deep dive into quantum mechanics and cosmology with renowned physicists.",
    date: "2025-12-10",
    location: "University of Cape Town",
    organisation: "Physics Department UCT",
    type: "Workshop",
    category: "Physics",
    maxAttendees: 40,
  },
  {
    id: "7",
    title: "Space Centre Visit",
    description: "Tour our state-of-the-art space research facility and meet our scientists.",
    date: "2025-12-15",
    location: "Hermanus Space Centre",
    organisation: "South African Space Agency",
    type: "Visit",
    category: "Engineering",
    maxAttendees: 20,
  },
  {
    id: "8",
    title: "Astronomy Exhibition",
    description: "Interactive exhibition showcasing the wonders of the cosmos and space exploration.",
    date: "2025-12-20",
    location: "Johannesburg Museum",
    organisation: "Science Museum SA",
    type: "Exhibition",
    category: "Astronomy",
    maxAttendees: 150,
  },
  {
    id: "9",
    title: "Advanced Robotics Workshop",
    description: "Take your robotics skills to the next level with advanced programming techniques.",
    date: "2025-12-28",
    location: "Cape Town Tech Hub",
    organisation: "RoboTech Academy",
    type: "Workshop",
    category: "Robotics",
    maxAttendees: 20,
  },
]