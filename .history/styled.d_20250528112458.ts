import { MyTheme } from "./Themes";
import "styled-components";

declare module "styled-components" {
  export type DefaultTheme = MyTheme;
}
