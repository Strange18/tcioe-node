"use client"
import Image from 'next/legacy/image'
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@/assets/searchIcon.svg'

const Container = styled('div')`
margin: 0 5rem;
    }
    `

const LogoContainer = styled('div')`
    width:16px;
    height:16px;
    position:relative;
`

const Text = styled('h1')`
    font-size: 16px;
    font-weight: 700;
    color: #676767;
`

const SearchNotice = () => {
  return (
    <Container>
        {/* <LogoContainer>
              <Image src={SearchIcon} layout="fill" objectFit="contain" alt="" />
        </LogoContainer>
        <Text>Search...</Text> */}
    </Container>
  )
}

export default SearchNotice