import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function Header({ children }) {
	const data = useStaticQuery(
    graphql`
      query {
	        allWpMenu(filter: {locations: {eq: PRIMARY}}) {
			    nodes {
			      menuItems {
			        nodes {
			          parentId
			          label
			          path
			          id
			          childItems {
			            nodes {
			              label
			              path
			              id
			              childItems {
			                nodes {
			                  parentId
			                  label
			                  path
			                  id
			                }
			              }
			            }
			          }
			        }
			      }
			    }
			}
	    }
    `
  	)
	
  	const mainMenuItems = data.allWpMenu.nodes[0].menuItems.nodes
    ? data.allWpMenu.nodes[0].menuItems.nodes.filter(menuItem => menuItem.parentId === null)
    : null
  return (

    <div className="siteHeader">
    	<div className="topHeader">
    		<div className="headerContainer">
    		</div>
    	</div>
    	<div className="mainHeader">
		    <div className="headerContainer dp-flex">
		      	<div className="logoBox dp-flex-10">
		      		<a href="/"><img src={`../../logo.png`} alt="logo"/></a>
		      	</div>
				<nav className="dp-flex-90">
		      	<ul className="sitenav">
		            {mainMenuItems.map((item) =>
		            	item.childItems.nodes.length == 0 ? <li key={item.id} className="menuItem"><Link to={item.path}>{item.label}</Link></li>
		            	:
		            	<>
		                <li key={item.id} className="menuItem hasDropdown"><Link to={item.path}>{item.label}</Link>
		                	<ul className="subMenuList">
		                		{item.childItems.nodes.map((subitem) => 
		                			<li key={subitem.id} className="subMenuItem"><Link to={subitem.path}>{subitem.label}</Link></li>
		                		)}
		                	</ul>
		                </li>
		                </>
		            )}
		        </ul>
		      </nav>
		    </div>
		</div>
	</div>
  )
}