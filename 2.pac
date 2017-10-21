var proxy = "PROXY 192.168.50.1:25;";
var hasOwnProperty = Object.hasOwnProperty;

function FindProxyForURL(url, host) {
                return proxy;
}
