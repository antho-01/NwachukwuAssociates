
import styles from "@/app/contact/page.module.css";
import Direction from "@/component/redirect/page";

const Contact = () => {
      return (
            <>
            <section className={styles.contactHero}>
                   <h1 data-aos="fade-right"> 
                        Cant Find Answers you are looking for <br/>
                        Chat with our Team of Experts
                   
                   </h1>
            </section>
            <div className={styles.contactHeading}>
                <h2> <span> Contact Us</span> </h2>
            </div>

            <section className={styles.contactSection}>
                  <form action="anthodave@gmail.com">
                         <div className={styles.container1}>
                              <input type="text" placeholder="fullName" required/>   
                              <input type="email" placeholder="Email" required/>

                         </div>

                         <div className={styles.textarea}>
                              <textarea placeholder="Your Message" required ></textarea>
                         </div>
                         
                        <button type="submit" className={styles.button}>Submit</button>
                  </form>

                  
            </section>
            <Direction/>
            </>
           
      )
}

export default Contact;