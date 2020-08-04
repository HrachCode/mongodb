import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Menu from './menu/menu'
import { fetchData } from '../../actions/HomePageAtions'
import { Card } from 'antd';
import Spiner from '../spiner'


const { Meta } = Card;

const Home = ({fetchData,movies,loader}) => {
    useEffect(()=>{
        fetchData('/additem/getitem')
    },[])

   
    
    
    return (
        <>
        <Menu/>
        
        {loader?<Spiner/>:  <div className="cartWrap">
       {movies && movies.map(item=>{
           return    <Card key={item._id}
           hoverable
           style={{ width: 240,margin: 20 }}
          
           cover={<img alt="example" src={item.img} />}
         >
           <Meta title={item.name + '     rating    ' + item.rating} description={item.description} />
         </Card>
         
       
        })}
       </div>}
     
        </>
    )
}



const mapStateToProps = (state) => ({
    movies:state.adminpanel.movies,
    loader:state.reduser.loader
})

const mapDispatchToProps = {
    fetchData,
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
