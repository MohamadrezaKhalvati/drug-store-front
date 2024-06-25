<template>
	<div class="dataTables_wrapper dt-bootstrap4 no-footer">
		<TableContent :header="header" :data="dataToDisplay" :checkboxEnabled="checkboxEnabled"
			:checkboxLabel="checkboxLabel" :empty-table-text="emptyTableText" :sort-label="sortLabel"
			:sort-order="sortOrder" :loading="loading" @on-items-select="onItemSelect" @on-sort="onSort">
			<template v-for="(_, name) in $slots" #[name]="{ row: item }">
				<slot :name="name" :row="item" />
			</template>
		</TableContent>

	</div>
</template>

<script lang="ts">
import type { Sort } from '@/components/kt-datatable/table-partials/models';
import TableContent from '@/components/kt-datatable/table-partials/table-content/TableContent.vue';
import { computed, defineComponent, ref, watch } from 'vue';

export default defineComponent({
	name: 'KtDatatable',
	components: {
		TableContent,
	},
	props: {
		header: { type: Array, required: true },
		data: { type: Array, required: true },
		itemsPerPage: { type: Number, default: 10 },
		itemsPerPageDropdownEnabled: {
			type: Boolean,
			required: false,
			default: true,
		},
		checkboxEnabled: { type: Boolean, required: false, default: false },
		checkboxLabel: { type: String, required: false, default: 'id' },
		total: { type: Number, required: false, default: 0 },
		loading: { type: Boolean, required: false, default: false },
		sortLabel: { type: String, required: false, default: null },
		sortOrder: {
			type: String as () => 'asc' | 'desc',
			required: false,
			default: 'asc',
		},
		emptyTableText: { type: String, required: false, default: 'No data found' },
		currentPage: { type: Number, required: false, default: 1 },
	},
	emits: [
		'page-change',
		'on-sort',
		'on-items-select',
		'on-items-per-page-change',
	],
	setup(props, { emit }) {
		const currentPage = ref(props.currentPage)
		const itemsInTable = ref<number>(props.itemsPerPage)

		watch(
			() => itemsInTable.value,
			(val) => {
				currentPage.value = 1
				emit('on-items-per-page-change', val)
			}
		)

		const pageChange = (page: number) => {
			currentPage.value = page
			emit('page-change', page)
		}

		const dataToDisplay = computed(() => {
			if (props.data) {
				if (props.data.length <= itemsInTable.value) {
					return props.data
				} else {
					let sliceFrom = (currentPage.value - 1) * itemsInTable.value
					return props.data.slice(sliceFrom, sliceFrom + itemsInTable.value)
				}
			}
			return []
		})

		const totalItems = computed(() => {
			if (props.data) {
				if (props.data.length <= itemsInTable.value) {
					return props.total
				} else {
					return props.data.length
				}
			}
			return 0
		})

		function onSort(sort: Sort) {
			emit('on-sort', sort)
		}


		function onItemSelect(selectedItems: any) {
			emit('on-items-select', selectedItems)
		}

		return {
			pageChange,
			dataToDisplay,
			onSort,
			onItemSelect,
			itemsInTable,
			totalItems,
		}
	},
})
</script>
