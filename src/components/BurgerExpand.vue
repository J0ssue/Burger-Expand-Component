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
			width: 70px;
			right: 60px;
			top: 60px;
			background-color: white;
			height: 70px;
			z-index: 3000;
			position: fixed;
			border-radius: 50%;
			box-shadow: 0 0.7rem 2rem rgba(black, 0.1);
			text-align: center;
			&:hover {
				cursor: pointer;
			}
		}
		&__bg {
			top: 65px;
			right: 65px;
			width: 60px;
			height: 60px;
			z-index: 1000;
			position: fixed;
			border-radius: 50%;
			// background-image: radial-gradient(#f8a376, coral);
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
			position: relative;
			margin-top: 35px;
			&,
			&::before,
			&::after {
				width: 30px;
				height: 2px;
				background-color: #333;
				display: inline-block;
				transition: all 0.2s;
			}

			&::before,
			&::after {
				content: "";
				position: absolute;
				left: 0;
			}
			&::before {
				top: -8px;
			}
			&::after {
				top: 8px;
			}
		}

		// FUNCTIONALITY
		&__btn:hover &__icon::before {
			top: -10px;
		}

		&__btn:hover &__icon::after {
			top: 10px;
		}

		&__checkbox:checked + &__btn &__icon {
			background-color: transparent;
		}
		&__checkbox:checked + &__btn &__icon::before {
			top: 0;
			transform: rotate(135deg);
		}
		&__checkbox:checked + &__btn &__icon::after {
			top: 0;
			transform: rotate(-135deg);
		}
	}
</style>

<template>
	<div class="navigation">
		<input type="checkbox" class="navigation__checkbox" id="nav-toggle" />
		<label for="nav-toggle" class="navigation__btn" v-if="burger">
			<span class="navigation__icon">&nbsp;</span>
		</label>

		<div class="navigation__bg" ref="bg">&nbsp;</div>

		<nav class="navigation__nav">
			<ul class="navigation__list">
				<li class="navigation__item" v-for="link in links" :key="link.id">
					<a href="#" class="navigation__link"
						><span>{{ link.id }}</span
						>{{ link.name }}</a
					>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	export default {
		name: "BurgerExpand",
		props: {
			links: {
				type: Array,
				required: true
			},
			burger: {
				type: Boolean,
				default: true
			},
			expandColor: {
				type: Array,
				required: true
			}
		},
		mounted() {
			let bg = this.$refs.bg;
			bg.style.backgroundImage = `radial-gradient(${this.expandColor[0]}, ${
				this.expandColor[1]
			})`;
		}
	};
</script>
