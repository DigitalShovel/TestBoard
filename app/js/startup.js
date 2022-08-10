/////// Functions to run if login is Authorized ////////
import { readItem, readCT } from "./script"

readItem();
/////////////// Refresh chart every 5 seconds /////////////
var inverval_timer = setInterval(function () {
    readCT();
}, 5000);
/////////////////////////////////////////////////////////