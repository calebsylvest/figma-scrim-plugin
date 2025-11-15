# Task List: Phase 2 - MVP Core Features (Figma Scrim Plugin)

## Relevant Files

- `src/ui/components/OpacityControl.tsx` - New component for opacity slider and numeric input (0-100%)
- `src/ui/components/PresetButtons.tsx` - New component for black and white scrim preset buttons
- `src/ui/App.tsx` - Main React component (modify to integrate new components and manage opacity state)
- `src/code.ts` - Main plugin code (modify to handle dynamic color and opacity parameters)
- `src/utils/scrimGenerator.ts` - New utility file for scrim generation helper functions
- `src/ui/styles.css` - Plugin styles (modify to add styles for new components)

### Notes

- Components should use TypeScript with proper interfaces for props and state
- Opacity value is managed at App.tsx level and passed down to child components
- Message structure between UI and plugin: `{ type: 'create-scrim', color: 'black' | 'white', opacity: number }`
- Scrim naming format: "Scrim - {Color} {Opacity}%" (e.g., "Scrim - Black 50%")
- No unit tests required for Phase 2 (manual testing in Figma only)

## Instructions for Completing Tasks

**IMPORTANT:** As you complete each task, you must check it off in this markdown file by changing `- [ ]` to `- [x]`. This helps track progress and ensures you don't skip any steps.

Example:
- `- [ ] 1.1 Read file` → `- [x] 1.1 Read file` (after completing)

Update the file after completing each sub-task, not just after completing an entire parent task.

## Tasks

- [x] 0.0 Create feature branch
  - [x] 0.1 Create and checkout a new branch for Phase 2 MVP work (`git checkout -b feature/phase2-mvp-core`)

- [x] 1.0 Implement Opacity Control Component
  - [x] 1.1 Create `src/ui/components/` directory
  - [x] 1.2 Create `src/ui/components/OpacityControl.tsx` file
  - [x] 1.3 Define TypeScript interface for OpacityControl props (opacity: number, onChange: function)
  - [x] 1.4 Implement range slider input (type="range", min=0, max=100, step=1)
  - [x] 1.5 Implement numeric text input (type="number", min=0, max=100)
  - [x] 1.6 Add onChange handlers for both inputs that call props.onChange
  - [x] 1.7 Ensure slider and numeric input are synchronized (both update when either changes)
  - [x] 1.8 Add input validation to prevent values outside 0-100 range
  - [x] 1.9 Add opacity percentage label/display (e.g., "Opacity: 50%")
  - [x] 1.10 Export OpacityControl component as default export

- [x] 2.0 Implement Preset Scrim Buttons Component
  - [x] 2.1 Create `src/ui/components/PresetButtons.tsx` file
  - [x] 2.2 Define TypeScript interface for PresetButtons props (opacity: number, onCreateScrim: function)
  - [x] 2.3 Create "Black Scrim" button with onClick handler
  - [x] 2.4 Create "White Scrim" button with onClick handler
  - [x] 2.5 Implement onClick handler for Black button that calls onCreateScrim('black', opacity)
  - [x] 2.6 Implement onClick handler for White button that calls onCreateScrim('white', opacity)
  - [x] 2.7 Add button container div with proper layout (flex, gap)
  - [x] 2.8 Add descriptive labels or icons to buttons for clarity
  - [x] 2.9 Export PresetButtons component as default export

- [x] 3.0 Integrate UI Components into App
  - [x] 3.1 Read current `src/ui/App.tsx` file
  - [x] 3.2 Import OpacityControl component at top of App.tsx
  - [x] 3.3 Import PresetButtons component at top of App.tsx
  - [x] 3.4 Add useState hook to manage opacity value (default to 50)
  - [x] 3.5 Create handleOpacityChange function that updates opacity state
  - [x] 3.6 Create handleCreateScrim function that sends postMessage with color and opacity
  - [x] 3.7 Replace "Preset Scrims" placeholder section with actual PresetButtons component
  - [x] 3.8 Pass opacity and handleCreateScrim as props to PresetButtons
  - [x] 3.9 Replace "Opacity Control" placeholder section with actual OpacityControl component
  - [x] 3.10 Pass opacity and handleOpacityChange as props to OpacityControl
  - [x] 3.11 Remove "Test: Create Scrim" button (replaced by preset buttons)

