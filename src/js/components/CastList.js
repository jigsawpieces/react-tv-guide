import React from "react"

export default class CastList extends React.Component {
  
  constructor() {
    super()
    this.state={cast:[]}
  }

  componentDidMount(){
    var url = 'http://api.tvmaze.com/shows/' + this.props.passId + '/cast'
    
    fetch(url)
    .then(result=>result.json())
    .then(cast=>this.setState({cast}))
  }
  
  render() {
    var listSize = 4;
    return(
      <div className="cast">
        <h3><i class="fa fa-user-circle-o"></i> Starring</h3>
          {this.state.cast.length ?
            this.state.cast.slice(0, listSize).map(actor=>
              <div className="row" key={actor.person.id}>
                <div className="actor">{actor.person.name}</div><div className="character">{actor.character.name}</div>
              </div>
              ) 
            : null
          }
      </div>
    )

  }
}