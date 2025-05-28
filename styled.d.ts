import { MyTheme } from "./src/components/theme/Themes";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
