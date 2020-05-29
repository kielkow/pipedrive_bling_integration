# Pipedrive Bling Integration

This is a integration api to get deals won from Pipedrive and register on Bling.

## Installation

Use the package manager [yarn](https://yarnpkg.com/) or
[npm](https://www.npmjs.com/) to install the dependecies of project.

```bash
yarn
npm install
```

## Config Enviroment Variables

Create an .env file and set your tokens and data base credentials.

## End points

Get all goals registered on data base:

```bash
Method: GET
http://localhost:3333/requests
```

Register goals from Pipedrive on Bling:

```bash
Method: POST
http://localhost:3333/requests
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

Thanks! X)

## License
[MIT](https://choosealicense.com/licenses/mit/)
