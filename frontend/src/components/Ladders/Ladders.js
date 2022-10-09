import React from 'react';


function Ladder(props) {
    const problems=props.problems;
    const color=props.color;
    return (
        <div className='fluid-container'>
            <div className='row'>
                <div className='col-12'>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Rating</th>
                                {/* <th scope="col">Status</th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                problems.map((problem, idx) => {
                                    const bgcolor = color[problem.url] ? "green" : "white";
                                    return <tr key={"tr" + idx} className={bgcolor}>
                                        <th scope='row'>{idx + 1}</th>
                                        <td><a href={problem.url}>{problem.name}</a></td>
                                        <td>{problem.rating}</td>
                                        {/* {bgcolor === 'green' ? <td>AC</td> : <td>-</td>} */}
                                    </tr>

                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Ladder;