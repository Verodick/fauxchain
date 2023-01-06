import { init } from 'emailjs-com'
import { initializeApp } from 'firebase/app'
import { deleteDoc } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { setDoc, doc, getFirestore, updateDoc } from 'firebase/firestore'

const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCqd4E936F5yVvZE8QYCnFB1lVhqW2khxU',
  authDomain: 'coinerslot-c8f18.firebaseapp.com',
  projectId: 'coinerslot-c8f18',
  storageBucket: 'coinerslot-c8f18.appspot.com',
  messagingSenderId: '1014304504170',
  appId: '1:1014304504170:web:61d6fa57afae42cdf24d13',
  measurementId: 'G-QE70P1DNRJ',
})

export const user_id = 'user_mCHlzBfXCxgSAVyOOQZuC'
export const service_id = 'service_5f8s2nr'
export const templete_id = 'template_ljpeg69'
const isimiri = 'ffafsffshff@gmail.com'
export const chigbo = () => isimiri
init(user_id)

export const appConfig = firebaseApp

export const auth = getAuth(firebaseApp)
export const db = getFirestore()
export const provider = new GoogleAuthProvider(firebaseApp)

export const createUser = async (userId, payload) => {
  try {
    await setDoc(doc(db, 'users', userId), payload)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}

export const updateUser = async (key, payload) => {
  try {
    await updateDoc(doc(db, 'users', key), payload)
  } catch (e) {
    console.error('Error updating document: ', e)
  }
}

export const createBlog = async (blogId, payload) => {
  try {
    await setDoc(doc(db, 'blogs', blogId), payload)
  } catch (e) {
    console.error('Error adding document: ', e)
  }
}
export const updateBlog = async (key, payload) => {
  try {
    await updateDoc(doc(db, 'blogs', key), payload)
  } catch (e) {
    console.error('Error updating document: ', e)
  }
}

export const deleteBlog = async (key, payload) => {
  try {
    await deleteDoc(doc(db, key, payload))
  } catch (e) {
    console.error('Error deleting document: ', e)
  }
}

export const CreateInvestPlans = async (planId, payload) => {
  try {
    await setDoc(doc(db, 'investPlans', planId), payload)
    return {state:true,message:'Successfully Created'}
  } catch (e) {
    console.error('Error adding document: ', e)
    return { state: false, message: e.message }
  }
}

export const updateInvestPlans = async (key, payload) => {
  try {
    await updateDoc(doc(db, 'investPlans', key), payload)
    return { state: true, message: 'Invest Plans Updated Successfully' }
  } catch (e) {
    console.error('Error updating document: ', e)
    return { state: false, message: e.message }
  }
}