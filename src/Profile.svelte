<script>
	export let user
</script>

<main>
	<h3>Hi {user.displayName}</h3>
	
	<img src={user.photoURL} width="100" alt="user avatar">
</main>