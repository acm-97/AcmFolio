import NProgress from 'nprogress';
import Router from 'next/router';

let timer: any;
let state: 'loading' | 'stop';
let activeRequests = 0;
const delay = 250;

function load() {
  if (state === 'loading') {
    return;
  }

  state = 'loading';

  timer = setTimeout(() => {
    NProgress.start();
  }, delay); // only show progress bar if it takes longer than the delay
}

function stop() {
  if (activeRequests > 0) {
    return;
  }

  state = 'stop';

  clearTimeout(timer);
  NProgress.done();
}

Router.events.on('routeChangeStart', load);
Router.events.on('routeChangeComplete', stop);
Router.events.on('routeChangeError', stop);

const Empty = () => null;

export default Empty;
