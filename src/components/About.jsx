import React from 'react'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'


import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { SectionWrapper } from '../hoc';


const ServiceCard = ({ index, icon, title }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow card"
            >
                <div
                    options={{
                        max: 45,
                        scale: 1,
                        speed: 450
                    }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
                    flex justify-evenly items-center flex-col"
                >
                    <img src={icon} alt={title}
                        className="w-16 h-16 object-contain" />
                    <h3 className="text-white text-[20px] font-bold text-center">{title}

                    </h3>

                </div>
            </motion.div>


        </Tilt>
    )
}

<Tilt className="Tilt">

</Tilt>

const About = () => {
    return (
        <>
            <motion.div
                variants={textVariant()}>
                {/* <p className={styles.sectionSubText}>Introduction</p> */}
                <h2 className={styles.sectionHeadText}>About</h2>
            </motion.div>
            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 ml-3 text-white text-[17px] italic max-w-6xl leading-[30px]"
            >
                <div className="flex space-x-4">
                    <p className="font-bold">LOVE LOVE LOVE Asian Food&nbsp;&nbsp;🥢</p>

                    <p className="font-bold">Serve as a mentor through tech for Tulsa's youth&nbsp;&nbsp;🙏🏾</p>

                    <p className="font-bold">Personal development is a passion of mine&nbsp;📚</p>

                </div>
                <br />
                <br />
                FullStack Developer who loves building in React and its ecosystem! My focus involves using React to build dynamic user interfaces. Currently I am building an E-commerce website where I am implementing product filtering and search funcionality using Redux.
                <br />
                <br />
                I possess 2 years of hands-on experience in front-end development, specializing in React, JavaScript, CSS, and TailwindCSS. Additionally, I have expertise in backend development, utilizing Node.js and Express, with proficiency in working with databases like MongoDB, MySql, and Firebase.
                <br />
                <br />
                My past career consists of 9 years working on KC-135 aircraft for the United States Air Force, 8+ years working as a Purchaser/QA/Logistics Manager, and 3 years teaching marketing and sales to build an online distribution of products.
                <br />
                <br />
                With changes happening so quickly, the ability to adapt, learn new skills, and be accountable to apply them to new situations is a theme I'm familiar with and the foundation of my journey in tech.


            </motion.p>
            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((services, index) => (
                    <ServiceCard key={services.title} index={index} {...services} />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, "about");