# ViewAR react sample

This project demonstrates the finished tutorial of [Create an AR App using React & ViewAR](https://viewar.gitbooks.io/sdk-documentation/content/tutorials/react/create-your-first-ar-app.html).

<img src="https://user-images.githubusercontent.com/223045/52416594-3d429b80-2aea-11e9-9df3-77fff665f57e.gif" alt="AR App Demo" width="173">

## Install

To run this project locally you would require a `.viewar-config` file. You can generate one using `viewar-cli login` and then `viewar-cli init`.

Clone this repository and copy a `.viewar-config` file into the root directory of this repository.

Then run

```bash
npm install
```

## Development

The local development server without WebGL support (mock mode) and compatible with running your code on a mobile device run:

```bash
npm run start:mock
```

## Deployment

to deploy your changes enter

```bash
viewar-cli deploy
```

## Licence

Copyright (c) 2019, ViewAR GmbH

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

Source: http://opensource.org/licenses/ISC
