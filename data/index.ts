export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a NextJS Portfolio Website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "https://github.com/adrianhajdin?tab=repositories",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Ayaan Merchant was a transformative experience. His keen eye for detail and innovative approach brought our project to life. The results were beyond our expectations. Ayaan is a true professional who understands the nuances of web development.",
    name: "Sarah Thompson",
    title: "CEO of Innovatech Solutions",
    image: "/Sarah-Thompson.png",
  },
  {
    quote:
      "Ayaan Merchant's expertise and commitment were evident from the start. He took the time to understand our needs and delivered a website that exceeded all our expectations. His ability to translate our vision into reality is remarkable.",
    name: "James Carter",
    title: "Marketing Director at Digital Horizons",
    image: "/james-carter.png",
  },
  {
    quote:
      "I was thoroughly impressed by Ayaan Merchant's work. His ability to seamlessly integrate design and functionality made our platform stand out. Ayaan is not just a developer but a partner who is genuinely invested in the success of his clients.",
    name: "Emily Garcia",
    title: "Founder of GreenTech Enterprises",
    image: "/Emily-Garcia.png",
  },
  {
    quote:
      "Ayaan Merchant's technical skills and creative vision were instrumental in the success of our project. He was always responsive and went above and beyond to ensure we were satisfied with the outcome. I highly recommend Ayaan for any web development needs.",
    name: "David Lee",
    title: "CTO at Nexus Innovations",
    image: "/David-lee.png",
  },
  {
    quote:
      "Ayaan Merchant's dedication and expertise are unmatched. He transformed our outdated website into a modern, user-friendly platform that has significantly improved our customer engagement. His work is nothing short of outstanding.",
    name: "Olivia Martinez",
    title: "Operations Manager at Bright Future Inc.",
    image: "/Olivia-Martinez.png",
  },
];

export const companies = [
  {
    id: 1,
    name: "Python",
    img: "/python.png",
    nameImg: "/pythonName.png",
  },
  {
    id: 2,
    name: "PowerBI",
    img: "/powerBI.png",
    nameImg: "/powerBIName.png",
  },

  {
    id: 3,
    name: "Typescript",
    img: "/ts.svg",
    nameImg: "/TypescriptName.png",
  },
  {
    id: 4,
    name: "NextJS",
    img: "/next.svg",
    nameImg: "/nextName.png",
  },
  {
    id: 5,
    name: "ReactJS",
    img: "/re.svg",
    nameImg: "/reactName.png",
  },
  {
    id: 6,
    name: "Tailwind CSS",
    img: "/tail.svg",
    nameImg: "/tailName.png",
  }

];

export const workExperience = [
  {
    id: 1,
    title: "Data Analyst Intern",
    desc: "Analyzed data to uncover insights and enhance platform interactivity using React.js.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Front End Developer",
    desc: "Created and optimized user-facing features with modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "AI and ML Engineer",
    desc: "Developed and implemented machine learning models to solve complex problems.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "PowerBI Freelancer",
    desc: "Designed and delivered interactive PowerBI dashboards for data visualization.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];


export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];