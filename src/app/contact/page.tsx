
import React from "react";
import {
  FaPaperPlane,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.flexRow}>
          {/* Left Section */}
          <div className={styles.contactLeft}>
            <h1 className={styles.subTitle}>Contact Me</h1>
            <p className={styles.paragraph}>
              <FaPaperPlane className={styles.icon} />
              muhammadarifkhan4u@gmail.com
            </p>
            <div className={styles.socialIcons}>          
              <Link href="https://github.com/arifkhanpk" aria-label="GitHub">
                <FaGithub
                  className={styles.socialIcon}                />
              </Link>
            </div>
            <Link
              href="/Images/Arif-CV.pdf"
              download
              className={styles.downloadCV} >
              Download CV
            </Link>
          </div>

          {/* Right Section */}
          <div className={styles.contactRight}>
            <form name="submit-to-google-sheet" className={styles.form}>
              <input
                type="text"
                name="Name"
                placeholder="Enter Your Name"
                required
                className={styles.formInput}
              />
              <input
                type="email"
                name="Email"
                placeholder="Enter Your Email"
                required
                className={styles.formInput}
              />
              <textarea
                name="Message"
                rows={6}
                placeholder="Your Message"
                className={styles.formInput}
              />
              <button
                type="submit"
                className={styles.formButton}
              >
                Submit
              </button>
            </form>
            <span id="msg" className={styles.hidden}></span>
          </div>
        </div>
      </div>
    </div>
  );
}
