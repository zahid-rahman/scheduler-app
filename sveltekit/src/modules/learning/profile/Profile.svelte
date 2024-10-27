<script>
	import { goto } from '$app/navigation';

	function handleClick() {
		console.log('clicked');
		goto('/about');
	}
</script>

<div>
	<h2>Home page</h2>
	<h1 class="text-3xl font-bold underline">
		Hello world!
	  </h1>
	  
	<button on:click={handleClick}>go to about page</button>

	<p>
		Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur id nihil consectetur
		nesciunt vero esse provident modi natus fugiat quasi. Harum quod soluta, earum saepe aliquam
		architecto magnam itaque molestias. Deleniti debitis voluptatibus atque eius tempore quasi
		molestias consequuntur sapiente nulla accusantium, magnam necessitatibus recusandae aliquam
		nobis nam ipsum, reiciendis voluptatum nesciunt facilis odit odio amet. Sit voluptate suscipit
		labore, iusto magnam corrupti veritatis temporibus error explicabo consequuntur, animi earum
		quas neque tempore nesciunt, in culpa necessitatibus? Autem sed ipsa recusandae! Totam fugit,
		recusandae quae velit omnis, commodi itaque facilis perferendis eligendi quo exercitationem quas
		rem accusamus ipsa molestiae eius nesciunt tenetur consectetur suscipit culpa, laborum eveniet
		aliquid? Quam sunt non natus iure dolorum omnis, atque exercitationem. Corrupti qui, quod, ex
		aliquam corporis, dicta iusto deleniti quisquam possimus rerum officia facilis debitis sit autem
		odio asperiores ad cupiditate. Dolore nam accusamus labore animi officia quaerat, fugit aut
		minima aspernatur, magni iusto molestiae eum libero veniam consequatur cum nemo obcaecati. Odio,
		quidem ipsam eaque reiciendis, laboriosam eligendi nesciunt quis reprehenderit, magnam nostrum
		a. Deserunt tempore libero mollitia, officiis cum sed quidem nostrum tempora ipsum quo iure
		error minima sit quasi architecto voluptas provident eos optio culpa iste quia esse natus
		repudiandae!
	</p>
</div>
