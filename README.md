# LLama Ping-Pong Score System

## Project Summary

Create an easy-to-use React UI to keep score during ping-pong matches

- Enable users to keep score using only voice with the Web Speech API :microphone:

- Make the application accessible and portable :iphone:

- Utilize the React Context API to provide theming :rainbow:

Create a simple and robust [API](https://github.com/andrew-brainerd/llama-pong-server) in Python :snake:

- Allow saving and resuming of games and multi-game matches :floppy_disk:

- Track user stats for leaderboard creation :bar_chart:

- Allow users to sign-in via key cards and/or QR Codes (no typing required! :smiley:)

- Run all the things on a self-contained Raspberry Pi device :briefcase:

## Technologies

### CI/CD

- Heroku: Automated Deployments
  - On push to `develop` branch in GitHub
    - [UI](https://dashboard.heroku.com/apps/llama-pong/activity)
    - [Server](https://dashboard.heroku.com/apps/llama-pong-server/activity)

### Front-end

- React
  - `react-speech-kit`: Custom hooks to utilize the Web Speech API

    https://github.com/MikeyParton/react-speech-kit

  - `react-qr-reader`: Read QR codes from a camera in the browser

    https://github.com/JodusNodus/react-qr-reader


### Back-end

- Flask: Python API Development

- gunicorn: Python HTTP Server

- MongoDb: Document Storage

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser

### `npm test`

Launches the test runner in the interactive watch mode

### `npm run build`

Builds the app for production to the `build` folder\
It bundles React in production mode and optimizes the build for the best performance

