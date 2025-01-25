# BerryFractal

BerryFractal is a Vue.js-based web application that allows users to generate, customize, and explore fractals. This tool provides an interactive and visually rich experience for creating complex fractal designs, adjusting parameters, and exporting the results as images.

## Features

- Generate fractals with customizable parameters
- Adjust parameters to explore different fractal patterns
- Export generated fractals as images
- Visualize fractal patterns in real-time
- Interactive Fractal Generation: Users can select fractal types (e.g., Mandelbrot, Julia, etc.) and modify parameters like iterations, zoom level, and colors.
- Customizable Color Palettes: Choose and design gradient color schemes for fractal visualization.
- Export as Image: Download fractal designs as high-quality PNG images.
- Responsive Design: Optimized for both desktop and mobile devices.

# Tech Stack

- Vue.js
- TailwindCSS
- Vite
- TypeScript
- WebGL

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/username/berry-fractal.git
cd berry-fractal
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000` to access the application.

## Directory Structure

```bash

BerryFractal/
├── public/                         # Public assets served by the app
│   ├── index.html                  # Root HTML file
│   ├── favicon.ico                 # App favicon
│   └── assets/                     # Public static assets
│       ├── fractal-samples/        # Example fractal images
│       ├── logo.png                # App logo
│       └── gradient-presets.json   # Predefined gradients for color schemes
├── src/                            # Main source code for the app
│   ├── assets/                     # Assets used within the app
│   │   ├── styles/                 # Global and component-specific styles
│   │   │   ├── global.css          # Global styles
│   │   │   └── fractal-styles.css  # Fractal-specific styles
│   │   └── fonts/                  # Custom fonts
│   ├── components/                 # Reusable Vue components
│   │   ├── FractalCanvas.vue       # Canvas to render fractals
│   │   ├── ControlsPanel.vue       # Sidebar for fractal settings
│   │   ├── ColorPicker.vue         # Component for selecting color palettes
│   │   ├── Navbar.vue              # Navigation bar
│   │   └── Footer.vue              # Footer section
│   ├── pages/                      # App pages
│   │   ├── HomePage.vue            # Main landing page
│   │   ├── AboutPage.vue           # About BerryFractal
│   │   └── GalleryPage.vue         # Gallery of fractal samples
│   ├── router/                     # Vue Router configuration
│   │   └── index.js                # App routes
│   ├── store/                      # Vuex store for state management
│   │   └── fractals.js             # State for fractal settings
│   ├── utils/                      # Utility functions
│   │   ├── fractalGenerator.js     # Core logic for generating fractals
│   │   ├── colorUtils.js           # Helper functions for color gradients
│   │   └── fileExport.js           # Utility for exporting images
│   ├── App.vue                     # Root Vue component
│   ├── main.js                     # App entry point
│   ├── shims-vue.d.ts              # TypeScript definitions for Vue files
│   └── types/                      # TypeScript type definitions
│       ├── fractal.d.ts            # Types for fractal generation
│       └── color.d.ts              # Types for color schemes
├── tests/                          # Unit and end-to-end tests
│   ├── components/                 # Component tests
│   │   ├── FractalCanvas.test.js   # Tests for fractal canvas
│   │   ├── ControlsPanel.test.js   # Tests for controls panel
│   │   └── ColorPicker.test.js     # Tests for color picker
│   ├── pages/                      # Page tests
│   └── utils/                      # Utility function tests
├── .env                            # Environment variables
├── .eslintrc.js                    # ESLint configuration
├── .prettierrc                     # Prettier configuration
├── babel.config.js                 # Babel configuration
├── package.json                    # Project dependencies and scripts
├── tsconfig.json                   # TypeScript configuration
├── vue.config.js                   # Vue CLI configuration
└── README.md                       # Project documentation
```

## Usage

- Use the controls to adjust the fractal parameters and observe the changes in the fractal pattern.
- Click the "Generate" button to create a new fractal.
- Use the "Export" button to save the current fractal pattern as an image.
- Explore the fractal properties and patterns by adjusting the parameters.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.

## License

This project is open-sourced under the MIT License - see the [LICENSE](LICENSE) file for details.
