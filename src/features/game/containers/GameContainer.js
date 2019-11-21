import React from 'react';
import { Header } from 'components/lucky-numbers'
import { PlayerRanking, FundAccount } from 'components/common'
import { Row, Col } from 'reactstrap';
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
                  <Row>
                    <Col lg="7" className="body-left">

                    </Col>
                    <Col lg="5" className="body-right">
                      <FundAccount />
                    </Col>
                  </Row>
                  <Row>

                  123
                  </Row>
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