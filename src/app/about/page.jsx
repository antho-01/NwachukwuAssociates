
import styles from "@/app/about/page.module.css"
import AboutComponent from "@/component/aboutComponent/page"
import Direction from "@/component/redirect/page";
import Image from "next/image";

const About = () => {
      return (
            <section className={styles.about}>
                  <div className={styles.aboutHero}>
                        <h1 data-aos="fade-right">About Us</h1>
                  </div>

                   <AboutComponent/>

                   <div className={styles.statement}>

                        <div className={styles.imgCon} data-aos="fade-right">
                              <Image 
                                 src="/mission1.jpeg"
                                 alt="photo"
                                 fill="true"
                              />
                              
                        </div>
                        <div className={styles.text} data-aos="fade-left">
                              <h2>Our Mission</h2>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi at vitae reiciendis saepe consequuntur incidunt tenetur, enim ex assumenda illum aspernatur in libero ipsam omnis quam atque commodi quos nisi! Nisi, vero placeat sit iste cum est nostrum, a illo eum iure similique ad rerum sunt incidunt. Natus perferendis reprehenderit inventore atque quo magnam quasi, sit delectus saepe, nihil consequatur.</p>
                              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam nobis eveniet voluptate iste esse hic nihil ipsa vel dolorum illum beatae, explicabo natus modi adipisci neque enim ex magni cum architecto voluptatibus magnam eaque soluta necessitatibus vero! Deleniti, aperiam dicta.</p>
                        </div>

                   </div>

                   <div className={styles.statement}>
                        
                        <div className={styles.text} data-aos="fade-right">
                              <h2>Our Vision</h2>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque debitis dolore esse dolorem expedita rem iste labore, nemo error facilis adipisci, ratione delectus nihil quod in numquam eos possimus minus! Ipsam labore ut sit, dignissimos, iste qui voluptatem nostrum vel consequatur aspernatur dicta est voluptate cumque culpa ducimus illo distinctio. Recusandae, perspiciatis. Rerum facere dicta, perspiciatis a ab velit! Sequi.</p>
                              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis dolorem mollitia quis architecto nam nemo enim tempora! Architecto autem consectetur eos hic nobis cum eius laudantium commodi doloremque, fuga quasi. Non hic unde, nulla consequuntur maiores repellat et? Similique, reprehenderit.</p>
                        </div>

                        <div className={styles.imgCon} data-aos="fade-left">
                              <Image 
                                 src="/vision1.jpeg"
                                 alt="photo"
                                 fill="true"
                              />
                              
                        </div>

                   </div>
                   <Direction/>
            </section>
            

            


      )
}

export default About;