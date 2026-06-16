import Image from "next/image";
import styles from "./HomePage.module.css";
import heroImg from "../../public/hero.jpg";
import aboutImg from "../../public/about.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Biuro Rachunkowe Sierpc | Anna Niemczewska – Usługi Księgowe i Kadrowe",
  description:
    "Profesjonalne biuro rachunkowe w Sierpcu i okolicach. Kompleksowa obsługa księgowa, kadrowo-płacowa i podatkowa dla firm. Anna Niemczewska, Rachocin k. Sierpca.",
  alternates: {
    canonical: "https://biurorachunkowe-niemczewska.pl",
  },
};

export default function Home() {
  return (
    <>
      <section className="container">
        <h2 className="sectionTitle">Wsparcie w prowadzeniu firmy</h2>
        <div className={styles.contentBox}>
          <div className={styles.textBox}>
            <p className={styles.subtitle}>Przedsiębiorco!</p>
            <p className={styles.text}>
              Prowadzenie firmy to nie tylko rozwój i decyzje biznesowe, ale
              także obowiązki księgowe i podatkowe, które wymagają czasu,
              dokładności i znajomości przepisów. Możesz jednak działać
              spokojniej, mając obok siebie partnera, który zajmie się
              formalnościami.
            </p>
            <p className={styles.subtitle}>
              Dlaczego warto z nami współpracować?
            </p>
            <ul className={styles.list}>
              <li>
                <span className={styles.bold}>
                  Partnerskie podejście do klienta
                </span>{" "}
                - traktujemy współpracę jako relację, a nie jednorazową usługę.
              </li>
              <li>
                <span className={styles.bold}>
                  Przejrzystość i uczciwe zasady
                </span>{" "}
                - bez skomplikowanych zapisów i ukrytych opłat.
              </li>
              <li>
                <span className={styles.bold}>
                  Bezpieczeństwo i zgodność z przepisami
                </span>{" "}
                - dbamy o prawidłowość rozliczeń oraz ochronę Twoich danych na
                każdym etapie współpracy.
              </li>
            </ul>
            <p className={styles.subtitle}>
              Skup się na biznesie — my zajmiemy się resztą
            </p>
            <p className={styles.text}>
              Dobrze prowadzona księgowość to nie tylko obowiązek, ale realne
              wsparcie w rozwoju firmy. Dzięki nam możesz skoncentrować się na
              tym, co najważniejsze — rozwoju swojego biznesu.
            </p>
          </div>
          <Image src={heroImg} alt="wykres" className={styles.chartImg} />
        </div>
      </section>
      <section className="container">
        <h2 className="sectionTitle">O mnie</h2>
        <div className={styles.contentBox}>
          <div className={styles.textBox}>
            <p className={styles.text}>
              Absolwentka Uniwersytetu Mikołaja Kopernika w Toruniu na kierunku
              Finanse i Rachunkowość, posiadająca kilkuletnie doświadczenie
              zawodowe zarówno w biurach rachunkowych, jak i w działach
              księgowości wewnętrznej firm. Zdobyta wiedza oraz praktyczne
              doświadczenie pozwalają na kompleksową i rzetelną obsługę
              przedsiębiorców z różnych branż.
            </p>
            <p className={styles.text}>
              Swoje kwalifikacje zawodowe stale rozwijam poprzez specjalistyczne
              kursy organizowane przez Stowarzyszenie Księgowych w Polsce,
              zakończone uzyskaniem kwalifikacji na poziomie głównego
              księgowego. Kompetencje poszerzam również w obszarze kadr i płac
              poprzez regularne uczestnictwo w szkoleniach kadrowo-płacowych
              oraz bieżące śledzenie zmian w przepisach prawa podatkowego i
              prawa pracy.
            </p>
            <p className={styles.text}>
              W pracy najważniejsze są dla mnie odpowiedzialność, uczciwość oraz
              indywidualne podejście do każdego klienta. Priorytetem jest
              budowanie długotrwałych relacji opartych na zaufaniu, terminowości
              oraz wysokiej jakości świadczonych usług księgowych i kadrowych.
            </p>
          </div>
          <Image src={aboutImg} alt="wykres" className={styles.chartImg} />
        </div>
      </section>
    </>
  );
}
