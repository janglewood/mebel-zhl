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
        white: string;
        error: string;
      };
      colors: {
        white: string;
        violet: string;
      };
      borders: {
        primary: string;
        error: string;
      };
      backgrounds: {
        buttons: {
          primary: string;
          disabled: string;
          secondary: string;
        };
      };
    };
  }
}
