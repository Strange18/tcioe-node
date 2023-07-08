"use client"
import React from 'react'
import Image from "next/legacy/image"

const CampusImageIndividual = ({ content }) => {
  return (
    <div style={{position: "relative"}}>
        <Image src={content.image_src} layout="fill" objectFit="cover" alt="Campus Chief" />
    </div>
  )
}

export default CampusImageIndividual