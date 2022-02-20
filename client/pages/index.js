import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'
import Modal from 'react-modal';
import Rates from '../components/rates'

Modal.setAppElement('#__next');

const currensies = ["item 1", "item 2", "item 3", "item 4", "item 5"]

export default function Home() {
  const router = useRouter();
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <h1>HOME</h1>
    <hr/>
    <div className="py-[20px]">
      {currensies.map((currency)=>(
        <Link 
          key={currency}
          href={`/?currencyCode=${currency}`}
          as={`/currency/${currency}`}
        >
          <a>
            <h2 className="text-blue-500 py-[5px]">{currency}</h2>
          </a>
        </Link>
      ))}
    </div>
    </div>
    <Modal 
      isOpen={!!router.query.currencyCode}
      onRequestClose={() => router.push('/')}
    >
      <Rates currencyCode={router.query.currencyCode}/>
    </Modal>
    </>
  )
}