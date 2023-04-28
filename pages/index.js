import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa blanditiis maxime velit modi dicta nam sint, ullam soluta veritatis officiis.</p>
        <p className={styles.text}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa blanditiis maxime velit modi dicta nam sint, ullam soluta veritatis officiis.</p>
        <Link className={styles.btn} href="/ninjas">See Ninja Listing</Link>
      </div>
    </>
  )
}
