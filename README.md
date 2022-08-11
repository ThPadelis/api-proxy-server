# Hide Your API Keys with an API Proxy Server - Tutorial

This tutorial's goal is to demonstrate how to protect your API keys from malicious users.

## Description

In this article/tutorial we are going to create an API Proxy Server using NodeJS and the main reason behind this is to show you how to hide public API keys and not expose them in the public like I was doing in past. All of us have created an application once, just to get to know a new library or a framework, and the best way to achieve this is to use an open API (like [TMDB](https://developers.themoviedb.org/)).

## Getting Started

### Dependencies

* NodeJs installed on your machine
* Coffee

### Installing

* Clone repository
* Install dependencies

```sh
git clone https://github.com/ThPadelis/api-proxy-server.git
cd api-proxy-server
npm install
```

### Executing program

The application is separated to two sides. The Front-end (`client/`) and the Back-end (`server/`)

#### Front-end

* Rename `.env.example` to `.env`
* Run the application with `npm run start -w client` command

#### Back-end

* Rename `.env.example` to `.env`
* Get `API_KEY` from the [OpenWeatherMap API](https://home.openweathermap.org/users/sign_up) and add it to the `.env` file
* Start the server with `npm run start -w server` command

## License

This project is licensed under the MIT License - see the LICENSE.md file for details