import Link from "next/link";
import styles from "@/component/footer/page.module.css";
import { BiLogoFacebookSquare } from "react-icons/bi";
import { SlSocialInstagram } from "react-icons/sl";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer1}>
        <div className={styles.about}>
          <h2>About Us</h2>
          <p className={styles.footerAbout}>
            Nwachukwu Pius & Associates has established itself as a leading
            force in the real estate consulting industry, proudly serving
            clients for over 15 years. Founded on a foundation of expertise and
            integrity, the firm offers a wide array of services including
            property valuation, investment analysis, and market research.
          </p>

          <Link href="/about">
            <p className={styles.learn}>
              {" "}
              <span>Learn More</span>
            </p>
          </Link>
          <Link href="/contact">
            <p className={styles.contact}>
              <span>Contact Us</span>
            </p>
          </Link>
        </div>

        <div className={styles.trend}>
          <h2>Market Trends</h2>
          <Link href="/trending">
            <p>
              {" "}
              <span>For Sale</span>
            </p>
          </Link>
          <Link href="/for-sale">
            <p>
              {" "}
              <span>For Rend</span>
            </p>
          </Link>
          <Link href="/for-rent">
            <p>
              {" "}
              <span> Trending </span>
            </p>
          </Link>
        </div>

        <div className={styles.k}>
          <h2> Fellow Us</h2>
          <div className={styles.socials}>
            <Link href="/contact">
              <span>
                {" "}
                <BiLogoFacebookSquare className={styles.icon} />{" "}
              </span>
            </Link>
            <Link href="/contact">
              <span>
                {" "}
                <SlSocialInstagram className={styles.icon} />{" "}
              </span>
            </Link>
            <Link href="/contact">
              <span>
                {" "}
                <FaLinkedin className={styles.icon} />{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>

      <p className={styles.copy}>
        {" "}
        2024 &copy; nwachukwu .c pius & Associates. All Rights Reserved
      </p>
    </section>
  );
};

export default Footer;
