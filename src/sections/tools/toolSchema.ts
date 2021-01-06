export enum ToolOption {
  MOVE,
  ARTBOARD,
  RECTANGULAR_MARQUEE,
  ELLIPTICAL_MARQUEE,
  SINGLE_ROW_MARQUEE,
  SINGLE_COLUMN_MARQUEE,
  LASSO,
  POYGONAL_LASSO,
  MAGNETIC_LASSO,
  OBJECT_SELECTION,
  QUICK_SELECTION,
  MAGIC_WAND,
  CROP,
  PERSPECTIVE_CROP,
  SLICE,
  SLICE_SELECT,
  FRAME,
  EYEDROPPER,
  THREE_D_MATERIAL_EYEDROPPER,
  COLOR_SAMPLER,
  RULER,
  NOTE,
  RED_EYE,
  BRUSH,
  PENCIL,
  COLOR_REPLACEMENT,
  MIXER_BRUSH,
  CLONE_STAMP,
  PATTERN_STAMP,
  HISTORY_BRUSH,
  ART_HISTORY_BRUSH,
  ERASER,
  BACKGROUND_ERASER,
  MAGIC_ERASER,
  GRADIENT,
  PAINT_BUCKET,
  THREE_D_MATERIAL_DROP,
  BLUR,
  SHARPEN,
  SMUDGE,
  DODGE,
  BURN,
  SPONGE,
  PEN,
  FREEFORM_PEN,
  CURVATURE_PEN,
  ADD_ANCHOR_POINT,
  DELETE_ANCHOR_POINT,
  CONVERT_POINT,
  HORIZONTAL_TYPE,
  VERTICAL_TYPE,
  VERTICAL_TYPE_MASK,
  HORIZONTAL_TYPE_MASK,
  PATH_SELECTION,
  DIRECT_SELECTION,
  RECTANGLE,
  ROUNDED_RECTANGLE,
  ELLIPSE,
  POLYGON,
  LINE,
  CUSTOM_SHAPE,
  HAND,
  ROTATE_VIEW,
  ZOOM,
  EDIT_TOOLBAR,
}

export type ToolType = {
  option: ToolOption;
  selected: boolean;
};

export type ToolCollection = {
  active: boolean;
  tools: ToolType[];
};

export const tools: ToolCollection[] = [
  {
    active: false,
    tools: [
      {
        option: ToolOption.MOVE,
        selected: false,
      },
    ],
  },
];
