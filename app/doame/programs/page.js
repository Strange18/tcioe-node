"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import { SyllabusTable, NavigationButton, NavigationButtonContainer, Heading, Dropdown, SyllabusTableContainer } from './page.styled';

const Syllabus = () => {
    const [currentYear, setCurrentYear] = useState(1);
    const [selectedOption, setSelectedOption] = useState('BEI');

    const handleYearChange = (year) => {
        setCurrentYear(year);
    };

    const handleOptionChange = (option) => {
        setSelectedOption(option);
    };

    const renderSyllabusTable = (year) => {
        switch (selectedOption) {
            case 'BEI':
                switch (year) {
                    case 1:
                        return (
                            <SyllabusTable>
                                <thead>
                                    <tr>
                                        <th>Part I</th>
                                        <th>Part II</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Engineering Drawing I [ME 401]</td>
                                        <td>Engineering Mathematics II [SH 453]</td>
                                    </tr>
                                    <tr>
                                        <td>Engineering Physics [SH 402]</td>
                                        <td>Engineering Chemistry [SH 453]</td>
                                    </tr>
                                    <tr>
                                        <td>Basic Electrical Engineering [EE 401]</td>
                                        <td>Workshop Technology [ME 453]</td>
                                    </tr>
                                    <tr>
                                        <td>Digital Logic [EX 502]</td>
                                        <td>Object Oriented Programming [CT 501]</td>
                                    </tr>
                                    <tr>
                                        <td>Engineering Mathematics I [SH 401]</td>
                                        <td>Microprocessor [EX 551]</td>
                                    </tr>
                                    <tr>
                                        <td>Computer Programming [CT 401]</td>
                                        <td>Electric Circuit And Machines</td>
                                    </tr>

                                </tbody>
                            </SyllabusTable>
                        );
                    case 2:
                        return (
                            <SyllabusTable>
                                <thead>
                                    <tr>
                                        <th>Part I</th>
                                        <th>Part II</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Probablity and Statistics [SH 602]</td>
                                        <td>Applied Mathematics [SH 551]</td>
                                    </tr>
                                    <tr>
                                        <td>Engineering Mathematics III [SH 501]</td>
                                        <td>Numerical Method [SH 553]</td>
                                    </tr>
                                    <tr>
                                        <td>Electronics Devices and Circuit [EX 501]</td>
                                        <td>Data Structures and Algorithm [CT 552]</td>
                                    </tr>
                                    <tr>
                                        <td>Instrumentation(BEI)</td>
                                        <td>Computer Graphics [EX 603]</td>
                                    </tr>
                                    <tr>
                                        <td>Control System  [EE 602]</td>
                                        <td>Discrete Structure [CT 551]</td>
                                    </tr>
                                    <tr>
                                        <td>Electromagnetics [EX 503]</td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </SyllabusTable>
                        );
                    case 3:
                        return (
                            <SyllabusTable>
                                <thead>
                                    <tr>
                                        <th>Part I</th>
                                        <th>Part II</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Computer Organization and Architecture [CT 603]</td>
                                        <td>Communication English [SH 601]</td>
                                    </tr>
                                    <tr>
                                        <td>Engineering Economics [CE 655]</td>
                                        <td>Embedded System [CT 655]</td>
                                    </tr>
                                    < tr>
                                        <td>Operating System [CT 656]</td>
                                        <td>Antenna and Propagation [EX 653]</td>
                                    </tr>
                                    < tr>
                                        <td>Filter Design [EX 704]</td>
                                        <td>Minor Project [EX 654]</td>
                                    </tr>
                                    < tr>
                                        <td>Computer Networks[CT 657]</td>
                                        <td>Communication System I [EX 652]</td>
                                    </tr>

                                </tbody>
                            </SyllabusTable>
                        );
                    case 4:
                        return (
                            <SyllabusTable>
                                <thead>
                                    <tr>
                                        <th>Part I</th>
                                        <th>Part II</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Artificial Engineering [CT 653]</td>
                                        <td>Digital Signal Processing(DSP) [EX 753]</td>
                                    </tr>
                                    <tr>
                                        <td>Digital Signal Analysis and Processing[CT 704]</td>
                                        <td>Project(Part B)[EX 755]</td>

                                    </tr>
                                    <tr>
                                        <td>Organization and Management [ME 708]</td>
                                        <td>Engineering Professional Practice</td>
                                    </tr>
                                    <tr>
                                        <td>RF and Microwave Engineering [EX 752]</td>
                                        <td>Information Systems [CT 751]</td>

                                    </tr>
                                    <tr>
                                        <td>Wireless Communication [EX 751]</td>
                                        <td>Telecommunication[EX 703]</td>
                                    </tr>
                                    <tr>
                                        <td>Project (Part A) [EX 707]</td>
                                        <td>Energy Environment and Society [EX 701] </td>


                                    </tr>

                                </tbody>
                            </SyllabusTable>
                        );

                    default:
                        return null;
                }
            case 'BCT':
                switch (year) {
                    case 1:
                        return (
                            <SyllabusTable>
                                <thead>
                                    <tr>
                                        <th>Part I</th>
                                        <th>Part II</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    <tr>
                                        <td>Applied Mechanics [CE 401]</td>
                                        <td>Engineering Mathematics II[SH 451]</td>
                                    </tr>
                                    <tr>
                                        <td>Basic Electrical Engineering [EE 401]</td>
                                        <td>Engineering Drawing II [ME 451]</td>
                                    </tr>
                                    <tr>
                                        <td>Engineering Physics [SH 402]</td>
                                        <td>sic Electronics Engineering [EX 451]</td>
                                    </tr>
                                    <tr>
                                        <td>Engineering Drawing I[ME 401]</td>
                                        <td>Engineering Chemistry [SH 453]</td>
                                    </tr>
                                    <tr>
                                        <td>Engineering Mathematics I [SH 401]</td>
                                        <td>Fundamental Of Thermodynamics and Heat Transfer[ME 452]</td>
                                    </tr>
                                    <tr>
                                        <td>Computer Programming [CT 401]</td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </SyllabusTable>
                        );
                    case 2:
                        return (
                            <SyllabusTable>
                                <thead>
                                    <tr>
                                        <th>Part I</th>
                                        <th>Part II</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Object Oriented Programming [CT 501]</td>
                                        <td>Numerical Methods [SH 553]</td>
                                    </tr>

                                    <tr>
                                        <td>Electrics Cicuit Theory [EE 501]</td>
                                        <td>Instrumentation I</td>
                                    </tr>
                                    <tr>
                                        <td>Theory Of Computation [CT 502]</td>
                                        <td>Data Structure and Algorithm</td>
                                    </tr>
                                    <tr>
                                        <td>Electronics Devices and Circuit [EX 501]</td>
                                        <td>Microprcessor [EX 551]</td>
                                    </tr>
                                    <tr>
                                        <td>Digital Logic [EX 502]</td>
                                        <td>Electrical Machine [EE 554]</td>
                                    </tr>

                                    <tr>
                                        <td>Electromagnetics [EX 503]</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </SyllabusTable>
                        );
                    case 3:
                        return (
                            <SyllabusTable>
                                <thead>
                                    <tr>
                                        <th>Part I</th>
                                        <th>Part II</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Communication English [SH 601]</td>
                                        <td>Engineering Economics [CE 655]</td>
                                    </tr>
                                    <tr>
                                        <td>Probablity and Statistics [SH 602]</td>
                                        <td>Object Oriented Analysics and Design [CT 651]</td>
                                    </tr>
                                    <tr>
                                        <td>Computer organization and Architecture [CT 603]</td>
                                        <td>Artificial Intelligence [CT 653]</td>
                                    </tr>
                                    <tr>
                                        <td>Software Engineering [CT 601]</td>
                                        <td>Operating System</td>
                                    </tr>
                                    <tr>
                                        <td>Computer Graphics [EX 603]</td>
                                        <td>Embedded System[CT 656]</td>
                                    </tr>
                                    <tr>
                                        <td>Instrumentation II [EX 602]</td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>Data Communication [CT 602]</td>
                                        <td></td>
                                    </tr>

                                </tbody>
                            </SyllabusTable>
                        );
                    case 4:
                        return (
                            <SyllabusTable>
                                <thead>
                                    <tr>
                                        <th>Part I</th>
                                        <th>Part II</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Organization and Management [ME 708]</td>
                                        <td>Engineering Professional Practice [CE 752]</td>
                                    </tr>
                                    <tr>
                                        <td>Energy Environment and Society [EX 701]</td>
                                        <td>Information Systems [CT 751]</td>
                                    </tr>
                                    <tr>
                                        <td>Distributed System [CT 703]</td>
                                        <td>Internet and Intranet [CT 754]</td>
                                    </tr>
                                    <tr>
                                        <td>Computer Networks and Security [CT 702]</td>
                                        <td>Simulation and Modelling [CT 753]</td>
                                    </tr>
                                    <tr>
                                        <td>Digital Signal Processing [CT 704]</td>
                                        <td>Elective III: Power Electronics [EE 785 07]</td>
                                    </tr>
                                    <tr>
                                        <td>Elective I:Data Mining</td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </SyllabusTable>
                        );

                    default:
                        return null;
                }
            default:
                return null;
        }
    };

    return (
        <>
            <Heading>
                Syllabus
                <Dropdown value={selectedOption} onChange={(e) => handleOptionChange(e.target.value)}>
                    <option value="BEI">BEI</option>
                    <option value="BCT">BCT</option>
                </Dropdown>
            </Heading>

            <hr />
            <NavigationButtonContainer>
                {[1, 2, 3, 4].map((year) => (
                    <NavigationButton
                        key={year}
                        isActive={year === currentYear}
                        onClick={() => handleYearChange(year)}
                    >
                        Year {year}
                    </NavigationButton>
                ))}
            </NavigationButtonContainer>
            <SyllabusTableContainer>

            {renderSyllabusTable(currentYear)}
            </SyllabusTableContainer>
        </>
    );
};

export default Syllabus;