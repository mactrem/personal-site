import React, { useState } from "react";
import { Tab, Tabs, Box, Typography  } from "@mui/material";
import Carousel from "../Carousel/Carousel";

/* Svg adapted from https://ilya.boyandin.me */
const Home = () => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0);
    const handleTabChange = (e, tabIndex) => {
        setCurrentTabIndex(tabIndex);
    };

    return (
        <div>
            <header>
                <div style={{display: "flex", alignItems:"center"}}>
                    <div style={{flex:1, textAlign:"left"}}><h2>Markus Tremmel</h2></div>
                    <div style={{flex:1, textAlign:"right"}}>
                        <a href="https://github.com/mactrem">
                            <svg color="#1d81c2" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 496 512" fontSize="20px" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
                        </a>
                        &nbsp;&nbsp;
                        <a href="https://www.linkedin.com/in/markus-tremmel-022089253/">
                            <svg color="#1d81c2" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" fontSize="20px" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                        </a>
                        </div>
                        &nbsp;&nbsp;
                        <a href="https://twitter.com/mactremmel">
                            <svg color="#1d81c2" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" fontSize="20px" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
                        </a>
                    &nbsp;&nbsp;
                    <a href="mailto:markus.tremmel23@gmail.com">
                        <img width="20px;" src="email.png"></img>
                    </a>
                </div>

                <a href="./portrait.jpg">
                    <img src="portrait.jpg" width="150" height="150" className="avatar" align="left"/>
                </a>
                <p>
                    I'm a Staff Software Engineer and Architect at Rohde & Schwarz living in Germany.
                    As a lecturer I also teach vector data processing at the faculty of computer science
                    at the Deggendorf Institute of Technology.
                    My main work focus is on the development of high-performance geospatial applications as well as research
                    in the field of <a href="https://isprs-archives.copernicus.org/articles/XLVIII-4-W7-2023/231/2023/">cloud native geospatial</a>
                    &nbsp; and <a href="https://github.com/mactrem/cov-tiles">next generation vector file formats</a>. As a passionate athlete I was member of the German junior national ski team, was able to achieve top placings at <a href="https://www.fis-ski.com/DB/general/athlete-biography.html?sectorcode=AL&seasoncode=&competitorid=74001&type=result&categorycode=&sort=&place=&disciplinecode=&position=6&limit=200">international FIS Ski races</a>,
                    was nominated to play a soccer game in the legendary San Siro Stadium and now chasing <a href="https://www.strava.com/athletes/32030436">Strava segments</a> on my bike or on cross-country skis in the wonderful Bavarian Forest.
                </p>
            </header>
            <article>
                <Tabs value={currentTabIndex} onChange={handleTabChange}>
                    <Tab label='Talks' />
                    <Tab label='Research' />
                    <Tab label='Projects' />
                    <Tab label='Media' />
                </Tabs>

                {currentTabIndex === 0 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant='h6'><b>Recent Talks (Selection):</b></Typography>
                        <ul style={{padding: 0}}>
                            <li><b>FOSS4G 2023</b> (Prizren, Kosovo): COMTiles: a case study of a cloud optimized tile archive format
                                for deploying planet-scale tilesets in the cloud (<a href="https://github.com/mactrem/presentations/blob/main/FOSS4G_2023/FOSS4G_2023_Tremmel.pdf">Slides</a>)</li>
                            <li><b>FOSS4G 2022</b> (Florence, Italy): Using COMTiles to reduce the hosting costs of large map tilesets
                                in the cloud (<a href="https://github.com/mactrem/presentations/blob/main/FOSS4G_2022/FOSS4G_2022.pdf">Slides</a>)</li>
                            <li><b>OGC Cloud-Native Event 2022</b> (Online): Cloud Optimized Archive Format for Planet-scale Vector Tilesets
                                (<a href="https://github.com/mactrem/presentations/blob/main/OGC_Cloud_Native_Event_2022/CloudNativeEvent_Tremmel.pdf">Slides</a>,&nbsp;
                                 <a href="https://youtu.be/STbFEvulLxM?t=35">Video</a>)</li>
                            <li><b>League Of Geeks 2019</b> (Passau, Germany): Next Generation of (Web) Map Apps
                                (<a href="https://github.com/mactrem/presentations/blob/main/League_Of_Geeks_2019/NextGenerationMapApps.pdf">Slides</a>,&nbsp;
                                <a href="https://youtu.be/5ubrZRGPH-4">Video</a>)</li>
                        </ul>
                    </Box>
                )}
                {currentTabIndex === 1 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant='h6'><b>Basic Research Interests: </b></Typography>
                        <ul style={{padding: 0}}>
                            <li>Cloud Native Geospatial</li>
                            <li>Next Generation Vector File Formats</li>
                            <li>High-Performance Geospatial Applications</li>
                            <li>(3D) Map Rendering</li>
                            <li>Big (Spatial) Data Processing</li>
                        </ul>

                        <Typography variant='h6'><b>Publications: </b></Typography>
                        <ul style={{padding: 0}}>
                            <li><b>The International Archives of the Photogrammetry, Remote Sensing and Spatial Information Sciences </b>(2023):  COMTiles: a case study of a cloud optimized tile
                                archive format for deploying planet-scale tilesets in the cloud (<a href="https://isprs-archives.copernicus.org/articles/XLVIII-4-W7-2023/231/2023/">Paper</a>)</li>
                        </ul>
                    </Box>
                )}
                {currentTabIndex === 2 && (
                    <Box sx={{ p: 3 }}>
                        <Typography variant='h6'><b>Recent Projects (Selection):</b></Typography>
                        <ul style={{padding: 0}}>
                            <li><b><a href="https://github.com/mactrem/com-tiles">COMTiles</a></b>: the main goal of COMTiles is to significantly reduce access charges and simplify the hosting of large map tilesets at global scale in the cloud</li>
                            <li><b><a href="https://github.com/mactrem/cov-tiles">COVTiles</a></b>: case study of the next generation of vector tiles by trying to significantly improve the compression ratio and decoding performance</li>
                        </ul>
                    </Box>
                )}
                {currentTabIndex === 3 && (
                    <Box sx={{ p: 3 }}>
                        <Carousel></Carousel>
                    </Box>
                )}
            </article>
        </div>
    );
};

export default Home;