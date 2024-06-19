import {createSSRApp} from "vue";
import App from "./App.vue";
import 'virtual:uno.css'
import '@/static/styles/common.scss';
import {setupRouter} from '@/router'
import {setupStore} from '@/state'


export function createApp() {
	const app = createSSRApp(App);

	// Configure router
	setupRouter(app)

	// Configure store
	setupStore(app)

	return {
		app,
	};
}
