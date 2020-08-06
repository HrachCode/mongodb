import React, { useEffect } from 'react'
import Menu from './menu/menu'
import { fetchData } from '../../actions/HomePageAtions'
import { useDispatch,useSelector } from 'react-redux'
import { Card } from 'antd';
import Spiner from '../spiner'


const { Meta } = Card;

const Home = () => {

    useEffect(()=>{
        dispatch(fetchData('/additem/getitem')) 
    },[])

    const movies = useSelector(state => state.adminpanel.movies);
    const loader = useSelector(state => state.reduser.loader)
    const dispatch = useDispatch()
    
    return (
        <>
        <Menu/>
        
        {!movies?<Spiner/>:  <div className="cartWrap">
       {movies.map(item=>{
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


export default Home

