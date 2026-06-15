# Node Built-in Module Examples

This folder contains simple examples for common Node.js built-in modules.

## Run examples

```bash
node fs-module.js
node os-module.js
node path-module.js
node events-module.js
node stream-module.js
```

## Responsive form using `http` and `fs`

Run the server:

```bash
node form-server.js
```

Open this in your browser:

```text
http://localhost:3000
```

When you submit the form, Node receives the data with the `http` module and saves it into `form-submissions.json` with the `fs` module.
