import { Spinnaker } from "next/font/google";
import styles from "./guest-info.module.css";

const spinnaker = Spinnaker({ subsets: ["latin-ext"], weight: ["400"] });

export const metadata = {
  title: "Guest Information — Broughton Park Hideaway",
  robots: "noindex",
};

export default function GuestInfo() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 style={spinnaker.style} className={styles.title}>
            Broughton Park Hideaway
          </h1>
          <div className={styles.divider} />
        </header>

        {/* Instructions for Guests */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Instructions for Guests</h2>
          <p className={styles.intro}>
            Dear Guest,
          </p>
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

        <div className={styles.divider} />

        {/* Notes for Guests */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Notes for Guests</h2>
          <ol className={styles.numberedList}>
            <li>Hot water tap is only at sink in main room (not Shabbos Friendly)</li>
            <li>Shower is electric and carries on for a few seconds after you close tap</li>
            <li>Fridge is built-in next to sink</li>
            <li>There is no washing machine, but there is a retractable washing line in shower</li>
            <li>There is a Shabbos kettle in the cupboard</li>
            <li>The fuse board is located in upper cupboard adjacent to front door</li>
            <li>Plastic crockery and cutlery can be found in cupboard above sink</li>
            <li>Bedside lights can be used on Shabbos using the sliding mechanism over the led light</li>
            <li>The rooflight can be manually opened if required, and is fitted with a roller blind</li>
            <li>WiFi code — 'vodafone guest' — 2aworthington!</li>
            <li>Amazon echo speaker (near uplighter) is activated by saying 'alexa' followed by request</li>
            <li>Mobile phone leads have been provided and are plugged-in next to bed</li>
            <li>Both TVs and the ceiling fan are operated using the provided remotes</li>
            <li>There is no Shabbos clock, but please feel free to leave on the lights you require</li>
            <li>The electric wall radiator can be set to temperature. The building is well insulated, so 19 or 20°C should prove a comfortable setting</li>
            <li>A spare key is provided; please ensure main key always remains in exterior keysafe</li>
            <li>The roof of the mezzanine floor is fairly low, but allows for sitting in the (sofa) chairs, which convert into beds when required</li>
            <li>The (frosted) windows can be opened if required, and have roller blinds</li>
            <li>Towels and bedding have been provided. Please contact Josh if any more required</li>
            <li>Please use only tealights for Shabbos candles and place them on metal or china plate, not on any surfaces</li>
            <li>The towel rail is fitted to a heater that can be operated using the small remote on bathroom windowsill</li>
            <li>Soaps, toilet paper etc can be found under bathroom sink</li>
            <li>Uplighters are operated using touch buttons on the stems</li>
            <li>Travel cot available</li>
          </ol>
        </section>
      </div>
    </div>
  );
}
