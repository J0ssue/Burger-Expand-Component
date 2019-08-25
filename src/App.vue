<style lang="scss" scoped>
	@mixin centerPosition($position) {
		position: $position;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.navigation {
		font-family: helvetica;
		&__checkbox {
			display: none;
		}
		&__btn {
			width: 7rem;
			right: 6rem;
			top: 6rem;
			background-color: white;
			height: 7rem;
			z-index: 2000;
			position: fixed;
			border-radius: 50%;
		}
		&__bg {
			top: 6.5rem;
			right: 6.5rem;
			width: 6rem;
			height: 6rem;
			z-index: 1000;
			position: fixed;
			border-radius: 50%;
			background-image: radial-gradient(#f8a376, coral);

			transform: scale(80);
		}
		&__nav {
			height: 100vh;
			width: 100%;
			position: fixed;
			top: 0;
			right: 0;
			z-index: 3000;
		}
		&__list {
			position: absolute;
			@include centerPosition(absolute);
			list-style: none;
			text-align: center;
		}
		&__item {
			margin: 1rem;
		}
		// LINKS: style & hover behavior.
		&__link {
			&:link,
			&:visited {
				display: inline-block;
				font-size: 1.7rem;
				font-weight: 300;
				padding: 0.2rem 1.2rem;
				color: white;
				text-decoration: none;
				text-transform: uppercase;
				background-image: linear-gradient(
					120deg,
					transparent 0%,
					transparent 50%,
					white 50%
				);
				background-size: 220%;
				transition: all 0.4s;
				span {
					display: inline-block;
					margin-right: 1rem;
				}
			}
			&:hover,
			&:active {
				background-position: 100%;
				color: coral;
				transform: translateX(1rem);
			}
		}
	}
</style>

<template>
	<div id="app">
		<div class="navigation">
			<input type="checkbox" class="navigation__checkbox" id="nav-toggle" />
			<label for="nav-toggle" class="navigation__btn">menu</label>

			<div class="navigation__bg">&nbsp;</div>

			<nav class="navigation__nav">
				<ul class="navigation__list">
					<li class="navigation__item">
						<a href="#" class="navigation__link"><span>01</span>About Juicee</a>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__link"
							><span>02</span>Your benefits</a
						>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__link"
							><span>03</span>Your benefits</a
						>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__link"
							><span>04</span>Popular Websites</a
						>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__link"><span>05</span>Projects</a>
					</li>
					<li class="navigation__item">
						<a href="#" class="navigation__link"><span>06</span>Staff</a>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</template>

<script>
	export default {
		name: "app"
	};
</script>
