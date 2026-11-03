import Badge from './components/Badge'
import Button from './components/Button'
import Card from './components/Card'
import * as styles from './App.css'
import { themeClass } from './styles/tokens.css'

function App() {
  return (
    <div className={`${themeClass} ${styles.page}`}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.brand} href="#top">
            Studio UI
          </a>
          <span className={styles.headerLabel}>Exercise 2</span>
        </div>
      </header>

      <main className={styles.main} id="top">
        <div className={styles.pageIntro}>
          <h1 className={styles.title}>Component library</h1>
          <p className={styles.description}>
            A small collection of reusable React components styled with
            Vanilla Extract.
          </p>
        </div>

        <section aria-labelledby="buttons-heading" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle} id="buttons-heading">
              Buttons
            </h2>
            <p className={styles.sectionDescription}>
              Variants, sizes, and interaction states.
            </p>
          </div>
          <Card className={styles.showcase}>
            <div className={styles.buttonRow}>
              <span className={styles.exampleLabel}>Primary</span>
              <div className={styles.buttonPair}>
                <Button size="small">Small</Button>
                <Button>Large</Button>
              </div>
            </div>
            <div className={styles.buttonRow}>
              <span className={styles.exampleLabel}>Secondary</span>
              <div className={styles.buttonPair}>
                <Button size="small" variant="secondary">
                  Small
                </Button>
                <Button variant="secondary">Large</Button>
              </div>
            </div>
            <div className={styles.buttonRow}>
              <span className={styles.exampleLabel}>Danger</span>
              <div className={styles.buttonPair}>
                <Button size="small" variant="danger">
                  Small
                </Button>
                <Button variant="danger">Large</Button>
              </div>
            </div>
            <div className={styles.buttonRow}>
              <span className={styles.exampleLabel}>Disabled</span>
              <Button disabled>Unavailable</Button>
            </div>
          </Card>
        </section>

        <section aria-labelledby="cards-heading" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle} id="cards-heading">
              Cards
            </h2>
            <p className={styles.sectionDescription}>
              A simple surface for grouping content.
            </p>
          </div>
          <div className={styles.cardGrid}>
            <Card>
              <h3 className={styles.cardTitle}>Getting started</h3>
              <p className={styles.cardDescription}>
                Use a card to group related information and actions.
              </p>
              <Button size="small" variant="secondary">
                Learn more
              </Button>
            </Card>
            <Card>
              <h3 className={styles.cardTitle}>Project status</h3>
              <p className={styles.cardDescription}>
                Compose the card with other reusable components.
              </p>
              <Badge variant="warning">In progress</Badge>
            </Card>
          </div>
        </section>

        <section aria-labelledby="badges-heading" className={styles.section}>
          <div className={styles.sectionHeading}>
            <h2 className={styles.sectionTitle} id="badges-heading">
              Badges
            </h2>
            <p className={styles.sectionDescription}>
              Labels for common statuses.
            </p>
          </div>
          <Card className={styles.badgeShowcase}>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </Card>
        </section>

        <footer className={styles.footer}>
          React · TypeScript · Vanilla Extract
        </footer>
      </main>
    </div>
  )
}

export default App
