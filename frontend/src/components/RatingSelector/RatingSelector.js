import React from 'react';


function RatingSelector(props) {

    return (
        <div className='fluid-container'>
                <div className='row'>
                    <div className='col-12'>
                        {
                            props.ratings.map((rate, index) => {
                                return <button className="btn btn-primary" key={"btn" + index} onClick={() => { props.setRating(rate); }}>{rate}</button>
                            })
                        }
                    </div>
                </div>
                
            </div>
    );
}

export default RatingSelector;