- [x] 4.0 Extend Plugin Code for Dynamic Scrim Generation
  - [x] 4.1 Read current `src/code.ts` file
  - [x] 4.2 Update 'create-scrim' message handler to expect color and opacity parameters
  - [x] 4.3 Add validation for color parameter (must be 'black' or 'white')
  - [x] 4.4 Add validation for opacity parameter (must be number between 0-100)
  - [x] 4.5 Create helper function to convert color string to RGB values (black: {r:0,g:0,b:0}, white: {r:1,g:1,b:1})
  - [x] 4.6 Update scrim fill creation to use dynamic color from parameter
  - [x] 4.7 Update scrim fill opacity to use opacity parameter divided by 100 (Figma uses 0-1 scale)
  - [x] 4.8 Create dynamic scrim name using template: `Scrim - ${Color} ${opacity}%`
  - [x] 4.9 Update figma.notify success message to include color and opacity info
  - [x] 4.10 Add error handling for invalid color or opacity values

- [x] 5.0 Implement Message Passing System
  - [x] 5.1 Define message interface type: { type: string, color?: string, opacity?: number }
  - [x] 5.2 Update handleCreateScrim in App.tsx to send complete message structure
  - [x] 5.3 Ensure postMessage includes both color and opacity in pluginMessage object
  - [x] 5.4 Test message structure in browser console (log messages before sending)
  - [x] 5.5 Update plugin code message handler to destructure color and opacity from msg
  - [x] 5.6 Add console.log in plugin code to verify received parameters
  - [x] 5.7 Handle missing or undefined parameters gracefully with defaults

- [x] 6.0 Add Visual Feedback and UX Enhancements
  - [x] 6.1 Read current `src/ui/styles.css` file
  - [x] 6.2 Add CSS styles for .opacity-control class (container, slider, input layout)
  - [x] 6.3 Add CSS styles for .preset-buttons class (button group layout)
  - [x] 6.4 Add hover states for preset buttons (background color change)
  - [x] 6.5 Add active/pressed states for buttons
  - [x] 6.6 Style range slider to match Figma design system (track, thumb colors)
  - [x] 6.7 Style numeric input to match Figma design system
  - [x] 6.8 Add focus states for interactive elements (slider, input, buttons)
  - [x] 6.9 Ensure sufficient spacing between opacity control elements
  - [x] 6.10 Test button and control accessibility (keyboard navigation, focus indicators)

- [x] 7.0 Test and Validate Phase 2 Features
  - [x] 7.1 Run `npm run build` to compile all changes
  - [x] 7.2 Verify build completes without errors
  - [x] 7.3 Open Figma desktop app and reload plugin
  - [x] 7.4 Verify UI displays OpacityControl with slider and input
  - [x] 7.5 Verify UI displays Black Scrim and White Scrim preset buttons
  - [x] 7.6 Test slider: drag to different values, verify input updates
  - [x] 7.7 Test numeric input: type different values (0, 50, 100), verify slider updates
  - [x] 7.8 Select a layer in Figma, click Black Scrim button at 50% opacity
  - [x] 7.9 Verify black scrim created with correct opacity and name "Scrim - Black 50%"
  - [x] 7.10 Change opacity to 80%, click White Scrim button
  - [x] 7.11 Verify white scrim created with correct opacity and name "Scrim - White 80%"
  - [x] 7.12 Test edge cases: opacity at 0%, 100%, black scrim, white scrim
  - [x] 7.13 Test error handling: click preset button with no layer selected
  - [x] 7.14 Verify error message displays correctly
  - [x] 7.15 Test that scrims are placed above selected layer
  - [x] 7.16 Verify no console errors in Figma Developer Console
  - [x] 7.17 Test scrim generation speed (should complete in <100ms)
  - [x] 7.18 Document any bugs or issues found
  - [x] 7.19 Verify Phase 2 deliverable: "Functional preset scrims (v1.0 MVP)" is complete
