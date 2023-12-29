"use client"

import React from 'react';
import styled from 'styled-components';
import FemaleQuotaTableComponent from './FemaleQuotaTableComponent.jsx';
import QuotaTableComponent from './QuotaTableComponent.jsx';
import ForeignQuotaExaminationTable from './ForeignQuotaExaminationTable.jsx';

const Container = styled.div`
    width: 100%;
    min-height: 525px;
    display: flex;

    gap: 32px;
    padding: 12px 64px 12px 64px;
    
    @media (max-width: 950px) {
      flex-direction: column;
      padding: 12px 16px;
    }
`;

const RightContainer = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    gap: 24px;
    overflow-x: auto;
    margin: 20px auto;
`;

const Heading = styled.div`
    font-size: 2rem;
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
const HeadingText = styled.p`
    font-size: 25px;
    font-weight: 600;
    color: #090C4C;
    margin-bottom: 10px;
    margin-top: 20px;
`;

const FadedParagraph = styled.p`
  color: #a9a9a9;
  font-size: 16px;
  margin-left: 20px;
  margin-top: -10px;
`;

const LightParagraph = styled.p`
  color: #a9a9a9;
  font-size: 16px;
  margin-left: 20px;
  line-height: 1.2rem;
  margin-top: -10px;
`;

const FadedOrderedList = styled.ol`
  color: #a9a9a9;
  font-size: 16px;
  margin-top: -10px;

  // enumerate list items
  li {
    list-style-type: decimal;
    margin-left: 20px;
    margin-bottom: 10px;
    line-height: 1.2rem;
  }
`;

