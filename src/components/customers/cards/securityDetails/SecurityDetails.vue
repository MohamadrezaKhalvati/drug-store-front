<template>
	<div class="card mb-5 mb-xl-10">
		<div class="card-header cursor-pointer">
			<div class="card-title m-0">
				<h3 class="fw-bold m-0">
					Security Details
				</h3>
			</div>

		</div>


		<div class="card-body p-9">
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">Home</label>
				<div class="col-lg-7">
					<span class="fw-bold fs-6 text-gray-900">+1 (555) 123-4567</span>
				</div>
				<div class="col-lg-1">
					<a href="#" class="btn btn-icon btn-active-light-primary w-30px h-30px me-3" data-bs-toggle="modal"
						data-bs-target="#kt_modal_new_card">
						<span data-bs-toggle="tooltip" data-bs-trigger="hover" title="" data-bs-original-title="Edit">
							<KTIcon icon-name="pencil" icon-class="fs-3" />
						</span>
					</a>
				</div>
			</div>
			<div class="row mb-7">
				<label class="col-lg-4 fw-semibold text-muted">Password</label>
				<div class="col-lg-7 fv-row">
					<span class="fw-bold fs-6">***********</span>
				</div>
				<div class="col-lg-1">
					<a href="#" class="btn btn-icon btn-active-light-primary  w-30px h-30px me-3" data-bs-toggle="modal"
						data-bs-target="#kt_modal_new_card">
						<KTIcon icon-name="pencil" icon-class="fs-3" />
					</a>
				</div>
			</div>

		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SecurityDetail',
	props: {
		cardClasses: {
			type: String,
			required: false,
			default: ''
		},
	},
	setup() {

	},

})

</script>
