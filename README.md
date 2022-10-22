# Monorepo Microfrontends

A complete Webpack Module Federation Case with React.

# project directory

## shared-libraries

It is a low-level or basic app, which exposes libraries like `react`, `react-dom`.

It is a pure `remote`

## ui-components

It is a middle-level app, which depends on modules exposed from `shared-libraries` : `react` ,`react-dom`. In the meantime, it also exposes components: `Dialog`, `Button` to another app called `store-uk`.

It is both host and remote.

## store-uk

the top-level app, which depends on `shared-libraries` and `ui-components`.

It is a pure host.

# how to use

- `yarn global add lerna` && `yarn global add concurrently`
- `yarn install`
- `lerna init`
- `lerna bootstrap (note: remove npx)`
- `yarn run start`

after all the commands done, open your browser at `http://localhost:3002`, open the dev-tool's network tab to see resources loading details
