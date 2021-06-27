import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  user: {
    flexDirection: 'row',    
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    fontSize: 24,
    color: theme.colors.heading,
    marginRight: 6,
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading,
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
  },
  logout:{
    color: theme.colors.primary,
    fontFamily: theme.fonts.title700,
    marginTop: 33    
  },
  modal: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30
  },
  buttons: {
    flex: 1,
    padding: 24,    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'

  },
  button1: {
    flex: 1,
    marginRight:4,
  },
  button2:{
    flex: 1,
    marginLeft:4
  }
});