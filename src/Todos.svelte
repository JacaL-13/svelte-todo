<script>
	import TodoItem from './TodoItem.svelte'
	import { db } from './firebase'
	import { collection, query, where, onSnapshot, doc, addDoc, updateDoc, deleteDoc, orderBy } from 'firebase/firestore'
	import { collectionData } from 'rxfire/firestore'
	import { startWith } from 'rxjs/operators'

	export let uid

	let text = ''

	const q = query(collection(db, 'todos'), where('uid', '==', uid), orderBy('created'))

	const todos = collectionData(q, { idField: 'id' }).pipe(startWith([]))

	function add() {
		if (text) {
			console.log(text)
			addDoc(collection(db, 'todos'), { uid, text, complete: false, created: Date.now() })
			text = ''
		}
	}

	function DocRef(id) {
		return doc(db, 'todos', id)
	}

	function updateStatus(event) {
		console.log(event)
		const { id, newStatus } = event.detail
		updateDoc(DocRef(id), { complete: newStatus })
	}

	function removeItem(event) {
		const { id } = event.detail
		// collection(db, 'todos').doc(id).delete
		deleteDoc(DocRef(id))
	}
</script>

<main>
	<ul>
		{#each $todos as todo}
			<TodoItem {...todo} on:remove={removeItem} on:toggle={updateStatus} />
		{/each}
	</ul>

	<hr />
	<form on:submit|preventDefault={add}>
		<input bind:value={text} />

		<button>Add Task</button>
	</form>
</main>
