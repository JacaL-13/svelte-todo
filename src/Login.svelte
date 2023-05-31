<script>
	import Profile from './Profile.svelte'
	import Todos from './Todos.svelte'

	import { auth, googleProvider } from './firebase'
	import { authState } from 'rxfire/auth'
	import { signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

	let user

	authState(auth).subscribe((u) => (user = u))

	function login() {
		// auth.signInWithPopup(googleProvider)

		signInWithPopup(auth, googleProvider)
			.then((auth) => console.log(auth))
			.catch((error) => console.log(error))
	}
	//
</script>

<section>
	{#if user}
		<Profile {user} />
		<button on:click={() => auth.signOut()} class="button">Logout</button>
		<hr>
		<Todos uid={user.uid} />
	{:else}
		<button on:click={login} class="button">Sign in with Google</button>
	{/if}
</section>

<style>
	section {
		background: rgb(235, 235, 235);
		padding: 20px;
	}
</style>