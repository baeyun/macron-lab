export default
`// macron.CurrentWindow.frameless()

var sys = require('macron').System;
var notFoundSnippet = 'Unable to detect';

document.getElementById('plat').innerHTML += sys.platform() || notFoundSnippet;
document.getElementById('ver').innerHTML += sys.system() || notFoundSnippet;
document.getElementById('mach').innerHTML += sys.machine() || notFoundSnippet;
document.getElementById('node').innerHTML += sys.node() || notFoundSnippet;
document.getElementById('proc').innerHTML += sys.processor() || notFoundSnippet;
document.getElementById('rel').innerHTML += sys.release() || notFoundSnippet;
document.getElementById('uname').innerHTML += sys.uname() || notFoundSnippet;
document.getElementById('dist').innerHTML += sys.dist() || notFoundSnippet;
document.getElementById('java').innerHTML += sys.java_ver() || notFoundSnippet;
document.getElementById('win32').innerHTML += sys.win32_ver() || notFoundSnippet;
`