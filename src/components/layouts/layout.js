import React from "react"
import { Link } from "gatsby"
import Header from "../headers/mainheader"
import FullContainer from "../fullcontainer"

export default function Layout({ children }) {
  return (
  	<div>
  	<Header/>
	    <FullContainer>
	        {children}
	    </FullContainer>
	</div>
  )
}