const OrderedListLetter = styled.ol`
  // select only the children of the ordered list
  > li {
    list-style-type: lower-alpha;
  }
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
            <OrderedListLetter>
              <li>
                <p>For the self-development of permanent teachers of IOE who have completed their probationary period and staff, a total of two (2) seats have been reserved in the constituent campuses of Institute of Engineering for B.E. / B.Arch. If there is no application from any teacher/staff, sons/daughters of teachers and employees (who have passed the probationary period for appointment) will be admitted in the order of merit.</p>
              </li>
              <li>
                <p>Engineering Studies Institute Faculty Council Standing Committee held on 2078.07.15 meeting no. 351 decision no. According to 1 Tri. v. and tri. v. A total of two (2) seat scholarships (regular) have been arranged at the graduate level for the permanent teachers/employees and children of teachers/employees working under the Institute of Engineering Studies. Applicants for this seat will be admitted in order of merit.</p>
              </li>
            </OrderedListLetter>

            {/* 6.2) ----------------------------------------------------------- */}
            <HeadingText>Inclusive Indigent Reservation Quota</HeadingText>
            <OrderedListLetter>
              {/* 6.3)a ----------------------------------------------------------- */}
              <li>
                <p>As specified in 11(a) and 11(b) of Tribhuvan University Organization and Educational Administration Rules 2050, twenty percent of the total seats on the regular side have been reserved for people from the following communities.</p>
              </li>
              {/* 6.3)b ----------------------------------------------------------- */}
              <li>
                <p>The reservation quota is distributed as follows, considering the twenty percent quota to be taken on an inclusive basis as one hundred percent.</p>
                <ul>
                  <li>
                    <FadedParagraph>&diams; Female: Out of 20%, 3% will be reserved for Dalit Female and 2% for Muslim Female.</FadedParagraph>
                  </li>
                  <li>
                    <FadedParagraph>&diams; Adhibasi-Janajati: 16%</FadedParagraph>
                  </li>
                  <li>
                    <FadedParagraph>&diams; Madhesi: Out of 14%, 3% will be reserved for Madhesi Dalit Female</FadedParagraph>
                  </li>
                  <li>
                    <FadedParagraph>&diams; Dalit: 9%</FadedParagraph>
                  </li>
                  <li>
                    <FadedParagraph>&diams; Disabled: 9%</FadedParagraph>
                  </li>
                  <li>
                    <FadedParagraph>&diams; Backward Remote Area: 7%</FadedParagraph>
                  </li>
                  <li>
                    <FadedParagraph>&diams; Muslim: 7%</FadedParagraph>
                  </li>
                  <li>
                    <FadedParagraph>&diams; Tharu: 10%</FadedParagraph>
                  </li>
                  <li>
                    <FadedParagraph>&diams; Others: 8%</FadedParagraph>
                  </li>
                  <li>
                    <FadedParagraph>&diams; <b>Total: 100%</b></FadedParagraph>
                  </li>
                </ul>
              </li>

              {/* 6.3)c ----------------------------------------------------------- */}
              <li>
                <p>According to sections 11(a) and 11(b) of the Tribhuvan University Organization and Educational Administration Rules of 2050 B.S. and Tribhuvan University Reservation Seats Regulation of 2074 A.D., the seats to be allocated for admission on an inclusive basis as follows:</p>
                <QuotaTableComponent />
                <p>Note:</p>
                <LightParagraph>
                  &diams; If any applicant applies for reservation in more than one category, the priority order of the reservation quota will be determined based on the last quota mentioned. The reservation list will then be published in the order of priority of the last quotas, with open category applicants placed at the bottom and their names published in the last priority. For example, if an applicant applies in both the open and women's or indigenous categories, priority will first be given to their indigenous category and then to the women's category. Only after that will their priority be considered in the open category.
                  <br />
                  &diams; In sections where the quotas are not filled from applicants applying in the reserved quota, the names of open category applicants will be published in the waiting list.
                </LightParagraph>
              </li>

              {/* 6.3)d ----------------------------------------------------------- */}
              <li>
                <p>Applicants wishing to apply in the reserved quota must have passed the entrance examination conducted by the Higher Secondary Education Board. The publication of the waiting list will be based on the merit of the entrance exam results.</p>
              </li>

              {/* 6.3)e ----------------------------------------------------------- */}
              <li>
                <p>The reservation facility can only be utilized by applicants who fall under any one level.</p>
              </li>

              {/* 6.3)f ----------------------------------------------------------- */}
              <li>
                <p>Applicants wishing to apply in the reservation quota must compulsorily submit the following documents.</p>
                {/* ordered list enumerated 1 to 5 */}
                <FadedOrderedList>
                  <li>The candidate must have completed their studies in a government/community school as a mandatory requirement. As evidence, they need to submit the Class Eight, Nine, and SLC/SEE transcripts and the certification that the mentioned school is government/community, verified by the respective District Education Office or within the jurisdiction of the concerned education authority.</li>
                  <li>If the candidate has studied in Class 11 and 12 or equivalent level in a community or government school or on the constituent campus of Tribhuvan University, or has received a scholarship from the Nepal Government or an accredited institution of the Nepal Government, the proof should be in the form of the Class 11 and 12 mark sheets and a certificate from the respective District Education Office or the education authority within their jurisdiction and proof of scholarship received.</li>
                  <li>For Class 11 and 12, a minimum of 45% and, regarding the NEB, a Final Grade of at least C Grade must be achieved in all subjects on a regular basis (in the first attempt).</li>
                  <li>
                    Applicants applying for reservation based on economic poverty under the proportional inclusive quota must submit a recommendation letter, along with evidence, from the respective municipality or rural municipality, or a certificate issued by the local authority, stating that the individual falls below the poverty line as per the standards set by the Nepal Government.
                    <br /><b>Note:</b> According to the criteria for reservation in the constituent campuses under Tribhuvan University, the definition of a destitute person is as follows:
                    <br /><b>A person considered economically destitute in the right of a district means someone whose annual family income is less than fifty thousand rupees, and this should be certified by the concerned local body along with the reasons.</b>
                  </li>
                  <li>Among the destitute applicants eligible for reservation under the proportional inclusive quota, those with disabilities should submit the necessary document from the National Disabled Federation or the relevant government agency, the indigenous people/ethnic communities should submit the document from the National Indigenous/Ethnic Upliftment National Institute or the respective District Administration Office, the Dalits should submit the document from the National Dalit Commission or the respective District Administration Office, those marginalized in remote areas should submit the document from the respective municipality and rural municipality, the Madhesi community, Tharu community, and Muslim community individuals should submit the certificate from the respective District Administration Office.</li>
                </FadedOrderedList>
              </li>

              {/* 6.3)g ----------------------------------------------------------- */}
              <li>
                <p>Applicants opting for a full-paying seat shall automatically have their reservation application for this quota canceled.</p>
              </li>

              {/* 6.3)h ----------------------------------------------------------- */}
              <li>
                <p>If the person obtaining a reservation is found to have provided false information and received reservation benefits, their application will be canceled following legal procedures.</p>
              </li>

              {/* 6.3)i ----------------------------------------------------------- */}
              <li>
                <p>The student eligible for reservation under this quota will be charged the full fee applicable to regular students.</p>
              </li>

              {/* 6.3)j ----------------------------------------------------------- */}
              <li>
                <p>All necessary documents for this reservation quota must be submitted within the deadline for the first enrollment program (first, second, and third enrollment lists).</p>
              </li>
            </OrderedListLetter>

            {/* 6.4) ----------------------------------------------------------- */}
            <HeadingText>Quota for Government and Government-affiliated Institutions</HeadingText>
            <OrderedListLetter>
              <li>Employees working in government offices and government-owned institutions should be sponsored by the relevant organization to study. Seats about 1/12th of the number of admissions have been reserved in the Sponsored Fee programs. In this way, the applicant who wants to enroll under the sponsored quota must submit the departmental approval letter and a copy of the sponsoring letter to participate in the full-fee undergraduate program for 4 years (for 5 years in architecture) along with the application form within the specified date. The sponsoring organization should be at the district level or the said organization should be recommended by the district level organization.</li>
              <li>
                <p>If the government agency wants to sponsor and pay tuition fees to the people who are not eligible for regular enrollment of the caste, geographical or economically neglected class communities such as Dalits, Castes, Tribes listed by the Government of Nepal, I.O.E Seats equal to 1/12 of the number of admissions have been reserved in the full fee programs of the following campuses. The government office sponsoring the applicants under this should be at the district level or should be recommended by the district level organization and a copy of the said letter should be submitted. For this, the candidate must have studied in a government/community school. As proof of this, Class VIII and S.L.C. /S.E.E. The grade certificate and a certificate obtained from the relevant district education office or the relevant government agency that looks after education within its jurisdiction that the said school is a government/community school must be submitted. Also, while studying at class 11th and 12th or similar level, it should be done in community or private campus of Tribhuvan University. Or should have received a scholarship from the Government of Nepal or an institution recognized by the Government of Nepal. As proof of this, the class 11th and 12th level transcripts and a certificate obtained from the relevant district education office or the relevant government agency that looks after education within its jurisdiction must be submitted stating that the said school is a government/community school. And if you have received a scholarship, the relevant government agency related to education will have to submit a certificate of having studied on the scholarship. Applicants applying under this quota must submit a copy of the decision of the sponsoring organization along with a copy of the nomination letter and a copy of the sponsoring letter along with the application.</p>
                <p>According to both the above provisions for enrollment in E.A. Must have passed the entrance exam conducted by Admission to these seats will be done on the basis of competition among applicants sponsored by such institutions. If the allotted quota is not fulfilled, the applicants will be recruited in the order of merit from those who apply for the full-time program. For admission to Government Offices and Government-Owned Institutions in the reserved quota, payment will be accepted only through check of the sponsoring institution.</p>
                <p>All the necessary documents related to this must be submitted within the date of application request before publication of the list of first stage admission program (first, second and third admission list).</p>
              </li>
            </OrderedListLetter>

            {/* 6.5) ----------------------------------------------------------- */}
            <HeadingText>Quota for Foreign Citizens</HeadingText>
            <p>Under the Institute of Engineering 1/12th of the total seats in Full Fee programs at constituent campuses are reserved for foreign citizens.</p>
            <p>The entrance examination for foreign students will be as follows:</p>
            <ForeignQuotaExaminationTable />
            <p>Applicants who have completed the minimum qualification in the above-mentioned entrance examinations will be eligible for enrollment in the constituent campuses under the Institute of Engineering.</p>
          </BodyText>
        </RightContainer>
      </Container>
    </>
  );
};

export default Scholarship;
