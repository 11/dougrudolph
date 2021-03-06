import 'views/view-homepage';
import 'views/view-about';
import 'views/view-contact';

import 'views/blogs/view-particle-net';
import 'views/blogs/view-installing-chunkwm';
import 'views/blogs/view-vimrc-starter-kit';
import 'views/blogs/view-dna-helix';
import 'views/blogs/view-oscillations';
import 'views/blogs/view-just-concentrate';


/*
 * TODO: figure out how to make this work
 * Purpose: wait to load files when requested from the router
 *   - prevents importing/loading all website routes on startup
 */
// async function lazyLoad(viewFilepath) {
//   await import (viewFilepath);
// }


export const ROUTING_TABLE = [
  /****** TOP LEVEL ROUTES: *****/
  { path: '/', component: 'view-homepage' },
  { path: '/about', component: 'view-about' },
  { path: '/contact', component: 'view-contact' },


  /****** BLOG ROUTES ******/
  // Tutorials
  { path: '/installing-chunkwm', component: 'view-installing-chunkwm' },
  { path: '/vimrc-starter-kit', component: 'view-vimrc-starter-kit' },

  // Animations
  { path: '/particle-net', component: 'view-particle-net' },
  { path: '/dna-helix', component: 'view-dna-helix' },
  { path: '/oscillations', component: 'view-oscillations' },

  // Articles
  { path: '/just-concentrate', component: 'view-just-concentrate' },
];