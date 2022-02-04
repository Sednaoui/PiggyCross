## Developpement

Quick Start:

    npm install -g yarn # if you don't have yarn globally installed
    yarn install
    yarn start

Once the app is running, you can install the extension in your browser of choice:
- [Firefox instructions](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
- [Chrome, Brave, and Opera instructions](https://developer.chrome.com/docs/extensions/mv3/getstarted/#manifest)
    - Note that these instructions are for Chrome, but substituting brave://extensions or opera://extensions for chrome://extensions depending on browser should get you to the same buttons.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

# Code Structure
### All code currently lives under src. Inside src:
- popup
    - Most of the UI code lives here
- options
    - An option page currently for future settings of the wallet
- lib
    - Includes API services, helper functions and global constants
- assets
    - images and logos
- background, contentscript, inpage
    - everything related to extention scripts. TBD
