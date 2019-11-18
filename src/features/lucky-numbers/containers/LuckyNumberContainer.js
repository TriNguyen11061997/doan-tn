import React from 'react';
import { Header } from 'components/lucky-numbers'
import { PlayerRanking } from '../components/index'

class LuckyNumberContainer extends React.Component {
  render() {
    return (
      <div className="lucky-number">
        <div>
          <Header />
        </div>
        <div>
          <PlayerRanking />
        </div>
      </div>
    )
  }
}
export default LuckyNumberContainer