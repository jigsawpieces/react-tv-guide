import React from "react"

export default class EpisodeList extends React.Component {
  
  constructor() {
    super()
    this.state={episodes:[]}
  }

  componentDidMount(){
    var url = 'http://api.tvmaze.com/shows/' + this.props.passId + '/episodes'
    
    fetch(url)
    .then(result=>result.json())
    .then(episodes=>this.setState({episodes}))
  }
  
  render() {
    var listSize = 5;
    return(  
      <div className="grid-container episodes">
        <h3><i class="fa fa-calendar"></i> Episodes</h3>
          
          <div className="row">
            <div className="season">Season</div>
            <div className="number">Number</div>
            <div className="release-date">Release date</div>
            <div className="name">Name</div>
          </div>
          {this.state.episodes.length ?
            this.state.episodes.reverse().slice(0, listSize).map(episode=>
              <div className="row" key={episode.id}>
                <div className="season">{episode.season}</div>
                <div className="number">{episode.number}</div>
                <div className="release-date">{episode.airdate}</div>
                <div className="name">{episode.name}</div>
              </div>
              ) 
            : null
            }
      </div>
    )

  }
}