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
    carrent,
    jobit,
    // realestate,
    // travelkenz,
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
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Develeoper",
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
];

const experiences = [
    {
        title: "Implementation Specialist",
        company_name: "RobbieAI",
        icon: web,
        iconBg: "#383E56",
        date: "Sep 2023 - Dec 2023",
        points: [
            "Conducted E2E Testing for all critical functional components on the web and mobile app.",
            "Evaluated data outputs from Machine Learning models to verify notifications were within latency thresholds, providing users with prompt and timely alerts.",
            "Configured Camera’s, Router, peripherals, and tested the events pipeline to ensure the correct events were firing as expected, resulting in the completion of the testing phase.",
        ],
    },
    {
        title: "Frontend Engineer Intern",
        company_name: "RobbieAI",
        icon: web,
        iconBg: "#383E56",
        date: "July 2023 - Sep 2023",
        points: [
            "Successfully wrote comprehensive Cypress unit tests to ensure the correct data is displaying from the database.",
            "Developed a Responsive Alert Sensitivity component for the application's dashboard.",
            "Implemented code-splitting techniques to optimize application performance and reduce load times significantly.",
        ],
    },
    {
        title: "Logistics Manager",
        company_name: "Francis Solar",
        icon: web,
        iconBg: "#383E56",
        date: "July 2018 - Jan 2020",
        points: [
            "Developed risk management and mitigation strategies to lessen the negative impacts on the project or company.",
            "Provided updates to the project manager and team regarding the project's current status, incorporating any modifications that have taken place in the field and with vendors..",
            "Used Asana to analyze project outcomes, identify areas of improvement and increase efficiency.",
        ],
    },
    {
        title: "Purchaser/Logistics Manager",
        company_name: "Pendergraph Fire Alarm and Security",
        icon: web,
        iconBg: "#383E56",
        date: "Feb 2015 - Dec 2018",
        points: [
            "Identified and addressed procurement-related issues and challenges, including quality concerns and cost overruns.",
            "Designed Gantt and flow charts to visually map and track the product lifecycle, improving effective team communication.",
            "Revamped documentation practices for installations, configurations, and troubleshooting procedures.",
        ],
    },
    {
        title: "Signal Analyst/Aircraft Technicican",
        company_name: "United States Air Force",
        icon: web,
        iconBg: "#E6DEDD",
        date: "Jan 2001 - Sep 2010",
        points: [
            "Conducted joint training sessions to enhance the understanding of signals intelligence principles among maintenance personnel.",
            "Diagnosed and repaired communication and navigation equipment ensuring optimal functionality and compliance with safety standards.",
            "Collaborated with aircraft maintenance teams to share my knowledge in signals intelligence (analyzing electronic signals) and electronic warfare. This teamwork contributed to the success of both air and ground operations."
        ],
    },
];


const projects = [
    {name: (
        <a href="https://ts-ecom.netlify.app/" target="_blank" rel="noopener noreferrer">
            TypeScript E-Commerce
        </a>
    ),
        description:
            "Functional shopping cart created using React, TypeScript, and Bootstrap. Utlizing context and hooks for state management.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "TypeScript",
                color: "pink-text-gradient",
            },
            {
                name: "Bootstrap",
                color: "green-text-gradient",
            },
        ],
        image: web,
        source_code_link: "https://github.com/RockoGilbert/TS-E-com",
    },


    {
        name: (
            <a href="https://travel-kenz.netlify.app/" target="_blank" rel="noopener noreferrer">
                Travel with Kenz
            </a>
        ),
        description:
            "Front-end travel website. The site is fully mobile responsive and built using CSS grid and React component libraries.",
        tags: [
            {
                name: "NodeJS",
                color: "blue-text-gradient",
            },
            {
                name: "TypeScript",
                color: "green-text-gradient",
            },
            {
                name: "React",
                color: "pink-text-gradient",
            },
        ],
        image: web,
        source_code_link: "https://github.com/RockoGilbert/travel_kenz",
    },
    {
        name: (
            <a href="https://mountainz-parallax.netlify.app/" target="_blank" rel="noopener noreferrer">
                Mountain Parallax
            </a>
        ),
        description:
            "Website using JavaScript, CSS and React Parallex for displaying parallax scrolling effects.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
        ],
        image: web,
        source_code_link: "https://github.com/RockoGilbert/Scrollz/",
    },

    {
        name: (
            <a href="https://p-lax-space.netlify.app/" target="_blank" rel="noopener noreferrer">
                Space Parallax
            </a>
        ),
        description:
            "Website using CSS and React Parallax for scrolling effects.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
        ],
        image: web,
        source_code_link: "https://github.com/RockoGilbert/Scrollz/",


    },
    // {
    //     name: "TS Socket-Chat-App",
    //     description:
    //         "Socket.io was used on the server and client to build this chat app. Users can create a room, join a room, chat with other users. Built with React, TypeScript, Node, Express, Socket.io.",
    //     tags: [
    //         {
    //             name: "TypeScript",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "NodeJS",
    //             color: "pink-text-gradient",
    //         },
    //         {
    //             name: "RealtimeCommunication",
    //             color: "green-text-gradient",
    //         },
    //     ],
    //     image: web,
    //     source_code_link: "https://github.com/RockoGilbert/TS-Chat",
    // },
];

export { services, technologies, experiences, projects };