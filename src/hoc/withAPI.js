import React from 'react';
import Loader from './../components/Loader';
const __URL__ = 'https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json';

const withAPI = Wrapper => class extends React.Component {
  state = {
    data: null
  }
  
  componentDidMount(){
    fetch(__URL__)
      .then(Response => Response.json())
      .then(json => {
        this.setState({
          data: json
        })
      })
  }

  render(){
    return (
      this.state.data
        ? <Wrapper {...this.props} {...this.state}/> 
        : <Loader {...this.props} /> 
    )
  }
}


export default withAPI;