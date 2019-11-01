import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import { getDemoAPI } from '../../../redux/reducers/demo'
import { Button } from 'reactstrap'

const Demo = ({ getDemoAPI, demo, ...props }) => {
  useEffect(() => {
    getDemoAPI('LTC_BTC', 'Day');
  }, [getDemoAPI])

  return (
    <div className='demo'>
      <Button color="primary">12345</Button>
      {demo.data.map(v => {
        return (
          <p className='demo__text'>{v.market}</p>)
      })}
      DemoPage1234</div>
  )
}

const mapDispatchToProps = {
  getDemoAPI
}
const mapStateToProps = (state) => ({
  demo: state.demo
})


export default connect(mapStateToProps, mapDispatchToProps)(Demo)