import 'views/view-homepage';
import 'views/view-about';

import 'views/blogs/view-particle-net';
import 'views/blogs/view-installing-chunkwm';
import 'views/blogs/view-vimrc-starter-kit';


/*
 * TODO: figure out how to make this work
 * Purpose: wait to load files when requested from the router
 *   - prevents importing/loading all website routes on startup
 */
// async function lazyLoad(viewFilepath) {
//   await import (viewFilepath);
// }

export const ROUTING_TABLE = [
  // Top Level Routes:
  { path: '/', component: 'view-homepage' },
  { path: '/about',   component: 'view-about' },
  // { path: '/contact',   component: 'view-contact' },

  // Blog Routes:
  { path: '/blog/installing-chunkwm', component: 'view-installing-chunkwm' },
  { path: '/blog/vimrc-starter-kit', component: 'view-vimrc-starter-kit' },
  { path: '/blog/just-concentrate', component: 'view-just-concentrate' },
  { path: '/blog/particle-net', component: 'view-particle-net' },

];