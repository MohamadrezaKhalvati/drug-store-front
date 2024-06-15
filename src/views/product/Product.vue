<template>
	<div>
		<ProductList widgetClasses="mb-5 mb-xl-8" />
	</div>
</template>

<script>
import ProductList from '@/components/productList/ProductList.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'Product',
	components: { ProductList },
	setup() {
		return {}
	}
})
</script>
