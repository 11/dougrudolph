import { LitElement, html } from 'lit-element';
import { BlogStyle } from 'views/blogs/style.js';
import ChunkWMGif from './assets/chunkwm-vid.gif';

import "components/comp-bio";
import "components/comp-link";

class BlogInstallingChunkwm extends LitElement {
  static get styles() {
    return [ BlogStyle ];
  }

  constructor() {
    super();

    document.title = 'Doug Rudolph - Installing ChunkWM';
  }

  render() {
    return html`
      <comp-bio></comp-bio>

      <div class="blog">
        <div class="blog-header">
          <h2> Installing ChunkWM </h2>
          <span>Posted on July 26th, 2018</span>
          <p>
            This blog post goes through the process of downloading a tiling window manager (TWM) on OS X, as well
            as how it can optimize your workflow.
          </p>
          <ol>
            <li><comp-link url="#intro">Introduction</comp-link></li>
            <li><comp-link url="#what-is-chunkwm">What is ChunkWM</comp-link></li>
            <li><comp-link url="#installing-chunkwm"> How do I Install ChunkWM </comp-link></li>
            <li><comp-link url="#installing-skhd">How do I Install SKHD</comp-link></li>
            <li><comp-link url="#closing">Closing</comp-link></li>
          </ol>
        </div>
        <hr/>

        <div class="blog-container">
          <div id="intro">
            <h2> Introduction </h2>
            <p>
              I recently had to start using OS X for work, and as a former Linux user, I felt something missing from my workflow.
              OS X is often thought of as the more capable and professional Linux machine, yet I still miss that ability to personalize
              the user experience to my liking. Sure, Linux is finicky, but having complete control is a privilege that you adjust to.
              So, while I can't use Linux at work, I can cover up its absence with ChunkWM.
            </p>
          </div>
          <div id="what-is-chunkwm">
            <h2> What is ChunkWM </h2>
            <p> So this is ChunkWM: </p>

            <img src="./assets/chunkwm-vid.gif" alt="chunkwm-gif" align="middle" width="640" height="480"/>

            <p>
              ChunkWM is a Window Manager - which is just software that manages the layout of all your windows.
              The most obvious benefit that comes with using ChunkWM is navigation. ChunkWM allows you to move,
              open, close, and navigate to all windows on screen with just your keyboard.
            </p>
          </div>
          <div id="installing-chunkwm">
            <h2> Installing ChunkWM </h2>
            <p>
              Installing ChunkWM is not as simple as I hoped. The one thing you need before hand is
              <code>homebrew</code> - feel free to install that from
              <comp-link url="https://brew.sh/">here</comp-link>. Once <code>homebrew</code> is installed,
              we are going to need to install two pieces of software:
              <comp-link url="https://github.com/koekeishiya/skhd">SKHD</comp-link> and
              <comp-link url="https://github.com/crisidev/homebrew-chunkwm">Homebrew-ChunkWM</comp-link>.
            </p>
            <p>
              Quick overview: <comp-link url="https://github.com/koekeishiya/skhd">SKHD</comp-link> is a piece of software
              that listens to our keyboard inputs, while <comp-link url="https://github.com/crisidev/homebrew-chunkwm">ChunkWM</comp-link>
              is what manages how our windows are laid out. Together, they listen to our keyboard for
              <comp-link url="https://github.com/crisidev/homebrew-chunkwm">ChunkWM</comp-link> commands and relay the commands
              to a selected window.
            </p>
            <p>
              To start, the first thing that we need to do is clone the <comp-link url="https://github.com/crisidev/homebrew-chunkwm">ChunkWM</comp-link>
              repository from GitHub. To do this with <code>homebrew</code>, type out:
            </p>
            <div class="code-block">
    <pre>
    doug@root-user$ brew tap crisidev/homebrew-chunkwm
    </pre>
            </div>

            <p>
              If all goes well when installing, you should see a message that prints something along the lines of:
            </p>

            <div class="code-block">
    <pre>
    Copy the example configuration into your home directory:

        cp /usr/local/opt/chunkwm/share/chunkwm/examples/chunkwmrc ~/.chunkwmrc


    Opening chunkwm will prompt for Accessibility API permissions. After access
    has been granted, the application must be restarted with:

        brew services restart chunkwm


    This has to be done after every update to chunkwm, unless you codesign the
    binary with self-signed certificate before restarting Create code signing
    certificate named “chunkwm-cert” using Keychain Access.app

        codesign -fs “chunkwm-cert” /usr/local/opt/chunkwm/bin/chunkwm


    NOTE: options “--with-logging” and “--with-tmp-logging” are deprecated since now
    chunkwm supports logging through configuration:

        chunkc core::log_file <stdout | stderr | /path/to/file>


    NOTE: plugins folder has been moved to /usr/local/opt/chunkwm/share/chunkwm/plugins
    To have launchd start crisidev/chunkwm/chunkwm now and restart at login:

        brew services start crisidev/chunkwm/chunkwm

    Or, if you don’t want/need a background service you can just run:

        chunkwm
    </pre>
            </div>

            <p>
              That long output explains how to copy the default config file to our home directory, but
              before doing that, we want to make sure ChunkWM downloaded to the right directory.
              To check, try running:
            </p>

            <div class="code-block">
    <pre>
    doug@root-user$ ls /usr/local/Cellar/
    </pre>
            </div>

            <p>
              If you don't see a directory, try going to Github and manually cloning the project to your homebrew folder.
              If you do see the ChunkWM directory, copy the first command that was printed after installing.
              I went ahead and copied the command you need here:
            </p>
            <div class="code-block">
    <pre>
    doug@root-user$ cp /usr/local/opt/chunkwm/share/chunkwm/examples/chunkwmrc ~/.chunkwmrc
    </pre>
            </div>

            <p>
              This command will create a <code>.chunkwmrc</code> file inside your home directory. Just for good
              measure, we are gonna want to make sure our <code>.chunkwmrc</code> is executable. If that file is
              not exectuable, ChunkWM will not run correctly. To make sure things work, type out:
            </p>

            <div class="code-block">
    <pre>
    doug@root-user$ chmod +x ~/.chunkwmrc
    </pre>
            </div>

            <p>
              Next, we are also going to want to system link the plugins folder to our home directory.
              Note - this isn't necessary in the latest build, but we're going to do this just in case
              the build is ever revereted.
            </p>

            <div class="code-block">
    <pre>
    doug@root-user$ ln -sf /usr/local/opt/chunkwm/share/chunkwm/plugins ~/.chunkwm_plugins
    </pre>
                    </div>

            <p>
              Congrats! You've installed ChunkWM. To make sure everything was done correctly, running ChunkWM
              should result in windows auto-scaling to your screen. To test this, type out:
            </p>

            <div class="code-block">
    <pre>
    doug@root-user$ brew services start chunkwm
    </pre>
            </div>


            <p>
              Doing this should bring up an OS X prompt asking you to allow for ChunkWM to "be apart of the
              accessibility list." <b>Allow</b> ChunkWM to be in your accessibility list. Once you do so, restart
              ChunkWM by typing:
            </p>

            <div class="code-block">
    <pre>
    doug@root-user$ brew services restart chunkwm
    </pre>
            </div>
    </div>


          <div id="installing-skhd">
            <h2> Installing SKHD </h2>
            <p>
              Nice! The hard part is done. All that is left is to install SKHD. To do this, run:
            </p>
            <div class="code-block">
    <pre>
    doug@root-user$ brew install koekeishiya/formulae/skhd
    </pre>
            </div>

            <p>
              And just like before, brew is going to output a message that defines where to copy a
              config file - just this time it's a <code>.skhdrc</code> file.
              To keep things brief, I'm going to give you the command directly:
            </p>

            <div class="code-block">
    <pre>
    doug@root-user$ cp /usr/local/Cellar/skhd/examples/skhdrc ~/.skhdrc
    </pre>
            </div>

            <p>
              Next is to start running SKHD. Similar to how we ran ChunkWM, we are going to run SKHD with:
            </p>

            <div class="code-block">
    <pre>
    doug@root-user$ brew services start skhd
    </pre>
            </div>

            <p>
              This will promt you to "add SKHD to your accessibility list" - do so and restart SKHD with:
            </p>

            <div class="code-block">
    <pre>
    doug@root-user$ brew services restart skhd
    </pre>
            </div>

            <p>
              If all goes well, you should be able to
              rotate two or more windows with the following command: <code>option + r</code>.
              If <code>option + r</code> worked, you have completed everything!
            </p>

        </div>


        <div id="closing">
          <h2> Closing </h2>
          <p>
            Stay tuned for my next post where I'll go over how to navigate windows with ChunkWM.
            Thanks for reading! And as always, see you in the next blog :)
          </p>
          </div>
        </div>
      </div>
    `;
  }
}


customElements.define('view-installing-chunkwm', BlogInstallingChunkwm);