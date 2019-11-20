import React from 'react';

class PlayerRanking extends React.Component {
  render() {
    return (
      <div className="player-ranking">
        <div>
          <h4 className="player-ranking__title"> Players Ranking</h4>
          <div className="player-ranking__data">
            <div className="clearfix">
              <p className="player-ranking__data__player-title">Players</p>
              <p className="player-ranking__data__volume-title">Total Volume</p>
            </div>
            <ul>
              <li>
                <p className="player-ranking__data__player-name">TTTTT</p>
                <p className="player-ranking__data__player-value">123456</p>
              </li>
              <li>
                <p className="player-ranking__data__player-name">TTTTT</p>
                <p className="player-ranking__data__player-value">123456</p>
              </li>
              <li>
                <p className="player-ranking__data__player-name">TTTTT</p>
                <p className="player-ranking__data__player-value">123456</p>
              </li>
              <li>
                <p className="player-ranking__data__player-name">TTTTT</p>
                <p className="player-ranking__data__player-value">123456</p>
              </li>
              <li>
                <p className="player-ranking__data__player-name">TTTTT</p>
                <p className="player-ranking__data__player-value">123456</p>
              </li>
              <li>
                <p className="player-ranking__data__player-name">TTTTT</p>
                <p className="player-ranking__data__player-value">123456</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default PlayerRanking