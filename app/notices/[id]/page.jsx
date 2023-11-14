"use client"
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { menuItems } from '@/utils/menuItems';
import HeaderComponent from '@/components/HeaderComponent';


const Wrapper = styled.div`
    width: 100%;
    padding: 16px 64px 0 64px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;

    @media (max-width: 958px) {
        padding: 16px 12px 0 12px;
    }

`

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
`
const Title = styled.div`
    font-size: 1.25rem;
    font-weight: bold;
    /* margin-bottom: 12px; */
    color:#2F2F2F;

    @media (max-width: 958px) {
        font-size: 1.1rem;
    }
`
const Line = styled.div`
    height: 4px;
    width: ${props => props.width ? props.width : "600px"};
    background-color: #F97A00;
    border-radius: 6px;

    @media (max-width: 958px) {
        height: 2px;
        width: ${props => props.width ? props.width : "300px"};
    }
`

const Container = styled.div`
    min-width: 77%;
    height: 80vh;
    /* border: 1px solid #575757; */
    background-color: #E9E9E9;
    color:#000;
    padding:0;

    embed{
        width: 100%;
        height: 100%;
        padding:0;
        object-fit: cover;
    }

    @media (max-width: 958px) {
        min-width: 100%;
        height: 90vh;
    }
`

const page = ({ params }) => {

    const [file, setFile] = useState("");
    const [notice, setNotice] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const query = await fetch(`https://notices.tcioe.edu.np/api/notice/notices/${params.id}`);
            const response = await query.json();
            // console.log("Response from api", response);
            if (response) {
                const file_ = response.download_file.split("/")[5]
                // console.log("response", response)
                setNotice(response);
                setFile(decodeURI(file_));
            }
        }
        getData();
    }, [])




    return (
        <>
            <HeaderComponent menuItems={menuItems} />
            <Wrapper>
                <Header>
                    <Title>{notice.title}</Title>
                    <Line />
                </Header>

                <Container>

                    {file && (
                        <embed src={`https://notices.tcioe.edu.np/media/files/${file}`} />
                    )}

                    {console.log("notice", `https://notices.tcioe.edu.np/media/files/${file}`)}


                </Container>
            </Wrapper>
        </>
    )
}

export default page