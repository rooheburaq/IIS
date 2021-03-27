import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layouts/layout"
import styles from "../components/container.module.css"

export default function Home() {
  return (
  	<Layout>
  	<p className="homeBanner"><img src={`../../IISHomeBanner.jpg`} alt="book cover"/></p>
  	<div className={`${styles.container} home`}>
	        <div className="booksListing">
	        	<div className="homeIntro">
		        	<h1>International Iqbal Society (formerly DISNA)</h1>
		        	<p>was conceived and founded by Noman Bokhari on 11th February 2009, in Toronto, Canada, to create a platform for embedding high morals in individuals and society through imparting awareness, knowledge, and intellect, the core doctrine being Iqbal’s works for the achievement of this very objective.</p>
	        	</div>
	        	<div className="bookBoxes">
		        	<div className={styles.bookBox}>
		        	    <Link to="/baang-e-dara/baang-e-dara-hisa-1/">
			        		<img src={`../../BaangEDara.jpg`} alt="book cover"/>
			        		<h4>Bang-e-Dara</h4>
		        		</Link>
		        	</div>
		        	<div className={styles.bookBox}>
		        		<Link to="/baal-e-jibreel/baal-e-jibreel-ghazaliat-hisa-1/">
			        		<img src={`../../BaalEJibreel.jpg`} alt="book cover"/>
		        			<h4>Baal-e-Jibreel</h4>
		        		</Link>
		        	</div>
		        	<div className={styles.bookBox}>
			        	<Link to="/zarb-e-kaleem/ibtada/">
			        		<img src={`../../ZarbEKaleem.jpg`} alt="book cover"/>
			        		<h4>Zarb-e-Kaleem</h4>
		        		</Link>
		        	</div>
		        	<div className={styles.bookBox}>
			        	<Link to="/armaghan-e-hijaz-urdu/">
			        		<img src={`../../ArmaghanEHijaz.jpg`} alt="book cover"/>
			        		<h4>Armaghan-e-Hijaz</h4>
		        		</Link>
		        	</div>
	        	</div>
	        </div>
	  	</div>
    </Layout>
  )
}