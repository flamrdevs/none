type IconNodeChild = readonly [tag: string, attrs: Record<string, string | number>];
const icons = {
	"activity": [["path",{"d":"M22 12h-4l-3 9L9 3l-3 9H2"}]],
	"alert-circle": [["circle",{"cx":"12","cy":"12","r":"10"}],["line",{"x1":"12","x2":"12","y1":"8","y2":"12"}],["line",{"x1":"12","x2":"12.01","y1":"16","y2":"16"}]],
	"alert-octagon": [["polygon",{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}],["line",{"x1":"12","x2":"12","y1":"8","y2":"12"}],["line",{"x1":"12","x2":"12.01","y1":"16","y2":"16"}]],
	"alert-triangle": [["path",{"d":"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"}],["path",{"d":"M12 9v4"}],["path",{"d":"M12 17h.01"}]],
	"aperture": [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m14.31 8 5.74 9.94"}],["path",{"d":"M9.69 8h11.48"}],["path",{"d":"m7.38 12 5.74-9.94"}],["path",{"d":"M9.69 16 3.95 6.06"}],["path",{"d":"M14.31 16H2.83"}],["path",{"d":"m16.62 12-5.74 9.94"}]],
	"archive": [["rect",{"width":"20","height":"5","x":"2","y":"3","rx":"1"}],["path",{"d":"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"}],["path",{"d":"M10 12h4"}]],
	"area-chart": [["path",{"d":"M3 3v18h18"}],["path",{"d":"M7 12v5h12V8l-5 5-4-4Z"}]],
	"arrow-down": [["path",{"d":"M12 5v14"}],["path",{"d":"m19 12-7 7-7-7"}]],
	"arrow-left": [["path",{"d":"m12 19-7-7 7-7"}],["path",{"d":"M19 12H5"}]],
	"arrow-right": [["path",{"d":"M5 12h14"}],["path",{"d":"m12 5 7 7-7 7"}]],
	"arrow-up": [["path",{"d":"m5 12 7-7 7 7"}],["path",{"d":"M12 19V5"}]],
	"award": [["circle",{"cx":"12","cy":"8","r":"6"}],["path",{"d":"M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"}]],
	"ban": [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m4.9 4.9 14.2 14.2"}]],
	"bar-chart": [["line",{"x1":"12","x2":"12","y1":"20","y2":"10"}],["line",{"x1":"18","x2":"18","y1":"20","y2":"4"}],["line",{"x1":"6","x2":"6","y1":"20","y2":"16"}]],
	"barcode": [["path",{"d":"M3 5v14"}],["path",{"d":"M8 5v14"}],["path",{"d":"M12 5v14"}],["path",{"d":"M17 5v14"}],["path",{"d":"M21 5v14"}]],
	"bell": [["path",{"d":"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"}],["path",{"d":"M10.3 21a1.94 1.94 0 0 0 3.4 0"}]],
	"blocks": [["rect",{"width":"7","height":"7","x":"14","y":"3","rx":"1"}],["path",{"d":"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"}]],
	"bot": [["path",{"d":"M12 8V4H8"}],["rect",{"width":"16","height":"12","x":"4","y":"8","rx":"2"}],["path",{"d":"M2 14h2"}],["path",{"d":"M20 14h2"}],["path",{"d":"M15 13v2"}],["path",{"d":"M9 13v2"}]],
	"box": [["path",{"d":"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{"d":"m3.3 7 8.7 5 8.7-5"}],["path",{"d":"M12 22V12"}]],
	"braces": [["path",{"d":"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1"}],["path",{"d":"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1"}]],
	"brackets": [["path",{"d":"M16 3h3v18h-3"}],["path",{"d":"M8 21H5V3h3"}]],
	"calendar": [["path",{"d":"M8 2v4"}],["path",{"d":"M16 2v4"}],["rect",{"width":"18","height":"18","x":"3","y":"4","rx":"2"}],["path",{"d":"M3 10h18"}]],
	"camera": [["path",{"d":"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"}],["circle",{"cx":"12","cy":"13","r":"3"}]],
	"candlestick-chart": [["path",{"d":"M9 5v4"}],["rect",{"width":"4","height":"6","x":"7","y":"9","rx":"1"}],["path",{"d":"M9 15v2"}],["path",{"d":"M17 3v2"}],["rect",{"width":"4","height":"8","x":"15","y":"5","rx":"1"}],["path",{"d":"M17 13v3"}],["path",{"d":"M3 3v18h18"}]],
	"clock": [["circle",{"cx":"12","cy":"12","r":"10"}],["polyline",{"points":"12 6 12 12 16 14"}]],
	"code": [["polyline",{"points":"16 18 22 12 16 6"}],["polyline",{"points":"8 6 2 12 8 18"}]],
	"coffee": [["path",{"d":"M17 8h1a4 4 0 1 1 0 8h-1"}],["path",{"d":"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"}],["line",{"x1":"6","x2":"6","y1":"2","y2":"4"}],["line",{"x1":"10","x2":"10","y1":"2","y2":"4"}],["line",{"x1":"14","x2":"14","y1":"2","y2":"4"}]],
	"command": [["path",{"d":"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3"}]],
	"compass": [["circle",{"cx":"12","cy":"12","r":"10"}],["polygon",{"points":"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}]],
	"component": [["path",{"d":"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"}],["path",{"d":"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"}],["path",{"d":"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"}],["path",{"d":"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"}]],
	"construction": [["rect",{"x":"2","y":"6","width":"20","height":"8","rx":"1"}],["path",{"d":"M17 14v7"}],["path",{"d":"M7 14v7"}],["path",{"d":"M17 3v3"}],["path",{"d":"M7 3v3"}],["path",{"d":"M10 14 2.3 6.3"}],["path",{"d":"m14 6 7.7 7.7"}],["path",{"d":"m8 6 8 8"}]],
	"copyright": [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M14.83 14.83a4 4 0 1 1 0-5.66"}]],
	"cpu": [["rect",{"x":"4","y":"4","width":"16","height":"16","rx":"2"}],["rect",{"x":"9","y":"9","width":"6","height":"6"}],["path",{"d":"M15 2v2"}],["path",{"d":"M15 20v2"}],["path",{"d":"M2 15h2"}],["path",{"d":"M2 9h2"}],["path",{"d":"M20 15h2"}],["path",{"d":"M20 9h2"}],["path",{"d":"M9 2v2"}],["path",{"d":"M9 20v2"}]],
	"database": [["ellipse",{"cx":"12","cy":"5","rx":"9","ry":"3"}],["path",{"d":"M3 5V19A9 3 0 0 0 21 19V5"}],["path",{"d":"M3 12A9 3 0 0 0 21 12"}]],
	"dices": [["rect",{"width":"12","height":"12","x":"2","y":"10","rx":"2","ry":"2"}],["path",{"d":"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6"}],["path",{"d":"M6 18h.01"}],["path",{"d":"M10 14h.01"}],["path",{"d":"M15 6h.01"}],["path",{"d":"M18 9h.01"}]],
	"download": [["path",{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{"points":"7 10 12 15 17 10"}],["line",{"x1":"12","x2":"12","y1":"15","y2":"3"}]],
	"external-link": [["path",{"d":"M15 3h6v6"}],["path",{"d":"M10 14 21 3"}],["path",{"d":"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]],
	"fingerprint": [["path",{"d":"M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4"}],["path",{"d":"M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2"}],["path",{"d":"M17.29 21.02c.12-.6.43-2.3.5-3.02"}],["path",{"d":"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"}],["path",{"d":"M8.65 22c.21-.66.45-1.32.57-2"}],["path",{"d":"M14 13.12c0 2.38 0 6.38-1 8.88"}],["path",{"d":"M2 16h.01"}],["path",{"d":"M21.8 16c.2-2 .131-5.354 0-6"}],["path",{"d":"M9 6.8a6 6 0 0 1 9 5.2c0 .47 0 1.17-.02 2"}]],
	"flag": [["path",{"d":"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"}],["line",{"x1":"4","x2":"4","y1":"22","y2":"15"}]],
	"flame": [["path",{"d":"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"}]],
	"focus": [["circle",{"cx":"12","cy":"12","r":"3"}],["path",{"d":"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{"d":"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{"d":"M7 21H5a2 2 0 0 1-2-2v-2"}]],
	"folder": [["path",{"d":"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]],
	"frame": [["line",{"x1":"22","x2":"2","y1":"6","y2":"6"}],["line",{"x1":"22","x2":"2","y1":"18","y2":"18"}],["line",{"x1":"6","x2":"6","y1":"2","y2":"22"}],["line",{"x1":"18","x2":"18","y1":"2","y2":"22"}]],
	"gantt-chart": [["path",{"d":"M8 6h10"}],["path",{"d":"M6 12h9"}],["path",{"d":"M11 18h7"}]],
	"gem": [["path",{"d":"M6 3h12l4 6-10 13L2 9Z"}],["path",{"d":"M11 3 8 9l4 13 4-13-3-6"}],["path",{"d":"M2 9h20"}]],
	"gift": [["rect",{"x":"3","y":"8","width":"18","height":"4","rx":"1"}],["path",{"d":"M12 8v13"}],["path",{"d":"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"}],["path",{"d":"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"}]],
	"git-branch": [["line",{"x1":"6","x2":"6","y1":"3","y2":"15"}],["circle",{"cx":"18","cy":"6","r":"3"}],["circle",{"cx":"6","cy":"18","r":"3"}],["path",{"d":"M18 9a9 9 0 0 1-9 9"}]],
	"git-commit-horizontal": [["circle",{"cx":"12","cy":"12","r":"3"}],["line",{"x1":"3","x2":"9","y1":"12","y2":"12"}],["line",{"x1":"15","x2":"21","y1":"12","y2":"12"}]],
	"git-commit-vertical": [["path",{"d":"M12 3v6"}],["circle",{"cx":"12","cy":"12","r":"3"}],["path",{"d":"M12 15v6"}]],
	"git-compare": [["circle",{"cx":"18","cy":"18","r":"3"}],["circle",{"cx":"6","cy":"6","r":"3"}],["path",{"d":"M13 6h3a2 2 0 0 1 2 2v7"}],["path",{"d":"M11 18H8a2 2 0 0 1-2-2V9"}]],
	"git-fork": [["circle",{"cx":"12","cy":"18","r":"3"}],["circle",{"cx":"6","cy":"6","r":"3"}],["circle",{"cx":"18","cy":"6","r":"3"}],["path",{"d":"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"}],["path",{"d":"M12 12v3"}]],
	"git-merge": [["circle",{"cx":"18","cy":"18","r":"3"}],["circle",{"cx":"6","cy":"6","r":"3"}],["path",{"d":"M6 21V9a9 9 0 0 0 9 9"}]],
	"git-pull-request": [["circle",{"cx":"18","cy":"18","r":"3"}],["circle",{"cx":"6","cy":"6","r":"3"}],["path",{"d":"M13 6h3a2 2 0 0 1 2 2v7"}],["line",{"x1":"6","x2":"6","y1":"9","y2":"21"}]],
	"goal": [["path",{"d":"M12 13V2l8 4-8 4"}],["path",{"d":"M20.561 10.222a9 9 0 1 1-12.55-5.29"}],["path",{"d":"M8.002 9.997a5 5 0 1 0 8.9 2.02"}]],
	"grip": [["circle",{"cx":"12","cy":"5","r":"1"}],["circle",{"cx":"19","cy":"5","r":"1"}],["circle",{"cx":"5","cy":"5","r":"1"}],["circle",{"cx":"12","cy":"12","r":"1"}],["circle",{"cx":"19","cy":"12","r":"1"}],["circle",{"cx":"5","cy":"12","r":"1"}],["circle",{"cx":"12","cy":"19","r":"1"}],["circle",{"cx":"19","cy":"19","r":"1"}],["circle",{"cx":"5","cy":"19","r":"1"}]],
	"group": [["path",{"d":"M3 7V5c0-1.1.9-2 2-2h2"}],["path",{"d":"M17 3h2c1.1 0 2 .9 2 2v2"}],["path",{"d":"M21 17v2c0 1.1-.9 2-2 2h-2"}],["path",{"d":"M7 21H5c-1.1 0-2-.9-2-2v-2"}],["rect",{"width":"7","height":"5","x":"7","y":"7","rx":"1"}],["rect",{"width":"7","height":"5","x":"10","y":"12","rx":"1"}]],
	"hammer": [["path",{"d":"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}],["path",{"d":"m18 15 4-4"}],["path",{"d":"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"}]],
	"hard-drive": [["line",{"x1":"22","x2":"2","y1":"12","y2":"12"}],["path",{"d":"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["line",{"x1":"6","x2":"6.01","y1":"16","y2":"16"}],["line",{"x1":"10","x2":"10.01","y1":"16","y2":"16"}]],
	"hash": [["line",{"x1":"4","x2":"20","y1":"9","y2":"9"}],["line",{"x1":"4","x2":"20","y1":"15","y2":"15"}],["line",{"x1":"10","x2":"8","y1":"3","y2":"21"}],["line",{"x1":"16","x2":"14","y1":"3","y2":"21"}]],
	"hexagon": [["path",{"d":"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}]],
	"history": [["path",{"d":"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{"d":"M3 3v5h5"}],["path",{"d":"M12 7v5l4 2"}]],
	"home": [["path",{"d":"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}],["polyline",{"points":"9 22 9 12 15 12 15 22"}]],
	"image": [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2","ry":"2"}],["circle",{"cx":"9","cy":"9","r":"2"}],["path",{"d":"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"}]],
	"infinity": [["path",{"d":"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z"}]],
	"info": [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"M12 16v-4"}],["path",{"d":"M12 8h.01"}]],
	"joystick": [["path",{"d":"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z"}],["path",{"d":"M6 15v-2"}],["path",{"d":"M12 15V9"}],["circle",{"cx":"12","cy":"6","r":"3"}]],
	"kanban": [["path",{"d":"M6 5v11"}],["path",{"d":"M12 5v6"}],["path",{"d":"M18 5v14"}]],
	"keyboard": [["path",{"d":"M10 8h.01"}],["path",{"d":"M12 12h.01"}],["path",{"d":"M14 8h.01"}],["path",{"d":"M16 12h.01"}],["path",{"d":"M18 8h.01"}],["path",{"d":"M6 8h.01"}],["path",{"d":"M7 16h10"}],["path",{"d":"M8 12h.01"}],["rect",{"x":"2","y":"4","width":"20","height":"16","rx":"2"}]],
	"layers": [["path",{"d":"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"}],["path",{"d":"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"}],["path",{"d":"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"}]],
	"library": [["path",{"d":"m16 6 4 14"}],["path",{"d":"M12 6v14"}],["path",{"d":"M8 8v12"}],["path",{"d":"M4 4v16"}]],
	"life-buoy": [["circle",{"cx":"12","cy":"12","r":"10"}],["path",{"d":"m4.93 4.93 4.24 4.24"}],["path",{"d":"m14.83 9.17 4.24-4.24"}],["path",{"d":"m14.83 14.83 4.24 4.24"}],["path",{"d":"m9.17 14.83-4.24 4.24"}],["circle",{"cx":"12","cy":"12","r":"4"}]],
	"lightbulb": [["path",{"d":"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"}],["path",{"d":"M9 18h6"}],["path",{"d":"M10 22h4"}]],
	"line-chart": [["path",{"d":"M3 3v18h18"}],["path",{"d":"m19 9-5 5-4-4-3 3"}]],
	"link": [["path",{"d":"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"}],["path",{"d":"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"}]],
	"list": [["line",{"x1":"8","x2":"21","y1":"6","y2":"6"}],["line",{"x1":"8","x2":"21","y1":"12","y2":"12"}],["line",{"x1":"8","x2":"21","y1":"18","y2":"18"}],["line",{"x1":"3","x2":"3.01","y1":"6","y2":"6"}],["line",{"x1":"3","x2":"3.01","y1":"12","y2":"12"}],["line",{"x1":"3","x2":"3.01","y1":"18","y2":"18"}]],
	"locate": [["line",{"x1":"2","x2":"5","y1":"12","y2":"12"}],["line",{"x1":"19","x2":"22","y1":"12","y2":"12"}],["line",{"x1":"12","x2":"12","y1":"2","y2":"5"}],["line",{"x1":"12","x2":"12","y1":"19","y2":"22"}],["circle",{"cx":"12","cy":"12","r":"7"}]],
	"lock": [["rect",{"width":"18","height":"11","x":"3","y":"11","rx":"2","ry":"2"}],["path",{"d":"M7 11V7a5 5 0 0 1 10 0v4"}]],
	"map": [["polygon",{"points":"3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"}],["line",{"x1":"9","x2":"9","y1":"3","y2":"18"}],["line",{"x1":"15","x2":"15","y1":"6","y2":"21"}]],
	"maximize": [["path",{"d":"M8 3H5a2 2 0 0 0-2 2v3"}],["path",{"d":"M21 8V5a2 2 0 0 0-2-2h-3"}],["path",{"d":"M3 16v3a2 2 0 0 0 2 2h3"}],["path",{"d":"M16 21h3a2 2 0 0 0 2-2v-3"}]],
	"menu": [["line",{"x1":"4","x2":"20","y1":"12","y2":"12"}],["line",{"x1":"4","x2":"20","y1":"6","y2":"6"}],["line",{"x1":"4","x2":"20","y1":"18","y2":"18"}]],
	"minimize": [["path",{"d":"M8 3v3a2 2 0 0 1-2 2H3"}],["path",{"d":"M21 8h-3a2 2 0 0 1-2-2V3"}],["path",{"d":"M3 16h3a2 2 0 0 1 2 2v3"}],["path",{"d":"M16 21v-3a2 2 0 0 1 2-2h3"}]],
	"minus": [["path",{"d":"M5 12h14"}]],
	"moon": [["path",{"d":"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]],
	"network": [["rect",{"x":"16","y":"16","width":"6","height":"6","rx":"1"}],["rect",{"x":"2","y":"16","width":"6","height":"6","rx":"1"}],["rect",{"x":"9","y":"2","width":"6","height":"6","rx":"1"}],["path",{"d":"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"}],["path",{"d":"M12 12V8"}]],
	"octagon": [["polygon",{"points":"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"}]],
	"package": [["path",{"d":"m7.5 4.27 9 5.15"}],["path",{"d":"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"}],["path",{"d":"m3.3 7 8.7 5 8.7-5"}],["path",{"d":"M12 22V12"}]],
	"palette": [["circle",{"cx":"13.5","cy":"6.5","r":".5","fill":"currentColor"}],["circle",{"cx":"17.5","cy":"10.5","r":".5","fill":"currentColor"}],["circle",{"cx":"8.5","cy":"7.5","r":".5","fill":"currentColor"}],["circle",{"cx":"6.5","cy":"12.5","r":".5","fill":"currentColor"}],["path",{"d":"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]],
	"pie-chart": [["path",{"d":"M21.21 15.89A10 10 0 1 1 8 2.83"}],["path",{"d":"M22 12A10 10 0 0 0 12 2v10z"}]],
	"plus": [["path",{"d":"M5 12h14"}],["path",{"d":"M12 5v14"}]],
	"podcast": [["circle",{"cx":"12","cy":"11","r":"1"}],["path",{"d":"M11 17a1 1 0 0 1 2 0c0 .5-.34 3-.5 4.5a.5.5 0 0 1-1 0c-.16-1.5-.5-4-.5-4.5Z"}],["path",{"d":"M8 14a5 5 0 1 1 8 0"}],["path",{"d":"M17 18.5a9 9 0 1 0-10 0"}]],
	"power": [["path",{"d":"M12 2v10"}],["path",{"d":"M18.4 6.6a9 9 0 1 1-12.77.04"}]],
	"puzzle": [["path",{"d":"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z"}]],
	"qr-code": [["rect",{"width":"5","height":"5","x":"3","y":"3","rx":"1"}],["rect",{"width":"5","height":"5","x":"16","y":"3","rx":"1"}],["rect",{"width":"5","height":"5","x":"3","y":"16","rx":"1"}],["path",{"d":"M21 16h-3a2 2 0 0 0-2 2v3"}],["path",{"d":"M21 21v.01"}],["path",{"d":"M12 7v3a2 2 0 0 1-2 2H7"}],["path",{"d":"M3 12h.01"}],["path",{"d":"M12 3h.01"}],["path",{"d":"M12 16v.01"}],["path",{"d":"M16 12h1"}],["path",{"d":"M21 12v.01"}],["path",{"d":"M12 21v-1"}]],
	"radar": [["path",{"d":"M19.07 4.93A10 10 0 0 0 6.99 3.34"}],["path",{"d":"M4 6h.01"}],["path",{"d":"M2.29 9.62A10 10 0 1 0 21.31 8.35"}],["path",{"d":"M16.24 7.76A6 6 0 1 0 8.23 16.67"}],["path",{"d":"M12 18h.01"}],["path",{"d":"M17.99 11.66A6 6 0 0 1 15.77 16.67"}],["circle",{"cx":"12","cy":"12","r":"2"}],["path",{"d":"m13.41 10.59 5.66-5.66"}]],
	"radiation": [["path",{"d":"M12 12h0.01"}],["path",{"d":"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"}],["path",{"d":"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"}],["path",{"d":"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"}]],
	"radius": [["path",{"d":"M20.34 17.52a10 10 0 1 0-2.82 2.82"}],["circle",{"cx":"19","cy":"19","r":"2"}],["path",{"d":"m13.41 13.41 4.18 4.18"}],["circle",{"cx":"12","cy":"12","r":"2"}]],
	"ratio": [["rect",{"width":"12","height":"20","x":"6","y":"2","rx":"2"}],["rect",{"width":"20","height":"12","x":"2","y":"6","rx":"2"}]],
	"regex": [["path",{"d":"M17 3v10"}],["path",{"d":"m12.67 5.5 8.66 5"}],["path",{"d":"m12.67 10.5 8.66-5"}],["path",{"d":"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z"}]],
	"reply": [["polyline",{"points":"9 17 4 12 9 7"}],["path",{"d":"M20 18v-2a4 4 0 0 0-4-4H4"}]],
	"rocket": [["path",{"d":"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"}],["path",{"d":"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"}],["path",{"d":"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"}],["path",{"d":"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"}]],
	"rss": [["path",{"d":"M4 11a9 9 0 0 1 9 9"}],["path",{"d":"M4 4a16 16 0 0 1 16 16"}],["circle",{"cx":"5","cy":"19","r":"1"}]],
	"scale": [["path",{"d":"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{"d":"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"}],["path",{"d":"M7 21h10"}],["path",{"d":"M12 3v18"}],["path",{"d":"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"}]],
	"scan": [["path",{"d":"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{"d":"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{"d":"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{"d":"M7 21H5a2 2 0 0 1-2-2v-2"}]],
	"scatter-chart": [["circle",{"cx":"7.5","cy":"7.5","r":".5","fill":"currentColor"}],["circle",{"cx":"18.5","cy":"5.5","r":".5","fill":"currentColor"}],["circle",{"cx":"11.5","cy":"11.5","r":".5","fill":"currentColor"}],["circle",{"cx":"7.5","cy":"16.5","r":".5","fill":"currentColor"}],["circle",{"cx":"17.5","cy":"14.5","r":".5","fill":"currentColor"}],["path",{"d":"M3 3v18h18"}]],
	"search": [["circle",{"cx":"11","cy":"11","r":"8"}],["path",{"d":"m21 21-4.3-4.3"}]],
	"server": [["rect",{"width":"20","height":"8","x":"2","y":"2","rx":"2","ry":"2"}],["rect",{"width":"20","height":"8","x":"2","y":"14","rx":"2","ry":"2"}],["line",{"x1":"6","x2":"6.01","y1":"6","y2":"6"}],["line",{"x1":"6","x2":"6.01","y1":"18","y2":"18"}]],
	"server-cog": [["circle",{"cx":"12","cy":"12","r":"3"}],["path",{"d":"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5"}],["path",{"d":"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5"}],["path",{"d":"M6 6h.01"}],["path",{"d":"M6 18h.01"}],["path",{"d":"m15.7 13.4-.9-.3"}],["path",{"d":"m9.2 10.9-.9-.3"}],["path",{"d":"m10.6 15.7.3-.9"}],["path",{"d":"m13.6 15.7-.4-1"}],["path",{"d":"m10.8 9.3-.4-1"}],["path",{"d":"m8.3 13.6 1-.4"}],["path",{"d":"m14.7 10.8 1-.4"}],["path",{"d":"m13.4 8.3-.3.9"}]],
	"shapes": [["path",{"d":"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z"}],["rect",{"x":"3","y":"14","width":"7","height":"7","rx":"1"}],["circle",{"cx":"17.5","cy":"17.5","r":"3.5"}]],
	"share": [["path",{"d":"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"}],["polyline",{"points":"16 6 12 2 8 6"}],["line",{"x1":"12","x2":"12","y1":"2","y2":"15"}]],
	"shield": [["path",{"d":"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]],
	"ship": [["path",{"d":"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"}],["path",{"d":"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76"}],["path",{"d":"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"}],["path",{"d":"M12 10v4"}],["path",{"d":"M12 2v3"}]],
	"sliders": [["line",{"x1":"4","x2":"4","y1":"21","y2":"14"}],["line",{"x1":"4","x2":"4","y1":"10","y2":"3"}],["line",{"x1":"12","x2":"12","y1":"21","y2":"12"}],["line",{"x1":"12","x2":"12","y1":"8","y2":"3"}],["line",{"x1":"20","x2":"20","y1":"21","y2":"16"}],["line",{"x1":"20","x2":"20","y1":"12","y2":"3"}],["line",{"x1":"2","x2":"6","y1":"14","y2":"14"}],["line",{"x1":"10","x2":"14","y1":"8","y2":"8"}],["line",{"x1":"18","x2":"22","y1":"16","y2":"16"}]],
	"sparkles": [["path",{"d":"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"}],["path",{"d":"M5 3v4"}],["path",{"d":"M19 17v4"}],["path",{"d":"M3 5h4"}],["path",{"d":"M17 19h4"}]],
	"squircle": [["path",{"d":"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9"}]],
	"star": [["polygon",{"points":"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}]],
	"sun": [["circle",{"cx":"12","cy":"12","r":"4"}],["path",{"d":"M12 2v2"}],["path",{"d":"M12 20v2"}],["path",{"d":"m4.93 4.93 1.41 1.41"}],["path",{"d":"m17.66 17.66 1.41 1.41"}],["path",{"d":"M2 12h2"}],["path",{"d":"M20 12h2"}],["path",{"d":"m6.34 17.66-1.41 1.41"}],["path",{"d":"m19.07 4.93-1.41 1.41"}]],
	"tag": [["path",{"d":"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"}],["circle",{"cx":"7.5","cy":"7.5","r":".5","fill":"currentColor"}]],
	"terminal": [["polyline",{"points":"4 17 10 11 4 5"}],["line",{"x1":"12","x2":"20","y1":"19","y2":"19"}]],
	"ticket": [["path",{"d":"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"}],["path",{"d":"M13 5v2"}],["path",{"d":"M13 17v2"}],["path",{"d":"M13 11v2"}]],
	"timer": [["line",{"x1":"10","x2":"14","y1":"2","y2":"2"}],["line",{"x1":"12","x2":"15","y1":"14","y2":"11"}],["circle",{"cx":"12","cy":"14","r":"8"}]],
	"trending-down": [["polyline",{"points":"22 17 13.5 8.5 8.5 13.5 2 7"}],["polyline",{"points":"16 17 22 17 22 11"}]],
	"trending-up": [["polyline",{"points":"22 7 13.5 15.5 8.5 10.5 2 17"}],["polyline",{"points":"16 7 22 7 22 13"}]],
	"ungroup": [["rect",{"width":"8","height":"6","x":"5","y":"4","rx":"1"}],["rect",{"width":"8","height":"6","x":"11","y":"14","rx":"1"}]],
	"unlink": [["path",{"d":"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71"}],["path",{"d":"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71"}],["line",{"x1":"8","x2":"8","y1":"2","y2":"5"}],["line",{"x1":"2","x2":"5","y1":"8","y2":"8"}],["line",{"x1":"16","x2":"16","y1":"19","y2":"22"}],["line",{"x1":"19","x2":"22","y1":"16","y2":"16"}]],
	"unlock": [["rect",{"width":"18","height":"11","x":"3","y":"11","rx":"2","ry":"2"}],["path",{"d":"M7 11V7a5 5 0 0 1 9.9-1"}]],
	"upload": [["path",{"d":"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{"points":"17 8 12 3 7 8"}],["line",{"x1":"12","x2":"12","y1":"3","y2":"15"}]],
	"user": [["path",{"d":"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"}],["circle",{"cx":"12","cy":"7","r":"4"}]],
	"users": [["path",{"d":"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"}],["circle",{"cx":"9","cy":"7","r":"4"}],["path",{"d":"M22 21v-2a4 4 0 0 0-3-3.87"}],["path",{"d":"M16 3.13a4 4 0 0 1 0 7.75"}]],
	"variable": [["path",{"d":"M8 21s-4-3-4-9 4-9 4-9"}],["path",{"d":"M16 3s4 3 4 9-4 9-4 9"}],["line",{"x1":"15","x2":"9","y1":"9","y2":"15"}],["line",{"x1":"9","x2":"15","y1":"9","y2":"15"}]],
	"video": [["path",{"d":"m22 8-6 4 6 4V8Z"}],["rect",{"width":"14","height":"12","x":"2","y":"6","rx":"2","ry":"2"}]],
	"wallpaper": [["circle",{"cx":"8","cy":"9","r":"2"}],["path",{"d":"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2"}],["path",{"d":"M8 21h8"}],["path",{"d":"M12 17v4"}]],
	"wifi": [["path",{"d":"M12 20h.01"}],["path",{"d":"M2 8.82a15 15 0 0 1 20 0"}],["path",{"d":"M5 12.859a10 10 0 0 1 14 0"}],["path",{"d":"M8.5 16.429a5 5 0 0 1 7 0"}]],
	"workflow": [["rect",{"width":"8","height":"8","x":"3","y":"3","rx":"2"}],["path",{"d":"M7 11v4a2 2 0 0 0 2 2h4"}],["rect",{"width":"8","height":"8","x":"13","y":"13","rx":"2"}]],
	"x": [["path",{"d":"M18 6 6 18"}],["path",{"d":"m6 6 12 12"}]],
	"zap": [["polygon",{"points":"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}]],
} satisfies Record<string,IconNodeChild[]>;
export default icons;