import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { login, getUsers} from '../../actions'
const Home = (props) =>{
    console.log('Props in Home After Login:', props)
    const getUsers = props.getUsers;
    const [users, setUsers] = useState([])
    //useEffect
    useEffect(()=>{
        setUsers(getUsers());
    },[])
    return(
        <div>Home</div>
    )
}

const mapStateToProps = state => {
    return {
      auth: {
        isLoggedIn: state.auth.isLoggedIn,
        isFetching: state.auth.isFetching,
        error: state.auth.error,
        users: state.auth.users
      }
    }
  }
  export default connect(
    mapStateToProps,
    //place imported actions below
    { login,getUsers }
  )(Home);