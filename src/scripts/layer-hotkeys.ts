const KEYBINDING_NAMESPACE = "layer-hotkeys";

export function init() {
  Hooks.once("init", async () => {
    const DEFAULT_KEYS_LAYER = {
      token: "KeyQ",
      measure: "KeyM",
      tiles: "KeyT",
      drawings: "KeyD",
      walls: "KeyW",
      lighting: "KeyL",
      sounds: "KeyS",
      notes: "KeyN",
    };

    const DEFAULT_KEYS_LAYER_KEYS = Object.keys(DEFAULT_KEYS_LAYER);

    const DEFAULT_KEYS_LAYER_TOOL = [
      "Digit1",
      "Digit2",
      "Digit3",
      "Digit4",
      "Digit5",
      "Digit6",
      "Digit7",
      "Digit8",
      "Digit9",
      "Digit0",
      "Minus",
      "Equal",
    ];

    let maxNumTools = 30;

    for (let i = 0; i < 30; i++) {
      game.keybindings.register("layer-hotkeys", `layer-control-${i}`, {
        name: `Layer Control ${i}`,
        hint: "Hotkey to activate {layerName}",
        editable: DEFAULT_KEYS_LAYER[DEFAULT_KEYS_LAYER_KEYS[i]]
          ? [
              {
                key: DEFAULT_KEYS_LAYER[DEFAULT_KEYS_LAYER_KEYS[i]],
              },
            ]
          : undefined,
        precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
        onDown: () => {
          if (i >= ui.controls.controls.length) return;

          const control = ui.controls.controls[i];

          // Skip controls  that aren't accessible for the user
          if (control.visible === false) return;

          // Get the ui element
          const button = $(
            `li.scene-control[data-control=${control.name}`
          );

          if (ui.controls.activeControl === control.name) {
            activateToolIndex(control, 0);
          }

          button.trigger("click");
        },
      });
    }

    for (let i = 0; i < maxNumTools; i++) {
      game.keybindings.register("layer-hotkeys", "layer-tool-" + i, {
        name: `Tool ${i + 1}`,
        hint: `Hotkey to activate tool ${i + 1}`,
        editable: DEFAULT_KEYS_LAYER_TOOL[i]
          ? [
              {
                key: DEFAULT_KEYS_LAYER_TOOL[i],
                modifiers: ["Shift"],
              },
            ]
          : undefined,
        precedence: CONST.KEYBINDING_PRECEDENCE.NORMAL,
        onDown: () => {
          const activeControl = ui.controls.controls.find(
            (e) => e.name === ui.controls.activeControl
          );

          if (!activeControl) return;

          activateToolIndex(activeControl, i);
        },
      });
    }
  });

  Hooks.on("renderKeybindingsConfig", (app: Application, html: JQuery, data: object) => {
    // Adjust the counter
    const controlCount = ui.controls.controls.filter(control => control.visible !== false).length;
    const maxToolsCount = Math.max(
      ...ui.controls.controls
        .filter((control) => control.visible !== false)
        .map((control) => control.tools.filter(tool => tool.visible !== false).length)
    );
    const spanCount = html.find("nav.filters div.layer-hotkeys span.count");

    spanCount.text(`[${controlCount + maxToolsCount}]`);

    // Rename and remove the entries
    let controlsElements = html.find('div.categories div.category-list section.category[data-category-id=layer-hotkeys]>ol.action-list li[data-action-id^="layer-hotkeys.layer-control"]');
    let toolsElements = html.find('div.categories div.category-list section.category[data-category-id=layer-hotkeys]>ol.action-list li[data-action-id^="layer-hotkeys.layer-tool"]');

    for (let i = 0; i < controlsElements.length; i++) {
      const li = controlsElements[i];

      // Rename
      if (i < ui.controls.controls.length && ui.controls.controls[i].visible !== false) {
        const titleElement = $(li).find("h4");
        const hintElement = $(li).find("p");

        const controlName = game.i18n.localize(ui.controls.controls[i].title);
        const hintText = hintElement.text().replace("{layerName}", controlName);

        titleElement.text(controlName);
        hintElement.text(hintText);
        continue;
      }

      li.remove();
    }

    for (let i = 0; i < toolsElements.length; i++) {
      const li = toolsElements[i];

      if (i < maxToolsCount) continue;

      li.remove();
    }

    ui.controls.render();
  });

  Hooks.on("renderSceneControls", (app: Application, html: JQuery, data: object) => {
    let scene_controls = html.find("ol.main-controls li.scene-control");
    let toolGroups = html.find("ol.sub-controls");

    for (let i = 0; i < scene_controls.length; i++) {
      const li = scene_controls[i];
      let keybindings = game.keybindings.get("layer-hotkeys", `layer-control-${i}`);

      if (keybindings.length) {
        li.title = appendKeybindings(li.title, keybindings);
      }
    }

    for (let groupIndex = 0; groupIndex < toolGroups.length; groupIndex++) {
      const toolGroup = toolGroups[groupIndex];
      const tools = $(toolGroup).find("li.control-tool");

      for (let i = 0; i < tools.length; i++) {
        const li = tools[i];
        let keybindings = game.keybindings.get("layer-hotkeys", `layer-tool-${i}`);

        if (keybindings.length) {
          li.title = appendKeybindings(li.title, keybindings);
        }
      }
    } 
  });
}

function appendKeybindings(string: string, keybindings: KeybindingActionBinding[]): string {
  let keybindingAppend = ` [ ${keybindings
    .map((keybind) =>
      keybind.modifiers?.length
        ? `${keybind.modifiers.join(
            " + "
          )} + ${KeyboardManager.getKeycodeDisplayString(keybind.key)}`
        : KeyboardManager.getKeycodeDisplayString(keybind.key)
    )
    .join(" or ")} ]`;
  
  return string + keybindingAppend;
}

function activateToolIndex(control: SceneControl, toolIndex: number) {
  let tools = control.tools.filter((tool) => tool.visible !== false);

  if (toolIndex >= tools.length) return;

  let tool = tools[toolIndex];

  // Handle Toggles
  if (tool.toggle) {
    tool.active = !tool.active;
    if (tool.onClick instanceof Function) tool.onClick(tool.active);
  }

  // Handle Buttons
  else if (tool.button) {
    if (tool.onClick instanceof Function) tool.onClick();
  }

  // Handle Tools
  else {
    control.activeTool = tool.name;
    if (tool.onClick instanceof Function) tool.onClick();
  }

  // Render the controls
  ui.controls.render();
}