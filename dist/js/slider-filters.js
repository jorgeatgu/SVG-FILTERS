var saturateSlider=document.getElementById("slider-saturate");noUiSlider.create(saturateSlider,{start:[0],step:.1,range:{min:[0],max:[1]}}),saturateSlider.noUiSlider.on("change",function(){var e=saturateSlider.noUiSlider.get(),t=document.getElementById("saturate-value");t.setAttributeNS(null,"values",e)});var stepSliderValueElement=document.getElementById("slider-saturate-value");saturateSlider.noUiSlider.on("update",function(e,t){stepSliderValueElement.innerHTML=e[t]});var hueRotateSlider=document.getElementById("slider-huerotate");noUiSlider.create(hueRotateSlider,{start:[180],step:1,range:{min:[0],max:[360]}}),hueRotateSlider.noUiSlider.on("change",function(){var e=hueRotateSlider.noUiSlider.get(),t=document.getElementById("hue-value");t.setAttributeNS(null,"values",e)});var stepSliderValueElement=document.getElementById("slider-huerotate-value");hueRotateSlider.noUiSlider.on("update",function(e,t){stepSliderValueElement.innerHTML=e[t]});