export const enum LSKeys {
  ShowThx = "ab_show_thx_ghk_4000_4",
  ShowProcessing = "ab_show_processing_ghk_4000_4",
  ShowThanks = "ab_show_thanks_ghk_4000_4",
  ClickThanks = "ab_click_thanks_ghk_4000_4",
}

export interface LSData {
  [LSKeys.ShowThx]: boolean | null;
  [LSKeys.ShowProcessing]: boolean | null;
  [LSKeys.ShowThanks]: boolean | null;
  [LSKeys.ClickThanks]: boolean | null;
}

const getItem = <K extends LSKeys>(
  key: K,
  defaultValue: LSData[K],
): LSData[K] => {
  try {
    const v = localStorage.getItem(key);
    return v ? JSON.parse(v) : defaultValue;
  } catch {
    return defaultValue;
  }
};
const setItem = <K extends LSKeys>(key: K, value: LSData[K]) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(error);
  }
};
const deleteItem = <K extends LSKeys>(key: K) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(error);
  }
};

export const LS = {
  getItem,
  setItem,
  deleteItem,
};
