import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {fetchData} from '../../../../actions/HomePageAtions'
import {Table} from 'react-bootstrap';
import {DeletItem} from './index'
import Spiner from '../../../spiner'

export const AdminItems = ({fetchData, movies}) => {
    useEffect(() => {
        getItems()
    }, [])

    const getItems = () => {
        fetchData('/additem/getitem')
    }

    return (
        <div className="adminItems">
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Rating</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {!movies
                        ? <Spiner/>
                        : movies.map(item => {
                            return <tr key={item._id}>
                                <td><img src={item.img} alt="img" width="50" height="50"/></td>
                                <td>{item
                                        .name
                                        .substr(0, 10)}</td>
                                <td>{item.rating}</td>
                                <td><DeletItem deletItem={item._id} getItems={getItems}/></td>
                            </tr>

                        })}
                </tbody>
            </Table>
        </div>
    )
}

const mapStateToProps = (state) => ({movies: state.adminpanel.movies})

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminItems)
