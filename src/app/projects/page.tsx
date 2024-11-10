
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.css";


  export default function Projects() {

  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <h1 className={styles.title}>My Work</h1>
             

          {/* Foodies */}          
            <Image
              src="/images/Foodies.png"
              alt="Foodies"
              width={900}
              height={600}
              className={styles.image}
            />
            <div className={styles.layer}>
              <h3 className={styles.text}>Foodies</h3>
            
              <Link
                href="https://foodies-project-sooty.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
              >
                <FaExternalLinkAlt className={styles.textxl} />
              </Link>
            </div>
          </div>          
        </div>           
  );
}
