<template>
	<div>
		<FaqQuestion />
	</div>
	<div>
		<ContactForm />
	</div>

	<!--  phone and location -->
	<div class="d-flex flex-row ">
		<div class=" col-lg-6 my-5">
			<div class="card mx-2">
				<div class="card-body d-flex flex-column align-content-between align-items-center">
					<div class="mt-5 text-center">
						<KTIcon icon-name="phone" icon-class="fs-2x me-4 text-primary " />
					</div>
					<div class="d-block fw-semibold text-start  mt-5 ">
						<span class="text-gray-900 fw-bold d-block fs-3">Let’s Speak</span>
					</div>
					<div class="mt-5">
						<span class="text-gray-500 fw-semibold fs-7">
							1 (833) 597-7538
						</span>
					</div>

				</div>
			</div>
		</div>
		<div class="col-lg-6 my-5 mx-2">
			<div class="card">
				<div class="card-body d-flex flex-column align-content-between align-items-center">
					<div class="mt-5 text-center">
						<KTIcon icon-name="geolocation" icon-class="fs-2x me-4 text-primary " />
					</div>
					<div class="d-block fw-semibold text-start  mt-5 ">
						<span class="text-gray-900 fw-bold d-block fs-3">Our Location</span>
					</div>
					<div class="mt-5">
						<span class="text-gray-500 fw-semibold fs-7">
							Churchill-laan 16 II, 1052 CD, Amsterdam
						</span>
					</div>

				</div>
			</div>
		</div>
	</div>


	<div class="card my-10">
		<div class="card-body d-flex flex-row justify-content-center">
			<div>
				<div class="mx-3 symbol symbol-50px  symbol-fixed position-relative">
					<img :src="getAssetPath('./../../public/media/social-media/facebook.svg')" alt="image">
				</div>
				<div class="mx-3 symbol symbol-50px  symbol-fixed position-relative">
					<img :src="getAssetPath('./../../public/media/social-media/instagram.svg')" alt="image">
				</div>
				<div class="mx-3 symbol symbol-50pxsymbol-fixed position-relative">
					<img :src="getAssetPath('./../../public/media/social-media/Twitter.svg')" alt="image">
				</div>
				<div class="mx-3 symbol symbol-50px  symbol-fixed position-relative">
					<img :src="getAssetPath('./../../public/media/social-media/Telegram.svg')" alt="image">
				</div>
				<div class="mx-3 symbol symbol-50px symbol-fixed position-relative">
					<img :src="getAssetPath('./../../public/media/social-media/Whatsapp.svg')" alt="image">
				</div>
			</div>
		</div>
	</div>

</template>

<script lang="ts">
import ContactForm from '@/components/contactForm/ContactForm.vue';
import FaqQuestion from '@/components/faqQuestions/FaqQuestion.vue';
import { getAssetPath } from '@/core/helpers/assets';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HelpCenter',
	components: { FaqQuestion, ContactForm },
	setup() {
		return {
			getAssetPath
		}
	}
})
</script>
