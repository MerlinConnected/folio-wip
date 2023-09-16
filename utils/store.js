import { proxy } from 'valtio'

const state = proxy({
	debug: false
})

export { state }
