"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./about.module.css"; // Import the CSS module

export default function About() {
  const [activeTab, setActiveTab] = useState("skills");

  const opentab = (tabName: string) => {
    setActiveTab(tabName);
  };

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.aboutCol1}`}>
        <Image
          src="/images/Arif-image.jpg"
          alt="My Picture"
          width={345}
          height={345}
          className={`${styles.profileImage}`}
        />
      </div>

      <div className={`${styles.aboutCol2}`}>
        <h1 className={`${styles.title}`}>About Me</h1>
        <p className={`${styles.description}`}>
        I'm a dedicated Web Developer, driven by the passion to create
          user-centric and visually captivating websites. My core skills include
          HTML, CSS, and JavaScript, with a strong focus on enhancing user
          experiences. Currently, I'm mastering React JS for dynamic and
          interactive interfaces. I'm also actively expanding my expertise in
          full-stack development, exploring Node.js to build efficient web
          applications. In addition to my development pursuits, I'm currently
          delving into Generative AI and TypeScript to broaden my skill set and
          stay ahead in the ever-evolving tech landscape.
        </p>

        <div className={`${styles.tabTitles}`}>
          <p
            className={`${styles.tabLinks} ${activeTab === "skills" ? styles.activeLink : ""
              }`}
            onClick={() => opentab("skills")}
          >
            Skills
          </p>
          <p
            className={`${styles.tabLinks} ${activeTab === "experience" ? styles.activeLink : ""
              }`}
            onClick={() => opentab("experience")}
          >
            Experience
          </p>
          <p
            className={`${styles.tabLinks} ${activeTab === "education" ? styles.activeLink : ""
              }`}
            onClick={() => opentab("education")}
          >
            Education
          </p>
        </div>

        <div className={`${styles.tabContents}`}>
          {activeTab === "skills" && (
            <div className={`${styles.activeTab}`}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>UI/UX</span>
                  <br /> Designing Web/App interfaces
                </li>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Front-End Development</span>
                  <br /> Web/App Development
                </li>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Responsive Web Design</span>
                  <br /> Creating mobile-friendly websites
                </li>
              </ul>
            </div>
          )}

          {activeTab === "experience" && (
            <div className={`${styles.activeTab}`}>
              <ul className={styles.list}>
              <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Office Assistant</span>
                  <br /> National Institute of Oceanography
                  <span className={styles.date}> (March 2004 - Till now)</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Office Assistant Cum Computer Operator</span>
                  <br /> Softech Microsystems
                  <span className={styles.date}> (March 2002 - March 2004)</span>                </li>
               
              </ul>
            </div>
          )}

          {activeTab === "education" && (
            <div className={`${styles.activeTab}`}>
              <ul className={styles.list}>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>University of Karachi</span>
                  <br /> Master of Administrative Science (MAS)
                  <span className={styles.date}> (2010)</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>Governor Sindh Initiative For AI, WEB 3.0 & Metaverse</span>
                  <br /> Generative AI Engineer
                  <span className={styles.date}> (2024 - Present)</span>
                </li>
                <li className={styles.listItem}>
                  <span className={styles.skillTitle}>    Saylani Mass IT Training</span>
                  <br />  Web Development
                  <span className={styles.date}> (2023 - 2024)</span>
                </li>            
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
