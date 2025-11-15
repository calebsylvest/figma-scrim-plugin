# Product Requirements Document: Figma Scrim & Overlay Plugin

## 1. Introduction/Overview

### Problem Statement
Designers frequently need to add overlay layers (scrims) to images, mockups, and UI designs to improve text readability, create depth, or establish visual hierarchy. Currently, this process requires manually creating rectangles, adjusting fills, setting opacity values, and experimenting with colors—a repetitive and time-consuming workflow.

### Solution
The Figma Scrim & Overlay Plugin streamlines overlay creation by providing quick-access presets, intelligent color extraction from images, and customizable gradient options. Designers can apply professional scrims in seconds rather than minutes.

### Goal
Enable all Figma designers to create high-quality overlay layers efficiently through an intuitive plugin interface with preset options and intelligent color suggestions.

---

## 2. Goals

1. **Reduce time to create scrims** from ~2-3 minutes to <15 seconds
2. **Provide intelligent color recommendations** by extracting dominant colors from selected images
3. **Deliver a functional MVP** that can be iteratively tested and enhanced
4. **Ensure ease of use** suitable for designers of all skill levels
5. **Maintain plugin performance** with lightweight, fast execution

---

## 3. User Stories

**As a UI designer**, I want to quickly add a dark overlay to a hero image so that white text is readable without manually creating and styling rectangles.

**As a mobile app designer**, I want to extract colors from a brand image and apply them as a gradient scrim so that my designs maintain color consistency.

**As a web designer**, I want preset scrim options (black/white with common opacities) so that I can rapidly prototype different overlay styles.

**As a product designer**, I want scrims to automatically fit my selected image bounds so that I don't have to manually resize overlay layers.

**As a visual designer**, I want to test the plugin incrementally as features are built so that I can provide feedback early in development.

---

## 4. Functional Requirements

### 4.1 MVP Core Requirements (v1.0)

#### Plugin Installation & Setup
1. The plugin must be installable in Figma via the standard plugin installation process
2. The plugin must appear in the Figma plugins menu after installation
3. The plugin must successfully activate and open a control panel interface when launched
4. The plugin must not cause Figma performance degradation or crashes

#### Basic Scrim Generation
5. The plugin must create a rectangle shape that matches the bounds of the user's current selection
6. If no selection exists, the plugin must display a helpful error message (e.g., "Please select a layer to add a scrim")
7. The rectangle must be created as a new layer above the selected object
8. The rectangle must be named descriptively (e.g., "Scrim - Black 50%")

#### Preset Scrim Options
9. The plugin must provide preset buttons for common scrim configurations:
   - Black scrim with solid fill
   - White scrim with solid fill
10. Each preset button must allow the user to specify opacity before or during application
11. Clicking a preset button must immediately generate the scrim on the canvas
12. The plugin must confirm successful scrim creation (visual feedback in the UI)

#### User Interface
13. The plugin must display a control panel with clearly labeled sections for different scrim types
14. The control panel must include:
    - Preset scrim buttons (black, white)
    - Opacity control (slider or input field, 0-100%)
    - Apply/Generate button (if not auto-applied on preset click)
15. The UI must be responsive and provide feedback for user actions

### 4.2 Enhanced Features (v1.1+)

#### Gradient Scrims
16. The plugin must support linear gradient overlays
17. Gradient presets must include:
    - Top-to-bottom (fade from opaque to transparent)
    - Bottom-to-top (fade from opaque to transparent)
18. Users must be able to select gradient direction via preset buttons
19. Gradients must respect the user-defined opacity values

#### Image Color Extraction
20. The plugin must analyze the currently selected image layer in Figma
21. The plugin must extract the 5 most dominant colors from the selected image
22. Extracted colors must be displayed in the plugin UI (as color swatches)
23. Clicking a color swatch must immediately apply that color as a scrim to the selection
24. The color extraction process must complete within 2-3 seconds for typical images
25. If the selected layer is not an image, the plugin must display a helpful message (e.g., "Please select an image layer to extract colors")

