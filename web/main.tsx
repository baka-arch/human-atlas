import {createRoot} from 'react-dom/client';
import Home from '../app/page';
import '../app/globals.css';

// Register the offline study shell only in production builds, so the
// service worker never interferes with Vite HMR in development.
const IS_PROD=(import.meta as{env?:{PROD?:boolean}}).env?.PROD;
if (IS_PROD && 'serviceWorker' in navigator) {
  addEventListener('load', () => { navigator.serviceWorker.register('/sw.js').catch(() => {}); });
}

createRoot(document.getElementById('root')!).render(<Home/>);
