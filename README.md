# Figma Scrim & Overlay Generator Plugin

A Figma plugin that streamlines the creation of overlay layers (scrims) for images, mockups, and UI designs. Apply professional scrims in seconds with preset options, intelligent color extraction, and customizable gradients.

## Features

### Phase 1: Foundation (Current) ✅
- Plugin installation and activation in Figma
- Basic UI structure with React
- Test scrim generation functionality

### Phase 2: MVP Core (Coming Soon)
- Preset scrim options (black/white with solid fills)
- Opacity controls (slider + input)
- Selection-bound rectangle creation

### Phase 3: Gradient Support
- Linear gradient overlays
- Top-to-bottom and bottom-to-top presets

### Phase 4: Color Extraction
- Extract 5 dominant colors from selected images
- One-click color application

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Figma desktop application

### Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd figma-scrim-plugin
```

2. Install dependencies:
```bash
npm install
```

3. Build the plugin:
```bash
npm run build
```

4. Load plugin in Figma:
   - Open Figma desktop app
   - Go to **Plugins → Development → Import plugin from manifest...**
   - Select the `manifest.json` file from the project root
   - The plugin will appear in your Plugins menu

## Development

### Build Commands

```bash
# Production build
npm run build

# Development mode with watch
npm run watch
```

### Project Structure

```
figma-scrim-plugin/
├── manifest.json          # Figma plugin manifest
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── webpack.config.js      # Webpack bundler configuration
├── src/
│   ├── code.ts           # Main plugin code (Figma sandbox)
│   └── ui/
│       ├── App.tsx       # Main React component
│       ├── index.tsx     # React app entry point
│       ├── ui.html       # HTML template
│       └── styles.css    # Plugin styles
└── dist/                 # Build output (generated)
    ├── code.js           # Compiled plugin code
    └── ui.html           # Compiled UI with inlined scripts
```

### How It Works

The plugin follows Figma's two-part architecture:

1. **Sandbox Code** (`src/code.ts`): Runs in Figma's sandboxed environment with access to the Figma API
2. **UI Code** (`src/ui/*`): Runs in an iframe with access to the browser DOM

Communication between the two parts happens via the `postMessage` API.

## Testing

### Manual Testing in Figma

1. Build the plugin: `npm run build`
2. Open Figma desktop app
3. Run the plugin from Plugins menu
4. Test functionality:
   - Select a layer in Figma
   - Click "Test: Create Scrim" button
   - Verify a scrim rectangle is created

### Testing Checklist

- [ ] Plugin installs without errors
- [ ] UI panel opens successfully
- [ ] "Scrim & Overlay Generator" heading displays
- [ ] Test scrim creation works when layer is selected
- [ ] Error message shows when no layer is selected
- [ ] No console errors in Figma Developer Console

## Roadmap

See [PRD](tasks/prd-figma-scrim-overlay-plugin.md) for full product requirements.

### Upcoming Features
- User-defined opacity controls
- Preset color options (black/white)
- Gradient direction controls
- Image color extraction
- Custom gradient angles
- Blend mode support
- User-saved presets

## Contributing

This is a learning/development project. Contributions are welcome!

## License

ISC

## Support

For issues or questions, please check the documentation or create an issue in the repository.

---

**Built with:**
- TypeScript
- React
- Webpack
- Figma Plugin API
