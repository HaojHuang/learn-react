// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Gallery from './components/gallery'
import PackingList from './qcomps/props_item'
import MyComp from './qcomps/firstcomp'
//import Profile from './components/profile'
import Bio from './qcomps/bios'
import TodoList from './qcomps/todos'
//import Profile from './components/profile_props'
import Holder from './components/square'
import Profile from './qcomps/gallery_props'

export default function Home() {
  return (
    <div className={styles.main}>
        < PackingList />
    </div>
  )
}
