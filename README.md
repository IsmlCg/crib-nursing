# Crib-and-nursing

[![Node.js](https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg)](https://nodejs.org/)
[![npm](https://www.vectorlogo.zone/util/preview.html?image=/logos/npmjs/npmjs-ar21.svg)](https://www.npmjs.com/) (Node Package Manager)
[![Firebase CLI](https://www.gstatic.com/devrel-devsite/prod/v8332a5cec2b627575422eb634078b4a9892f3eac6f9006e54b6e9bbf0bfda91f/firebase/images/lockup.svg)](https://firebase.google.com/docs/cli)

Designed to provide exceptional care to children and adults requiring nursing assistance, "Crib and Nursing" is a comprehensive healthcare initiative. As a nursing home, we provide specialized care for adults in need of specialized nursing care, while creating a nurturing environment for babies.

## Contents

- [Crib and nursing](#Crib-and-nursing)
  - [Contents](#contents)
  - [About](#about)
  - [Dependencies](#dependencies)
  - [Building](#building)
  - [Testing](#testing)
  - [License](#license)

## Clone the repository

```bash
git clone https://github.com/IsmlCg/crib-nursing.git
cd crib-nursing
```

## Dependencies

To install the project dependencies, run:

```shell
go mod install
```

## Building

To build the binary, run:

```sh
make build
```

## Testing

To run tests, run:

```shell
make test
```

To run tests with coverage, run:

```shell
go test -v -covermode=count  ./...
```

## License
