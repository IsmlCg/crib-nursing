# Crib-and-nursing

- [Node.js](https://nodejs.org/) installed
- [npm](https://www.npmjs.com/) (Node Package Manager) installed
- [Firebase CLI](https://firebase.google.com/docs/cli) installed

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
