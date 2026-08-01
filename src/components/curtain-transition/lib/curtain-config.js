const CURTAIN_COLUMNS = ["left", "center", "right"];
const CURTAIN_LAYERS = ["accent", "base"];
const PANEL_DURATION = 0.56;

function getPanelEnterDelay(_index, panel) {
  return (
    Number(panel.dataset.layer) * 0.12 + Number(panel.dataset.column) * 0.035
  );
}

function getPanelExitDelay(_index, panel) {
  return (
    (CURTAIN_LAYERS.length - 1 - Number(panel.dataset.layer)) * 0.12 +
    (CURTAIN_COLUMNS.length - 1 - Number(panel.dataset.column)) * 0.035
  );
}

export {
  CURTAIN_COLUMNS,
  CURTAIN_LAYERS,
  PANEL_DURATION,
  getPanelEnterDelay,
  getPanelExitDelay,
};
