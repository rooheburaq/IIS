import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styles from "../container.module.css"

export default function BaangEDaraSidebar({ children }) {
	    const BaangEDaraMenu = useStaticQuery(
	    graphql`
	      query {
			  allWpMenu(filter: {locations: {eq: BAANGEDARA}}) {
			    nodes {
			      name
			      menuItems {
			        nodes {
			          label
			          path
			          id
			        }
			      }
			    }
			  }
		    }
	    `
	  	)
	  	const BaangEDaraMenuItems = BaangEDaraMenu.allWpMenu.nodes[0].menuItems.nodes;
	  	// console.log(BaangEDaraMenuItems);
  return (
 		<div>
	 		<ul className={`${styles.sidebarNav} ${styles.BangEDaraMenu}`}>
				{BaangEDaraMenuItems.map((item) =>
					<li key={item.id} className="menuItem"><Link to={item.path}>{item.label}</Link></li>
				)}
			</ul>
		</div>
  )
}