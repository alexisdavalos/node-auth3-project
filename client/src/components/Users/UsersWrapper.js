import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux';
import {getUsers} from '../../actions/index';
const UsersWrapper = (props) =>{
    console.log('Props inside usersWrapper', props)
    // const getUsers = props.getUsers();
    const [users, setUsers] = useState()
    useEffect(()=>{
        console.log('Inside Use Effect USersWrapper.js: Fetching Users....')
       
       
    },[props.auth.token])
    return(
        <div>
            <h3>Users in Database</h3>
            <div className='usersWrapper'>
                {/* {(props.auth.users !== '') ? props.auth.users.data.map(post => (
                    <div>user</div>
                )) : <div></div>} */}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      auth: {
        isLoggedIn: state.auth.isLoggedIn,
        token: state.auth.token,
        currentUser: state.auth.currentUser,
        isFetching: state.auth.isFetching,
        error: state.auth.error,
        users: state.auth.users
      }
    }
  }
  export default connect(
    mapStateToProps,
    //place imported actions below
    {getUsers}
  )(UsersWrapper);