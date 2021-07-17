import React,{ useEffect, useContext } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'
import { fetchGetData,fetchGetTodoData } from '../apis/index'
import { Store } from '../store/index'
import { GET_DATA,GET_TODODATA } from '../actions/index'
import Card from '../components/SecondCard'
import SecondCard from '../components/SecondCard'

const SecondPage = () => {
const { globalState, setGlobalState } = useContext(Store)
  useEffect(() => {
    fetchGetTodoData().then(res => {
        setGlobalState({
          type: GET_TODODATA,
          data: res.data
      })
    })
  }, [])
  console.log(globalState)

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {
        globalState.comment_data.map((comment, index) => {
          return (
            <SecondCard comment={comment} key={index} />
          )
        })
      }
    </div>
  )
}











export default SecondPage