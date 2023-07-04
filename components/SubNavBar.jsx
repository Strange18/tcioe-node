"use client";
import Link from "next/link";
import React from "react";
import styles from "./SubNavBar.module.css";
import { BsFillJournalBookmarkFill, BsJournalBookmark } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
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
            <span className={styles.link}>Thesis</span>
          </Link>
        </div>
      </section>
      <section className={styles.section_right}>
        <div>
          <Link href="/">
            <RiFilePaper2Line className={styles.icon} />
            <span className={styles.link}>Phone Directory</span>
          </Link>
        </div>
        <div>
          <Link href="https://notices.tcioe.edu.np/media/files/Tracer_Study_Questionnaire.pdf">
            <RiFilePaper2Line className={styles.icon} />
            <span className={styles.link}>Alumni</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <FaUserGraduate className={styles.icon} />
            <span className={styles.link}>My Portal</span>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default SubNavBar;
