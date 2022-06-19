import { extendTheme } from "@chakra-ui/react";

const theme = {
  config: {
    initialColorMode: "dark",
    useSystemColorMode: true,
  },
  styles: {
    global: {
      // body: {
      //   margin: 0,
      //   padding: 0,
      //   border: 0,
      //   "font-size": "100%",
      //   font: "inherit",
      //   "vertical-align": "baseline",
      //   "font-family":
      //     "-apple-system, BlinkMacSystemFont,'egoe UI', 'Roboto', 'Oxygen', 'Ubuntu','Cantarell','Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      //   "-webkit-font-smoothing": "antialiased",
      //   "-moz-osx-font-smoothing": "grayscale",
      // },
      // code: {
      //   "font-family":
      //     " source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
      // },
    },
  },
};

export default extendTheme(theme);
