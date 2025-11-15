// Main plugin code that runs in Figma's sandbox environment
// This code has access to the Figma API but cannot access the browser DOM

figma.showUI(__html__, {
  width: 300,
  height: 400,
});

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

    const selection = figma.currentPage.selection[0];

    // Get the bounds of the selected layer
    const { x, y, width, height } = selection;

    // Create a rectangle scrim
    const scrim = figma.createRectangle();
    scrim.name = 'Scrim - Black 50%';
    scrim.x = x;
    scrim.y = y;
    scrim.resize(width, height);

    // Set fill color (black with 50% opacity as placeholder)
    scrim.fills = [
      {
        type: 'SOLID',
        color: { r: 0, g: 0, b: 0 },
        opacity: 0.5,
      },
    ];

    // Add scrim to the page
    figma.currentPage.appendChild(scrim);

    // Place scrim above the selected layer
    const selectionIndex = figma.currentPage.children.indexOf(selection);
    figma.currentPage.insertChild(selectionIndex + 1, scrim);

    figma.notify('Scrim created successfully!');
  }

  if (msg.type === 'cancel') {
    figma.closePlugin();
  }
};
