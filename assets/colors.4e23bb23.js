function o(s){const t=s.replace("#",""),n=parseInt(t.substring(0,2),16),r=parseInt(t.substring(2,4),16),e=parseInt(t.substring(4,6),16);return(n*299+r*587+e*114)/1e3>=128?"#000000":"#FFFFFF"}export{o as c};
