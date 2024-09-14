"use client"
import styles from "@/app/homelisting/[id]/page.module.css";
import Link from "next/link"
import { TbCurrencyNaira } from "react-icons/tb";
import { IoLocationOutline } from "react-icons/io5";
import { IoBedOutline } from "react-icons/io5";
import { LiaToiletSolid } from "react-icons/lia";
import { PiBathtubLight } from "react-icons/pi";
import { IoCarSportOutline } from "react-icons/io5";


import React, {useState} from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';
import Image from "next/image"

// import required modules
import { Pagination, Navigation } from 'swiper/modules';




const Display = ({params}) => {
      const [hide,  setHide] = useState(true);


      function show () {
            setHide((prev)=> !prev)
      }

      const displayList = {
            list1:[{
                  id: 1,
                  location: " Lekki County, lagos ",
                  price: "120,000,000M",
                  bedrooms: 4,
                  bathroom: 4,
                  parking: 4,
                  toilet: 5,
                  image: '/p1a.jpg',
                  image1: '/p1b.jpg',
                  image2: '/p1c.jpg',
                  image3: '/p1d.jpg',
                  image4: '/p1e.jpg',
                  image5: '/p1f.jpg',
                  image6: '/p1g.jpg',
                  image7: '/p1h.jpg',
                  description: 'Spacious 4 Bedroom Semidetached Duplex with BQ.',
                  propertyType: '4 Bedroom Semidetached Duplex',
                  subTitle: " 4 Bedroom Semidetached deplex for sale",

                  features: 1,
                  generator: "Generator",
                  furniture: "Furniture", 
                  tv: "40+ smart tv in all room",
                  wifi: "wifi",
                  kitchen: "well Equipped kitchen",
                  laundry: "in house Laundry",
                  inverter: "inverter system",
                  environment: "in a serene environment tarred road",
                  spotlight: "spot lighting",
                  bq: "Boys quarters",
                  chandelier: "Chandelier",
                  soundSystems: "Sound Systems",
                  camera: "CCTV Cameras",
                  pentry: "pentry",
                  countertop: "Island Countertop",
                  jacuzzi: "Jacuzzi",
                  closet: "Walk-in closet",
                  



                  moreDescription: 1,
                  status: "Available",
                  lastUpdated: "08 march 2024",
                  type: "Apartment / flat",
                  furnished: "furnished"


            }],
            list2:[{
                  id: 2,
                  location: "Orchid Lekki, lagos ",
                  price: "280,000,000M",
                  bedrooms: 5,
                  bathroom: 5,
                  parking: 4,
                  toilet: 5,
                  image: '/p2b.jpg',
                  image1: "/p2a.jpg",
                  image2: "/p2c.jpg",
                  image3: "/p2d.jpg",
                  image4: "/p2e.jpg",
                  image5: "/p2f.jpg",
                  image6: "/p2g.jpg",
                  image7: "/p2h.jpg",
                  image8: "/p2i.jpg",
                  image9: "/p2j.jpg",
                  description: '5 BEDROOM FULLY DETACHED DUPLEX WITH BQ and SWIMMING POOL',
                  propertyType: '5 Bedrooms Fully Detached Duplex',
                  subTitle: " 5 bedroom deplex for sale",

                  features: 1,
                  generator: "Generator",
                  furniture: "Furniture", 
                  tv: "40+ smart tv in all room",
                  wifi: "wifi",
                  kitchen: "well Equipped kitchen",
                  laundry: "in house Laundry",
                  inverter: "inverter system",
                  environment: "in a serene environment tarred road",
                  spotlight: "spot lighting",
                  bq: "Boys quarters",
                  chandelier: "Chandelier",
                  soundSystems: "Sound Systems",
                  camera: "CCTV Cameras",
                  pentry: "pentry",
                  countertop: "Island Countertop",
                  jacuzzi: "Jacuzzi",
                  closet: "Walk-in closet",
                  pool: "Swimming Pool",

                  moreDescription: 1,
                  status: "Available",
                  lastUpdated: "08 march 2024",
                  type: "Apartment / flat",
                  furnished: "furnished"
            }],
            list3:[{
                  id: 3,
                  location: "Orchid Lekki, lagos ",
                  price: "120,000,000M",
                  bedrooms: 4,
                  bathroom: 4,
                  parking: 4,
                  toilet: 5,
                  image: '/p3a.jpg',
                  image1: "/p3b.jpg",
                  image2: "/p3c.jpg",
                  image3: "/p3d.jpg",
                  image4: "/p3e.jpg",
                  image5: "/p3f.jpg",
                  image6: "/p3g.jpg",
                  image7: "/p3h.jpg",
                  image8: "/p3i.jpg",
                  image9: "/p3j.jpg",
                  description: 'Well Finished 4 Bedrooms Semi-detached Duplex with BQ',
                  propertyType: '4 Bedroom Semi-Detached Duplex',
                  subTitle: " 4 bedroom deplex for sale",

                  features: 1,
                  furniture: "Furniture", 
                  tv: "40+ smart tv in all room",
                  wifi: "wifi",
                  kitchen: "well Equipped kitchen",
                  laundry: "in house Laundry",
                  inverter: "inverter system",
                  environment: "in a serene environment tarred road",
                  spotlight: "spot lighting",
                  bq: "Boys quarters",
                  chandelier: "Chandelier",
                  soundSystems: "Sound Systems",
                  camera: "CCTV Cameras",
                  pentry: "pentry",
                  countertop: "Island Countertop",
                  jacuzzi: "Jacuzzi",
                  closet: "Walk-in closet",

                  moreDescription: 1,
                  status: "Available",
                  lastUpdated: "08 march 2024",
                  type: "Apartment / flat",
                  furnished: "furnished"
            }],

            list4:[{
                  id: 4,
                  location: "OSAPA, LONDON ",
                  price: "350,000,000M",
                  bedrooms: 5,
                  bathroom: 5,
                  parking: 4,
                  toilet: 5,
                  image: '/p4a.jpg',
                  image1: "/p4b.jpg",
                  image2: "/p4c.jpg",
                  image3: "/p4d.jpg",
                  image4: "/p4e.jpg",
                  image5: "/p4f.jpg",
                  image6: "/p4g.jpg",
                  image7: "/p4h.jpg",
                  image8: "/p4i.jpg",
                  image9: "/p4j.jpg",                 
                   description: 'Contemporary 5 Bedroom Fully Detached Duplex with Swimming Pool, Private Cinema and BQ',
                  propertyType: 'Contemporary 5 Bedrooms Fully Detached Duplex',
                  subTitle: " 5 bedroom deplex for sale",

                  features: 1,
                  generator: "Generator",
                  furniture: "Furniture", 
                  tv: "40+ smart tv in all room",
                  wifi: "wifi",
                  kitchen: "well Equipped kitchen",
                  laundry: "in house Laundry",
                  inverter: "inverter system",
                  environment: "in a serene environment tarred road",
                  spotlight: "spot lighting",
                  bq: "Boys quarters",
                  chandelier: "Chandelier",
                  soundSystems: "Sound Systems",
                  camera: "CCTV Cameras",
                  pentry: "pentry",
                  countertop: "Island Countertop",
                  jacuzzi: "Jacuzzi",
                  closet: "Walk-in closet",
                  pool: "Swimming Pool",

                  moreDescription: 1,
                  status: "Available",
                  lastUpdated: "08 march 2024",
                  type: "Apartment / flat",
                  furnished: "furnished"
            }],
   
      }

      const datas = displayList[params.id];
      return (
            <section> 
                {
                  datas.map((data)=>{
                        return(
                              <div key={data.key} className={styles.container}>
                                    <div className={styles.subTitle}><h1>{data.subTitle}</h1></div>
                                    <div className={styles.listContainer}>
                                          <div className={styles.backPage}> <Link href="/">backtopage</Link></div>
                                          <div className={styles.descriptionList}>
                                              <div className={styles.descriptionListSection1}>
                                                <p className={styles.propertyType}>{data.propertyType}</p>
                                                <p className={styles.location}><span className={styles.locationNIcon}> <IoLocationOutline/>{data.location}</span></p>
                                              </div>
                                              <div className={styles.descreptionListSection2}>
                                                <p className={styles.price}><span className={styles.pNCurrencyHolder}> <TbCurrencyNaira/>{data.price}</span></p>
                                              </div>

                                          </div>
                                        

<Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={data.image} alt="logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src={data.image1} alt="logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src={data.image2} alt="logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src={data.image3} alt="logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src={data.image4} alt="logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src={data.image5} alt="logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src={data.image6} alt="logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src={data.image7} alt="logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src={data.image8} alt="logo" layout="fill" /></SwiperSlide>
        <SwiperSlide><Image src={data.image9} alt="logo" layout="fill" /></SwiperSlide>
</Swiper>
                                          

                                          <div className={styles.content}>
                                              <div className={styles.des}> <span className={styles.icon}><IoBedOutline/></span> &nbsp; <span>Bedrooms: {data.bedrooms}</span></div>
                                              <div className={styles.des}> <span className={styles.icon}><PiBathtubLight/></span> &nbsp; <span>Bathrooms: {data.bathroom}</span></div>
                                              <div className={styles.des}> <span className={styles.icon}><LiaToiletSolid/></span> &nbsp; <span>Toilet: {data.toilet}</span></div>
                                              <div className={styles.des}> <span className={styles.icon}><IoCarSportOutline/></span> &nbsp; <span>Parking space{data.parking}</span></div>

                                          </div>

                                          <div className={styles.propertyInterest}>
                                                <p> Interested in this property?</p>
                                                <div className={styles.contactInfo}>
                                                      <span className={styles.call}> Call </span>
                                                      <span className={styles.number}>
                                                          { hide ? <span>0907xxxxxxx</span> : <span>09071599443</span> }
                                                       </span> 
                                                      <span className={styles.showButton} onClick={show}>show Number</span>
                                                </div>

                                          </div>

                                          <div className={styles.detailsContainer}>
                                               <div className={styles.detailsDescription}>
                                                  <span className={styles.details}> Details</span>
                                              </div>
                                              <h3 className={styles.propertyDescription}> Property Description</h3>

                                               <div className={styles.featuredContent}>
                                                  <p> {data.description}</p>
                                                  <p> - {data.countertop} </p>
                                                  <p> - {data.jacuzzi} </p>
                                                  <p>- {data.closet} </p>
                                                  <p>- {data.pentry} </p>
                                                  <p> - {data.kitchen} </p>
                                                  <p> - {data.camera} </p>
                                                  <p> - {data.bq}</p>
                                                  <p> - {data.environment}</p>
                                                  <p> - {data.soundSystems}</p>
                                                  <p> - {data.spotlight}</p>
                                                  <p> - {data.chandelier}</p>
                                                  <p> - {data.pool}</p>
                                               </div>

                                               <h3 className={styles.propertyDetails}> Property Details </h3>

                                               <div className={styles.update}>
                                                      <p>LastUpdated: {data.lastUpdated}</p>
                                                      <p>Market Status: {data.status}</p>
                                                      <p>Type: {data.type}</p>
                                                      <p>Bedroom: {data.bedrooms}</p>
                                                      <p>Furnishing: {data.furnished}</p>
                                                      
                                                </div>
                                          </div>

                                          <div className={styles.propertyInterest}>
                                                <p> Interested in this property?</p>
                                                <div className={styles.contactInfo}>
                                                      <span className={styles.call}> Call </span>
                                                      <span className={styles.number}>
                                                          { hide ? <span>0907xxxxxxx</span> : <span>09071599443</span> }
                                                       </span> 
                                                      <span className={styles.showButton} onClick={show}>show Number</span>
                                                </div>

                                          </div>

                                          <div className={styles.backPage}> <Link href="/">backtopage</Link></div>

                                    </div>

                              </div>
                        )
                  })
                }
            </section>
      )
}


export default Display;