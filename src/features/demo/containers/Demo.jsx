import React, { useEffect } from 'react';
import { connect } from 'react-redux'

const Demo = ({ demo, ...props }) => {
  useEffect(() => {

  }, [])
  console.log(demo)
  return (
    <div>DemoPage1234</div>
  )
}

const mapDispatchToProps = {

}
const mapStateToProps = (state) => ({
  demo: state.demo
})


export default connect(mapStateToProps, mapDispatchToProps)(Demo)