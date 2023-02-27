## Usage

Those templates dependencies are maintained via [pnpm](https://pnpm.io) via `pnpm up -Lri`.

This is the reason you see a `pnpm-lock.yaml`. That being said, any package manager will work. This file can be safely be removed once you clone a template.

```bash
$ pnpm install #npm install or yarn install will work as well
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `pnpm dev` or `pnpm start` or `npm dev if using npm` or `yarn dev if using yarn`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `pnpm build` or `npm run build if using npm` or `yarn build if using yarn`

Builds the app for production to the `dist` folder.<br>
It correctly bundles Solid in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### `pnpm test` or `npm test if using npm` or `yarn test if using yarn`

The application is using vitest for testing. I am testing the PropData function from the BONUS QUESTION provided with it.

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.)
