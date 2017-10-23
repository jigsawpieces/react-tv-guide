import React from "react"
import moment from "moment"

export default class Header extends React.Component {

  render() {
    return (
      <header>
      	<div className="grid-container">
	        <img src="../assets/tv.svg" />
	        <h2>What's on telly <b>tonight</b>?</h2>
        </div>
      </header>
    );
  }
}
