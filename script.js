const _0x1f1c2e=_0x3fd8;(function(_0x51946b,_0x179cc5){const _0x17d42f=_0x3fd8,_0x58c687=_0x51946b();while(!![]){try{const _0x5847db=parseInt(_0x17d42f(0x134))/0x1+parseInt(_0x17d42f(0x12f))/0x2+-parseInt(_0x17d42f(0x146))/0x3+parseInt(_0x17d42f(0x128))/0x4*(-parseInt(_0x17d42f(0x139))/0x5)+-parseInt(_0x17d42f(0x120))/0x6*(parseInt(_0x17d42f(0x127))/0x7)+-parseInt(_0x17d42f(0x142))/0x8+-parseInt(_0x17d42f(0x11a))/0x9*(-parseInt(_0x17d42f(0x14c))/0xa);if(_0x5847db===_0x179cc5)break;else _0x58c687['push'](_0x58c687['shift']());}catch(_0x181495){_0x58c687['push'](_0x58c687['shift']());}}}(_0x184a,0xe706d));const form=document['getElementById']('appointment-form'),loadingIndicator=document[_0x1f1c2e(0x11e)](_0x1f1c2e(0x132)),submitButton=form[_0x1f1c2e(0x12c)]('button[type=\x22submit\x22]'),calendarInput=document[_0x1f1c2e(0x11e)]('calendar'),timeInput=document[_0x1f1c2e(0x11e)](_0x1f1c2e(0x13b)),showMoreButton=document[_0x1f1c2e(0x11e)](_0x1f1c2e(0x147)),detailsSection=document[_0x1f1c2e(0x11e)](_0x1f1c2e(0x13c)),textoInicial=document['getElementById'](_0x1f1c2e(0x156));showMoreButton['addEventListener']('click',()=>{const _0x1f1efe=_0x1f1c2e;detailsSection[_0x1f1efe(0x14e)][_0x1f1efe(0x138)](_0x1f1efe(0x13f)),showMoreButton['style'][_0x1f1efe(0x11d)]='none',document[_0x1f1efe(0x11c)][_0x1f1efe(0x14e)][_0x1f1efe(0x152)](_0x1f1efe(0x14b)),textoInicial[_0x1f1efe(0x155)]();});const weddingDate=new Date(_0x1f1c2e(0x13d))[_0x1f1c2e(0x12b)](),maxDate=new Date(weddingDate);function _0x184a(){const _0x39bace=['record','today','loading','Não\x20foi\x20dessa\x20vez,\x20champs.\x20Escolha\x20entre\x2009:30\x20e\x2021:30.','124054yBeCUi','https://api.jsonbin.io/v3/b/67425c6dad19ca34f8cf2944','disabled','padrinhos','toggle','95maIytj','Casal\x20de\x20padrinhos','time','details','2025-09-13T00:00:00','error','hidden','addEventListener','Erro\x20ao\x20buscar\x20os\x20dados\x20existentes\x20no\x20JSONBin','8782328JiVhTH','Chegou\x20o\x20grande\x20dia!','calendar','value','1434189hzltGG','show-more','GET','Erro\x20ao\x20enviar\x20os\x20dados.\x20Consulte\x20o\x20console\x20para\x20mais\x20informações.','date','expanded','1290dOvRCN','getDate','classList','floor','preventDefault','json','add','Enviando...','split','remove','initial-text','change','158895ZnPeqP','\x20dias,\x20','body','display','getElementById','Y-m-d','1702260SPHAap','Erro\x20ao\x20atualizar\x20os\x20dados\x20no\x20JSONBin','couple','timer','textContent','É\x20isso,\x20bore','submit','7gUDwJf','281524RTPXNv','push','hidden-load','getTime','querySelector','$2a$10$G9vBMF6/d2pRjDPnBh/VgOD7klnG6/GnHUDMRCkE3.ezxvxtPNKky','map','3483078AzpqyN'];_0x184a=function(){return _0x39bace;};return _0x184a();}maxDate['setDate'](maxDate[_0x1f1c2e(0x14d)]()-0x1e);function initializeCalendar(_0x31bfae){const _0x17d47c=_0x1f1c2e;flatpickr(calendarInput,{'dateFormat':_0x17d47c(0x11f),'minDate':_0x17d47c(0x131),'maxDate':maxDate,'disable':_0x31bfae,'onChange':(_0x2c6061,_0x4489cc)=>{const _0x39086e=_0x17d47c;document['getElementById'](_0x39086e(0x14a))[_0x39086e(0x145)]=_0x4489cc;}});}timeInput[_0x1f1c2e(0x140)](_0x1f1c2e(0x157),()=>{const _0x574917=_0x1f1c2e,_0x14d318=timeInput[_0x574917(0x145)],[_0xb90eba,_0x238d73]=_0x14d318[_0x574917(0x154)](':')[_0x574917(0x12e)](Number);(_0xb90eba>0x15||_0xb90eba===0x15&&_0x238d73>0x1e||(_0xb90eba<0x9||_0xb90eba===0x9&&_0x238d73<0x1e))&&(alert(_0x574917(0x133)),timeInput[_0x574917(0x145)]='');});async function fetchDisabledDates(){const _0x48d5b7=_0x1f1c2e;try{const _0x3d9cf0=await fetch('https://api.jsonbin.io/v3/b/67425c6dad19ca34f8cf2944',{'method':'GET','headers':{'X-Master-Key':_0x48d5b7(0x12d)}});if(!_0x3d9cf0['ok'])throw new Error('Erro\x20ao\x20buscar\x20as\x20datas\x20existentes\x20no\x20JSONBin');const _0x3cc48b=await _0x3d9cf0[_0x48d5b7(0x151)](),_0x27d0fe=_0x3cc48b[_0x48d5b7(0x130)][_0x48d5b7(0x137)][_0x48d5b7(0x12e)](_0x28801e=>_0x28801e[_0x48d5b7(0x14a)]);initializeCalendar(_0x27d0fe);}catch(_0x26260d){console[_0x48d5b7(0x13e)]('Erro\x20ao\x20carregar\x20as\x20datas:',_0x26260d),alert('Erro\x20ao\x20carregar\x20as\x20datas\x20disponíveis.');}}fetchDisabledDates();function _0x3fd8(_0x36cb8c,_0x3f5179){const _0x184a32=_0x184a();return _0x3fd8=function(_0x3fd8dd,_0x19939b){_0x3fd8dd=_0x3fd8dd-0x11a;let _0x32baba=_0x184a32[_0x3fd8dd];return _0x32baba;},_0x3fd8(_0x36cb8c,_0x3f5179);}function updateCountdown(){const _0x54ea9a=_0x1f1c2e,_0x472475=new Date()[_0x54ea9a(0x12b)](),_0x4f06d5=weddingDate-_0x472475;if(_0x4f06d5>0x0){const _0x2a22aa=Math[_0x54ea9a(0x14f)](_0x4f06d5/(0x3e8*0x3c*0x3c*0x18)),_0xc16020=Math[_0x54ea9a(0x14f)](_0x4f06d5%(0x3e8*0x3c*0x3c*0x18)/(0x3e8*0x3c*0x3c)),_0x37486c=Math[_0x54ea9a(0x14f)](_0x4f06d5%(0x3e8*0x3c*0x3c)/(0x3e8*0x3c)),_0x4fee62=Math['floor'](_0x4f06d5%(0x3e8*0x3c)/0x3e8);document[_0x54ea9a(0x11e)]('timer')[_0x54ea9a(0x124)]=_0x2a22aa+_0x54ea9a(0x11b)+_0xc16020+'h\x20'+_0x37486c+'m\x20'+_0x4fee62+'s';}else document[_0x54ea9a(0x11e)](_0x54ea9a(0x123))[_0x54ea9a(0x124)]=_0x54ea9a(0x143);}setInterval(updateCountdown,0x3e8),updateCountdown(),form[_0x1f1c2e(0x140)](_0x1f1c2e(0x126),async _0x51ddfc=>{const _0x360141=_0x1f1c2e;_0x51ddfc[_0x360141(0x150)](),loadingIndicator[_0x360141(0x14e)]['remove'](_0x360141(0x12a)),submitButton[_0x360141(0x136)]=!![],submitButton[_0x360141(0x124)]=_0x360141(0x153);const _0x1ea00c={'couple':document[_0x360141(0x11e)](_0x360141(0x122))[_0x360141(0x145)]||_0x360141(0x13a),'date':document['getElementById'](_0x360141(0x144))[_0x360141(0x145)],'time':document[_0x360141(0x11e)](_0x360141(0x13b))[_0x360141(0x145)],'location':document[_0x360141(0x11e)]('location')[_0x360141(0x145)]};try{const _0x31a53b=await fetch(_0x360141(0x135),{'method':_0x360141(0x148),'headers':{'X-Master-Key':_0x360141(0x12d)}});if(!_0x31a53b['ok'])throw new Error(_0x360141(0x141));const _0x278623=await _0x31a53b[_0x360141(0x151)](),_0xff9ba=_0x278623[_0x360141(0x130)]['padrinhos']||[];_0xff9ba[_0x360141(0x129)](_0x1ea00c);const _0x30cae6=await fetch(_0x360141(0x135),{'method':'PUT','headers':{'Content-Type':'application/json','X-Master-Key':_0x360141(0x12d)},'body':JSON['stringify']({'padrinhos':_0xff9ba})});if(_0x30cae6['ok'])alert('Dados\x20enviados\x20com\x20sucesso!'),submitButton[_0x360141(0x124)]='Enviado',submitButton['remove']();else throw new Error(_0x360141(0x121));}catch(_0x1429b7){console['error']('Erro:',_0x1429b7),alert(_0x360141(0x149)),submitButton[_0x360141(0x136)]=![],submitButton[_0x360141(0x124)]=_0x360141(0x125);}finally{loadingIndicator['classList'][_0x360141(0x152)](_0x360141(0x12a));}form['reset']();});