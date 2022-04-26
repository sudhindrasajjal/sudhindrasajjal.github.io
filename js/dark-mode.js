var fileref = document.createElement("link");
fileref.rel = "stylesheet";
fileref.type = "text/css";
fileref.href = "css/dark.css";
fileref.id   = "dark-mode";

document.getElementsByTagName("head")[0].appendChild(fileref);

document.getElementById("dark-toggle").innerHTML = "<i class='fas fa-sun'></i>";

document.addEventListener('DOMContentLoaded',function()
{
	darkmode_init();
});

function darkmode_init(){
  let darkmodeSwitch = document.getElementById('dark-toggle');
  let darkmodeCookie = {
    set:function(key,value,time,path,secure=false)
    {
      let expires = new Date();
      expires.setTime(expires.getTime() + time);
      var path   = (typeof path !== 'undefined') ? pathValue = 'path=' + path + ';' : '';
      var secure = (secure) ? ';secure' : '';
      
      document.cookie = key + '=' + value + ';' + path + 'expires=' + expires.toUTCString() + secure;
    },
    get:function()
    {
      let keyValue = document.cookie.match('(^|;) ?darkmode=([^;]*)(;|$)');
      return keyValue ? keyValue[2] : null;
    },
    remove:function()
    {
      document.cookie = 'darkmode=; Max-Age=0; path=/';
    }
  };

  if (darkmodeCookie.get() == 'true') {
    document.getElementsByTagName("head")[0].appendChild(fileref);
    document.getElementById("dark-toggle").innerHTML = "<i class='fas fa-sun'></i>";
  } else {
    document.getElementById("dark-mode").remove();
    document.getElementById("dark-toggle").innerHTML = "<i class='fas fa-moon'></i>";
  }

  darkmodeSwitch.addEventListener('click', (event) => {
		event.preventDefault();
		if (document.getElementById("dark-mode")) {
      document.getElementById("dark-mode").remove();
      document.getElementById("dark-toggle").innerHTML = "<i class='fas fa-moon'></i>";
      darkmodeCookie.remove();
      darkmodeCookie.set('darkmode','false',2628000000,'/',false);
    } else {
      document.getElementsByTagName("head")[0].appendChild(fileref);
      document.getElementById("dark-toggle").innerHTML = "<i class='fas fa-sun'></i>";
      darkmodeCookie.remove();
      darkmodeCookie.set('darkmode','true',2628000000,'/',false);
    }
	});
}
