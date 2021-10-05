<template>
	<footer class="flex items-center justify-center" id="footer">
		<div class="footer-content">
			<span>
				<img
					width="12px"
					src="https://s.w.org/images/core/emoji/13.0.1/svg/270f.svg"
					alt="✏"
				/>
			</span>
			<span>Developed with</span>
			<span>
				<img
					width="12px"
					src="https://s.w.org/images/core/emoji/13.0.1/svg/2764.svg"
					alt="❤"
				/>
			</span>
			<span>by</span>
			<a href="https://gisehaag.com/projects" target="_blank">GisehaaG</a>
			<span>
				<img
					width="12px"
					src="https://s.w.org/images/core/emoji/13.0.1/svg/2b50.svg"
					alt="⭐"
				/>
			</span>
			<span>{{ year }}</span>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'GhFooter',
	data() {
		return {
			year: 2021,
		};
	},
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

$primary-color: #ffb400;

footer {
	font-family: 'Montserrat', sans-serif;
	background-color: #fafafa;
	width: 100%;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 999;
	height: var(--footer-height);

	img {
		display: inline-block;
	}

	.footer-content {
		font-size: 12px;
		color: #464646;
	}

	.footer-content a {
		color: #333;
		text-decoration: none;

		&:hover {
			color: $primary-color;
		}
	}

	.footer-content span {
		padding: 0 5px;
		font-style: normal;
	}
}
</style>
