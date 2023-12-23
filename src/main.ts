import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';

import { initialMock } from '@/mock'

const main = async () => {
  try {
    await initialMock();
  } catch (error) {
    console.error(error)
  } finally {
    createApp(App).mount('#app');
  }
}

main();
