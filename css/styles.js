import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "*": {
        "fontFamily": "'Open Sans', sans-serif"
    },
    "color1": {
        "color": "#284907"
    },
    "color2": {
        "color": "#5B783E"
    },
    "color3": {
        "color": "#dcdec3"
    },
    "bgcolor1": {
        "backgroundColor": "#284907"
    },
    "bgcolor2": {
        "backgroundColor": "#5B783E"
    },
    "buttonbutton-primary": {
        "transition": "all 250ms",
        "color": "#FFF",
        "backgroundColor": "#284907",
        "borderColor": "#284907"
    },
    "input[type=\"submit\"]button-primary": {
        "transition": "all 250ms",
        "color": "#FFF",
        "backgroundColor": "#284907",
        "borderColor": "#284907"
    },
    "input[type=\"reset\"]button-primary": {
        "transition": "all 250ms",
        "color": "#FFF",
        "backgroundColor": "#284907",
        "borderColor": "#284907"
    },
    "input[type=\"button\"]button-primary": {
        "transition": "all 250ms",
        "color": "#FFF",
        "backgroundColor": "#284907",
        "borderColor": "#284907"
    },
    "buttonbutton-primary:hover": {
        "color": "#FFF",
        "backgroundColor": "#42463f",
        "borderColor": "#42463f"
    },
    "input[type=\"submit\"]button-primary:hover": {
        "color": "#FFF",
        "backgroundColor": "#42463f",
        "borderColor": "#42463f"
    },
    "input[type=\"reset\"]button-primary:hover": {
        "color": "#FFF",
        "backgroundColor": "#42463f",
        "borderColor": "#42463f"
    },
    "input[type=\"button\"]button-primary:hover": {
        "color": "#FFF",
        "backgroundColor": "#42463f",
        "borderColor": "#42463f"
    },
    "buttonbutton-primary:focus": {
        "color": "#FFF",
        "backgroundColor": "#42463f",
        "borderColor": "#42463f"
    },
    "input[type=\"submit\"]button-primary:focus": {
        "color": "#FFF",
        "backgroundColor": "#42463f",
        "borderColor": "#42463f"
    },
    "input[type=\"reset\"]button-primary:focus": {
        "color": "#FFF",
        "backgroundColor": "#42463f",
        "borderColor": "#42463f"
    },
    "input[type=\"button\"]button-primary:focus": {
        "color": "#FFF",
        "backgroundColor": "#42463f",
        "borderColor": "#42463f"
    },
    "center": {
        "textAlign": "center"
    },
    "header": {
        "marginTop": 40,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0
    },
    "footer": {
        "lineHeight": 40,
        "borderTop": "1px solid #ccc",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "fontSize": 10,
        "textAlign": "center",
        "color": "#666"
    },
    "footer-icon img": {
        "marginTop": 0,
        "marginRight": 0,
        "marginBottom": 40,
        "marginLeft": 0,
        "height": 90
    },
    "navbar": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 10,
        "marginLeft": 0,
        "paddingTop": 0,
        "paddingRight": 20,
        "paddingBottom": 0,
        "paddingLeft": 20,
        "textAlign": "center"
    },
    "navbar-item": {
        "display": "inline-block"
    },
    "navbar-item a": {
        "textDecoration": "none",
        "transition": "background-color 250ms",
        "display": "block",
        "lineHeight": 32,
        "paddingTop": 0,
        "paddingRight": 40,
        "paddingBottom": 0,
        "paddingLeft": 40,
        "marginTop": 10,
        "marginRight": 10,
        "marginBottom": 10,
        "marginLeft": 10,
        "cursor": "pointer",
        "fontSize": 15,
        "textTransform": "uppercase",
        "backgroundColor": "#dcdec3",
        "color": "#284907",
        "borderRadius": 30
    },
    "navbar-item a:hover": {
        "backgroundColor": "#eee"
    },
    "navbarsecondary": {
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5
    },
    "navbarsecondary navbar-item a": {
        "fontSize": 11,
        "marginTop": 5,
        "marginRight": 5,
        "marginBottom": 5,
        "marginLeft": 5,
        "paddingTop": 0,
        "paddingRight": 10,
        "paddingBottom": 0,
        "paddingLeft": 10,
        "lineHeight": 25,
        "backgroundColor": "#85867b",
        "color": "white"
    },
    "navbarsecondary navbar-itemactive a": {
        "backgroundColor": "black"
    },
    "navbarsecondary navbar-item a:hover": {
        "backgroundColor": "black"
    },
    "intro": {
        "fontSize": 16,
        "paddingTop": 40,
        "paddingRight": 40,
        "paddingBottom": 40,
        "paddingLeft": 40,
        "fontWeight": "100",
        "backgroundColor": "rgba(0, 0, 0, 0.5)",
        "color": "white",
        "textAlign": "center",
        "zIndex": 100
    },
    "splash": {
        "overflow": "hidden",
        "position": "relative",
        "textAlign": "center",
        "minHeight": 200
    },
    "splash img": {
        "position": "absolute",
        "left": 0,
        "top": 0,
        "display": "block",
        "zIndex": -100,
        "width": "auto"
    },
    "products img": {
        "float": "left"
    },
    "products table": {
        "marginBottom": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "products th": {
        "marginBottom": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "products td": {
        "marginBottom": 0,
        "paddingTop": 0,
        "paddingRight": 0,
        "paddingBottom": 0,
        "paddingLeft": 0,
        "border": 0
    },
    "product-header": {
        "borderBottom": "5px solid #284907",
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 20,
        "marginLeft": 0,
        "fontWeight": "bold",
        "textTransform": "uppercase",
        "color": "#284907"
    },
    "product-title": {
        "marginTop": 15,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0,
        "textAlign": "center"
    }
});