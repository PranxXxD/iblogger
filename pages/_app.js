/* eslint-disable react/jsx-filename-extension */
import React from "react";
import App, { Container } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import { GlobalStyle } from "../css/global";
import theme from "../src/Theme";

export default class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <React.StrictMode>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </React.StrictMode>
      </Container>
    );
  }
}
