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
                    <p className="font-bold">Proud daddy of a 3 year old princess👑&nbsp;&nbsp;</p>

                    <p className="font-bold">Serve as a mentor through tech for Tulsa's youth&nbsp;&nbsp;🙏🏾</p>

                    <p className="font-bold">Personal development is a passion of mine&nbsp;📚</p>

                </div>
                <br />
            
                <br />
                I possess 2 years of experience developing Full Stack applications. I prefer to build using React, TypeScript, and Tailwind for the Frontend and Express, NodeJS, Firebase, and MongoDB for the middleware/backend. I particulary enjoy creating a pleasant user exerience, through animation, 3d graphics, and scrolling effects. 
                <br />
                <br />
                My past career consists of 9 years working on KC-135 aircraft for the United States Air Force, 8+ years working as a Purchaser/QA/Logistics Manager, and 3 years teaching marketing and sales to build an online distribution of products.
                <br />
                <br />
                In a rapidly evolving environment, I have become accustomed to adapting, acquiring new skills, and taking responsibility for their application in unfamiliar scenarios - a principle that underpins my technological journey.


            </motion.p>
            {/* <div className="mt-20 flex flex-wrap gap-10">
                {services.map((services, index) => (
                    <ServiceCard key={services.title} index={index} {...services} />
                ))}
            </div> */}
        </>
    )
}

export default SectionWrapper(About, "about");