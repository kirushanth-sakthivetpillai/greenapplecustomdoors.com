import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
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
        "marginBottom": 20,
        "marginLeft": 0,
        "fontSize": 10,
        "textAlign": "right",
        "color": "#666"
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
        "transition": "background-color 250ms",
        "display": "block",
        "lineHeight": 28,
        "paddingTop": 0,
        "paddingRight": 40,
        "paddingBottom": 0,
        "paddingLeft": 40,
        "marginTop": 10,
        "marginRight": 20,
        "marginBottom": 10,
        "marginLeft": 20,
        "cursor": "pointer",
        "fontSize": 12,
        "textTransform": "uppercase",
        "backgroundColor": "#dcdec3",
        "color": "#284907",
        "borderRadius": 30
    },
    "navbar-item a:hover": {
        "backgroundColor": "#eee"
    },
    "splash": {
        "position": "relative",
        "textAlign": "center"
    },
    "splash img": {
        "display": "block",
        "width": "100%"
    },
    "splash a": {
        "marginTop": 20,
        "marginRight": 20,
        "marginBottom": 20,
        "marginLeft": 20
    }
});