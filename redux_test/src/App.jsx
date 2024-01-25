/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './App.css'
import {  setIndex, setData } from './Redux/slice/counterSlice'



function App() {
  const selectData = useSelector((state)=> state.phone_accessories)
  const dispatch = useDispatch()
  
  
  async function fetchData(){
    try {
      const response = await fetch(`https://dummyjson.com/products/${selectData.index}`);
      const data = await response.json()
      dispatch(setData(data))

      // console.log(data)
      
      
    } catch (error) {
       console.log("error code:", error)
    }
  }

  useEffect(()=> {   
    fetchData() 
  }, [])

  function nextButton(){
    dispatch(setIndex(selectData.index + 1))
  }
  
  
  function previousButton(){
    dispatch(setIndex(selectData.index - 1))
  }
  console.log(selectData)

  

  return (
    <>
      <div>
      {selectData.data && (
          <>
            <h1>{selectData.data.title}</h1>
          </>
        )}
      
        
        <button onClick={nextButton}>next</button>
        <button onClick={previousButton}>previous</button>
      </div>
    </>
  )
}

export default App
