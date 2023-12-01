"use client"

import React from 'react';
import styled from 'styled-components';
import FemaleQuotaTableComponent from './FemaleQuotaTableComponent.jsx';

const Container = styled.div`
    width: 100%;
    min-height: 525px;
    display: flex;
    gap: 32px;
    padding: 12px 64px 12px 64px;

    @media (max-width: 950px) {
        flex-direction: column;
        padding: 12px 32px 12px 32px;
    }
`;

const RightContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 75px 0 0px 0;
    overflow-x: auto;
    margin: 20px auto;
`;

const Heading = styled.div`
    font-size: 24px;
    font-weight: 700;
    color: #090C4C;
    text-align: center;
`;

export const BodyText = styled.div`
    font-size: 18px;
    color: #8A8A8A;
    line-height: 2rem;
    text-align: justify;

    p {
        margin-bottom: 10px; /* Space between paragraphs */
    }

    ol {
        margin: 0;
        padding-left: 20px;
    }

    ol ol {
        list-style-type: lower-alpha;
        padding-left: 40px;
    }
`;

// add css for paragraph headings
export const HeadingText = styled.p`
    font-size: 20px;
    font-weight: 600;
    color: #090C4C;
    margin-bottom: 10px;
`;

const Scholarship = () => {
    return (
        <>
            <Container>
                <RightContainer>
                    <Heading>Scholarships Schemes</Heading>
                    <BodyText>
                        {/* Content Goes Here */}
                        <p>For admission under different quotas, all the required documents specified for each quota must be submitted within 3 days of the publication of the I.O.E. Entrance Examination results at the location specified by I.O.E. Documents received after the deadline will not be entertained.</p>

                        <HeadingText>Female Quota</HeadingText>
                        <p>10% seats in regular and full-fee programs are reserved for female applicants. If 10% female applicants are not selected in the published admission-list, the names of 10% female applicants will be published in the admission-list based on the order of merit from among the female applicants who meet the minimum qualification.</p>
                        <p>The Female Quota is as follows:</p>
                        <FemaleQuotaTableComponent />

                        <HeadingText>Teacher/Staff Quota</HeadingText>
                        <p>In this teacher/staff quota, admission will be done in the order mentioned below:</p>
                        <ol>
                            <li>
                                <p>a. For the self-development of permanent teachers of IOE who have completed their probationary period and staff, a total of two (2) seats have been reserved in the constituent campuses of Institute of Engineering for B.E. / B.Arch. If there is no application from any teacher/staff, sons/daughters of teachers and employees (who have passed the probationary period for appointment) will be admitted in the order of merit.</p>
                            </li>
                            <li>
                                <p>b. Engineering Studies Institute Faculty Council Standing Committee held on 2078.07.15 meeting no. 351 decision no. According to 1 Tri. v. and tri. v. A total of two (2) seat scholarships (regular) have been arranged at the graduate level for the permanent teachers/employees and children of teachers/employees working under the Institute of Engineering Studies. Applicants for this seat will be admitted in order of merit.</p>
                            </li>
                        </ol>

                        <HeadingText>Inclusive Indigent Reservation Quota</HeadingText>
                        <p>As specified in 11(a) and 11(b) of Tribhuvan University Organization and Educational Administration Rules 2050, twenty percent of the total seats on the regular side have been reserved for people from the following communities.</p>
                    </BodyText>
                </RightContainer>
            </Container>
        </>
    );
};

export default Scholarship;
