"use client"
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { menuItems } from '@/utils/menuItems';
import HeaderComponent from '@/components/HeaderComponent';

const Wrapper = styled.div`
    width: 100%;
    padding: 16px 64px 0 64px;
    display: flex;
    flex-direction: column;
    gap: 0px;

    @media (max-width: 768px) {
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
    font-size: 2rem;
    font-weight: bold;
    /* margin-bottom: 12px; */
    color:#181B57;
`
const Line = styled.div`
    height: 4px;
    width: ${props => props.width ? props.width : "100px"};
    background-color: #F97A00;
    border-radius: 6px;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 24px;


    @media (max-width: 958px) {
        flex-direction: column-reverse;
    }
    
`
const List = styled.div`
    flex:3.5;
    display: flex;
    flex-direction: column;
    gap:18px;
`
const Item = styled(Link)`
    text-decoration: none;
    width: 100%;
    height:120px;
    background-color: #f0efef;
    border-radius: 12px;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 18px;
    transition: 0.2s ease-in-out;

    &:hover{
        background-color: #e6e6e6;
        scale: 1.02;
    }
    `
const ItemDate = styled.div`
    width:85px;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
    justify-content: center;
    background-color: #7177FF;
    border-radius: 6px;
`
const ItemDateMonth = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: #FFFFFF;
    @media (max-width: 958px) {
        font-size: 1rem;
    }
`
const ItemDateDay = styled.div`
    font-size: 2rem;
    font-weight: 600;
    color: #FFFFFF;

    @media (max-width: 958px) {
        font-size: 1.8rem;
    }
`


const ItemText = styled.div`
    flex: 5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    height: 85%;

`
const ItemTitle = styled.div`
    font-size: 1.2rem;
    color: #181B57;
    font-weight: bold;
    width:100%;
    overflow: hidden;

    @media (max-width: 958px) {
        font-size: 1rem;
    }
`
const ItemSubtitle = styled.div`
    font-size: 0.8rem;
    color: #8A8A8A;
    width:100%;
    overflow: hidden;
    @media (max-width: 958px) {
        font-size: 0.6rem;
    }
`

const ItemTagContainer = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: flex-end;
    justify-content: flex-start;
`

const ItemTag = styled.div`
    font-size: 1rem;
    height: 24px;
    padding: 4px 8px 4px 8px;
    color:#FFFFFF;
    background-color: ${(props) => props.type === "News" ? "#0D2C4B" : props.type === "Admin" ? "#0E5B24" : props.type === "Exam" ? "#A81C1C" : "#282727"};
    text-align: center;
`


const SearchSection = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 25px;
`
const SearchLabel = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
    color: #647E98;
    margin-bottom: 0px;

`
const SearchInput = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 6px;
    border: 1px solid #DBDEE7;
    padding: 4px 12px 4px 12px;
    margin-bottom: 4px;
    font-size: 1rem;
    color: #837D7D;
    outline: none;
    transition: 0.2s ease-in-out;

    &:focus{
        border: 1px solid #7177FF;
    }

`
const DatePickerContainer = styled.div`
    width: 100%;
    display: flex;
    min-height:30px;

    .react-datepicker__input-container input {
        border-radius: 4px;
    border: 1px solid #DBDEE7;
    padding: 4px 12px 4px 12px;
    margin-bottom: 4px;
    font-size: 1rem;
    color: #837D7D;
    outline: none;

    &:focus{
        border: 1px solid #7177FF;
    }
  }
`
const SearchButton = styled.button`
    width: 65%;
    height: 30px;
    border-radius: 6px;
    background-color:#7177FF;
    padding: 4px 12px 4px 12px;
    font-size: 1rem;
    color: #FFFFFF;
    outline: none;
    border: none;
    transition: 0.2s ease-in-out;

    &:hover{
        background-color: #5F65E2;
    }
`
const CheckboxContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 32px;
    align-items: center;
    justify-content: flex-start;
`
const Checkbox = styled.input`
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid #DBDEE7;
    padding: 4px 12px 4px 12px;
    margin-bottom: 4px;
    font-size: 1rem;
    color: #837D7D;
    outline: none;
    transition: 0.2s ease-in-out;

    &:focus{
        border: 1px solid #7177FF;
    }
`
const CheckboxLabel = styled.div`
    font-size: 1rem;
    color: #647E98;
    margin-bottom: 0px;
`

