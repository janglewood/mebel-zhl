// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    palette: {
      fonts: {
        primary: string;
        navLink: string;
        navLinkActive: string;
      };
      colors: {
        white: string;
      };
    };
  }
}
