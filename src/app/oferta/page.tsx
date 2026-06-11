import Image from "next/image";
import styles from "./OfferPage.module.css";
import offer1Img from "../../../public/offer1.jpg";
import offer2Img from "../../../public/offer2.jpg";
import offer3Img from "../../../public/offer3.jpg";

export default function OfferPage() {
  return (
    <>
      <section className="container">
        <h2 className="sectionTitle">Oferta</h2>
        <p className={styles.text}>
          Cena usług ustalana jest indywidualnie i zależy przede wszystkim od
          rodzaju działalności, formy prawnej firmy oraz ilości dokumentów
          księgowych. Każdy klient traktowany jest indywidualnie, dzięki czemu
          możliwe jest dopasowanie zakresu obsługi do rzeczywistych potrzeb
          przedsiębiorstwa.
        </p>
        <p className={styles.text}>
          Wycena uwzględnia między innymi liczbę dokumentów, ilość pracowników,
          zakres obsługi kadrowo-płacowej oraz specyfikę prowadzonej
          działalności. Celem współpracy jest zapewnienie rzetelnej,
          profesjonalnej i komfortowej obsługi dostosowanej do potrzeb klienta.
        </p>
      </section>
      <section className="container">
        <h2 className="sectionTitle">Usługi księgowe</h2>
        <div className={styles.contentBox}>
          <Image src={offer1Img} alt="oferta" className={styles.img} />
          <div className={styles.textBox}>
            <ul className={styles.list}>
              <li>
                prowadzenie pełnej księgowości dla spółek oraz przedsiębiorstw,
              </li>
              <li>
                kompleksowa obsługa finansowo-księgowa działalności
                gospodarczych,
              </li>
              <li>
                prowadzenie ksiąg handlowych zgodnie z obowiązującymi
                przepisami,
              </li>
              <li>prowadzenie rejestrów VAT oraz ewidencji księgowych,</li>
              <li>przygotowywanie deklaracji podatkowych PIT, CIT i VAT,</li>
              <li>
                sporządzanie sprawozdań finansowych oraz zestawień księgowych,
              </li>
              <li>
                kontrola dokumentów księgowych i bieżąca analiza rozliczeń,
              </li>
              <li>reprezentowanie klienta przed urzędami oraz instytucjami.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="sectionTitle">Usługi kadrowo-płacowe</h2>
        <div className={styles.contentBox}>
          <Image src={offer2Img} alt="oferta" className={styles.img} />
          <div className={styles.textBox}>
            <ul className={styles.list}>
              <li>kompleksowa obsługa kadrowo-płacowa,</li>
              <li>sporządzanie list płac oraz dokumentacji pracowniczej,</li>
              <li>przygotowywanie umów o pracę oraz umów cywilnoprawnych,</li>
              <li>rozliczenia z Zakładem Ubezpieczeń Społecznych,</li>
              <li>prowadzenie dokumentacji pracowniczej,</li>
              <li>zgłoszenia i wyrejestrowania pracowników,</li>
              <li>obsługa urlopów oraz zwolnień lekarskich.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container">
        <h2 className="sectionTitle">Obsługa przedsiębiorców</h2>
        <div className={styles.contentBox}>
          <Image src={offer3Img} alt="oferta" className={styles.img} />
          <div className={styles.textBox}>
            <ul className={styles.list}>
              <li>pomoc przy zakładaniu działalności gospodarczej,</li>
              <li>wsparcie dla nowych przedsiębiorców,</li>
              <li>
                możliwość współpracy online oraz zdalnego przekazywania
                dokumentów,
              </li>
              <li>
                stały kontakt i bieżące wsparcie w codziennych sprawach
                firmowych.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
