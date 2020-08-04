import  React from 'react';
import  { Route, Switch} from 'react-router-dom'
import { Admin,Home } from '../pages'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

const App = (props)=>{
    const {loader} = props.reduxstate.reduser
   
    
    if (loader) {
        return <h1>Loading...</h1>
    }
    return (
       <Switch>
           <Route path='/' component={Home} exact/>

            <Route path='/rootadmin' component={Admin} exact/> 
       </Switch>
    )
}


const mapStateToProps = (state) => ({
    reduxstate:state,
})

const mapDispatchToProps = {
    
}
export default connect(mapStateToProps, mapDispatchToProps)(App)