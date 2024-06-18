<template>
	<div class="menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px" data-kt-menu="true">
		<div class="d-flex flex-column bgi-no-repeat rounded-top">
			<h3 class="fw-semibold px-9 mt-10 mb-6">
				Notifications <span class="fs-8 opacity-75 mx-3  badge badge-circle badge-primary">4</span>
			</h3>
		</div>
		<div class="separator  " />
		<div>
			<div class="tab-pane " role="tabpanel">
				<div class="scroll-y mh-325px my-5 px-8">
					<template v-for="(item, index) in data1" :key="index">
						<div class="d-flex flex-stack py-4">
							<div class="d-flex align-items-center">
								<div class="symbol symbol-35px me-4">
									<span :class="`bg-light-${item.state}`" class="symbol-label">
										<KTIcon :icon-name="item.icon" :icon-class="`text-${item.state} fs-3`" />
									</span>
								</div>
								<div class="mb-0 me-2">
									<a href="#" class="fs-6 text-gray-800 text-hover-primary fw-bold">{{ item.title
										}}</a>
									<div class="text-gray-500 fs-7">
										{{ item.description }}
									</div>
								</div>
							</div>
							<span class="badge badge-light fs-8">{{ item.time }}</span>
						</div>
					</template>
				</div>
			</div>

		</div>
	</div>
</template>

<script lang="ts">
import { getAssetPath, getIllustrationsPath } from '@/core/helpers/assets';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'NotificationsMenu',
	components: {},
	setup() {
		const data1 = [
			{
				title: 'Delivering',
				description: 'Your Order Delievered',
				time: '1 hr',
				icon: 'check',
				state: 'success',
			},
			{
				title: 'Submiting',
				description: 'Your order Submited',
				time: '2 hrs',
				icon: 'cross',
				state: 'danger',
			},
		]



		return {
			data1,
			getIllustrationsPath,
			getAssetPath,
		}
	},
})
</script>
