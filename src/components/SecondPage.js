import React,{ useEffect, useContext } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'
import { fetchGetData } from '../apis/index'
import { Store } from '../store/index'
import { GET_DATA,GET_DATA_SECOND } from '../actions/index'
import Card from '../components/Card'


const SecondPage = () => {
const { globalState, setGlobalState } = useContext(Store)
  useEffect(() => {
    fetchGetData().then(res => {
        setGlobalState({
          type: GET_DATA,
          data: res.data
      })
    })
  }, [])
  console.log(globalState)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        globalState.user_data.map((user, index) => {
          return (
            <Card user ={user} key={index} />
          )
        })
      }
    </div>
  )
}











export default SecondPage