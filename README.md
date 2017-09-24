# Find the Colour Sequence
Copyright © 2017 Anthony Fung

Find the Colour Sequence is a browser-based game based on a popular code
breaking board game. It is written in Typescript and Sass, using React, and
bundled using Webpack. [Click here](https://ant-f.github.io/FindTheColourSequence/)
to play; rules are provided within the game.

## Building

* Install npm packages: `npm install`

* Create a production build of the web page: `npm run build`, or

* Run locally using the Webpack dev server: `npm start`

## Known Issues

* Browsers that do not support the CSS transform-style `preserve-3d` (this
includes Internet Explorer 11) will not render the board correctly, and are not
supported. 

* Edge: game board may not be rendered correctly;
[CSS blur filter is not applied when inside an element with preserve-3d](https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/13570128/)

## License

Source code is licensed under the
[MIT license](https://github.com/Ant-f/FindTheColourSequence/blob/master/LICENSE.txt).
