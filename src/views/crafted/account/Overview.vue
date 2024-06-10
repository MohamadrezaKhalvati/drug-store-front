<template>

	<div id="kt_profile_details_view" class="card mb-5 mb-xl-10">

		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Profile Details
				</h3>
			</div>
			<router-link to="/account/settings" class="btn btn-primary align-self-center">
				Edit Profile
			</router-link>
		</div>
		<div class="card-body p-9">
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">Full Name</label>
				<div class="col-lg-8">
					<span class="fw-bold fs-6 text-gray-900">Max Smith</span>
				</div>
			</div>
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">Company</label>
				<div class="col-lg-8 fv-row">
					<span class="fw-semibold fs-6">Keenthemes</span>
				</div>
			</div>
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">
					Contact Phone
					<i v-tooltip class="fas fa-exclamation-circle ms-1 fs-7" title="Phone number must be active" />
				</label>
				<div class="col-lg-8 d-flex align-items-center">
					<span class="fw-bold fs-6 me-2">044 3276 454 935</span>
					<span class="badge badge-success">Verified</span>
				</div>
			</div>
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">Company Site</label>
				<div class="col-lg-8">
					<a href="#" class="fw-semibold fs-6 text-dark text-hover-primary">keenthemes.com</a>
				</div>
			</div>
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">
					Country
					<i v-tooltip class="fas fa-exclamation-circle ms-1 fs-7" title="Country of origination" />
				</label>
				<div class="col-lg-8">
					<span class="fw-bold fs-6 text-gray-900">Germany</span>
				</div>
			</div>
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">Communication</label>
				<div class="col-lg-8">
					<span class="fw-bold fs-6 text-gray-900">Email, Phone</span>
				</div>
			</div>
			<div class="row mb-10">
				<label class="col-lg-4 fw-semibold text-muted">Allow Changes</label>
				<div class="col-lg-8">
					<span class="fw-semibold fs-6">Yes</span>
				</div>
			</div>
			<div class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
				<KTIcon icon-name="information-5" icon-class="fs-2tx text-warning me-4" />
				<div class="d-flex flex-stack flex-grow-1">
					<div class="fw-semibold">
						<h4 class="text-gray-800 fw-bold">
							We need your attention!
						</h4>
						<div class="fs-6 text-gray-600">
							Your payment was declined. To start using tools, please
							<a class="fw-bold" href="#">Add Payment Method</a>.
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="row gy-10 gx-xl-10">
		<div class="col-xl-6">
			<AverageDailySales widget-classes="card-xxl-stretch mb-5 mb-xl-10" />
		</div>
		<div class="col-xl-6">
			<KTListWidget1 widget-classes="card-xxl-stretch mb-5 mb-xl-10'" />
		</div>
	</div>
	<div class="row gy-10 gx-xl-10">
		<div class="col-xl-6">
			<KTListWidget5 widget-classes="card-xxl-stretch mb-5 mb-xl-10" />
		</div>
		<div class="col-xl-6">
			<KTTableWidget5 widget-classes="card-xxl-stretch mb-5 mb-xl-10" />
		</div>
	</div>
</template>

<script lang="ts">
import AverageDailySales from '@/components/widgets/charts/AverageDailySales.vue'
import KTListWidget1 from '@/components/widgets/lists/Widget1.vue'
import KTListWidget5 from '@/components/widgets/lists/Widget5.vue'
import KTTableWidget5 from '@/components/widgets/tables/Widget5.vue'
import { getAssetPath } from '@/core/helpers/assets'
import { defineComponent } from 'vue'

export default defineComponent({
	name: 'AccountOverview',
	components: {
		AverageDailySales,
		KTListWidget5,
		KTTableWidget5,
		KTListWidget1,
	},
	setup() {
		return {
			getAssetPath,
		}
	},
})
</script>
