import React, { Fragment, useEffect, useRef, useState } from 'react'

const NewUseRef = () => {
    const [data, setData] = useState("")
    // const [count, setCount] = useState() 

    const count = useRef(0)
    console.log(count)

useEffect(() => {

//  setCount(count + 1)
count.current = count.current + 1

},)


  return (
   <Fragment>
     <div>NewUseRef</div>
     <input type="text" value={data} onChange={(e)=> setData(e.target.value)} />
     <p>The number of times render : {count.current}</p>
   </Fragment>
  )
}

export default NewUseRef