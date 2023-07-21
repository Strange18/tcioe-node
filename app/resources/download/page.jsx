"use client";
import { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import "react-datepicker/dist/react-datepicker.css";
import { menuItems } from "@/utils/menuItems";
import HeaderComponent from "@/components/HeaderComponent";

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
      margin-top: 1.5rem;
      margin-bottom: 3rem;
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
  width: 100%;
  overflow: hidden;

  @media (max-width: 958px) {
    font-size: 1rem;
  }

  @media (max-width: 400px) {
    padding-top: 0.5rem;
  }
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


const Page = () => {
  const [downloads, setDownloads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [downloadsPerPage] = useState(10);
  const [selectedDownloadsType, setSelectedDownloadsType] = useState("");
  const [downloadsNotFound, setDownloadsNotFound] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch(
        `https://notices.tcioe.edu.np/api/resource-search/?editable=True`,
        { cache: "no-store" }
      );
      const response = await query.json();
      setDownloads(response);
    };
    getData();
  }, [selectedDownloadsType]);

  // Pagination Logic
  const indexOfLastDownloads = currentPage * downloadsPerPage;
  const indexOfFirstDownloads = indexOfLastDownloads - downloadsPerPage;
  const currentDownloads = downloads.slice(indexOfFirstDownloads, indexOfLastDownloads);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <HeaderComponent menuItems={menuItems} />
      <Wrapper>
        <Header>
          <Title>Downloads</Title>
          <Line width={"100px"} />
        </Header>
        <Container>
            <NotPag>
              <List>
                {currentDownloads.length <= 1
                  ? currentDownloads.map((downloads) => (
                      <Item
                        href={`https://notices.tcioe.edu.np/media/files/${
                          downloads.file.split("/")[5]
                        }`}
                        target="_blank"
                        key={downloads.id}
                        isSingleOrDoubleNotice={currentDownloads.length <= 2}
                      >
                        <ItemText>
                          <ItemTitle>{downloads.title}</ItemTitle>
                        </ItemText>
                      </Item>

                      
                    ))
                  : currentDownloads.map((downloads) => (
                      <Item
                        href={`https://notices.tcioe.edu.np/media/files/${
                          downloads.file.split("/")[5]
                        }`}
                        target="_blank"
                        key={downloads.id}
                      >
                        <ItemText>
                        <ItemTitle>{downloads.title}</ItemTitle>
                        </ItemText>
                      </Item>
                      
                    ))}
              </List>
              {/* Pagination */}
              {!downloadsNotFound && (
                <Pagination
                  downloadsPerPage={downloadsPerPage}
                  totalDownloads={downloads.length}
                  currentPage={currentPage}
                  paginate={paginate}
                />
              )}
            </NotPag>
        </Container>
      </Wrapper>
    </>
  );
};

export default Page;

// Pagination component
const Pagination = ({
  downloadsPerPage,
  totalDownloads,
  currentPage,
  paginate,
}) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalDownloads / downloadsPerPage);

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

