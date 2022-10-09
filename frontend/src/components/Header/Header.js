import React from 'react';


function Header(props) {

    return (
        <div className='fluid-container full-width'>
            {/* <link rel="icon" href="./favicon.ico" /> */}
            <div className='col-12'>
                <nav className="navbar navbar-light bg-light">
                    <p className="navbar-brand"><img src={require("./logo.png")} className="rounded float-left" width={300} alt="logo" /></p>
                    {props.display && <p className="navbar-brand"><img src={`https://pruvi007-apis.herokuapp.com/CF/${props.cfHandle}`} width={300} alt="user" /></p>}
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" placeholder="Search" type="text" value={props.cfHandle} onChange={(e) => props.setcfHandle(e.target.value)} />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={props.handleSearch}>Search</button>
                    </form>
                </nav>
            </div>
        </div>
    );
}

export default Header;


