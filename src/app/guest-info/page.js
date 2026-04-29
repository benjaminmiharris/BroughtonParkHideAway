import { Spinnaker } from "next/font/google";
import styles from "./guest-info.module.css";

const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

export const metadata = {
  title: "Instructions for Guests — Broughton Park Hideaway",
  robots: "noindex",
};

export default function GuestInstructions() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 style={spinnaker.style} className={styles.title}>
            Broughton Park Hideaway
          </h1>
          <div className={styles.divider} />
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Instructions for Guests</h2>
          <p className={styles.intro}>Dear Guest,</p>
          <p className={styles.body}>
            Welcome to the hideaway and we would kindly request that you treat it as you
            would your own home. It is Kosher and would ask that you please keep it that way.
          </p>
          <p className={styles.body}>Would you please take a few moments to note the following —</p>

          <div className={styles.highlight}>
            <p><strong>Contact number:</strong> Josh — 07973 362985</p>
            <p><strong>WiFi code:</strong> 'Vodafone Guest' — 2aworthington!</p>
          </div>

          <ul className={styles.list}>
            <li>Fridge/freezer is Shabbos friendly</li>
            <li>If you are unsure how to use something, please contact Josh</li>
            <li>Please use the bedroom wardrobe for your clothing etc.</li>
            <li>The storage sections under the beds are <em>not</em> for use — the lifting mechanism is fairly delicate and easily broken</li>
            <li>Please remove fake tans etc. before using bedding</li>
            <li>Please take care of your key</li>
            <li>The following are <strong>not allowed</strong> — parties, unregistered guests, smoking, pets, use of illegal substances</li>
            <li>Please guard against excessive noise so as not to disturb neighbours</li>
            <li>Please switch off the electric radiator when you leave</li>
            <li>Please park on Park Street unless arranged otherwise</li>
            <li>Please remove your trash — the bins are located on the other side of the main house</li>
            <li>Please use nothing but toilet paper when flushing the toilet</li>
            <li>Please lock door when you go out</li>
            <li>Please report any breakages/damages to Josh</li>
          </ul>

          <p className={styles.body}>
            We thank you for your cooperation and for being our guests, and hope you enjoy your stay.
          </p>
        </section>
      </div>
    </div>
  );
}