const typedata = [
    {
        id: 1,
        notice_type: "News"
    },
    {
        id: 2,
        notice_type: "Admin"
    },
    {
        id: 3,
        notice_type: "Exam"
    },
]

const page = () => {
    const [notices, setNotices] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const query = await fetch("https://notices.tcioe.edu.np/api/notice/notices/", { cache: 'no-store' });
            const response = await query.json();
            console.log("Responses from api");
            setNotices(response);
            console.log(response);
        }
        getData();
    }, []);
    const [Types, setTypes] = useState([]);
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        setTypes(typedata);
    }, [])

    const HandleChange = (e) => {
        const { name, checked } = e.target;
        console.log(name, checked);
        let tempstate = Types.map((item) =>
            item.notice_type === name ? { ...item, isChecked: checked } : item
        );
        setTypes(tempstate);
    }


    return (
        <>
            <HeaderComponent menuItems={menuItems} />
            <Wrapper>
                <Header>
                    <Title>Notices</Title>
                    <Line width={"100px"} />
                </Header>
                <Container>
                    <List>
                        {notices ? notices.map((notice) => (
                            <Item href={`https://notices.tcioe.edu.np/media/files/${notice.download_file.split('/')[5]}`} key={notice.id} >
                                <ItemDate>
                                    <ItemDateMonth>
                                        {Number(notice.published_date.split("-")[1]) === 1 ? "Jan" : Number(notice.published_date.split("-")[1]) === 2 ? "Feb" : Number(notice.published_date.split("-")[1]) === 3 ? "Mar" : Number(notice.published_date.split("-")[1]) === 4 ? "Apr" : Number(notice.published_date.split("-")[1]) === 5 ? "May" : Number(notice.published_date.split("-")[1]) === 6 ? "Jun" : Number(notice.published_date.split("-")[1]) === 7 ? "Jul" : Number(notice.published_date.split("-")[1]) === 8 ? "Aug" : Number(notice.published_date.split("-")[1]) === 9 ? "Sep" : Number(notice.published_date.split("-")[1]) === 10 ? "Oct" : Number(notice.published_date.split("-")[1]) === 11 ? "Nov" : "Dec"}
                                    </ItemDateMonth>
                                    <ItemDateDay>
                                        {notice.published_date.split("-")[2]}
                                    </ItemDateDay>
                                </ItemDate>
                                <ItemText>
                                    <ItemTitle>{notice.title}</ItemTitle>
                                    <ItemSubtitle dangerouslySetInnerHTML={{ __html: notice.description }}/>
                                </ItemText>
                                <ItemTagContainer>
                                    {/* <ItemTag type={notice.type}>{notice.type}</ItemTag> */}
                                </ItemTagContainer>
                            </Item>
                        )): (<h1>Loading</h1>)}
                    </List>

                    <SearchSection>

                        <SearchLabel>Filter</SearchLabel>
                        <SearchInput placeholder="Search Keywords..." />
                        <SearchLabel>From</SearchLabel>
                        <DatePickerContainer>
                            <DatePicker closeOnScroll={true} selected={startDate} onChange={(date) => setStartDate(date)} />
                        </DatePickerContainer>
                        <SearchLabel>To</SearchLabel>
                        <DatePickerContainer>
                            <DatePicker closeOnScroll={true} selected={endDate} onChange={(date) => setEndDate(date)} />
                        </DatePickerContainer>
                        <SearchLabel>Type</SearchLabel>
                        {Types.map((item) => (
                            <CheckboxContainer key={item.id}>
                                <Checkbox type="checkbox" name={item.notice_type} checked={item?.isChecked || false} onChange={HandleChange} />
                                <CheckboxLabel htmlFor={item.notice_type} >{item.notice_type}</CheckboxLabel>
                            </CheckboxContainer>
                        ))}
                        <SearchButton>Search</SearchButton>



                    </SearchSection>

                </Container>
            </Wrapper>
        </>

    )
}

export default page