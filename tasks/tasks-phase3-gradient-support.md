# Task List: Phase 3 - Gradient Support (Figma Scrim Plugin)

## Relevant Files

- `src/ui/components/GradientButtons.tsx` - New component for gradient preset buttons (black/white × top-to-bottom/bottom-to-top)
- `src/ui/App.tsx` - Main React component (modify to integrate gradient buttons)
- `src/code.ts` - Main plugin code (modify to handle gradient creation with GRADIENT_LINEAR fills)
- `src/ui/styles.css` - Plugin styles (modify to add styles for gradient buttons)

### Notes

- Gradient buttons will be a new component similar to PresetButtons
- Gradients use GRADIENT_LINEAR type with gradientTransform and gradientStops
- Transform matrices: Top-to-bottom `[[1,0,0],[0,1,0]]`, Bottom-to-top `[[1,0,0],[0,-1,1]]`
- Each gradient has 2 stops: start (opacity from control) and end (opacity 0 for fade effect)
- Message structure: `{ type: 'create-gradient', color: 'black' | 'white', direction: 'top-to-bottom' | 'bottom-to-top', opacity: number }`
- Gradient naming format: "Gradient Scrim - {Color} {Direction} {Opacity}%" (e.g., "Gradient Scrim - Black Top-to-Bottom 50%")
- No unit tests required for Phase 3 (manual testing in Figma only)

## Instructions for Completing Tasks

**IMPORTANT:** As you complete each task, you must check it off in this markdown file by changing `- [ ]` to `- [x]`. This helps track progress and ensures you don't skip any steps.

Example:
- `- [ ] 1.1 Read file` → `- [x] 1.1 Read file` (after completing)

Update the file after completing each sub-task, not just after completing an entire parent task.

## Tasks

- [x] 0.0 Create feature branch
  - [x] 0.1 Create and checkout a new branch for Phase 3 Gradient work (`git checkout -b feature/phase3-gradient-support`)

- [x] 1.0 Create Gradient Buttons UI Component
  - [x] 1.1 Create `src/ui/components/GradientButtons.tsx` file
  - [x] 1.2 Define TypeScript interface for GradientButtons props (opacity: number, onCreateGradient: function)
  - [x] 1.3 Define direction type: 'top-to-bottom' | 'bottom-to-top'
  - [x] 1.4 Create "Black Top-to-Bottom" gradient button with onClick handler
  - [x] 1.5 Create "Black Bottom-to-Top" gradient button with onClick handler
  - [x] 1.6 Create "White Top-to-Bottom" gradient button with onClick handler
  - [x] 1.7 Create "White Bottom-to-Top" gradient button with onClick handler
  - [x] 1.8 Implement onClick handlers that call onCreateGradient(color, direction, opacity)
  - [x] 1.9 Add button container div with proper layout (2x2 grid or flex wrap)
  - [x] 1.10 Add descriptive labels and direction indicators (↓ ↑ arrows) to buttons
  - [x] 1.11 Export GradientButtons component as default export

- [x] 2.0 Implement Gradient Generation Logic in Plugin Code
  - [x] 2.1 Read current `src/code.ts` file
  - [x] 2.2 Create helper function `getGradientTransform` that returns transform matrix based on direction
  - [x] 2.3 Implement top-to-bottom transform: `[[1,0,0],[0,1,0]]`
  - [x] 2.4 Implement bottom-to-top transform: `[[1,0,0],[0,-1,1]]`
  - [x] 2.5 Create helper function `createGradientStops` that generates 2-stop gradient array
  - [x] 2.6 First stop: position 0, color with user-specified opacity
  - [x] 2.7 Second stop: position 1, same color with opacity 0 (fade to transparent)
  - [x] 2.8 Test helper functions return correct data structures

- [x] 3.0 Integrate Gradient Component into App
  - [x] 3.1 Read current `src/ui/App.tsx` file
  - [x] 3.2 Import GradientButtons component at top of App.tsx
  - [x] 3.3 Create handleCreateGradient function that sends postMessage with type, color, direction, opacity
  - [x] 3.4 Replace "Gradient Scrims" placeholder section with actual GradientButtons component
  - [x] 3.5 Pass opacity and handleCreateGradient as props to GradientButtons
  - [x] 3.6 Verify message structure: `{ type: 'create-gradient', color, direction, opacity }`

