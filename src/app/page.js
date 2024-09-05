"use client"
import styles from "@/app/page.module.css"
import Listing from "@/app/homelisting/page"
import AboutComponent from "@/component/aboutComponent/page"
import Hero from "@/component/hero/page"
import Feeds from "@/component/feed/page"

 const Home = () => {
    
  return (
    <section>
      
      <Hero/>
      <div className={styles.textholder}>
         <h2 className={styles.h2}> Our Property Listing </h2>
         <span class={styles.line}> </span>
      </div>
      <Listing/>
      <AboutComponent/>
      <Feeds/>

    </section>  
  )
 }

 export default Home;