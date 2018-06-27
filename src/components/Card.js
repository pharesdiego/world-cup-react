import React from 'react';
import styled from 'styled-components';
import Transition from './Transition';
import { gradient } from './../utils/gradient';

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  height: auto;
  background: ${props => gradient()};
  box-shadow: 0px 2px 10px 2px #c7c7c7;
  border-radius: 4px;
  background-size: cover;
    &:not(:last-child){
      margin-bottom: 20px;
    }
`

const Header = styled.div`
  width: 100%;
  height: auto;
  font-size: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #2f2f2f;
  margin-bottom: 10px;
    & p:nth-child(2) {
      font-size: 13px;
    }
`

const Match = styled.div`
  display: flex;
  padding: 10px;
  justify-content: center;
  border-bottom: 2px solid white;
    & div {
      flex: 1;
      display: flex;
      justify-content: center;
    }
    & div:nth-child(2){
      justify-content: space-around;
    }
    &:not(:last-child){
      margin-bottom: 10px;
    }
`
const Team = styled.div``

const Result = styled.div``

const Name = styled.p`
  font-weight: ${ props => props.winner ? 'bold' : 'initial' }
`

const Card = props => {
  const { name, matches, index } = props;
  return (
    <Transition delay={index * 10} duration={300}>
      <Container>
        <Header>
          <p> { name } </p>
          <p> { matches[0].date } </p>
        </Header>
        {
          matches.map(match => (
            <Match key={ match.num }>
              <Team>
                <Name 
                  winner = { match.score1 > match.score2 }
                  children = { match.team1.name }/>
              </Team>
              <Result>
                <p> { match.score1 } </p>
                <p> - </p>
                <p> { match.score2 } </p>
              </Result>
              <Team>
                <Name
                  winner = { match.score2 > match.score1 }
                  children = { match.team2.name } />
              </Team>
            </Match>
          ))
        }
      </Container>
    </Transition>
  )
}

export default Card;