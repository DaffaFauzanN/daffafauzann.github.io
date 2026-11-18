// js portofolio daffa

// ---- jam WIB ----
function jamnya(){
	var d = new Date();
	var j = (d.getUTCHours() + 7) % 24;   // WIB = UTC+7
	var m = d.getUTCMinutes();
	if(m < 10) m = '0' + m;
	document.getElementById('daffa_jam').innerHTML = 'tasikmalaya, ' + j + '.' + m + ' WIB';
}
jamnya();
setInterval(jamnya, 20000);

// ---- kata yg ganti2 ----
var kata = ['belajar web', 'nulis cerita fantasi', "ngoding malem-malem", 'nyari bug sampe pagi'];
var k = 0;
setInterval(function(){
   k++;
   if(k >= kata.length){ k = 0 }
   document.getElementById('daffa_kata').textContent = kata[k];
}, 2200);

// ---- stiker ganti warna ----
var warna = ['#ff5a1f', '#2b4cff', '#1f9d55', '#e91e8c'];
var w = 0;
var stiker = document.getElementById('daffa_stiker');
stiker.onclick = function(){
	w = w + 1;
	if(w == warna.length) w = 0;
	document.documentElement.style.setProperty('--daffa_oren', warna[w]);
	// console.log('warna sekarang', warna[w]);
}

// link proyek yg belum ada
var kosong = document.querySelectorAll('.daffa_daftarproj a[href="#"]');
for(var i = 0; i < kosong.length; i++){
	kosong[i].onclick = function(e){
		e.preventDefault();
		alert('Link-nya belum dipasang, nanti diisi pas udah di-hosting');
	}
}
