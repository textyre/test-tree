import { init } from '@rematch/core'
import immerPlugin from '@rematch/immer'
import { fileSystems } from '@features/body'

export const store = init({
	plugins: [immerPlugin()],
	models: {
		fileSystems
	},
})
