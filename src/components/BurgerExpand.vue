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
			z-index: 3000;
			position: fixed;
			border-radius: 50%;
			box-shadow: 0 0.7rem 2rem rgba(black, 0.1);
			&:hover {
				cursor: pointer;
			}
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
			transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);
		}
		&__nav {
			height: 100vh;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 2000;

			opacity: 0;
			width: 0;
			// visibility: hidden;
			transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
		}
		&__list {
			position: absolute;
			@include centerPosition(absolute);
			list-style: none;
			text-align: center;
			width: 100%;
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

		// FUNCTIONALITY
		&__checkbox:checked ~ &__bg {
			transform: scale(80);
		}
		&__checkbox:checked ~ &__nav {
			opacity: 1;
			// visibility: visible;
			width: 100%;
		}

		// ICON
		&__icon {
			&,
			&::before,
			&::after {
				width: 30px;
				height: 2px;
				background-color: #333;
			}

			&::before,
			&::after {
				content: "";
			}
		}
	}
</style>

<template>
	<div class="navigation">
		<input type="checkbox" class="navigation__checkbox" id="nav-toggle" />
		<label for="nav-toggle" class="navigation__btn">
			<span class="navigation__icon">&nbsp;</span>
		</label>

		<div class="navigation__bg">&nbsp;</div>

		<nav class="navigation__nav">
			<ul class="navigation__list">
				<li class="navigation__item">
					<a href="#" class="navigation__link"><span>01</span>About Juicee</a>
				</li>
				<li class="navigation__item">
					<a href="#" class="navigation__link"><span>02</span>Your benefits</a>
				</li>
				<li class="navigation__item">
					<a href="#" class="navigation__link"><span>03</span>Your benefits</a>
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
</template>

<script>
	export default {
		name: "BurgerExpand"
	};
</script>
