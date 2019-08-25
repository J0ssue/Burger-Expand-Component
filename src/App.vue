<template>
	<div id="app" style="background-color: #ddd; height: 100%">
		<burger-expand
			:links="links"
			:burger="true"
			:expandColor="colors"
		></burger-expand>
		<!-- :expanColor="['#f8a376', 'coral']" -->
	</div>
</template>

<script>
	export default {
		name: "app",
		data() {
			return {
				colors: ["black", "coral"],
				links: [
					{
						id: 1,
						name: "about juicee"
					},
					{
						id: 2,
						name: "your benefits"
					},
					{
						id: 3,
						name: "popular websites"
					},
					{
						id: 4,
						name: "projects"
					},
					{
						id: 5,
						name: "staff"
					}
				]
			};
		}
	};
</script>
