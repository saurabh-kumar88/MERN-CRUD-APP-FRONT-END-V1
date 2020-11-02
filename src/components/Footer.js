import React, { Component } from 'react';

class Footer extends Component{


    render(){
        return(

            <footer>
                <div className="w3-container w3-card-4">
                <a href="https://github.com/saurabh-kumar88/MERN-CRUD-APP-FRONT-END-V1" target="_blank" rel="noreferrer"><i className="fa fa-github"> Back-end repository</i></a>
                <br />
                <a href="https://github.com/saurabh-kumar88/MERN-CRUD-APP-FRONT-END-V1" target="_blank" rel="noreferrer">
                <i className="fa fa-github"> Front-end repository</i></a>
                </div>
                
            </footer>
        )
    }
}

export default Footer;