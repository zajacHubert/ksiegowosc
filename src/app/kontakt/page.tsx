import ContactForm from "@/components/ContactForm";
import styles from "./ContactPage.module.css";
import { FaLocationDot, FaPhone, FaEnvelope, FaIdCard } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <>
      <section className="container">
        <h2 className="sectionTitle">Dane kontaktowe</h2>
        <div className={styles.contentBox}>
          <div className={styles.textBox}>
            <p className={styles.companyName}>
              Anna Niemczewska Biuro Rachunkowe
            </p>
            <div className={styles.contactInfoBox}>
              <FaLocationDot size={24} />
              <p>Rachocin 8A, 09-200 Sierpc</p>
            </div>
            <div className={styles.contactInfoBox}>
              <FaEnvelope size={24} />
              <a href="mailto:biuro@niemczewskafinanse.pl">
                biuro@niemczewskafinanse.pl
              </a>
            </div>
            <div className={styles.contactInfoBox}>
              <FaPhone size={24} />
              <a href="tel:+48726221610">+48 726 221 610</a>
            </div>
            <div className={styles.contactInfoBox}>
              <FaIdCard size={24} />
              <p>NIP: 7761645375</p>
            </div>
          </div>
          <div className={styles.map}>
            <div style={{ width: "100%", height: "450px" }}>
              <iframe
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src={`https://maps.google.com/maps?q=Rachocin+8A,+09-200+Sierpc&z=16&output=embed`}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="sectionTitle">Masz pytania?</h2>
        <ContactForm />
      </section>
    </>
  );
}
