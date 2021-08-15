# Pretty Progress

A pretty and simple progress bar for your React applications. 🚀

This project has a single screen or we can say a home page where user of the app simply can add ocassion and user details by just filling a simple form which is created using bootstrap forms and buttons.
On the right side of that there is a list section where all entires entered by the user will be displayed as a list which would be coming from direct redux store that previously user has entered and stored the data into redux store using `ADD_USER` action with `dispatch`.

![plot](./download.png)

# Table of contents

- [Installation](#installation)
  - [Clone Project](#clone-project)
  - [Install Modules](#install-modules)
  - [Run Project](#run-project)
  - [Build Project](#build-project)
- [Project Structure](#project-structure)
- [Plugins](#plugins)

## Installation

You can simply use this project by simply cloning this project and builidng and starting the `npm` server via following command.

### Clone Project

```sh
$   git clone https://gitlab.com/cwdpk/redux-users.git
```

### Install Modules

```sh
$   cd redux-user

$   npm install
```

### Run Project

```sh
$   npm start
```

### Build Project

```sh
$   npm build
```

## Project Structure

```sh
    src
      |---- Components
         |---- UserCard
         |---- UserForm
         |---- UserList
      |---- Pages
         |---- HomePage
      |---- Redux
         |---- Actions
         |---- Reducers
         |---- Store
      |---- Utils
      |---- App

```

## Plugins

Third party dependacies which I have used to develop this projects are following:

| Name           | Version   | Links                                        |
| :------------- | :-------- | :------------------------------------------- |
| Bootstrap      | `^5.0.2`  | https://getbootstrap.com/                    |
| Moment         | `^2.29.1` | https://momentjs.com/                        |
| React-DateTime | `^3.0.4`  | https://www.npmjs.com/package/react-datetime |

## License

[MIT]('./LICENSE')
