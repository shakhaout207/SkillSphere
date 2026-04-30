export const courses = [
  {
    id: 1,
    title: "Complete Web Development Bootcamp",
    instructor: "John Doe",
    duration: "20 hours",
    rating: 4.8,
    level: "Beginner",
    description: "Learn full-stack web development from scratch with HTML, CSS, JavaScript, React, and Next.js.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    category: "Development",
    price: "$49",
    curriculum: ["HTML & CSS basics", "JavaScript fundamentals", "React components", "Next.js App Router", "Final portfolio project"]
  },
  {
    id: 2,
    title: "UI/UX Design Masterclass",
    instructor: "Sarah Wilson",
    duration: "15 hours",
    rating: 4.7,
    level: "Beginner",
    description: "Master modern UI/UX design, wireframing, prototyping, color theory, and user-focused design thinking.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
    category: "Design",
    price: "$39",
    curriculum: ["Design principles", "Wireframe creation", "Figma workflow", "Prototype design", "Portfolio case study"]
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    instructor: "Michael Brown",
    duration: "12 hours",
    rating: 4.6,
    level: "Intermediate",
    description: "Explore SEO, social media marketing, email campaigns, analytics, and growth strategies for businesses.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1200&auto=format&fit=crop",
    category: "Marketing",
    price: "$35",
    curriculum: ["SEO basics", "Social media planning", "Content strategy", "Email marketing", "Analytics tracking"]
  },
  {
    id: 4,
    title: "Advanced JavaScript Concepts",
    instructor: "Emily Carter",
    duration: "18 hours",
    rating: 4.9,
    level: "Advanced",
    description: "Deep dive into closures, async programming, ES6+, APIs, error handling, and real-world JavaScript patterns.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop",
    category: "Development",
    price: "$59",
    curriculum: ["ES6 features", "Closures", "Promises and async/await", "API handling", "Clean code patterns"]
  },
  {
    id: 5,
    title: "Brand Identity Design",
    instructor: "Ava Martinez",
    duration: "10 hours",
    rating: 4.5,
    level: "Intermediate",
    description: "Create memorable brand identities using typography, logo concepts, color palettes, and visual storytelling.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1200&auto=format&fit=crop",
    category: "Design",
    price: "$29",
    curriculum: ["Brand research", "Logo sketching", "Typography selection", "Color systems", "Brand presentation"]
  },
  {
    id: 6,
    title: "Data Analytics with Power BI",
    instructor: "Daniel Lee",
    duration: "16 hours",
    rating: 4.4,
    level: "Beginner",
    description: "Learn data cleaning, dashboard creation, DAX basics, and business reporting with Microsoft Power BI.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    category: "Data",
    price: "$45",
    curriculum: ["Data import", "Data cleaning", "Charts and dashboards", "DAX basics", "Business report project"]
  },
  {
    id: 7,
    title: "Next.js App Router Essentials",
    instructor: "Nora Ahmed",
    duration: "14 hours",
    rating: 4.85,
    level: "Intermediate",
    description: "Build modern full-stack applications using Next.js App Router, layouts, dynamic routes, and server components.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    category: "Development",
    price: "$55",
    curriculum: ["App Router structure", "Layouts and pages", "Dynamic routes", "Server components", "Deployment"]
  }
];

export function getCourseById(id) {
  return courses.find((course) => course.id === Number(id));
}

export function getPopularCourses() {
  return [...courses].sort((a, b) => b.rating - a.rating).slice(0, 3);
}