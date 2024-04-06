import {
    mobile,
    aws,
    CryptoMart,
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
  
  const services = [
    {
      title: "Frontend Developer",
      icon: web,
    },
    {
      title: "DSA Problem Solving",
      icon: mobile,
    },
    {
      title: "API",
      icon: backend,
    },
    {
      title: "Amazon Web Services",
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
   
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
   
    
  ];
  
  const experiences = [
    {
      title: "JavaScript",
      company_name: "",
      icon: javascript,
      iconBg: "#383E56",
      date: "",
      points: [
        "while learning JavaScript made various demo project using various tools",
        "Learned Oops in Js",
        "Ascynchronous JavaScript/promises",
        "Advanced DOM and Events",
      ],
    },
    {
      title: "React",
      company_name: "",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Learned react and it's tools like redux toolkit",
        "Learned How to fetch API",
        "Authenticating react App",
        "Fetching Database,storing to Database",
        "Basics of NextJs"
      ],
    },
    {
      title: "Amazon Web Services",
      company_name: "",
      icon: aws,
      iconBg: "#383E56",
      date: "",
      points: [
        "Learned cloud foundation course of AWS",
        "Later on learned about AWS cloud Architecture",
        "Tools like EC2,S3,DynamoDB etc",
              ],
    },
    {
      title: "Data Structure & Algorithm",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "Learning Data structure and algorithm",
        "Various algorithm and data structure"
           ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
    {
      testimonial:
        "",
      name: "",
      designation: "",
      company: "",
      image: "",
    },
  ];
  
  const projects = [
    {
      name: "CryptoMart",
      description:
        "Web-based platform that allows you to see crypto currencies real time details and News,you can also compare different crypto currencies.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ant desgin",
          color: "green-text-gradient",
        },
        {
          name: "redux-toolkit",
          color: "pink-text-gradient",
        },
      ],
      image: CryptoMart,
      source_code_link: "https://cryptoomartt.netlify.app/",
    },
   
  ];
  
  export { services, technologies, experiences, testimonials, projects };