export interface InputState {
  text: string;
  status: 'basic' | 'danger' | 'success';
}

export const INITIAL_INPUT_STATE: InputState = {
  text: '',
  status: 'basic',
};

export const FONT_SIZES = {
  H1: 34,
  H2: 30,
  H3: 26,
  H4: 23,
  H5: 20,
  P: 16,
  S: 14,
};

export const LINE_HEIGHTS = {
  H1: 40,
  H2: 30,
  H3: 26,
  H4: 25,
  H5: 20,
  P: 16,
  S: 14,
};
export const COLORS = {
  DARK_SAGE: '#47764f',
  GREY: '#8b959a',
  DARK_GREY: '#777',
  PALE_GREY: '#e2e6ea',
  DANGER_RED: '#931c1c',
  LIGHT_GREY: '#ddd',
  DULL_ORANGE: '#e98a22',
  DARK: '#16132b',
  DARK_GREY_BLUE: '#2c3e50',
};
export const SIZES = {
  DEFAULT_PADDING: 15,
  BORDER_RADIUS: 10,
};

export const FONT_FAMILIES = {
  BLACK: 'Poppins-Black',
  BOLD: 'Poppins-Bold',
  EXTRA_BOLD: 'Poppins-ExtraBold',
  EXTRA_LIGHT: 'Poppins-ExtraLight',
  LIGHT: 'Poppins-Light',
  MEDIUM: 'Poppins-Medium',
  REGULAR: 'Poppins-Regular',
  SEMI_BOLD: 'Poppins-SemiBold',
  THIN: 'Poppins-Thin',
};
