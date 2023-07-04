"use client"
import Link from "next/link";
import React from "react";
import styles from "./SubNavBar.module.css";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { IoLibraryOutline } from "react-icons/io5";
import { FaUserGraduate } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
const SubNavBar = () => {
  return (
    <nav className={styles.subNav}>
      <section className={styles.section_left}>
        <div>
          <Link href="/">
            <IoLibraryOutline />
            <span>Library</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <BsFillJournalBookmarkFill />
            <span>Journal</span>
          </Link>
        </div>
      </section>
      <section className={styles.section_right}>
        <div>
          <Link href="/">
            <RiFilePaper2Line />
            <span>Phone Directory</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <RiFilePaper2Line />
            <span>Alumni</span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <FaUserGraduate />
            <span>My Portal</span>
          </Link>
        </div>
      </section>
    </nav>
  );
};

export default SubNavBar;