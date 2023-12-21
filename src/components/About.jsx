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
                    <p className="font-bold">FrontEnd Engineer&nbsp;&nbsp;👨🏾‍💻</p>

                    <p className="font-bold">Software Implementation&nbsp;&nbsp;💫</p>

                    <p className="font-bold">Project Management&nbsp;🫱🏾‍🫲🏾</p>

                </div>
                <br />
                A few years back as I began my tech journey, I remember the humblenss of the unknown. It didn't take long for me to realize how seamlessly my past experiences and skills could transition into tech.  
                <b/>
                Equipped with diverse technical background encompassing military service and Project/Product Management, while my software expertise lies within creating Frontend Applications with React and JavaScript.
                <br />
                Having extensive hands-on experience with live Software Developement and Deployments has been an invaluable cornerstone in my journey.
                <br />
                I have honed my skills in functional testing, Quality Assurance, and project management throughout my career. 

                <br />
                <br />
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