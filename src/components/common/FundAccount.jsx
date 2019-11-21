import React from 'react';

class FundAccount extends React.Component {
  render() {
    return (
      <div className="fund-account">
        <div className="fund-account__header">
          <div className="fund-account__header__total-bet">
            <h6 className="name">Total Bet</h6>
            <h6 className="total_number">100 Bets</h6>
          </div>
          <hr />
          <div className="fund-account__header__total-payout">
            <h6 className="name">Total Payout</h6>
            <h6 className="total_number">10.64466 ETH</h6>
          </div>
        </div>

        <div className="fund-account__available-fund">
          <h4 className="name">Available Fund</h4>
          <h4 className="total_number">0.0000 ETH</h4>
        </div>
        <div className="fund-account__volume-income-dividend">
          <div className ="fund-account__volume-income-dividend__center">
            <div className="volume common">
              <p>Volume</p>
              <h6><span>0.002</span></h6>
            </div>
            <div className="income common">
              <p>Income</p>
              <h6><span>0.002</span></h6>
            </div>
            <div className="divodend common">
              <p>Dividend</p>
              <h6><span>0.002</span></h6>
            </div>
          </div>
        </div>
        <div className="fund-account__withdraw">
        </div>
      </div>
    )
  }
}
export default FundAccount