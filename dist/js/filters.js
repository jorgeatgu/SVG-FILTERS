$(document).ready(function(){function t(t,n){$(t).click(function(){$("img").removeClass().addClass(n)})}function n(){$(O).click(function(){var t=document.getElementsByTagName("body"),n=s[~~(Math.random()*s.length)];$(t).each(function(){$(t).addClass(n),setTimeout(function(){$(t).removeClass(n)},3e3)})})}function e(){$(d).velocity({left:"-100%"},{duration:400,easing:"swing"},[20,50]),$("img").removeClass()}function o(){$(d).velocity({left:"0"},{duration:400,easing:"swing"},[20,50]).addClass("panel-bottom").css("height",u),window.scrollTo(0,document.body.scrollHeight)}function a(){$("#holder").css("min-height",r)}function i(t,n){$(t).click(function(){$(n).removeClass("hide")})}var s=["saturate","saturotate","rotamatrix","tablen","dishue","matrix","matrix-dos","huerotate","luminance","discrete","discrete-dos","table","table-dos","identity","linear","gamma","turbulence","sepia","turbu-map","fematrix-uno","fematrix-dos","map-uno","map-dos","blur-uno","blur-dos","morpho-uno","morpho-dos","multitable"],u=$(".section-buttons").outerHeight()+45,l=$("picture").find("img"),r=$(l).outerHeight(),c=$(".section-buttons").find("button"),b=$("#panel-btn-close"),d=$(".panel"),m=($(".panel-info"),$(".panel-input")),p=$(".btn-saturate"),f=$(".btn-saturotate"),h=$(".btn-rotamatrix"),g=$(".btn-tablen"),C=$(".btn-multitable"),y=$(".btn-dishue"),x=$(".btn-matrix"),v=$(".btn-matrix-dos"),k=$(".btn-hueRotate"),w=$(".btn-luminance"),T=$(".btn-discrete"),H=$(".btn-discrete-dos"),B=$(".btn-table"),E=$(".btn-table-dos"),N=$(".btn-identity"),M=$(".btn-linear"),R=$(".btn-gamma"),j=$(".btn-turbulence"),q=$(".btn-sepia"),z=$(".btn-turbu-map"),A=$(".btn-con-matrix-uno"),D=$(".btn-con-matrix-dos"),F=$(".btn-map-uno"),G=$(".btn-map-dos"),I=$(".btn-blur-uno"),J=$(".btn-blur-dos"),K=$(".btn-morpho-uno"),L=$(".btn-morpho-dos"),O=$(".btn-poison"),P=$("#panel-saturate"),Q=$("#panel-huerotate"),S=$("#panel-luminance"),U=$("#panel-linear"),V=$("#panel-turbulence"),W=$("#panel-gamma"),X=$("#panel-blur"),Y=$("#panel-morpho"),Z=$("#panel-saturotate"),_=new Clipboard(".panel-btn-copy");_.on("success",function(t){function n(){$(e).text("Copied!").addClass("success"),setTimeout(function(){$(e).removeClass("success").text("Copy to clipboard")},1e3)}var e=document.getElementsByClassName("panel-btn-copy");setTimeout(n,300)}),_.on("error",function(t){}),$(c).click(function(){"undefined"!=typeof $(this).data("panel")&&o()}),$(b).click(function(){e(),$(m).addClass("hide")}),a(),n(),t(p,s[0]),t(f,s[1]),t(h,s[2]),t(g,s[3]),t(y,s[4]),t(x,s[5]),t(v,s[6]),t(k,s[7]),t(w,s[8]),t(T,s[9]),t(H,s[10]),t(B,s[11]),t(E,s[12]),t(N,s[13]),t(M,s[14]),t(R,s[15]),t(j,s[16]),t(q,s[17]),t(z,s[18]),t(A,s[19]),t(D,s[20]),t(F,s[21]),t(G,s[22]),t(I,s[23]),t(J,s[24]),t(K,s[26]),t(L,s[27]),t(C,s[28]),i(p,P),i(k,Q),i(w,S),i(M,U),i(j,V),i(R,W),i(I,X),i(J,X),i(K,Y),i(L,Y),i(f,Z)});