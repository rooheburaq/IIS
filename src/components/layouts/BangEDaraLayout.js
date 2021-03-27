import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Header from "../headers/mainheader"
import FullContainer from "../fullcontainer"
import styles from "../container.module.css"

export default function BangEDaraLayout({ children }) {
  return (
 		<div>
	  	    <Header/>
		    <FullContainer>
			    <div className={styles.poeticalPage}>
			        {children}
		        </div>
		    </FullContainer>
		</div>
  )
}
