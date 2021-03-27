import React from "react"
import styles from "./container.module.css"

export default function FullContainer({ children }) {
  return <div className={styles.fullcontainer}>{children}</div>
}