import React from 'react'
import myContext from './Context'
const loginHoc = (WrapperComponent) => {
  return class Hoc extends React.Component{
    static contextType = myContext
    render(){
      const {isLogin} = this.context

      return(
        <WrapperComponent isLogin={isLogin}  {...this.props} />
      )
    }
  }
}


export default loginHoc;
