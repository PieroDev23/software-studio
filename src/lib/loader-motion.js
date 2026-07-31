export const LOADER_COLUMNS = ["left", "center", "right"];
export const LOADER_LAYERS = ["accent", "base"];
export const LOADER_COLUMN_COUNT = LOADER_COLUMNS.length;
export const LOADER_LAYER_COUNT = LOADER_LAYERS.length;
export const LOADER_PANEL_DURATION = 0.56;

export function getLoaderPanelEnterDelay(panel) {
  return (
    Number(panel.dataset.layer) * 0.12 + Number(panel.dataset.column) * 0.035
  );
}

export function getLoaderPanelExitDelay(panel) {
  return (
    (LOADER_LAYER_COUNT - 1 - Number(panel.dataset.layer)) * 0.12 +
    (LOADER_COLUMN_COUNT - 1 - Number(panel.dataset.column)) * 0.035
  );
}
