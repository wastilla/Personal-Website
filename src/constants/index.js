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
        "A clock that harnesses the power of computer vision and facial recognition to help our unpunctual friends. This clock can be trained to recognize a specific individual and, when they look at the clock, it will display a time 15 minutes in the future in an atempt to get these individuals out of the door faster.",
      experience: ["Explore the intersection of hardware and software, broadening my knowledge of physical computing and embedded systems", "Gain practical knowledge in configuring and training OpenCV's convolutional neural networks for facial recognition tasks.", "Learn techniques to evaluate a model's performance, such as accuracy, precision, recall, and F1 score, enabling me to fine-tune the model and improve its performance.", "Experience building a GUI that interacts with hardware components using Tkinter and an LCD Screen."],
      tech:["Raspberri Pi", "Python", "Open CV", "Tkinter", "3D Printing", "Laser Cutting"],
      team:"This project was completed by myself and two other engineers",
      image: "/src/assets/cv-clock.png",
      landscape: false,
    },
    {
      id: '1',
      name: "Luminary",
      description:
        "Luminary aims to make navigating UNC's campus more accessible for those with mobility limitations. It allows users to find accessible routes curated to their specific needs and report accessibility concerns and barriers, which are displayed in a real-time feed. This project is currently in progress and I am working with a team of 10 designers, product managers, and developers to deliver the application to our client: Tar Heels at the Table.",
      experience: ["Experience engaging in code reviews and receiving code feedback, leading to an understand of how these practices help foster a collaborative environment focused on code quality and readability.", "Participate in Agile development processes, including weekly stand-ups, sprint planning, and retrospectives, contributing to a dynamic and iterative development cycle.", "Utilize SwiftUI to match the visual styling of  Figma design, ensuring a consistent and cohesive user experience across the application."],
      tech:["Swift", "SwiftUI", "UIKit", "MapKit", "CoreLocation"],
      team:"This project is currently being completed on a production team of App Team Carolina. The team consists of 12 engineers, designers, and product managers.",
      image: "/src/assets/luminary-demo-2.gif",
      landscape: true,
    },
    {
      id: '2',
      name: "Shazamify",
      description:
        "Music application that combines the power of ShazamKit and Spotify's API to provide users with a seamless experience of discovering and creating playlists of similar songs. A user can 'Shazam' a song using the app and a playlist of similar songs will be automatically generated. ",
      experience: ["Work with external APIs such as ShazamKit and Spotify's API, enhancing my understanding of integrating third-party services into applications.", "Handle API requests, parsing responses, and efficiently integrate the obtained data into the app's functionalities.", "Use MVVM Design Pattern to separate concerns between files codebase"],  
      tech:["Swift", "SwiftUI", "ShazamKit"],
      team:"I completed this project individually :D",
      image: "/src/assets/shazamify.gif",
      landscape: true,
    },
    {
      id: '3',
      name: "House Tab",
      description:
        "My friends and I collaborated on a project where we built a drink dispenser using an Arduino, peristaltic pump, and an LCD Screen. Through programming and integration with Venmo's API, the dispenser only dispenses liquid when payment was received. This project merged hardware, software, and payment integration to create a unique and interactive experience for users.",
      experience: ["Utilize Python and Arduino libraries to control the dispenser's functionality, ensuring precise measurements and controlled liquid dispensing", "Utilize Tkinter to create a visually appealing interface for users to interact with the dispenser", "Integrate Venmo's API, allowing users to make payments and verify correct transaction amounts before the dispenser activates"],
      tech:["Arduino", "Python", "Tkinter", "Peristaltic Pump"],
      team:"This project was completed by myself and two other engineers",
      image: null,
      landscape: false,
    },
    {
      id: '4',
      name: "CSXL Site",
      description:
        "Developed a forum page for my school's Computer Science department website. Forum is complete with user authentication, post creation/storage, persistant data, and frontend interface.",
      experience: ["Utilize concepts of database management and how to create efficient and scalable data models", "Build RESTful API and ensure high-performance response times", "Use Angular components, modules, and services to build a responsive and intuitive user experience"],
      tech:["AngularTS", "Python", "FastAPI", "SQLAlchemy", "PostgreSQL"],
      team:"This project was completed by myself and 3 other engineers for COMP 423: Introduction to Software Engineering",
      image: "/src/assets/csxl-site-demo.gif",
      landscape: false,
    },
    {
      id: '5',
      name: "Akari",
      description:"Remake of Akari, a popular puzzle game, using Java, JavaFX, and the MVC (Model-View-Controller) design pattern. Implementing the MVC design pattern allowed me to architect the application in a modular and scalable manner. By separating the concerns into distinct layers - the model, view, and controller - I achieved a clean separation of responsibilities.",
      experience: ["Implement game logic using Java and interface using JavaFX", "Experience implementing Model View Controller design pattern to separate concerns in an application"],
      tech:["Java", "JavaFX"],
      team:"I completed this project individually",
      image: "/src/assets/akari-demo.gif",
      landscape: false,
    },
    {
      id: '6',
      name: "Horoscopey",
      description:"Basic horoscope app developed using Swift and SwiftUI. This app allows users to select their zodiac sign and view horoscopes for today, yesterday, and tomorrow. Additionally, the app incorporates user defaults to enable users to store and access their favorite horoscopes.",
      experience: ["Implemented functionality to allow users to select their zodiac sign and dynamically fetch horoscope data for today, yesterday, and tomorrow based on the selected zodiac sign","Demonstrate effective use of user defaults to provide a personalized and persistent user experience, allowing users to save and access their favorite horoscopes"],
      tech:["Swift", "SwiftUI", "User Defaults"],
      team:"I completed this project individually",
      image: "/src/assets/horoscopey-demo.png",
      landscape: true,
    },
    {
      id: '7',
      name: "Weathery",
      description:"A basic weather app developed using SwiftUI and the OpenWeatherMap API. This app enables users to enter a location and retrieve its current weather information.",
      experience: ["Integrate user input functionality to allow users to type in a location of their choice, dynamically fetching and displaying the weather information for that location.", "Showcase proficiency in working with APIs by integrating the OpenWeatherMap API, retrieving data using appropriate endpoints, parsing the JSON response, and creating models to capture JSON response"],
      tech:["Swift", "SwiftUI", "OpenWeatherMap API"],
      team:"I completed this project individually",
      image: "/src/assets/weatherapp2.0.gif",
      landscape: true,
    },
    {
      id: '8',
      name: "Road.io",
      description:"Mobile app to assist in road trip planning by leveraging 3rd party APIs to analyze the trip and predict the cost. This app empowers users to make informed decisions by providing accurate cost estimates based on factors such as distance, fuel prices, and weather",
      experience: ["Utilize Swift and SwiftUI to create an intuitive and visually appealing user interface.", "Implement algorithms and logic to analyze the trip data and calculate the predicted cost, considering factors like fuel consumption, average speed, road conditions, and weather"],
      tech:["Swift", "SwiftUI", "Python", "MapKit"],
      team:"I completed this project with 3 other engineers for HackNC 2022",
      image: "/src/assets/roadio-demo.gif",
      landscape: true,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };