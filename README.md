# 💎 Diamond Player

A sleek and modern desktop music player built with Next.js, React, and Electron.

![Diamond Player Screenshot](https://via.placeholder.com/800x500.png?text=Diamond+Player+App+Screenshot)
_(You can replace this with a screenshot of your application)_

## ✨ Key Features

- **Local Music Playback:** Play your favorite audio files directly from your computer.
- **Playlist Management:** Create, view, and manage your music playlists.
- **Intuitive Controls:** Easy-to-use controls for play, pause, next, and previous tracks.
- **Modern UI:** A clean and beautiful user interface built with Tailwind CSS.
- **Cross-Platform:** Runs on Windows, macOS, and Linux thanks to Electron.

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **UI Library:** [React](https://reactjs.org/)
- **Desktop Framework:** [Electron](https://www.electronjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm) installed on your system.

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/your-username/diamond-player.git
    cd diamond-player
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Application

To run the application in development mode, which starts the Next.js server and the Electron app, run:

```bash
npm run dev
```

This will open the desktop application window.

## 📦 Building the Application

This project uses [electron-builder](https://www.electron.build/) to package the application. You can add a script to your `package.json` to make building easier.

1.  Add the following to the `scripts` section in `package.json`:

    ```json
    "dist": "next build && electron-builder"
    ```

2.  Run the build command:
    ```bash
    npm run dist
    ```
    This will create a distributable package for your operating system in a new `dist` folder.
