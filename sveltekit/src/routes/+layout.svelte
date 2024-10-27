<script>
	import '../app.css';
</script>

<header>
	<!-- <h1>Scheduler.io</h1>
    <ul style="background-color: #C2185B; border-radius: 10px;">
        <li style="display: inline-block; padding: 10px"><a style="text-decoration: none; color: #ffffff; text-transform: capitalize" href="/">home</a></li>
        <li style="display: inline-block; padding: 10px"><a style="text-decoration: none; color: #ffffff; text-transform: capitalize" href="/about">about</a></li>
        <li style="display: inline-block; padding: 10px"><a style="text-decoration: none; color: #ffffff; text-transform: capitalize" href="/profile/100">My profile</a></li>
        <li style="display: inline-block; padding: 10px"><a style="text-decoration: none; color: #ffffff; text-transform: capitalize" href="/counter">Counter</a></li>
        <li style="display: inline-block; padding: 10px"><a style="text-decoration: none; color: #ffffff; text-transform: capitalize" href="/input">Input</a></li>
        <li style="display: inline-block; padding: 10px"><a style="text-decoration: none; color: #ffffff; text-transform: capitalize" href="/global-store">Global store</a></li>

        <li style="display: inline-block; padding: 10px"><a style="text-decoration: none; color: #ffffff; text-transform: capitalize" href="/context-api">context api</a></li>
    </ul> -->

	<!-- Tailwind CSS Menu Bar -->
	<nav class="bg-blue-600 text-white px-4 py-3">
		<div class="max-w-7xl mx-auto flex justify-between items-center">
			<!-- Logo Section -->
			<a href="/" class="text-xl font-bold"> Scheduler.io </a>

			<!-- Mobile Menu Button -->
			<button id="menuButton" class="md:hidden flex items-center">
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					></path>
				</svg>
			</button>

			<!-- Menu Links -->
			<div id="menuLinks" class="hidden md:flex md:space-x-6">
				<a href="/" class="hover:bg-blue-700 px-3 py-2 rounded">Home</a>
				<a href="/users" class="hover:bg-blue-700 px-3 py-2 rounded">Users</a>
				<a href="/events" class="hover:bg-blue-700 px-3 py-2 rounded">All events</a>
			</div>
		</div>

		<!-- Mobile Menu Dropdown -->
		<div id="mobileMenu" class="hidden md:hidden bg-blue-600 text-white mt-2 space-y-1 px-2 py-3">
			<a href="/" class="block px-3 py-2 hover:bg-blue-700 rounded">Home</a>
			<a href="/users" class="block px-3 py-2 hover:bg-blue-700 rounded">Users</a>
			<a href="/events" class="block px-3 py-2 hover:bg-blue-700 rounded">All events</a>
		</div>
	</nav>
</header>

<div style="height: 80vh">
	<slot />
	<script>
		const menuButton = document.getElementById('menuButton');
		const mobileMenu = document.getElementById('mobileMenu');

		menuButton.addEventListener('click', () => {
			mobileMenu.classList.toggle('hidden');
		});
	</script>
</div>

<footer>
	<div style="display: block; backgorund-color: #E91E63; width: 100%;">
		<a style="color: #000000; text-decoration: none" href="/">scheduler.io</a>
	</div>
</footer>
