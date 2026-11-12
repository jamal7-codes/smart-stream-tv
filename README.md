
# Smart Stream TV

A responsive Smart stream tv web interface built with **Vanilla JavaScript (ES6 modules)** and **Tailwind CSS**. Users can browse a channel catalogue, select a channel to update the preview, and filter channels instantly with a live search.

 
🔗 **Live demo:** [https://smart-stream-tv-azure.vercel.app/] 
📦 **Repository:** [https://github.com/jamal7-codes/smart-stream-tv]

 
 

---

## Features

- **Responsive layout** (mobile-first): channel list on the left and preview on the right on desktop, stacked on mobile.
- **Dynamic channel list** generated from a local JavaScript data file (no hand-written HTML rows).
- **Channel details** shown in each row: channel number, logo, and name.
- **Interactive selection**: clicking a channel highlights it and updates the preview image and title.
- **Live search** by channel name or channel number, case-insensitive, with no page reload.
- **Empty state message** when no channel matches the search.

## Tech stack

| Technology | Usage |
| --- | --- |
| HTML5 | Semantic page structure |
| Tailwind CSS | Utility-first, mobile-first, responsive styling |
| JavaScript (ES6+) | Logic, DOM manipulation, events |
| ES6 Modules | `import` / `export` to separate responsibilities |
| Git / GitHub | Version control with feature branches and Pull Requests |

## Project structure

```
smart-stream-tv/
│
├── index.html        # Main HTML document
│
├── data/
│   └── data.js       # Channel catalogue (exports channelsData)
│
├── css/
│   └── style.css     # Additional styles (if needed)
│
├── js/
│   ├── app.js        # Application entry point
│   ├── ui.js         # List rendering and channel selection
│   └── search.js     # Live search and filtering
│
└── README.md
```

## How it works

1. `data/data.js` exports the `channelsData` array. Each channel is an object:

   ```js
   {
     id: "1",
     channelNumber: "1057",
     name: "FR - DISCOVERY ID FHD",
     category: "DOCUMENTAIRE",
     logo: "...",
     previewImage: "..."
   }
   ```

2. `js/app.js` imports `channelsData` and starts the application.
3. `js/ui.js` loops through the array (`forEach` / `map`) to create the channel rows, and handles the `click` event to highlight the active channel and update the preview.
4. `js/search.js` listens to the `input` event, filters the array with `filter()` and `includes()` (using `toLowerCase()` for case-insensitive matching), then renders the matching channels again.
 

## Git workflow

```
main
  └── develop
        ├── feature/ui-layout
        ├── feature/channel-data
        ├── feature/channel-preview
        └── feature/channel-search
```

- Each feature is developed on its own branch.
- Features are merged into `develop` through Pull Requests.
- After final validation, `develop` is merged into `main`.
- Commit messages follow a simple convention (`feat:`, `fix:`, `docs:`).

## What I learned

- Structuring a project with ES6 modules (`import` / `export`).
- Working with arrays of objects and array methods: `forEach`, `map`, `filter`.
- Creating and updating the DOM with `createElement`, `appendChild`, and `classList`.
- Handling events: `click` and `input`.
- Building a responsive, mobile-first interface with Tailwind CSS.
- Working with branches, Pull Requests, and deployment.

## Possible improvements

- Filter channels by category.
- Favorite channels saved in `localStorage`.
- Keyboard navigation in the channel list.

## Author

**Jamal** — Web Developer student at YouCode
GitHub: [@jamal7-codes] 