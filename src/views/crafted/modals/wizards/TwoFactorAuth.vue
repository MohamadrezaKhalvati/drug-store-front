<template>
	<KTModalCard title="Two-factor Authentication"
		description="Click on the below buttons to launch <br/>two-factor authentication setup example."
		:image="getIllustrationsPath('4.png')" button-text="Enable Two-factor Authentication"
		modal-id="kt_modal_two_factor_authentication" />

	<KTTwoFactorAuthModal />
</template>

<script lang="ts">
import KTModalCard from '@/components/cards/Card.vue';
import KTTwoFactorAuthModal from '@/components/modals/wizards/TwoFactorAuthModal.vue';
import { getAssetPath, getIllustrationsPath } from '@/core/helpers/assets';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'TwoFactorAuth',
	components: {
		KTModalCard,
		KTTwoFactorAuthModal,
	},
	setup() {
		return {
			getIllustrationsPath,
			getAssetPath,
		}
	},
})
</script>
