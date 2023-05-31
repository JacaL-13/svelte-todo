import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
	apiKey: 'AIzaSyDcjMOfWB4EzZWVoAwuQ7MP80ZE_BcqOb8',
	authDomain: 'svelte-todo-d03cb.firebaseapp.com',
	projectId: 'svelte-todo-d03cb',
	storageBucket: 'svelte-todo-d03cb.appspot.com',
	messagingSenderId: '786091613741',
	appId: '1:786091613741:web:dcb5a40ef0200de533e2a4',
	measurementId: 'G-DVKWKN4ZM'
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
