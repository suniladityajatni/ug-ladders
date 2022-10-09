const axios=require("axios");
const fs = require('fs');
// const getProblems = require(".");

async function getProblems()
{
    const url="https://codeforces.com/api/user.status?handle=demoralizer";
    const res=await axios.get(url);
    const allsubmissions=res.data.result;
    console.log("All submissions: " + allsubmissions.length);
    const acceptedSolutions= allsubmissions.filter(ele=> ele.author.members.length==1 && ele.verdict=="OK");
    console.log(acceptedSolutions.length);
    const listOfProblems= new Set();
    const problemsTaken=new Map();
    for(let i=0;i<acceptedSolutions.length;i++){
        if(acceptedSolutions[i].verdict!="OK"){
            console.log("Error");
        }
        const contestId=acceptedSolutions[i].problem.contestId;
        const index=acceptedSolutions[i].problem.index;
        const name=acceptedSolutions[i].problem.name;
        const rating=acceptedSolutions[i].problem.rating;
        const url="https://codeforces.com/contest/"+contestId+"/problem/"+index;
        // if(i==0)
        // console.log(problemsTaken[url]);
        if(problemsTaken[url]===undefined)
        {      
            listOfProblems.add({
                "url":url,
                "name":name,
                "rating":rating || "4000"
            })
            problemsTaken[url]=1;
            // console.log(url);
        }
    }
    // console.log(problemsTaken);
    const finalresult=Array.from(listOfProblems);
    console.log(finalresult.length);
    return finalresult;
}
// getProblems().then((res) => {
//     console.log(res.length);
//     // console.log(res);
//     const json = JSON.stringify(res);
//     fs.writeFile("problems.json",json,'utf-8',()=>{
//         console.log("done");
//     })

// })

module.exports = getProblems;