import React, {Component} from 'react'
import "./Info.css"

class Info extends Component {

  render() {

    return (
        <div className="leagueDiv">
        <p>
            Welcome to Football Leagues React App. <br></br>
        </p>
        <a href="/leagues"><button>View All Leagues</button></a>
        </div>

    )
  }
}


export default Info;