- [x] 4.0 Add Message Handler for Gradient Creation
  - [x] 4.1 Add 'create-gradient' message type handler in code.ts
  - [x] 4.2 Add selection validation (check if layer is selected)
  - [x] 4.3 Extract and validate color parameter ('black' or 'white')
  - [x] 4.4 Extract and validate direction parameter ('top-to-bottom' or 'bottom-to-top')
  - [x] 4.5 Extract and validate opacity parameter (0-100 number)
  - [x] 4.6 Get selected layer bounds (x, y, width, height)
  - [x] 4.7 Create rectangle for gradient scrim
  - [x] 4.8 Set position and size to match selected layer
  - [x] 4.9 Get RGB color using existing getColorRGB helper
  - [x] 4.10 Get gradient transform using getGradientTransform helper
  - [x] 4.11 Create gradient stops using createGradientStops helper
  - [x] 4.12 Set fills to GRADIENT_LINEAR with transform and stops
  - [x] 4.13 Create dynamic gradient name: "Gradient Scrim - {Color} {Direction} {Opacity}%"
  - [x] 4.14 Add gradient scrim to page and position above selected layer
  - [x] 4.15 Add success notification with gradient details
  - [x] 4.16 Add error handling for invalid parameters

- [x] 5.0 Style Gradient UI Components
  - [x] 5.1 Read current `src/ui/styles.css` file
  - [x] 5.2 Add CSS styles for .gradient-buttons class (container layout)
  - [x] 5.3 Add CSS styles for .gradient-button class (individual button styling)
  - [x] 5.4 Create 2x2 grid layout or flex wrap for 4 buttons
  - [x] 5.5 Add hover states for gradient buttons
  - [x] 5.6 Add active/pressed states for gradient buttons
  - [x] 5.7 Add focus states for keyboard navigation
  - [x] 5.8 Style direction indicators (arrows) for visual clarity
  - [x] 5.9 Ensure consistent spacing with other UI sections
  - [x] 5.10 Test responsive layout if window is resized

- [x] 6.0 Test Gradient Functionality
  - [x] 6.1 Run `npm run build` to compile all changes
  - [x] 6.2 Verify build completes without errors
  - [x] 6.3 Open Figma desktop app and reload plugin
  - [x] 6.4 Verify UI displays GradientButtons section with 4 buttons
  - [x] 6.5 Verify buttons show correct labels and direction indicators
  - [x] 6.6 Select a layer in Figma, set opacity to 50%
  - [x] 6.7 Click "Black Top-to-Bottom" button
  - [x] 6.8 Verify gradient created with correct name "Gradient Scrim - Black Top-to-Bottom 50%"
  - [x] 6.9 Verify gradient fades from black (50% opacity) at top to transparent at bottom
  - [x] 6.10 Delete gradient, click "Black Bottom-to-Top" button
  - [x] 6.11 Verify gradient fades from transparent at top to black (50% opacity) at bottom
  - [x] 6.12 Test "White Top-to-Bottom" gradient at 80% opacity
  - [x] 6.13 Verify white gradient created with correct opacity and direction
  - [x] 6.14 Test "White Bottom-to-Top" gradient at 30% opacity
  - [x] 6.15 Verify white gradient created with correct opacity and direction
  - [x] 6.16 Test edge cases: 0% opacity (should be fully transparent), 100% opacity
  - [x] 6.17 Test error handling: click gradient button with no layer selected
  - [x] 6.18 Verify error message displays correctly
  - [x] 6.19 Verify gradients are placed above selected layer
  - [x] 6.20 Test gradient generation speed (should complete in <100ms)
  - [x] 6.21 Verify no console errors in Figma Developer Console
  - [x] 6.22 Test interaction between solid scrims and gradient scrims (both should work)

- [x] 7.0 Validate Phase 3 Deliverable
  - [x] 7.1 Verify all 4 gradient presets work correctly (Black/White × Top-to-Bottom/Bottom-to-Top)
  - [x] 7.2 Verify gradients respect opacity control (test multiple opacity values)
  - [x] 7.3 Verify gradient naming is consistent and descriptive
  - [x] 7.4 Verify gradients fade correctly (from color to transparent)
  - [x] 7.5 Verify all existing Phase 2 features still work (solid scrims, opacity control)
  - [x] 7.6 Document any bugs or issues found during testing
  - [x] 7.7 Verify Phase 3 deliverable: "Gradient scrims functional (v1.1)" is complete
