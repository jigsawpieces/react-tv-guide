import React from "react"

export default class Header extends React.Component {

  render() {

    var date = new Date();    

    return (
      <header>
      	<div className="grid-container">
          
	        <img src="../assets/tv.svg" />

          <div className="strapline">
            <p>It's { date.toDateString() }!</p>
  	        <h2>What's on telly <b>tonight</b>?</h2>
          </div>
        </div>
      </header>
    );
  }
}
