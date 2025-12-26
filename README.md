# Steps-Card

A React practice project that displays a Steps card using State and Event Handlers.

## Features

- Displays steps with previous and next buttons
- Manages current step using React state
- Buttons are disabled at the first and last steps
- Simple and clean UI
- The card can be opened and closed
- Data is loaded from a local file

## Tech Stack

- React
- Vite
- JavaScript
- CSS (global styles and inline styles)
- Node.js (v22.21.1)

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/luis29dev/pizza-menu.git

cd steps

npm install
```

## Run the project locally

```bash
npm run dev
```

The app will be available at the local development URL shown in your terminal.

## Project Structure

```bash
public/
  pizzas/            # Pizza images
src/
  db/
    data.js           # Local JSON data for steps
  index.css           # Global styles
  main.jsx
  App.jsx
```

## How It Works

- Steps data is imported from a local JSON file.
- The steps are rendered dynamically by mapping over the steps data.
- The current step is managed using React's useState hook.
- Event handlers are used to navigate between steps and to open/close the card.
- Buttons are conditionally disabled based on the current step.

## What I Learned

- JSX syntax and rules
- Managing state with useState
- Handling events in React
- Conditional rendering and disabling of buttons

## Roadmap / Next Steps

- Add animations for step transitions
- change color of the buttons when disabled
- Make the card draggable
- Add more steps and content

## Scripts

`npm run dev` — starts the development server
