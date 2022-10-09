import React, { useEffect, useState } from 'react';
import './Homepage.css';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import Header from '../Header/Header';
import RatingSelector from '../RatingSelector/RatingSelector';
import Ladder from '../Ladders/Ladders';
import axiosInstance from '../../axiosInstance';


function Homepage() {
    const [rating, setRating] = useState(800);
    const [problems, setProblems] = useState([]);
    const [cfHandle, setcfHandle] = useState("");
    const [color, setColor] = useState(new Map());
    const [cookies, setCookie] = useCookies(['user']);
    const [display, setdisplay] = useState(false);
    const [callCookie, setcallCookie] = useState(false);
    const ratings = [800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400];
    // let color = new Map();

    const handleSearch = async (e) => {
        if (cfHandle === "")
            return;
        if (e === undefined)
            ;
        else {
            setCookie('handle', cfHandle, { path: '/' })
            e.preventDefault();
        }
        console.log(cfHandle);
        const url = `https://codeforces.com/api/user.status?handle=${cfHandle}`;
        const res = await axios.get(url);
        console.log(res.data.result);
        const allsubmissions = res.data.result;
        const solvedProblems = allsubmissions.filter(ele => ele.verdict === 'OK');
        const tempColor = new Map();
        for (let i = 0; i < solvedProblems.length; i++) {
            const contestId = solvedProblems[i].problem.contestId;
            const index = solvedProblems[i].problem.index;
            const url = `https://codeforces.com/contest/${contestId}/problem/${index}`;
            tempColor[url] = 'Green';
        }

        setColor(tempColor);
        setdisplay(true);
    }
    useEffect(() => {
        console.log("Rating changed to " + rating)
        axiosInstance.get(`${rating}`).then((res) => {
            console.log(res);
            setProblems(res.data);
        }).catch((err) => { console.log(err); });
    }, [rating])

    useEffect(() => {
        setRating(800);
    }, [])
    useEffect(() => {
        if (cookies?.handle) {
            console.log(cookies.handle);
            setcfHandle(cookies.handle);
            console.log("Use");
            console.log(cfHandle);
            console.log(cookies.handle);
            setcallCookie(true);
        }
    }, [cookies])

    useEffect(() => {
        console.log("Done");
        handleSearch(undefined);
    }, [callCookie])
    useEffect(() => {
        setdisplay(false);
    }, [cfHandle])
    return (
        <div className="Homepage">
            <Header cfHandle={cfHandle} setcfHandle={setcfHandle} handleSearch={handleSearch} display={display} />
            <RatingSelector ratings={ratings} setRating={setRating} />
            <Ladder color={color} problems={problems} />
        </div>
    );
}

export default Homepage;