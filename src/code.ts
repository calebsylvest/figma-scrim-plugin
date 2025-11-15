// Main plugin code that runs in Figma's sandbox environment
// This code has access to the Figma API but cannot access the browser DOM

figma.showUI(__html__, {
  width: 300,
  height: 400,
});

// Helper function to convert color string to RGB values
function getColorRGB(color: 'black' | 'white'): { r: number; g: number; b: number } {
  if (color === 'black') {
    return { r: 0, g: 0, b: 0 };
  } else if (color === 'white') {
    return { r: 1, g: 1, b: 1 };
  }
  // Default to black if invalid
  return { r: 0, g: 0, b: 0 };
}

// Message handler to receive messages from the UI
figma.ui.onmessage = (msg) => {
  if (msg.type === 'ready') {
    console.log('UI is ready');
  }

  if (msg.type === 'create-scrim') {
    // Validate that a layer is selected
    if (figma.currentPage.selection.length === 0) {
      figma.notify('Please select a layer to add a scrim', { error: true });
      return;
    }

    // Extract and validate color and opacity parameters
    const color = msg.color || 'black';
    const opacity = msg.opacity !== undefined ? msg.opacity : 50;

    // Validate color parameter
    if (color !== 'black' && color !== 'white') {
      figma.notify('Invalid color. Must be "black" or "white".', { error: true });
      return;
    }

    // Validate opacity parameter
    if (typeof opacity !== 'number' || opacity < 0 || opacity > 100) {
      figma.notify('Invalid opacity. Must be a number between 0 and 100.', { error: true });
      return;
    }

    const selection = figma.currentPage.selection[0];

    // Get the bounds of the selected layer
    const { x, y, width, height } = selection;

    // Create a rectangle scrim
    const scrim = figma.createRectangle();

    // Create dynamic scrim name
    const colorName = color.charAt(0).toUpperCase() + color.slice(1);
    scrim.name = `Scrim - ${colorName} ${opacity}%`;

    scrim.x = x;
    scrim.y = y;
    scrim.resize(width, height);

    // Get RGB color values
    const rgbColor = getColorRGB(color);

    // Set fill color with dynamic color and opacity
    scrim.fills = [
      {
        type: 'SOLID',
        color: rgbColor,
        opacity: opacity / 100, // Convert percentage to 0-1 scale
      },
    ];

    // Add scrim to the page
    figma.currentPage.appendChild(scrim);

    // Place scrim above the selected layer
    const selectionIndex = figma.currentPage.children.indexOf(selection);
    figma.currentPage.insertChild(selectionIndex + 1, scrim);

    figma.notify(`${colorName} scrim created at ${opacity}% opacity!`);
  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
