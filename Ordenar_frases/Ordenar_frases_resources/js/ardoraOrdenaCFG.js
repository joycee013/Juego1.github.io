var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=2; attempts=0; attemptsMax=3;
var score=0; scoreMax=2; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=false;
var tiAttempts=true;
var tiScore=false;
var startTime;
var colorBack="#97E8CD"; colorButton="#5BBAFF"; colorText="#000000"; colorSele="#977768";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=3; messageOk="Felicidades!!!"; messageTime=""; messageError="Nooo, mal ahi"; messageErrorG="Nooo, mal ahi"; messageAttempts=""; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="T3JkZW5hcl9mcmFzZXM="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["aG9sYSwgwr9xdWUgdGFsIHRlIHZhPw==","YWRpb3MsIHF1ZSB0ZSB2YXlhIGJpZW4=","","",""];imaW=["Imagen1.png","ninos-afroamericanos-mochila-diciendo-adios-personajes-dibujos-animados-ninos-caucasicos_83111-2151.jpg","","",""];queW=["","","","",""];altW=["","","","",""];c=[21,23,0,0,0];
var auW=["","","","",""];
var actMaxWidth="800"; actMaxHeight="500";indexG=0;profG=0;dirMedia="Ordenar_frases_resources/media/"; textBNext="";
var wordsG=[];imageW=[];questionW=[];audioW=[];cG=[];alterW=[];
