# Pretty Progress

A pretty and simple progress bar for your React applications. 🚀

Pretty Progress is a progress bar UI component for React application to build attractive progress showcase for any kind of actions such profile verification, loading data and more.

![plot](./download.png)

# Table of contents

- [Installation](#installation)
  - [Install Module](#install-module)
  - [Import](#import)
  - [Use case](#user-case)
- [API](#api)
- [License](#license)

## Installation

You can simply use this package by simply install the npm module by following commands.

### Install Module

```sh
$   npm i pretty-progress
```

### Import

```javscript
    import { PrettyProgress } from 'pretty-progress';
```

### Use case

```Javscript
$   <div className="your__wrapper">
        <PrettyProgress width = {37} / > // Out of 100%
    </div>
```

## API

Props with usecases

| props   | Mandatory | Description                                     |
| :------ | :-------- | :---------------------------------------------- |
| `width` | Yes       | Dynamic value of your progress completion       |
| `color` | Yes       | Dynamic value of your progress background color |

## License

[MIT]('./LICENSE')