#### Opacity Controls
26. Users must be able to set opacity via a slider (0-100%)
27. Users must be able to input opacity via a text field for precise control
28. Opacity changes must update in real-time preview (if technically feasible) or on apply

### 4.3 Future Enhancements (v2.0+)

29. **Custom Gradient Control**: Allow users to define custom gradient angles (not just top-to-bottom/bottom-to-top)
30. **Custom Sizing**: Enable scrims that extend beyond selection bounds or are independently sized
31. **Custom Color Presets**: Allow users to save their own favorite color/opacity combinations
32. **Blend Modes**: Support different blend modes (multiply, overlay, screen, etc.)
33. **Multi-layer Selection**: Apply scrims to multiple selected layers simultaneously

---

## 5. Non-Goals (Out of Scope for MVP)

The following features will **not** be included in the initial release to maintain focus and enable rapid testing:

- **Keyboard shortcuts** for scrim generation
- **Custom gradient angles** (only top-to-bottom and bottom-to-top presets)
- **Custom scrim sizing** (only selection-bound scrims)
- **User-saved preset configurations** (may be added post-MVP if valuable)
- **Advanced blend modes** (normal blend mode only)
- **Animation or transition effects**
- **Scrim templates** or style libraries
- **Multi-language support** (English only for MVP)
- **Batch processing** of multiple layers
- **Undo/redo within the plugin** (Figma's native undo/redo will handle this)

---

## 6. Design Considerations

### UI/UX Requirements

#### Layout
- **Panel-based interface** with clear sections:
  - "Preset Scrims" section (buttons for black/white)
  - "Gradient Scrims" section (buttons for direction presets)
  - "Color from Image" section (color swatch display)
  - "Opacity Control" section (slider + input field)

#### Visual Design
- Use Figma's design system colors and typography for consistency
- Buttons should be clearly labeled with icons and text
- Color swatches should be large enough to distinguish colors (minimum 40x40px)
- Include hover states and active states for interactive elements

#### User Feedback
- Display loading states when extracting colors from images
- Show success confirmation when scrim is created
- Provide clear error messages for invalid selections
- Include tooltips for complex controls

#### Accessibility
- Ensure sufficient color contrast for all text
- Support keyboard navigation where feasible
- Use semantic HTML for screen reader compatibility

---

## 7. Technical Considerations

### Technology Stack

#### Language: TypeScript (Recommended)
**Rationale**: TypeScript is strongly recommended for Figma plugin development because:
- Figma's Plugin API has excellent TypeScript definitions
- Type safety prevents common runtime errors
- Better IDE support (autocomplete, inline documentation)
- Easier to maintain and refactor as the plugin grows
- Industry standard for Figma plugin development

**Recommendation**: Use TypeScript for this project.

---

#### UI Framework: Vanilla JavaScript vs React

**Vanilla JavaScript:**
- **Pros**:
  - Lightweight bundle size (faster load times)
  - No build complexity or dependencies
  - Sufficient for simpler UIs
  - Direct DOM manipulation is straightforward
- **Cons**:
  - More manual DOM updates
  - Can become unwieldy with complex state management
  - Harder to maintain as features grow

**React:**
- **Pros**:
  - Excellent for complex, stateful UIs
  - Component reusability
  - Easier state management (especially for opacity controls, color swatches, etc.)
  - Better developer experience with modern tooling
  - Scales well as features are added (gradients, presets, color extraction UI)
- **Cons**:
  - Larger bundle size (~40-50KB minified for React + ReactDOM)
  - Requires build tooling (webpack/vite)
  - Slightly more complex setup

**Recommendation**: **Use React** for this plugin. Given the detailed control panel requirements (multiple sections, dynamic color swatches, opacity controls, gradient options), React will provide:
1. Cleaner state management for UI updates
2. Easier component organization (PresetButton, ColorSwatch, OpacityControl, etc.)
3. Better maintainability as the plugin evolves
4. Industry-standard patterns that junior developers will recognize

The bundle size tradeoff is acceptable for the improved developer experience and maintainability.

---

#### Color Extraction Library

**Option 1: `extract-colors`** (https://www.npmjs.com/package/extract-colors)
- **Pros**:
  - Simple API
  - Works in browser environments
  - Actively maintained
  - Good documentation
- **Cons**:
  - Limited customization options
  - Performance may vary with large images

**Option 2: `node-vibrant`** (https://www.npmjs.com/package/node-vibrant)
- **Pros**:
  - More sophisticated color extraction (uses Vibrant algorithm)
  - Identifies color palettes (Vibrant, Muted, Dark, Light variations)
  - Widely used and well-tested
  - Good performance
  - Returns RGB values and population data
- **Cons**:
  - Slightly larger bundle size
  - More complex API (may be overkill for simple extraction)

**Option 3: `color-thief`** (https://www.npmjs.com/package/colorthief)
- **Pros**:
  - Very lightweight
  - Simple API (getPalette() returns array of colors)
  - Battle-tested (used widely in production)
  - Works directly with image data
- **Cons**:
  - No TypeScript definitions (need @types or custom types)
  - Less sophisticated color selection

**Recommendation**: **Use `node-vibrant`** for this plugin. Reasons:
1. Provides high-quality, perceptually distinct colors (better than simple clustering)
2. Returns exactly 6 color swatches (Vibrant, Muted, Dark Vibrant, Dark Muted, Light Vibrant, Light Muted) - close to the requested 5 colors
3. Well-maintained and actively used in the design community
4. TypeScript support available
5. Better handles edge cases (images with limited color ranges)

If bundle size becomes a concern during testing, fallback to `color-thief` as a lightweight alternative.

---

#### Figma Plugin API Integration Points

**Key APIs to Use:**
1. `figma.currentPage.selection` - Get user's selected layers
2. `figma.createRectangle()` - Create scrim shapes
3. `figma.exportAsync()` - Export image data for color extraction
4. `fills` property - Set colors, gradients, and opacity
5. `figma.ui` - Display plugin UI panel

**Data Flow:**
1. User selects layer → Plugin reads selection via API
2. User clicks preset → Plugin creates rectangle with specified fill
3. User clicks "Extract Colors" → Plugin exports image → Processes with `node-vibrant` → Displays swatches
4. User clicks color swatch → Plugin applies color as fill to new rectangle

---

### Dependencies

**Required:**
- `@figma/plugin-typings` - Figma API type definitions
- `react` + `react-dom` - UI framework
- `node-vibrant` - Color extraction
- TypeScript compiler

**Development:**
- Bundler (Webpack or Vite recommended for Figma plugins)
- ESLint + Prettier (code quality)
- Type definitions for all libraries

---

### File Structure (Proposed)

```
figma-scrim-plugin/
├── manifest.json          # Figma plugin manifest
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── src/
│   ├── code.ts           # Main plugin code (runs in Figma sandbox)
│   ├── ui/
│   │   ├── App.tsx       # Main React component
│   │   ├── components/
│   │   │   ├── PresetButtons.tsx
│   │   │   ├── GradientControls.tsx
│   │   │   ├── ColorSwatches.tsx
│   │   │   └── OpacityControl.tsx
│   │   ├── ui.html       # Plugin UI entry point
│   │   └── styles.css    # UI styles
│   └── utils/
│       ├── colorExtraction.ts
│       └── scrimGenerator.ts
├── dist/                 # Build output
└── README.md
```

---

### Performance Considerations

1. **Image Processing**: Limit color extraction to images <10MB to prevent freezing
2. **Bundle Size**: Keep total bundle under 500KB (React + libraries + code)
3. **Load Time**: Plugin should open in <1 second
4. **Scrim Generation**: Should complete in <100ms for typical selections

---

### Security Considerations

1. No external API calls (all processing happens locally)
2. No data storage or transmission (privacy-safe)
3. Only accesses user's selected layers (no unauthorized data access)

---

## 8. Success Metrics

### MVP Success Criteria (v1.0)

**Technical Metrics:**
1. Plugin installs successfully in Figma without errors (100% success rate)
2. Control panel opens in <1 second
3. Preset scrims generate in <100ms
4. No crashes or errors during normal operation

**User Experience Metrics:**
1. Time to create basic scrim: <15 seconds (vs. ~2-3 minutes manually)
2. User can complete workflow without referring to documentation
3. 90%+ of scrim generation attempts succeed on first try

### Post-MVP Success Metrics (v1.1+)

**Adoption Metrics:**
1. 100+ active installations within first month
2. 10+ daily active users
3. Average 5+ scrims created per user session

**Feature Usage Metrics:**
1. 60%+ of users try color extraction feature
2. 40%+ of users use gradient options
3. 80%+ of users use preset buttons (vs. manual creation)

**Quality Metrics:**
1. <5% error rate for color extraction
2. 95%+ user satisfaction (if feedback is collected)
3. <2 seconds for color extraction on typical images

---

## 9. Open Questions

### Questions to Address During Development

1. **Image Export Format**: What format should be used when exporting images for color extraction (PNG, JPEG, SVG handling)?

2. **Error Handling**: How should the plugin handle edge cases like:
   - Very small selections (<10px)?
   - Selections with complex masks or effects?
   - Multiple layers selected simultaneously?

3. **Scrim Naming Convention**: Should scrims be named based on:
   - Color and opacity (e.g., "Scrim - Black 50%")?
   - Source (e.g., "Scrim from Image")?
   - User preference?

4. **Color Extraction Timing**: Should color extraction:
   - Happen automatically when an image is selected?
   - Require a manual "Extract Colors" button click?
   - Cache results for the same image?

5. **Opacity Default Values**: What should the default opacity be for:
   - Black presets (50%? 60%?)?
   - White presets (30%? 40%?)?
   - Gradient presets?

6. **Layer Positioning**: Should the scrim layer be:
   - Always placed directly above the selected layer?
   - Placed at the top of the layer stack?
   - User-configurable?

7. **Testing Strategy**: What testing approach should be used?
   - Manual testing only?
   - Automated unit tests for color extraction?
   - User acceptance testing with designers?

8. **Version Control & Deployment**: How will plugin versions be managed?
   - GitHub releases?
   - Figma Community publishing?
   - Beta testing process?

### Areas Needing User Feedback Post-MVP

1. Are 5 extracted colors the right number, or would 3 or 7 be better?
2. Do users prefer automatic color application or selection-before-apply?
3. What additional gradient directions are most valuable?
4. What custom preset configurations do users want to save?
5. Should the plugin support blend modes (multiply, overlay, etc.)?

---

## Appendix: Development Phases

### Phase 1: Foundation (Week 1-2)
- Set up project structure (TypeScript, React, bundler)
- Create basic Figma plugin manifest
- Implement plugin installation and activation
- Build basic UI panel with placeholder components
- **Deliverable**: Plugin opens successfully in Figma

### Phase 2: MVP Core Features (Week 3-4)
- Implement preset scrim generation (black/white solid fills)
- Add opacity controls (slider + input)
- Implement selection-bound rectangle creation
- Add error handling for invalid selections
- **Deliverable**: Functional preset scrims (v1.0 MVP)

### Phase 3: Gradient Support (Week 5)
- Add linear gradient generation
- Implement top-to-bottom and bottom-to-top presets
- Integrate opacity controls with gradients
- **Deliverable**: Gradient scrims functional (v1.1)

### Phase 4: Color Extraction (Week 6-7)
- Integrate `node-vibrant` library
- Implement image export and color analysis
- Build color swatch UI components
- Add click-to-apply functionality
- Handle edge cases and errors
- **Deliverable**: Image color extraction functional (v1.2)

### Phase 5: Polish & Testing (Week 8)
- UI/UX refinements
- Performance optimization
- Comprehensive testing
- Bug fixes
- Documentation (README, inline comments)
- **Deliverable**: Production-ready plugin

### Phase 6: Future Enhancements (Post-Launch)
- Custom gradient angles
- Custom sizing options
- User-saved presets
- Blend modes
- Additional features based on user feedback

---

## Document History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2025-11-14 | Claude Code | Initial PRD creation |

---

**Next Steps**:
1. Review and approve this PRD
2. Set up development environment
3. Begin Phase 1 (Foundation) implementation
4. Schedule regular testing checkpoints for iterative feedback
