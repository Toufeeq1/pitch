export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  organisation: string;
  type: "Workshop" | "Webinar" | "Visit" | "Conference" | "Exhibition";
  category:
    | "Astronomy"
    | "Robotics"
    | "Satellites"
    | "Engineering"
    | "Data Science"
    | "Physics";
  maxAttendees: number;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Introduction to Astronomy",
    description:
      "Learn the basics of astronomy and explore the night sky with expert astronomers.",
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
    description:
      "Build and program your first robot in this hands-on workshop for all ages.",
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
    description:
      "Discover how satellites are revolutionizing communication and Earth observation.",
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
    description:
      "Join leading engineers discussing the future of space engineering in Africa.",
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
    description:
      "Explore how data science is transforming space research and discovery.",
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
    description:
      "Deep dive into quantum mechanics and cosmology with renowned physicists.",
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
    description:
      "Tour our state-of-the-art space research facility and meet our scientists.",
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
    description:
      "Interactive exhibition showcasing the wonders of the cosmos and space exploration.",
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
    description:
      "Take your robotics skills to the next level with advanced programming techniques.",
    date: "2025-12-28",
    location: "Cape Town Tech Hub",
    organisation: "RoboTech Academy",
    type: "Workshop",
    category: "Robotics",
    maxAttendees: 20,
  },
];

export interface Organisation {
  id: string;
  name: string;
  description: string;
  location: string;
  image: string;
  focus: string[];
  featured: boolean;
}

export const organisations: Organisation[] = [
  {
    id: "org-1",
    name: "South African Space Agency",
    description:
      "Leading space research and development organization in Africa.",
    location: "Pretoria, South Africa",
    image: "/space-agency-building.jpg",
    focus: ["Satellite Technology", "Space Research", "STEM Education"],
    featured: true,
  },
  {
    id: "org-2",
    name: "RoboTech Academy",
    description: "Premier robotics education and innovation hub for all ages.",
    location: "Johannesburg, South Africa",
    image: "/robotics-lab.jpg",
    focus: ["Robotics", "Programming", "Engineering"],
    featured: true,
  },
  {
    id: "org-3",
    name: "South African Astronomical Society",
    description: "Dedicated to advancing astronomy education and research.",
    location: "Cape Town, South Africa",
    image: "/observatory-telescope.jpg",
    focus: ["Astronomy", "Stargazing", "Research"],
    featured: false,
  },
  {
    id: "org-4",
    name: "Engineering Council of South Africa",
    description:
      "Professional body promoting engineering excellence and innovation.",
    location: "Johannesburg, South Africa",
    image: "/engineering-office.jpg",
    focus: ["Engineering", "Professional Development", "Innovation"],
    featured: false,
  },
  {
    id: "org-5",
    name: "Data Science Institute",
    description: "Cutting-edge data science research and training center.",
    location: "Durban, South Africa",
    image: "/data-science-lab.png",
    focus: ["Data Science", "AI", "Analytics"],
    featured: false,
  },
  {
    id: "org-6",
    name: "Physics Department UCT",
    description: "University research center for advanced physics studies.",
    location: "Cape Town, South Africa",
    image: "/university-physics-lab.jpg",
    focus: ["Physics", "Quantum Mechanics", "Cosmology"],
    featured: false,
  },
  {
    id: "org-7",
    name: "Earth Observation Centre",
    description: "Satellite imagery analysis and environmental monitoring.",
    location: "Johannesburg, South Africa",
    image: "/satellite-control-center.jpg",
    focus: ["Satellites", "Earth Observation", "Environmental Science"],
    featured: false,
  },
  {
    id: "org-8",
    name: "Science Museum SA",
    description: "Interactive science exhibitions and educational programs.",
    location: "Johannesburg, South Africa",
    image: "/science-museum.jpg",
    focus: ["STEM Education", "Public Engagement", "Exhibitions"],
    featured: false,
  },
];
