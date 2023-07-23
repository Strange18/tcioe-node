"use client"
import React from 'react'
import Image from 'next/legacy/image'

const CampusImageIndividual = ({ content }) => {
  return (
    <div style={{position: "relative"}}>
        <Image style={{borderRadius: "8px"}} src={content.image_src} layout="fill" objectFit="cover" alt="Campus Chief" />
    </div>
  )
}

export default CampusImageIndividual