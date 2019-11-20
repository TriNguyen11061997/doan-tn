import React from 'react';
import { Header } from 'components/lucky-numbers'
import { PlayerRanking } from 'components/common'
import { Container, Row, Col } from 'reactstrap';
class GameContainer extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game__header">
          <Header />
        </div>
        <div className="game__body">
          <div className="container-fluid">
            <div className="game__body__content">
              <Row>
                <Col lg="3">
                  <PlayerRanking />
                </Col>
                <Col lg="9">
                  123
              </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default GameContainer