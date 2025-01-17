import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from '@/pages/Home'
import '@/app/assets/styles/index.scss'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<Home />
		</Provider>
	</React.StrictMode>
)
