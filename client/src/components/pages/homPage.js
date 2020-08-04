import React, { Component } from 'react'
import SiderDemo from './adminpanel/SIDEBARPRO'
import { Header, Footer, Homepage,Test,AdminItems, } from './adminpanel/adminpages'
import { connect } from 'react-redux'
import { adminPanelLoad } from '../../actions/adminAtions'
import { Home } from './index'




class homPage extends Component {

    state = {
        page:0
    }

 
    render() {
       const page = this.state.page
       if (page === 'home') {
           return <Home/>
       }
     
     
        return (
            <div>
            <SiderDemo setPage = {(page)=>  this.setState({page:page}) }/>
            <div className='sectioncontent'>
                <h1>
                    {(page === 0)? <Homepage/>:
                     (page === 1)? <Header />:
                     (page === 2)? <Footer />:
                    (page === 7)? <AdminItems />:
                     (page === 8)? <Test redirect = {this.props.history}/>:'NONE'}
                </h1>
            </div>

        </div>
        )
    }
}
const mapStateToProps = (state) => ({
    reduxstate:state,
})

const mapDispatchToProps = {
    adminPanelLoad,
}

export default connect(mapStateToProps, mapDispatchToProps)(homPage)