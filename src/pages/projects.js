import React from 'react';
import CP1 from '../assets/Veritas.jpg';
import CP2 from '../assets/AlgoAnalytics.png';
import CP3 from '../assets/Google.jpg';
import CP4 from '../assets/Briota.jpg';
import CP5 from '../assets/IDBI-Intech.jpg';
import CP6 from '../assets/BobbleAI.jpg';
import CP7 from '../assets/GrowMonks.png';
import CP8 from '../assets/KODEITSolutions.jpg';
import CP9 from '../assets/GirlScriptIndia.jpg';
import CP10 from '../assets/Verzeo.jpg';


export default function Experience() {
  return (
    //<div className=" bg-slate-50 relative overflow-hidden" id="projects">
    <div className=" max-w-6xl mx-auto p-5 py-20" id="projects">
      <div className="text-5xl md:text-6xl text-center md:text-left font-medium text-black-300 pb-4 mb-16">
        Projects
      </div>
      {experiences.map((exp) => {
        return (
          <div className="w-full shadow-md p-5 rounded-lg mb-10">
            <div className=" grid md:grid-cols-2 gap-4 md:order-2">
              
              <div className="md:col-span-3 space-y-4 my-auto">
                <div className="text-lg md:text-2xl text-cyan-500 font-bold">{exp.company}</div>
                <div className="md:flex justify-between">
                  <div className="text-l text-gray-500 font-bold">{exp.position}</div>
                  <div className=" text-l text-gray-500">{exp.date}</div>
                </div>
                <div className=" text-black-400 text-sm">
                  <ul className="list-disc">
                    {exp.details.map((detail) => (
                      <li>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    //</div>
  );
}

const experiences = [
  {
    position: 'Alteryx, MS-SQL, Pwer-BI, Tableau',
    company: 'New York City Food Inspection Analysis',
    details: [
      "Transformed and managed data ingestion of 200k+ records using Alteryx & MS-SQL ensuring data accuracy of 95%. Designed 12+ ETL pipelines for data cleaning and populating fact & dimension tables within the data warehouse",
      "Created 6 interactive dashboards by sourcing data from Snowflake data warehouse, leveraging Power BI & Tableau"
    ],
    date: 'October 2023 - November 2023',
    //img: CP1,
    //companyUrl: "https://www.veritas.com/"

  },

  {
    position: 'Python, Rpi, AWS, DynamoDB, RDS, HTML, CSS, ReactJS', 
    company: 'Smart Air Quality Monitoring System',
    details: [
      "Engineered a robust System Design embedding real-time analytics, slashing pollution emergency response time by 50% through refined data structuring and reporting",
      "Architected every integration of software applications into the hardware system, streamlining processes and saving 50+ hours per week in manual data entry",
    ],
    date: 'August 2021 - May 2022',
    //img: CP2,
    //companyUrl: 'https://www.algoanalytics.com/'
  },

  {
    position: 'Machine Learning, Python, Jupyter Notebook',
    company: 'Insurance Cost Prediction',
    details: [
      "Executed data collection and preprocessing activities for an expansive insurance dataset, medical history, and insurance costs, Leading data-driven insights and facilitating effective risk management strategies",
      "Led the project to implement regression models, including Linear Regression and Random Forest, to improve predictive capabilities, leading to a significant 30% increase in customer retention",
    ],
    date: 'July 2021 - Sept 2021',
    //img: CP2,
    //companyUrl: 'https://www.algoanalytics.com/'
  },
  /*{
    position: 'Flutter, Firebase, Flask, Machine Learning',
    company: 'Smart Radiation Detector',
    details: [
      "This app developed in Flutter accurately calculates the electronic radiation exposure in an individual's day to day life.",
      "The trained Machine Learning model working in the backend also triggers a notification in case the user is about to enter a location which has high radiation exposure."
    ],
    date: 'Apr 2021 - June 2021',
    //img: CP3,
    //companyUrl: "https://about.google/"
  },
  {
    position: 'Flutter, Firebase, Flask, NLP, Machine Learning',
    company: 'Women Safety App',
    details: [
     "This app developed in Flutter makes use of Speech Recognition to detect trigger words such as 'Help' & 'Save Me' and sends a SMS notification to the emergency contacts along with the location coordinates of the user.",
     "Authentication of the user is done through Firebase and a NLP model trained to detect various trigger words runs in the backend.",
     "As the app does not store any data of the audio conversations that it listens to, user privacy is preserved."
    ],
    date: 'Sept 2020 - Nov 2020',
    //img: CP4,
    //companyUrl: "https://www.briota.co/"
  },
  {
    position: 'Blockchain, Solidity, Flutter',
    company: 'Medchain',
    details: [
      "A mobile-based medical records management system based on Blockchain to securely store medical data, facilitate online consultations and enable medical fee payment.",
      "Tested and Deployed on Ethereum Blockchain."
    ],
    date: 'Dec 2021 - Feb 2022',
    //img: CP5,
    //companyUrl: "https://www.idbiintech.com/"

  },
  {
    position: 'Hyperledger, Blockchain, React.js, Flutter',
    company: 'Disaster Management System',
    details: [
      "A web and mobile-based disaster management system to be used by National Defense Response Force (NDRF) making use of private Blockchain."
    ],
    date: 'Mar 2022 - Aug 2022',
    //img: CP6,
    //companyUrl: "https://www.bobble.ai/en/home"

  },*/
  {
    
      position: 'HTML, CSS, Javascript, React.js, Node.js',
      company: 'Portfolio Website',
      details: [
        "The website you are looking at!"
      ],
      // date: 'Sept 2022',
      //img: CP6,
      //companyUrl: "https://www.bobble.ai/en/home"
  
    
    
  }
  
];
