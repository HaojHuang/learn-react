// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
//import List from './components/list_keys'
import List from './qcomps/list_keys_id'
import MenuBar from './qcomps/menuBar'
import Gallery from './qcomps/state'
import PersonData from './components/stateObj'
import Form from './qcomps/stuckForm'
import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './components/queueUpdates'
import RequestTracker from './qcomps/shoppingCart'
//import Form from './components/snapshot2'
//import Form from './components/updObjects'
import Scoreboard from './qcomps/updObjectsForm'
export default function Home() {
  return (
    <div className={styles.main}>
        <Form />
    </div>
  )
}
