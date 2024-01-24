
import { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import './App.css'
import { setData, setNext, setPrevious, setIndex } from './Redux/slice/counterSlice'

function App() {
  const selectData = useSelector((state)=> state.phone_accessories)
  const dispatch = useDispatch()

  useEffect(()=> {
    async function fetchData(){
      try {
        const response = await fetch(`https://dummyjson.com/products/`);
        const data = await response.json()
        dispatch(setData(data))
        dispatch(setIndex(Math.floor( selectData.index + 1)))

        // console.log(data)
      } catch (error) {
         console.log("error code:", error)
      }
    }
    fetchData()

  }, [dispatch])

  function nextButton(){
    dispatch(setNext(selectData.next + 1))
  }
  // function trackIndex(){
  //   dispatch(setIndex(Math.floor(Math.random + selectData.index)))
  // }
  function previousButton(){
    dispatch(setPrevious(selectData.previous - 1))
  }
  // console.log(selectData.next)

  return (
    <>
      <div>
        {
          // selectData.data.products.map((item)=> (
             
          //   <div key={item.id}>
          //     <h1>{console.log(item[1])}</h1>
              
          //   </div>
          

          // ))
          console.log(selectData.data)

    
        }
        <button onClick={nextButton}>next</button>
        <button onClick={previousButton}>previous</button>
      </div>
    </>
  )
}

export default App
