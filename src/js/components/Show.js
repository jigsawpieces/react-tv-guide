import React from "react"

import ShowCast from "./ShowCast"
import EpisodeList from "./EpisodeList"
  
export default class Show extends React.Component {
  
  constructor() {
    super()
    this.state={}
  }

  componentDidMount(){
    var url = 'http://api.tvmaze.com/shows/' + this.props.match.params.showId
    
    fetch(url)
    .then(result=>result.json())
    .then(result=>this.setState({shows: result}))
  }

  render() {
    
    let showInfo = this.state.shows;

    if(!showInfo) return <p>Uh oh, something's gone wrong...</p>
    return(

      <div>
        <div className="grid-container main-info-container">
          <div className="navigator">
            <a href="/"><i class="fa fa-angle-left"></i> Back</a>
          </div>
          <div className="hero-image">
            <img src={showInfo.image.original}/>
          </div>
          <div className="main-info">
            {showInfo.rating.average !== null &&
              <p>Rating: {showInfo.rating.average} /10</p>
            }

            <h2>{showInfo.name}</h2>
            <p dangerouslySetInnerHTML={{__html: showInfo.summary}} />
            
          </div>
        </div>

        <div>

          <div className="grid-container no-wrap">
            <div className="show-info">
              <h3><i class="fa fa-info-circle"></i> Show Information</h3>

              {showInfo.network.name !== null &&
                <div className="row">
                  <div className="col-2">Network</div>
                  <div className="col-2">{showInfo.network.name}</div>
                </div>
              }
              
              {showInfo.runtime !== null &&
                <div className="row">
                  <div className="col-2">Runtime</div>
                  <div className="col-2">{showInfo.runtime}min</div>
                </div>
              }

              {showInfo.schedule.days !== null &&
                <div className="row schedule">
                  <div className="col-2">Shown on</div>
                  <div className="col-2">{showInfo.schedule.days}{showInfo.schedule.time !== "" && showInfo.schedule.time}</div>
                </div>
              }

              {showInfo.genres.length > 0 &&
                <div className="row genres">
                  <div className="col-2">Genres</div>
                  <div className="col-2">{showInfo.genres}</div>
                </div>
              }

            </div>
          
            <ShowCast passId={this.props.match.params.showId} />
          
          </div>

          <EpisodeList passId={this.props.match.params.showId} />
        </div>
      </div>
   )
  }
}