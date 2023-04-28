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
        title: "Sales/Marketing Trainer",
        company_name: "Online",
        icon: web,
        iconBg: "#E6DEDD",
        date: "Jun 2016 - Sept 2019",
        points: [
            "Built and nurtured an organic network of clients and team members.",
            "Maintained a position of accountabiltiy through strong work ethic, consistent performance, dedication, and persistence to a core team of 35-50 people.",
            "Implemented daily, weekly, and monthly goals to team members to track numbers and monitor progress.",
        ],
    },
    {
        title: "Purchaser/Logistics Manager",
        company_name: "Pendergraph Fire Alarm and Security",
        icon: web,
        iconBg: "#383E56",
        date: "Jan 2013 - May 2016",
        points: [
            "Identified and resolved issues and challenges related to procurement, such as quality issues and cost overruns.",
            "Point of contact for management to keep a running update on suppliers, and manage supplier relationships to ensure competitive pricing, quality",
            "Analyzed data to make informed decisions about purchasing goods and services.",
        ],
    },
    {
        title: "Fuels Technician/Inventory Control",
        company_name: "United States Air Force",
        icon: web,
        iconBg: "#E6DEDD",
        date: "Jan 2001 - Sep 2010",
        points: [
            "Methodically performed test to mechanical, electrical, hydraulic, and pneumatic systems for routine maintenance as needed to determine the source of problems.",
            "Ensured open and clear communication with a 5 man team to perform work on the Aircraft.",
            "Critical thinking to constantly adapting to live changes that may take precedence over the current work in progress "
        ],
    },
];


const projects = [
    {
        name: "TS e-Commerce",
        description:
            "Fully functional shopping cart. Add, remove, multiple items. The cart calculates and displays running total. Built with context and hooks.",
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
        source_code_link: "https://ts-ecom.netlify.app/",
    },

    {
        name: "TS Socket-Chat-App",
        description:
            "Socket.io was used on the server and client to build this chat app. Users can create a room, join a room, chat with other users. Built with React, TypeScript, Node, Express, Socket.io.",
        tags: [
            {
                name: "TypeScript",
                color: "blue-text-gradient",
            },
            {
                name: "NodeJS",
                color: "pink-text-gradient",
            },
            {
                name: "RealtimeCommunication",
                color: "green-text-gradient",
            },
        ],
        image: web,
        source_code_link: "https://ts-ecom.netlify.app/",
    },

    {
        name: "Travel with Kenz",
        description:
            "A front-end web-site that was built in ReactJS and  regularCSS. The site is fully responsive.",
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
                name: "NextJS",
                color: "pink-text-gradient",
            },
        ],
        image: web,
        source_code_link: "https://travel-kenz.netlify.app/",
    },

    {
        name: "real21estate",
        description:
            "Single page app using ReactJS.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },

        ],
        image: web,
        source_code_link: "https://real21estate.netlify.app/",
    },

    {
        name: "Mountain-Parallax",
        description:
            "Website displaying parallax effects.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
        ],
        image: web,
        source_code_link: "https://mountainz-parallax.netlify.app/",
    },

    {
        name: "Space-Parallax",
        description:
            "Website displaying parallax effects.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
        ],
        image: web,
        source_code_link: "https://p-lax-space.netlify.app/",
    },

    // {
    //     name: "DALL-E",
    //     description:
    //         "A MERN Stack AI image Generator",
    //     tags: [
    //         {
    //             name: "NodeJS",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "ExpressJS/MongoDB",
    //             color: "green-text-gradient",
    //         },
    //         {
    //             name: "OpenAI API, Cloudinary",
    //             color: "pink-text-gradient",
    //         },
    //     ],
    //     image: web,
    //     source_code_link: "http://127.0.0.1:5174/",
    // },

    // {
    //     name: "SurprizeMe",
    //     description:
    //         "If you're like me and need help deciding what to eat, click the link, enter an ingredient, and see what pops up!",
    //     tags: [
    //         {
    //             name: "JavaScript",
    //             color: "blue-text-gradient",
    //         },
    //         {
    //             name: "MealDB API",
    //             color: "green-text-gradient",
    //         },
    //         // {
    //         //     name: "css",
    //         //     color: "pink-text-gradient",
    //         // },
    //     ],
    //     image: web,
    //     source_code_link: "https://surprizeme.netlify.app/",
    // },



];

export { services, technologies, experiences, projects };