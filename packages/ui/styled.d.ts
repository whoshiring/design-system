// import original module definition
import 'styled-components'

// and extend!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      primary: string
      secondary: string
    }
  }
}
