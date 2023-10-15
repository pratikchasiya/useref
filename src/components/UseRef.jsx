import React, { Fragment, useEffect, useRef } from 'react'

const UseRef = () => {

  /* USEREF A ALWAYS OBJECT RETURN KRE AND A CURRENT HOI */
    const nameRef = useRef()
    console.log(nameRef) /* UNDEFINED */

    /* USE EFFECT A ALWAYS AKHU HTML RETURN THY P6I J LAST MA CALL THSE ATLE APRNE USEEFFECT MA BDHI VALUE MLE BUT APRE UPR CONSOLE KRIYE TYRE KOI VALUE NI HOI ATLE TYRE UNDEFINED AVE */
    useEffect(() => {
        console.log(nameRef.current) /* <h2>UseRef</h2> */
        nameRef.current.style.color = "green"
        nameRef.current.style.backgroundColor="lavender"

    }, [])
    /* AHIYA APRE [] BLANK ARRAY DEPENDENCY LAAGAVI CHE ATLE JYRE FIRST TIME PAGE LOAD THSE TYRE J A RUN THSE AND EK J VAR RENDER THSE */
    
  return (
    <Fragment>
      {/* APRE REF ATTRIBUTE NO USE KRI NE KOI PN ELEMENT ACCESS KRI SAKAY */}
        <div><h2 ref={nameRef} >UseRef</h2></div>
    </Fragment>
  )
}

export default UseRef