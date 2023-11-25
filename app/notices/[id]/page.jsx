"use client";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { menuItems } from "@/utils/menuItems";
import HeaderComponent from "@/components/HeaderComponent";
import { FaArrowDown } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
// import { useRouter } from 'next/router'
// import { Suspense } from 'react';

const Wrapper = styled.div`
  width: 100%;
  padding: 16px 64px 0 64px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 5rem;
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 958px) {
    padding: 16px 12px 0 12px;
  }
`;

const WholeContainer = styled.div``;

const LatestTrends = styled.div`
  padding: 10px;
  border-radius: 6px;
  border: 1px solid transparent;
  box-shadow: 5px 0 5px rgba(0.1, 0.1, 0.1, 0.1),
    -5px 0 5px rgba(0.1, 0.1, 0.1, 0.1), 0 5px 5px rgba(0.1, 0.1, 0.1, 0.1);
  margin-top: 50px;

  h1 {
    font-size: 1.25rem;
    font-weight: bold;
    color: #2f2f2f;
  }

  @media (max-width: 1200px) {
    margin-top: -40px;
    margin-bottom: 30px;
  }
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 24px;
`;
const Title = styled.div`
display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  color: #2f2f2f;

  @media (max-width: 958px) {
    font-size: 1.1rem;
  }
`;
const Line = styled.div`
  height: 4px;
  width: ${(props) => (props.width ? props.width : "600px")};
  background-color: #f97a00;
  border-radius: 6px;

  @media (max-width: 958px) {
    height: 2px;
    width: ${(props) => (props.width ? props.width : "300px")};
  }
`;

const UnderLine = styled.div`
  height: 2px;
  width: ${(props) => (props.width ? props.width : "300px")};
  background-color: #f97a00;
  border-radius: 2px;
  margin-bottom: 10px;

  @media (max-width: 1200px) {
    height: 2px;
    width: ${(props) => (props.width ? props.width : "300px")};
  }

  // @media (max-width: 1200px) {
  //   grid-template-columns: 1fr;
  // }
`;

const WholeUnderline = styled.div`
  margin-top: 15px;
  margin-bottom: 5px;
  height: 0.5px;
  background-color: red;
  border-radius: 2px;

  @media (max-width: 958px) {
    height: 0.3px;
  }
`;

const Container = styled.div`
  // min-width: 100%;
  height: 95vh;
  color: #000;
  padding: 0;
  margin-bottom: 2rem;

  embed {
    width: 100%;
    height: 100%;
    padding: 0;
    object-fit: cover;
  }

  @media (max-width: 958px) {
    min-width: 100%;
    height: 90vh;
  }
`;

const ListNotices = styled.div`
  color: black;
  padding: 5px;
`;

const NoticeInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NoticeListTitle = styled.div`
  font-weight: bold;
  a:hover {
    color: red;
  }
`;

const NoticeType = styled.div`
  margin-bottom: 5px;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  // font-size: 10px;
  text-align: center;
  align-items: center;
  color: white;
  background-color: ${(props) =>
    props.data === "Administration"
      ? "#0d63b8"
      : props.data === "Admission"
      ? "#09c109"
      : props.data === "Exam"
      ? "#f43131"
      : props.data === "Scholarship"
      ? "#07b5fa"
      : props.data === "Department"
      ? "#44a0e1"
      : props.data === "General"
      ? "#282727"
      : "#ef07c4"};
`;

const PubDate = styled.div`
  margin-bottom: 5px;
`;

const Scrollable = styled.div`
  max-height: 600px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5em;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
`;

const LoadMore = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  border: 2px solid green;
  border-radius: 4px;
  float: right;
  padding: 3px 10px;
  color: white;
  background: green;
`;

const TitleInfo = styled.div`
display: flex;
justify-content: space-between;
`;

const NoticeTypeTitle = styled.div`
margin-bottom: 5px;
border: none;
border-radius: 4px;
padding: 4px 8px;
// font-size: 10px;
text-align: center;
align-items: center;
color: white;
max-height: 35px;
background-color: ${(props) =>
  props.data === "Administration"
    ? "#0d63b8"
    : props.data === "Admission"
    ? "#09c109"
    : props.data === "Exam"
    ? "#f43131"
    : props.data === "Scholarship"
    ? "#07b5fa"
    : props.data === "Department"
    ? "#44a0e1"
    : props.data === "General"
    ? "#282727"
    : "#ef07c4"};
