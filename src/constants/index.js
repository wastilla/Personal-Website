import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  export const desktopButtons = [
    {
      id: "about",
      title: "About",
      image_title:"/src/assets/about-icon.png",
      alt_image_title: "folder-image",
    },
    {
      id: "projects",
      title: "Projects",
      image_title:"/src/assets/folder-icon.png",
      alt_image_title: "folder-image",
    },
    {
      id: "experience",
      title: "Experience",
      image_title:"/src/assets/experience-icon.png",
      alt_image_title: "folder-image",
    },
    {
      id: "contact",
      title: "Contact",
      image_title:"/src/assets/contact-icon.png",
      alt_image_title: "folder-image",
    },
  ];

  export const about = [
    {
      name: "hshssh",
    }
  ]
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      id: '0',
      name: "CV Clock",
      description:
        "A clock that harnesses the power of computer vision and facial recognition to help our unpunctual friends. This clock can be trained to recognize a specific individual and when they look at the clock, it will display a time 15 minutes in the future in an atempt to get these individuals out of the door faster",
      tech:["Raspberri Pi", "Python", "Open CV", "Tkinter", "3D Printing", "Laser Cutting"],
      team:"This project was completed by myself and two other engineers",
      image: "/src/assets/cv-clock.png",
      landscape: false,
    },
    {
      id: '1',
      name: "Luminary",
      description:
        "Luminary is an iOS app built for Tarheels at the Table, a student organization of disabled and disability-allied students looking to make UNC Chapel Hill more accessible. Luminary allows for easy posting of accessibility concerns / barriers around UNC's campus. Additionally, the app provides auditory and visual navigation around campus that takes into account the posted inaccessibilities.",
      tech:["Swift", "SwiftUI", "UIKit", "MapKit", "CoreLocation"],
      team:"This project is currently being completed on a production team of App Team Carolina. The team consists of 12 engineers, designers, and product managers.",
      image: "/src/assets/luminary-demo-2.gif",
      landscape: true,
    },
    {
      id: '2',
      name: "Shazamify",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tech:["Swift", "SwiftUI"],
      team:"I completed this project individually :D",
      image: "/src/assets/shazamify.gif",
      landscape: true,
    },
    {
      id: '3',
      name: "House Tab",
      description:
        "Drink dispensor complete with venmo payment processing. Allows for dispensing of drinks when proper amount of money is received. Drinks dispensed using a peristaltic pump powered by an Arduino.",
      tech:["Arduino", "Python", "Tkinter", "Peristaltic Pump"],
      team:"This project was completed by myself and two other engineers",
      image: tripguide,
      landscape: false,
    },
    {
      id: '4',
      name: "CSXL Site",
      description:
        "Developed a forum page for my school's Computer Science department website. Forum complete with user authentication, post creation/storage, persistant data, and frontend interface",
      tech:["AngularTS", "Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
      team:"This project was completed by myself and 3 other engineers for COMP 423: Introduction to Software Engineering",
      image: "/src/assets/csxl-site-demo.gif",
      landscape: false,
    },
    {
      id: '5',
      name: "Akari",
      description:"",
      tech:[],
      team:"",
      image: "/src/assets/akari-demo.gif",
      landscape: false,
    },
    {
      id: '6',
      name: "Horoscopey",
      description:"",
      tech:[],
      team:"",
      image: "/src/assets/horoscopey-demo.png",
      landscape: true,
    },
    {
      id: '7',
      name: "Weathery",
      description:"",
      tech:[],
      team:"",
      image: "/src/assets/weatherapp2.0.gif",
      landscape: true,
    },
    {
      id: '8',
      name: "Road.io",
      description:"",
      tech:[],
      team:"",
      image: "/src/assets/roadio-demo.gif",
      landscape: true,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };