"use client";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { menuItems } from "@/utils/menuItems";
import HeaderComponent from "@/components/HeaderComponent";
import { addDays } from "date-fns";

const Wrapper = styled.div`
  width: 100%;
  padding: 16px 64px 0 64px;
  display: flex;
  flex-direction: column;
  gap: 0px;

  @media (max-width: 768px) {
    padding: 16px 12px 0 12px;
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
  font-size: 2rem;
  font-weight: bold;
  /* margin-bottom: 12px; */
  color: #181b57;
`;
const Line = styled.div`
  height: 4px;
  width: ${(props) => (props.width ? props.width : "100px")};
  background-color: #f97a00;
  border-radius: 6px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 1200px) {
    flex-direction: column;
    width: 100%;
  }
`;

const List = styled.div`
  flex: 3.5;
  display: flex;
  flex-direction: column;
  gap: 18px;
  overflow-y: auto;
`;

const Buttoned = styled.button`
  position: absolute;
  top: -2.8rem;
  right: -9px;
  color: #f7f4f4;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 1rem;
  position: relative;
  background-color: ${(props) =>
    props.data === "Administration"
      ? "#034587"
      : props.data === "Admission"
      ? "#09c109"
      : props.data === "Exam"
      ? "#f43131"
      : props.data === "Scholarship"
      ? "#3bbbed"
      : props.data === "Department"
      ? "#44a0e1"
      : props.data === "General"
      ? "#282727"
      : "#ef07c4"};
  text-align: center;

  @media (max-width: 700px) {
    font-size: 0.6rem;
  }
`;

const Item = styled(Link)`
  text-decoration: none;
  width: 100%;
  height: 130px;
  background-color: #f0efef;
  border-radius: 12px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;
  transition: 0.2s ease-in-out;


  &:hover {
    background-color: #d6d5d5;
  }

  ${(props) =>
    props.isSingleOrDoubleNotice &&
    css`
      margin-top: 4.5rem;
      margin-bottom: 15rem;
    `}

  @media (max-width: 958px) {
    ${(props) =>
      props.isSingleOrDoubleNotice &&
      css`
        margin-top: 0rem;
        margin-bottom: 0rem;
      `}
  }
`;
const ItemDate = styled.div`
  width: 85px;
  height: 90%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  background-color: #7177ff;
  border-radius: 6px;
`;
const ItemDateMonth = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #ffffff;
  @media (max-width: 958px) {
    font-size: 1rem;
  }
`;
const ItemDateDay = styled.div`
  font-size: 2rem;
  font-weight: 600;
  color: #ffffff;

  @media (max-width: 958px) {
    font-size: 1.8rem;
  }
`;

const ItemDateDates = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: #ffffff;
`;

const ItemText = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  height: 85%;
`;
const ItemTitle = styled.div`
  font-size: 1.2rem;
  color: #181b57;
  font-weight: bold;
  width: 140%;
  overflow: hidden;
  

  @media (max-width: 958px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    width: 180%;
    padding-top: 0.5rem;
  }
`;
const ItemSubtitle = styled.div`
  font-size: 0.8rem;
  color: #8a8a8a;
  width: 140%;
  overflow: hidden;

  @media (max-width: 958px) {
    font-size: 0.6rem;
  }

  @media (max-width: 400px) {
    width: 180%;
  }
`;

const ItemTagContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
  justify-content: flex-start;
`;

const SearchSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding: 25px;
  position: sticky;
  top: 5rem;
  right: 2rem;
  overflow-y: auto;
  max-height: calc(100vh - 10rem);
  margin-top: -6rem;

  @media (max-width: 1200px) {
    position: relative;
    top: 0;
    right: 0;
    max-height: initial;
    margin-top: 0rem;
  }
`;

const SearchLabel = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #647e98;
  margin-bottom: 0px;
`;
const SearchInput = styled.input`
  width: 14rem;
  height: 30px;
  border-radius: 6px;
  border: 1px solid #dbdee7;
  padding: 4px 12px 4px 12px;
  margin-bottom: 4px;
  font-size: 1rem;
  color: #837d7d;
  outline: none;
  transition: 0.2s ease-in-out;

  &:focus {
    border: 1px solid #7177ff;
  }

  @media (max-width: 1100px) {
    width: 14rem;
  }
`;
const DatePickerContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 30px;

  .react-datepicker__input-container input {
    border-radius: 4px;
    border: 1px solid #dbdee7;
    padding: 4px 12px 4px 12px;
    margin-bottom: 4px;
    font-size: 1rem;
    color: #837d7d;
    outline: none;

    &:focus {
      border: 1px solid #7177ff;
    }
  }
`;
const SearchButton = styled.button`
  height: 30px;
  border-radius: 6px;
  background-color: #7177ff;
  padding: 4px 12px 4px 12px;
  font-size: 1rem;
  color: #ffffff;
  outline: none;
  border: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #5f65e2;
  }

  @media (max-width: 1100px) {
    width: 10rem;
  }
`;

const SameLine = styled.div`
  display: flex;
`;

const RadioContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
`;
const Radio = styled.input`
  width: 20px;
  height: 20px;
  border-radius: 4px;
  border: 1px solid #dbdee7;
  padding: 4px 12px 4px 12px;
  margin-bottom: 4px;
  font-size: 1rem;
  color: #837d7d;
  outline: none;
  transition: 0.2s ease-in-out;

  &:focus {
    border: 1px solid #7177ff;
  }
`;
const RadioLabel = styled.div`
  font-size: 1rem;
  color: #647e98;
  margin-bottom: 0px;
`;

const PaginationContainer = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  justify-content: center;
`;

const PageNumber = styled.li`
  margin: 0 5px;
`;

const PageButton = styled.button`
  margin: 2rem 0;
  font-size: 1rem;
  padding: 6px 12px;
  background-color: ${(props) => (props.active ? "#7177FF" : "transparent")};
  color: ${(props) => (props.active ? "#FFFFFF" : "#181B57")};
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;

  &:hover {
    background-color: ${(props) => (props.active ? "#7177FF" : "#e6e6e6")};
  }
`;

const NoticenotFound = styled.h2`
  font-size: 1.8rem;
  text-align: center;
  color: #20068e;
  margin: auto 13rem;
  font-family: 'Courier New', Courier, monospace;

  @media (max-width: 1441px) {
    font-size: 1.1rem;
    font-weight: bold;
  }

  @media (max-width: 1100px) {
    margin: 1rem auto;
    font-size: 1rem;
    font-weight: bold;
  }
`;

const NotPag = styled.div`
flex: 3;
display: flex;
flex-direction: column;
gap: 18px;
overflow-y: auto;
`;

const Ellipsis = styled.li`
  margin: 2rem 5px;
  color: #8a8a8a;
`;

const typedata = [
  {
    id: 1,
    notice_type: "Administration",
  },
  {
    id: 2,
    notice_type: "Admission",
  },
  {
    id: 3,
    notice_type: "Exam",
  },
  {
    id: 4,
    notice_type: "Scholarship",
  },
  {
    id: 5,
    notice_type: "Department",
  }, 
  {
    id: 6,
    notice_type: "General",
  },
];

const Page = () => {
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesPerPage] = useState(10);
  const [selectedNoticeType, setSelectedNoticeType] = useState("");
  const [noticesNotFound, setNoticesNotFound] = useState(false);
  const [Types, setTypes] = useState([]);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const fetchData = async () => {

    };
  
    // Check if both start date and end date have values
    if (startDate && endDate) {
      handleSearch(); // Call handleSearch function
    } else {
      fetchData(); // Fetch data normally
    }
  }, [selectedNoticeType, startDate, endDate, searchKeyword]);
  

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(
        `https://notices.tcioe.edu.np/api/notice/search/?keyword=${searchKeyword}`,
        { cache: "no-store" }
      );
      const response = await query.json();
      setNotices(response);
    };
    getData();
  }, [selectedNoticeType]);

  // Pagination Logic
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = async () => {
    setCurrentPage(1);
    setNoticesNotFound(false);
  
    const query = await fetch(
      "https://notices.tcioe.edu.np/api/notice/notices/",
      { cache: "no-store" }
    );
    const response = await query.json();
  
    // Split search keyword into individual keywords
    const searchKeywords = searchKeyword.split(" ").filter((keyword) => keyword.trim() !== "");
  
    // Filter notices based on the selected date range, notice type, and search keywords
    const filteredNotices = response.filter((notice) => {
      const noticeDate = new Date(notice.published_date);
      const isMatchedKeyword = searchKeywords.some((keyword) =>
        new RegExp(keyword, "i").test(notice.title) || new RegExp(keyword, "i").test(notice.description) || new RegExp(keyword, "i").test(notice.notice_category.notice_type)
      );
  
      return (
        (!startDate || noticeDate >= startDate) &&
        (!endDate || noticeDate <= endDate) &&
        (!selectedNoticeType || notice.notice_category.notice_type === selectedNoticeType) &&
        (searchKeywords.length === 0 || isMatchedKeyword)
      );
    });
  
    if (filteredNotices.length === 0) {
      setNoticesNotFound(true);
    } else {
      setNotices(filteredNotices);
    }
  };
  

  const handleReset = () => {
    setCurrentPage(1);
    setStartDate(null);
    setEndDate(null);
    setSelectedNoticeType("");
    setSearchKeyword("");
    setNoticesNotFound(false);
    // Fetch all notices again from the remote API
    const getData = async () => {
      const query = await fetch(
        "https://notices.tcioe.edu.np/api/notice/notices/",
        { cache: "no-store" }
      );
      const response = await query.json();
      setNotices(response);
    };
    getData();
  };

  useEffect(() => {
    setTypes(typedata);
  }, []);

  const HandleChange = async (event) => {
    const { value } = event.target;
    setSelectedNoticeType(value);

    // Filter notices based on the selected notice type
    const filteredNotices = notices.filter((notice) => {
      return notice.notice_category.notice_type === value;
    });

    if (filteredNotices.length === 0) {
      setNoticesNotFound(true);
    } else {
      setNotices(filteredNotices);
      setNoticesNotFound(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <>
      <HeaderComponent menuItems={menuItems} />
      <Wrapper>
        <Header>
          <Title>Notices</Title>
          <Line width={"100px"} />
        </Header>
        <Container>
          {noticesNotFound ? (
            <NoticenotFound>No search found for your query...</NoticenotFound>
          ) : (
            <NotPag>
            <List>
              {/* {currentNotices ? ( */}
              {currentNotices.length <= 1
                ? currentNotices.map((notice) => (
                    <Item
                      href={`https://notices.tcioe.edu.np/media/files/${
                        notice.download_file.split("/")[5]
                      }`}
                      target="_blank"
                      key={notice.id}
                      isSingleOrDoubleNotice={currentNotices.length <= 2}
                      // isLastItem={index === currentNotices.length - 1}
                    >
                      <ItemDate>
                        <ItemDateMonth>
                          {Number(notice.published_date.split("-")[1]) === 1
                            ? "Jan"
                            : Number(notice.published_date.split("-")[1]) === 2
                            ? "Feb"
                            : Number(notice.published_date.split("-")[1]) === 3
                            ? "Mar"
                            : Number(notice.published_date.split("-")[1]) === 4
                            ? "Apr"
                            : Number(notice.published_date.split("-")[1]) === 5
                            ? "May"
                            : Number(notice.published_date.split("-")[1]) === 6
                            ? "Jun"
                            : Number(notice.published_date.split("-")[1]) === 7
                            ? "Jul"
                            : Number(notice.published_date.split("-")[1]) === 8
                            ? "Aug"
                            : Number(notice.published_date.split("-")[1]) === 9
                            ? "Sep"
                            : Number(notice.published_date.split("-")[1]) === 10
                            ? "Oct"
                            : Number(notice.published_date.split("-")[1]) === 11
                            ? "Nov"
                            : "Dec"}
                        </ItemDateMonth>
                        <ItemDateDay>
                          {notice.published_date.split("-")[2]}
                        </ItemDateDay>
                        <ItemDateDates>
                          {notice.published_date.split("-")[0]}
                        </ItemDateDates>
                      </ItemDate>
                      <ItemText>
                        <ItemTitle>{notice.title}</ItemTitle>
                        <ItemSubtitle
                          dangerouslySetInnerHTML={{
                            __html: notice.description,
                          }}
                        />
                      </ItemText>
                      <ItemTagContainer></ItemTagContainer>
                      <Buttoned data={notice.notice_category.notice_type}>
                        {notice.notice_category.notice_type}
                      </Buttoned>
                    </Item>
                  ))
                : currentNotices.map((notice) => (
                    <Item
                      href={`https://notices.tcioe.edu.np/media/files/${
                        notice.download_file.split("/")[5]
                      }`}
                      target="_blank"
                      key={notice.id}
                    >
                      <ItemDate>
                        <ItemDateMonth>
                          {Number(notice.published_date.split("-")[1]) === 1
                            ? "Jan"
                            : Number(notice.published_date.split("-")[1]) === 2
                            ? "Feb"
                            : Number(notice.published_date.split("-")[1]) === 3
                            ? "Mar"
                            : Number(notice.published_date.split("-")[1]) === 4
                            ? "Apr"
                            : Number(notice.published_date.split("-")[1]) === 5
                            ? "May"
                            : Number(notice.published_date.split("-")[1]) === 6
                            ? "Jun"
                            : Number(notice.published_date.split("-")[1]) === 7
                            ? "Jul"
                            : Number(notice.published_date.split("-")[1]) === 8
                            ? "Aug"
                            : Number(notice.published_date.split("-")[1]) === 9
                            ? "Sep"
                            : Number(notice.published_date.split("-")[1]) === 10
                            ? "Oct"
                            : Number(notice.published_date.split("-")[1]) === 11
                            ? "Nov"
                            : "Dec"}
                        </ItemDateMonth>
                        <ItemDateDay>
                          {notice.published_date.split("-")[2]}
                        </ItemDateDay>
                        <ItemDateDates>
                          {notice.published_date.split("-")[0]}
                        </ItemDateDates>
                      </ItemDate>
                      <ItemText>
                        <ItemTitle>{notice.title}</ItemTitle>
                        <ItemSubtitle
                          dangerouslySetInnerHTML={{
                            __html: notice.description,
                          }}
                        />
                      </ItemText>
                      <ItemTagContainer></ItemTagContainer>
                      <Buttoned data={notice.notice_category.notice_type}>
                        {notice.notice_category.notice_type}
                      </Buttoned>
                    </Item>
                  ))}
            </List>
                  {/* Pagination */}
      {!noticesNotFound && (
        <Pagination
          noticesPerPage={noticesPerPage}
          totalNotices={notices.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      )}
            </NotPag>
          )}

          <SearchSection>
            <SearchLabel>Filter</SearchLabel>
            <SearchInput
              placeholder="Search Keywords..."
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              onKeyUp={handleKeyDown}
            />
            <SearchLabel>From</SearchLabel>
            <DatePickerContainer>
              <DatePicker
                closeOnScroll={true}
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                maxDate={endDate || new Date()}
                placeholderText="Start Date..."
                className="w-100"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </DatePickerContainer>
            <SearchLabel>To</SearchLabel>
            <DatePickerContainer>
              <DatePicker
                closeOnScroll={true}
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                maxDate={new Date()}
                minDate={startDate}
                filterDate={(date) => date >= startDate}
                placeholderText="End Date..."
                className="w-100"
                peekNextMonth
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
              />
            </DatePickerContainer>
            <SearchLabel>Type</SearchLabel>
            {Types.map((item) => (
              <RadioContainer key={item.id}>
                <Radio
                  type="radio"
                  name="notice_type"
                  value={item.notice_type}
                  checked={selectedNoticeType === item.notice_type}
                  onChange={HandleChange}
                />
                <RadioLabel htmlFor={item.notice_type}>
                  {item.notice_type}
                </RadioLabel>
              </RadioContainer>
            ))}
            <SameLine>
              <SearchButton onClick={handleSearch}>Search</SearchButton> &nbsp;
              <SearchButton onClick={handleReset}>Reset</SearchButton>
            </SameLine>
          </SearchSection>
        </Container>
      </Wrapper>

    </>
  );
};

export default Page;

// Pagination component
const Pagination = ({
  noticesPerPage,
  totalNotices,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalNotices / noticesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPages = () => {
    if (totalPages <= 1) return null;

    const pages = [];
    const visiblePages = getVisiblePages(currentPage, totalPages);
      pages.push(
        <PageNumber key={1}>
          <PageButton onClick={() => paginate(1)} active={currentPage === 1}>
            1
          </PageButton>
        </PageNumber>
      );

    

    if (visiblePages[0] > 2) {
      // pages.push(<li key="ellipsis-start">...</li>);
      pages.push(<Ellipsis key="ellipsis-start">...</Ellipsis>);
    }

    for (let i = visiblePages[0]; i <= visiblePages[1]; i++) {
      if (i !== 1 && i !== totalPages && i !== 0) {
        pages.push(
          <PageNumber key={i}>
            <PageButton onClick={() => paginate(i)} active={currentPage === i}>
              {i}
            </PageButton>
          </PageNumber>
        );
      }
    }

    if (visiblePages[1] < totalPages - 1) {
      pages.push(<Ellipsis key="ellipsis-end">...</Ellipsis>);
    }

    if (totalPages > 1) {
      pages.push(
        <PageNumber key={totalPages}>
          <PageButton
            onClick={() => paginate(totalPages)}
            active={currentPage === totalPages}
          >
            {totalPages}
          </PageButton>
        </PageNumber>
      );
    }

    return pages;
  };

  // Helper function to calculate the range of visible pages
  const getVisiblePages = (currentPage, totalPages) => {
    const visiblePages = Math.min(3, totalPages);
    let startPage = currentPage - Math.floor(visiblePages / 2);
    let endPage = currentPage + Math.floor(visiblePages / 2);

    if (startPage < 1) {
      endPage += Math.abs(startPage) + 1;
      startPage = 1;
    }

    if (endPage > totalPages) {
      startPage -= endPage - totalPages;
      endPage = totalPages;
    }

    return [startPage, endPage];
  };

  return <PaginationContainer>{renderPages()}</PaginationContainer>;
};