export interface MyTheme {
  body: string;
  text: string;
  fontFamily: string;
  bodyRgba: string;
  textRgba: string;
}

export const lightTheme = {
  body: "#FFD0D5",
  text: "#000000",
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: "252, 246, 244",
  textRgba: "0,0,0",
};

export const darkTheme = {
  body: "#000000",
  text: "#FFD0D5",
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: "0,0,0",
  textRgba: "252, 246, 244",
};
