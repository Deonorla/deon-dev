import { MyTheme } from "./src/components/Minor/theme/Themes";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends MyTheme {}
}
