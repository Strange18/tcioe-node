"use client";
import Link from "next/link";
import React from "react";
import styles from "./SubNavBar.module.css";
import { BsFillJournalBookmarkFill, BsJournalBookmark } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { FaLaptopFile } from "react-icons/fa6";
import { FaBoxOpen } from "react-icons/fa";
const SubNavBar = () => {
  return (
    <nav className={styles.subNav}>
      <section className={styles.section_left}>
        <div>
          <Link href="https://library.tcioe.edu.np/" target="_blank">
            <IoLibraryOutline className={styles.icon} />
            <span className={styles.link}>Library</span>
          </Link>
        </div>
        <div>
          <Link href="https://journal.tcioe.edu.np/" target="_blank">
            <BsFillJournalBookmarkFill className={styles.icon} />
            <span className={styles.link}>Journal</span>
          </Link>
        </div>
        <div>
          <Link href="https://elibrary.tcioe.edu.np/" target="_blank">
            <BsJournalBookmark className={styles.icon} />
            <span className={styles.link}>DSpace</span>
          </Link>
        </div>
        <div>
          <Link href="https://lms.tcioe.edu.np/" target="_blank">
            <FaLaptopFile className={styles.icon} />
            <span className={styles.link}>LMS</span>
          </Link>
        </div>
      </section>
      <section className={styles.section_right}>
        {/* <div>
          <Link href="/">
            <RiFilePaper2Line className={styles.icon} />
            <span className={styles.link}>Phone Directory</span>
          </Link>
        </div> */}
        <div>
          <Link href="/suggestions">
            <FaBoxOpen className={styles.icon} />
            <span className={styles.link}>Suggestion Box</span>
          </Link>
        </div>
        <div>
          <Link href="/alumni">
            <RiFilePaper2Line className={styles.icon} />
            <span className={styles.link}>Alumni</span>
          </Link>
        </div>
        {/* <div>
          <Link href="https://mail.google.com" target="_blank">
            <AiOutlineMail className={styles.icon} />
            <span className={styles.link}>Check Mail</span>
          </Link>
        </div> */}
        <div>
          <Link href="/myportal">
            <FaUserGraduate className={styles.icon} />
            <span className={styles.link}>My Portal</span>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default SubNavBar;
