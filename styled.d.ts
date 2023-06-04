// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {    
  primaryColor: string,
  secondaryColor: string,
  primaryFontColor: string,
  secondaryFontColor: string,
  tetiaryFontColor: string,
  hoverFontColor: string,
 cursorColor: string,
 cursorGlow: string
  }
}
