<template>
	<header
		class="flex items-center border-1 border-gray-200 pl-6 text-xl bg-white bg-opacity-100 shadow font-extrabold"
		id="header"
	>
		<div>
			<ul>
				<li><router-link to="/">Inicio</router-link></li>
				<li><router-link to="/about">Cómo funciona?</router-link></li>
			</ul>
		</div>
	</header>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');

header {
	font-family: 'Poppins', sans-serif;
	height: var(--header-height);
}

ul {
	display: flex;
	justify-content: space-between;
}

li {
	margin-right: 35px;
}
</style>
