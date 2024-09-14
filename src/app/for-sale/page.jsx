import React from 'react'
import styles from "@/app/for-sale/page.module.css"
import { IoBedOutline } from "react-icons/io5";
import { LiaToiletSolid } from "react-icons/lia";
import { PiBathtubLight } from "react-icons/pi";
import { IoCarSportOutline } from "react-icons/io5";
import { TbCurrencyNaira } from "react-icons/tb";
import Link from "next/link"
import Image from "next/image"



const ForSale = () => {

      const list = [
            {
                  id: "list1",
                  location: "Lekki County, lagos ",
                  price: "120,000,000M",
                  bedrooms: 4,
                  bathroom: 4,
                  parking: 4,
                  toilet: 5,
                  image: '/p1a.jpg',
                  description: 'Spacious 4 Bedroom Semidetached Duplex with BQ.',
                  propertyType: '4 Bedroom Semidetached Duplex',
                  subTitle: " 4 Bedroom Duplex",
                  
           
            },

            {
                  id: "list2",
                  location: "Orchid Lekki, lagos ",
                  price: "280,000,000M",
                  bedrooms: 5,
                  bathroom: 5,
                  parking: 4,
                  toilet: 5,
                  image: '/p2b.jpg',
                  description: '5 BEDROOM FULLY DETACHED DUPLEX WITH BQ and SWIMMING POOL',
                  propertyType: '5 Bedrooms Fully Detached ',
                  subTitle: "5 bedroom Duplex for sale",
                  
            },
 
            {
                  id: "list3",
                  location: "Orchid Lekki, lagos ",
                  price: "120,000,000M",
                  bedrooms: 4,
                  bathroom: 4,
                  parking: 4,
                  toilet: 5,
                  image: '/p3a.jpg',
                  description: 'Well Finished 4 Bedrooms Semi-detached Duplex with BQ',
                  propertyType: ' 4 Bedrooms semi-Detached ',
                  subTitle: "4 bedroom duplex for sale",
                  
            },

            {
                  id: "list4",
                  location: "Osapa London ",
                  price: "350,000,000M",
                  bedrooms: 5,
                  bathroom: 5,
                  parking: 4,
                  toilet: 5,
                  image: '/p4a.jpg',
                  description: 'Contemporary 5 Bedroom Fully Detached Duplex with Swimming Pool, Private Cinema and BQ in a secured estate.',
                  propertyType: 'Contemporary 5 Bedrooms Fully Detached ',
                  subTitle: "5 bedroom duplex for sale",
                  
            },

            {
                  id: "list5",
                  location: "Osapa London ",
                  price: "350,000,000M",
                  bedrooms: 5,
                  bathroom: 5,
                  parking: 4,
                  toilet: 5,
                  image: '/p4a.jpg',
                  description: 'Contemporary 5 Bedroom Fully Detached Duplex with Swimming Pool, Private Cinema and BQ in a secured estate.',
                  propertyType: 'Contemporary 5 Bedrooms Fully Detached ',
                  subTitle: "5 bedroom duplex for sale",
                  
            },

            {
                  id: "list6",
                  location: "Osapa London ",
                  price: "350,000,000M",
                  bedrooms: 5,
                  bathroom: 5,
                  parking: 4,
                  toilet: 5,
                  image: '/p4a.jpg',
                  description: 'Contemporary 5 Bedroom Fully Detached Duplex with Swimming Pool, Private Cinema and BQ in a secured estate.',
                  propertyType: 'Contemporary 5 Bedrooms Fully Detached ',
                  subTitle: "5 bedroom duplex for sale",
                  
            },
      ]
      

  return (
      <>

<div className={styles.forsale}> <h1 data-aos="fade-left"> Properties In Nigeria For Sale</h1></div>

<div className={styles.box}>
               {
                    list.map((list)=>{
                          return(
                                <div key={list.key} className={styles.container}>
                                <div className={styles.subContainer}>
                                      <h2 className={styles.propertyType}>{list.propertyType}</h2>
                                      <div className={styles.imageDes}>
                                            
                                            <div className={styles.imgContainer}>
                                                  <Link href={`/for-sale/${list.id}`}> <Image src={list.image} layout="fill" alt="House"/></Link>
                                            </div>
                                            
                                            <div>  
                                                  <h3 className={styles.subTitle}>{list.subTitle}</h3>
                                                  <p className={styles.description}>{list.description}</p>
                                                  <p className={styles.price}><TbCurrencyNaira/>{list.price}</p>
                                            </div>
                                      </div>
                                </div>
        
                                <div className={styles.items}> 
                                      <div className={styles.des}> <span className={styles.icon}><IoBedOutline/></span> &nbsp; <span>Bedrooms: {list.bedrooms}</span></div>
                                      <div className={styles.des}> <span className={styles.icon}><PiBathtubLight/></span> &nbsp; <span>Bathrooms: {list.bathroom}</span></div>
                                      <div className={styles.des}> <span className={styles.icon}><LiaToiletSolid/></span> &nbsp; <span>Toilet: {list.toilet}</span></div>
                                      <div className={styles.des}> <span className={styles.icon}><IoCarSportOutline/></span> &nbsp; <span>Parking space{list.parking}</span></div>
                                </div>
                          </div>
        
                          )
                    })
               }
            
        </div>
       
      
      </>
     )
}

export default ForSale;