`;

const DateInfo = styled.div`
display: flex;
align-items: center;
gap: 5px;
font-weight: bold;
`;

const NoticePubDate = styled.div``;

const page = ({ params }) => {
  // const router = useRouter()
  // console.log(router)
  // console.log("params", params)
  const [file, setFile] = useState("");
  const [notice, setNotice] = useState([]);
  const [latestNotices, setLatestNotices] = useState([]);
  const [showAllNotices, setShowAllNotices] = useState(false);
  const [allNotices, setAllNotices] = useState([]);

  const loadAllNotices = async () => {
    const query = await fetch(
      "https://notices.tcioe.edu.np/api/notice/notices"
    );
    const response = await query.json();
    setAllNotices(response);
    setShowAllNotices(true);
  };

  const displayNotices = showAllNotices
    ? allNotices
    : latestNotices.slice(0, 10);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(
        `https://notices.tcioe.edu.np/api/notice/notices/${params.id}`
      );
      const response = await query.json();
      // console.log("Response from api", response);
      if (response) {
        const file_ = response.download_file.split("/")[5];
        // console.log("response", response)
        setNotice(response);
        setFile(decodeURI(file_));
      }
    };

    const getLatestNotices = async () => {
      const latestNoticesQuery = await fetch(
        "https://notices.tcioe.edu.np/api/notice/notices"
      );
      const latestNoticesResponse = await latestNoticesQuery.json();

      if (latestNoticesResponse && latestNoticesResponse.length > 0) {
        setLatestNotices(latestNoticesResponse);
      }
    };

    getData();
    getLatestNotices();
  }, [params.id]);

  return (
    <>
      <HeaderComponent menuItems={menuItems} />
      <Wrapper>
        <WholeContainer>
          <Header>
            <TitleInfo>
            <Title>
              {notice.title}
            </Title>
            {notice.notice_category && (
                <NoticeTypeTitle data={notice.notice_category.notice_type}>
                  {notice.notice_category.notice_type}
                </NoticeTypeTitle>
              )}
              </TitleInfo>
              {/* {notice.notice_category && (
                <NoticePubDate>
                  {notice.notice_category.notice_type}
                </NoticePubDate>
              )} */}
              <Line />
              <DateInfo>
              <SlCalender />
              {new Date(notice.published_date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}   
              </DateInfo>
          </Header>
          <Container>
            {file && (
              <embed src={`https://notices.tcioe.edu.np/media/files/${file}`} />
            )}

            {/* {console.log("notice", `https://notices.tcioe.edu.np/media/files/${file}`)} */}
          </Container>
        </WholeContainer>
        <LatestTrends>
          <h1>Latest Notices</h1>
          <UnderLine />
          <Scrollable>
            {displayNotices.map((latestNotice) => (
              <p key={latestNotice.id}>
                {notice.id !== latestNotice.id && (
                  <ListNotices>
                    <NoticeInfo>
                      <NoticeType
                        data={latestNotice.notice_category.notice_type}
                      >
                        {latestNotice.notice_category.notice_type}
                      </NoticeType>
                      <PubDate>{latestNotice.published_date}</PubDate>
                    </NoticeInfo>
                    <NoticeListTitle>
                      <a
                        style={{
                          cursor: "pointer",
                        }}
                        onClick={async () => {
                          const query = await fetch(
                            `https://notices.tcioe.edu.np/api/notice/notices/${latestNotice.id}`
                          );
                          const response = await query.json();
                          if (response) {
                            const file_ = response.download_file.split("/")[5];
                            setNotice(response);
                            setFile(decodeURI(file_));
                          }
                        }}
                      >
                        {latestNotice.title}
                      </a>
                    </NoticeListTitle>
                    <WholeUnderline />
                  </ListNotices>
                )}
              </p>
            ))}
            <LoadMore>
              {!showAllNotices && (
                <button onClick={loadAllNotices}>View More</button>
              )}
              <FaArrowDown />
            </LoadMore>
          </Scrollable>
        </LatestTrends>
      </Wrapper>
    </>
  );
};

export default page;
