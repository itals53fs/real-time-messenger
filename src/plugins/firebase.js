// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

export const firebaseApp  = firebase.initializeApp({
/*     apiKey: process.env.VUE_APP_KEY,
    authDomain: process.env.VUE_APP_AUTH_DOMAIN,
    databaseURL: process.env.VUE_APP_DATABASE_URL,
    projectId: process.env.VUE_APP_PROJECT_ID,
    storageBucket: process.env.VUE_APP_STORAGEBUCKRT,
    messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID, */
    apiKey: "AIzaSyClXQcCFdG_tLe_CSx8aXjspDdD0ckAhd0",
    authDomain: "realtime-messenger-f3bfc.firebaseapp.com",
    databaseURL: "https://realtime-messenger-f3bfc-default-rtdb.firebaseio.com",
    projectId: "realtime-messenger-f3bfc",
    storageBucket: "realtime-messenger-f3bfc.appspot.com",
    messagingSenderId: "948997945417",
    appId: "1:948997945417:web:f674ceb395b29cfe58a798",
    measurementId: "G-5TG09FL8MM"
})
export default function install(Vue){
    Object.defineProperty(Vue.prototype, "$firebase", {
        get(){
            return firebaseApp
        }
    })
}