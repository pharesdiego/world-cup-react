import React from 'react';
import Card from './Card';

const Cards = props => {

  return (
    <React.Fragment>
      {
        props.data.rounds.map((obj, index) => {
          return obj.matches.length 
                    ? <Card {...obj} key={ obj.name } index={index} />
                    : null;
        })
      }
    </React.Fragment>
  )

}

export default Cards;