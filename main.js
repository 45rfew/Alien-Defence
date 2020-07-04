//Idea and ships made by Serendibite
//Coding done by Money
//Map change accomplished
var map =
"----99-----------3----6-----9--6---3-6---2------------99----\n"+
"----99---------2---1--6-----6969-----683-1------------99----\n"+
"-----996--------1--0-16-----------9--604---0---------99-----\n"+
"------999---99969696969------------7-96969696999---999------\n"+
"--------99---99898989899--2----6--5-99898989899---99--------\n"+
"---------99---99-------99----------99-------99---99---------\n"+
"------7---99---99-------99--------99-------99---99---3------\n"+
"-----------99---99-------9966666699-------99---99-----------\n"+
"------------99---99------86-0--3-68------99---99------------\n"+
"-------------99---99-----99--1---99-----99---99-------------\n"+
"--------------99---99----86----2-68----99---99-4------------\n"+
"----------8----99---99---991-----99---99---99---------------\n"+
"----------------99---99--86-0----68--99---99----------------\n"+
"----2------------99---99-99---0--99-99---99----------1------\n"+
"-----------------799---9986-3--2-6899---99------------------\n"+
"--------3----------99---999------999---99-------------------\n"+
"-----------4--------99---99------99---99--------5-----------\n"+
"-----------7---------99---9------9---99---------------------\n"+
"----------------------99------------99----------------------\n"+
"-----------------------99----------99-----------------------\n"+
"-----2------------------99--------99-----2---------------8--\n"+
"-------------------------99------99-------------------------\n"+
"-------------------------99------99-------------------------\n"+
"---------------03-------99--1-----99--------------1---------\n"+
"----------------------999--------0-999----------------------\n"+
"---------4----------99-----8---------991----------------1--9\n"+
"-------------------99------------1----99--------------------\n"+
"-------------------99-3-----------4----99-------------------\n"+
"-------------------99----0-------------99-------------------\n"+
"-44----------------99-------------3----99-------------------\n"+
"-------------------99-6----------------99-------------------\n"+
"-------------------99-----0-------6----99-------------------\n"+
"-------------------99-----------5------99-------------------\n"+
"--------------------99----4--6--------99------------4-------\n"+
"------7-------------7999------------999---8----------------9\n"+
"-----------------------99----------99-----------------------\n"+
"------------------------99--------99------------------------\n"+
"--------------6----------99------99-------------------------\n"+
"-------------------------99------99-----------------------3-\n"+
"------------------------99--------99------------4-----------\n"+
"---------------4-------99----------99-----------------------\n"+
"------1---------------99------------99----------------------\n"+
"---------------------99---9------9---99---------------------\n"+
"--------------------99---99------99---99--------------------\n"+
"----------2--------99---999------999---99-------7-----------\n"+
"------------------99---9986-1--026899---99------------------\n"+
"-----------------99---99-993--1--99-99---99-----------------\n"+
"--2-------------99---99--86------68--99---99----------------\n"+
"---------------99---99---99-2--1-99---99---99--------7------\n"+
"----------4---99---99----86------68----99---99--------------\n"+
"-------------99---99-----990---3-99-----99---99-------------\n"+
"------------99---99------86--2---68------99---99------------\n"+
"-----------99---99-------9966666699-------99---99-----------\n"+
"----------99---99-------99-6--5---99-------99---992---------\n"+
"---------99---99-------99-3-----8--99-------99---99----8----\n"+
"----3---99---99898989899----4----3--99898989899---99--------\n"+
"------999---99969696969---9----------96969696999---999------\n"+
"-----99--------0-4----6------------5-62--------------99-----\n"+
"----99-------------1--6-----9696--7--6--1--0----------99----\n"+
"----99----------3-----6-----6--9-----61---------------99-----" ;
//------------------------------------------------------------------------------------------------------------------------------------------------
var vocabulary = [
  {text: "You", icon:"\u004e", key:"O" },
  {text: "Me", icon:"\u004f", key:"E" },
  {text: "Yes", icon:"\u004c", key:"Y" },
  {text: "No", icon:"\u004d", key:"N" },
  {text: "Attack", icon:"\50", key:"A" },
  {text: "Healing", icon:"\70", key:"H" },
  {text: "Gems", icon:"\u0044", key:"M" },
  {text: "Defend", icon:"\u0025", key:"D" },
  {text: "Wait", icon:"\u0048", key:"T" },
  {text: "Kill", icon:"\u005b", key:"K" },
  {text: "Base", icon:"\u0034", key:"B" },
  {text: "?????????????????", icon:"\131", key:"E" },
  {text: "Good Game", icon:"GG", key:"G" },
  {text: "No Prob", icon:"\u0047", key:"P" },
  {text: "Thanks", icon:"\u0041", key:"X" },
  {text: "Sorry", icon:"\u00a1", key:"S" }
];

var ships = [];
//level 1
var El_numero_uno_101 = '{"name":"El numero uno","level":1,"model":1,"size":2,"specs":{"shield":{"capacity":[80,120],"reload":[3,4]},"generator":{"capacity":[50,80],"reload":[15,25]},"ship":{"mass":100,"speed":[100,130],"rotation":[90,120],"acceleration":[115,140]}},"bodies":{"main":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":10,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-30,-30,-27,27,30,30],"z":[0,0,0,0,0,0]},"width":[0,19,20,20,17,0],"height":[0,12,15,15,12,0],"texture":[3]},"turbine1":{"section_segments":[0,45,90,135,180],"offset":{"x":0,"y":12,"z":0},"position":{"x":[-15,-15,-15,-15,-15,-15,-15,-15],"y":[-22.5,-20.7,-22.5,-18,-5.4,9.9,24.3,24.3],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,7,9,10,10,8,0],"height":[0,5,6,8,9,9,7,0],"texture":[3,17,4,63,11,2,4]},"turbine2":{"section_segments":[-180,-135,-90,-45,0],"offset":{"x":0,"y":12,"z":0},"position":{"x":[15,15,15,15,15,15,15,15],"y":[-22.5,-20.7,-22.5,-18,-5.4,9.9,24.3,24.3],"z":[0,0,0,0,0,0,0,0]},"width":[0,5,7,9,10,10,8,0],"height":[0,5,6,8,9,9,7,0],"texture":[3,17,4,63,11,2,4]},"engines":{"section_segments":8,"offset":{"x":6,"y":44,"z":0},"position":{"x":[0,0,0,0,0,0],"y":[-4,-1,1,4,5,3.5],"z":[0,0,0,0,0,0]},"width":[7,6,6,5,4,0],"height":[8.4,7.199999999999999,7.199999999999999,6,4.8,0],"texture":[2,17,2,12,17],"propeller":true},"front":{"section_segments":[40,45,50,130,135,140,220,225,230,310,315,320],"offset":{"x":0,"y":-36,"z":0},"position":{"x":[0,0,0,0,0],"y":[-20,-16,-4,0,16],"z":[0,0,0,0,0]},"width":[0,6,10,12,12],"height":[0,5,7.5,9,11],"texture":[2,3,63,3]},"barrels":{"section_segments":16,"offset":{"x":10,"y":-35,"z":0},"position":{"x":[0,0,0,0],"y":[-13,-15,15,15],"z":[0,0,0,0]},"width":[0,2,2,0],"height":[0,2,2,0],"texture":[17,4],"laser":{"damage":[3,5],"number":1,"speed":[90,120],"angle":0,"error":0,"rate":8}},"sideArmor1":{"section_segments":[0,45,90,135,180],"offset":{"x":0,"y":-27.5,"z":0},"position":{"x":[-12,-12,-12,-12,-12,-12],"y":[-8.5,-8.5,-5.1,5.1,8.5,8.5],"z":[0,0,0,0,0,0]},"width":[0,2,3,3,2,0],"height":[0,4,5,5,4,0],"texture":3},"sideArmor2":{"section_segments":[-180,-135,-90,-45,0],"offset":{"x":0,"y":-27.5,"z":0},"position":{"x":[12,12,12,12,12,12],"y":[-8.5,-8.5,-5.1,5.1,8.5,8.5],"z":[0,0,0,0,0,0]},"width":[0,2,3,3,2,0],"height":[0,4,5,5,4,0],"texture":3},"cockpit":{"section_segments":8,"offset":{"x":0,"y":-20,"z":7},"position":{"x":[0,0,0,0,0,0],"y":[-28,-26,-22,-14,-6,0],"z":[-4,-4.8,-2.8,-0.5,0.5,0]},"width":[0,3,3.5,4,3,3],"height":[0,3,3.5,4,3,2],"texture":[4,4,9,9,4]},"center_line":{"section_segments":[45,135,225,315],"offset":{"x":0,"y":10,"z":13},"position":{"x":[0,0,0,0,0,0],"y":[-27,-27,-23,23,27,27],"z":[-2,-2,0,0,-2,-2]},"width":[0,3,3,3,3,0],"height":[0,1,1,1,1,0],"texture":[4]},"middle1":{"section_segments":[45,135,225,315],"angle":90,"offset":{"x":1,"y":10,"z":12.9},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,32,33,0],"height":[0,1,1,0],"texture":17},"middle2":{"section_segments":[40,160,210],"angle":90,"offset":{"x":0,"y":-15.3,"z":12.4},"position":{"x":[0,0,0,0],"y":[0.5,0.5,2.5,2.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"middle3":{"section_segments":[-210,-160,-40],"angle":-90,"offset":{"x":0,"y":-15.3,"z":12.4},"position":{"x":[0,0,0,0],"y":[0.5,0.5,2.5,2.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"middle4":{"section_segments":[40,160,210],"angle":-90,"offset":{"x":0,"y":35.3,"z":12.4},"position":{"x":[0,0,0,0],"y":[0.5,0.5,2.5,2.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"middle5":{"section_segments":[-210,-160,-40],"angle":90,"offset":{"x":0,"y":35.3,"z":12.4},"position":{"x":[0,0,0,0],"y":[0.5,0.5,2.5,2.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsone-3":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":6,"y":-11.699999999999998,"z":12.8},"position":{"x":[0,0,0,0,0],"y":[-7,-7,-3,4,4],"z":[-2,-2,0,0,0]},"width":[0,2,2,2,0],"height":[0,1,1,1,0],"texture":[4]},"ribsone-2":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":6,"y":-2.9999999999999982,"z":12.8},"position":{"x":[0,0,0,0,0],"y":[-7,-7,-3,4,4],"z":[-2,-2,0,0,0]},"width":[0,2,2,2,0],"height":[0,1,1,1,0],"texture":[4]},"ribsone-1":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":6,"y":5.700000000000001,"z":12.8},"position":{"x":[0,0,0,0,0],"y":[-7,-7,-3,4,4],"z":[-2,-2,0,0,0]},"width":[0,2,2,2,0],"height":[0,1,1,1,0],"texture":[4]},"ribsone0":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":6,"y":14.4,"z":12.8},"position":{"x":[0,0,0,0,0],"y":[-7,-7,-3,4,4],"z":[-2,-2,0,0,0]},"width":[0,2,2,2,0],"height":[0,1,1,1,0],"texture":[4]},"ribsone1":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":6,"y":23.1,"z":12.8},"position":{"x":[0,0,0,0,0],"y":[-7,-7,-3,4,4],"z":[-2,-2,0,0,0]},"width":[0,2,2,2,0],"height":[0,1,1,1,0],"texture":[4]},"ribsone2":{"section_segments":[45,135,225,315],"angle":-90,"offset":{"x":6,"y":31.799999999999997,"z":12.8},"position":{"x":[0,0,0,0,0],"y":[-7,-7,-3,4,4],"z":[-2,-2,0,0,0]},"width":[0,2,2,2,0],"height":[0,1,1,1,0],"texture":[4]},"ribstwo-3":{"section_segments":[40,160,210],"angle":0,"offset":{"x":0,"y":-11.199999999999998,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribstwo-2":{"section_segments":[40,160,210],"angle":0,"offset":{"x":0,"y":-2.4999999999999982,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribstwo-1":{"section_segments":[40,160,210],"angle":0,"offset":{"x":0,"y":6.200000000000001,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribstwo0":{"section_segments":[40,160,210],"angle":0,"offset":{"x":0,"y":14.9,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribstwo1":{"section_segments":[40,160,210],"angle":0,"offset":{"x":0,"y":23.6,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribstwo2":{"section_segments":[40,160,210],"angle":0,"offset":{"x":0,"y":32.3,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsthree-3":{"section_segments":[-210,-160,-40],"angle":0,"offset":{"x":0,"y":-11.199999999999998,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsthree-2":{"section_segments":[-210,-160,-40],"angle":0,"offset":{"x":0,"y":-2.4999999999999982,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsthree-1":{"section_segments":[-210,-160,-40],"angle":0,"offset":{"x":0,"y":6.200000000000001,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsthree0":{"section_segments":[-210,-160,-40],"angle":0,"offset":{"x":0,"y":14.9,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsthree1":{"section_segments":[-210,-160,-40],"angle":0,"offset":{"x":0,"y":23.6,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsthree2":{"section_segments":[-210,-160,-40],"angle":0,"offset":{"x":0,"y":32.3,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfour-3":{"section_segments":[40,160,210],"angle":180,"offset":{"x":0,"y":-12.199999999999998,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfour-2":{"section_segments":[40,160,210],"angle":180,"offset":{"x":0,"y":-3.4999999999999982,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfour-1":{"section_segments":[40,160,210],"angle":180,"offset":{"x":0,"y":5.200000000000001,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfour0":{"section_segments":[40,160,210],"angle":180,"offset":{"x":0,"y":13.9,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfour1":{"section_segments":[40,160,210],"angle":180,"offset":{"x":0,"y":22.6,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfour2":{"section_segments":[40,160,210],"angle":180,"offset":{"x":0,"y":31.299999999999997,"z":12.4},"position":{"x":[11,11,11,11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfive-3":{"section_segments":[-210,-160,-40],"angle":180,"offset":{"x":0,"y":-12.199999999999998,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfive-2":{"section_segments":[-210,-160,-40],"angle":180,"offset":{"x":0,"y":-3.4999999999999982,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfive-1":{"section_segments":[-210,-160,-40],"angle":180,"offset":{"x":0,"y":5.200000000000001,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfive0":{"section_segments":[-210,-160,-40],"angle":180,"offset":{"x":0,"y":13.9,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfive1":{"section_segments":[-210,-160,-40],"angle":180,"offset":{"x":0,"y":22.6,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribsfive2":{"section_segments":[-210,-160,-40],"angle":180,"offset":{"x":0,"y":31.299999999999997,"z":12.4},"position":{"x":[-11,-11,-11,-11],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,3.4,3.4,0],"height":[0,1,1,0],"texture":16.7},"ribssix-3":{"section_segments":[45,135,225,315],"angle":180,"offset":{"x":5.5,"y":-12.199999999999998,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17},"ribssix-2":{"section_segments":[45,135,225,315],"angle":180,"offset":{"x":5.5,"y":-3.4999999999999982,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17},"ribssix-1":{"section_segments":[45,135,225,315],"angle":180,"offset":{"x":5.5,"y":5.200000000000001,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17},"ribssix0":{"section_segments":[45,135,225,315],"angle":180,"offset":{"x":5.5,"y":13.9,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17},"ribssix1":{"section_segments":[45,135,225,315],"angle":180,"offset":{"x":5.5,"y":22.6,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17},"ribssix2":{"section_segments":[45,135,225,315],"angle":180,"offset":{"x":5.5,"y":31.299999999999997,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17},"ribsseven-3":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":5.5,"y":-11.199999999999998,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17},"ribsseven-2":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":5.5,"y":-2.4999999999999982,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17},"ribsseven-1":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":5.5,"y":6.200000000000001,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17},"ribsseven0":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":5.5,"y":14.9,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17},"ribsseven1":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":5.5,"y":23.6,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17},"ribsseven2":{"section_segments":[45,135,225,315],"angle":0,"offset":{"x":5.5,"y":32.3,"z":12.4},"position":{"x":[0,0,0,0],"y":[-0.5,-0.5,1.5,1.5],"z":[0,0,0,0]},"width":[0,4.8,4.8,0],"height":[0,1,1,0],"texture":17}},"typespec":{"name":"El numero uno","level":1,"model":1,"code":101,"specs":{"shield":{"capacity":[80,120],"reload":[3,4]},"generator":{"capacity":[50,80],"reload":[15,25]},"ship":{"mass":100,"speed":[100,130],"rotation":[90,120],"acceleration":[115,140]}},"shape":[2.464,2.34,2.262,1.703,1.546,1.231,1.037,0.922,0.957,1.073,1.087,1.088,1.077,1.096,1.134,1.182,1.253,1.357,1.495,1.655,1.886,1.891,1.851,2.2,2.195,2.16,2.195,2.2,1.851,1.891,1.886,1.655,1.495,1.357,1.253,1.182,1.134,1.096,1.077,1.088,1.087,1.073,0.957,0.922,1.037,1.231,1.546,1.703,2.262,2.34],"lasers":[{"x":0.44,"y":-2.2,"z":0,"angle":0,"damage":[3,5],"rate":8,"speed":[90,120],"number":1,"spread":0,"error":0,"recoil":0},{"x":-0.44,"y":-2.2,"z":0,"angle":0,"damage":[3,5],"rate":8,"speed":[90,120],"number":1,"spread":0,"error":0,"recoil":0}],"radius":2.464}}';
//level 2

ships.push(El_numero_uno_101);

this.options = {
  root_mode: "team",
  friendly_colors: 1,
  map_size: 60,
  radar_zoom: 1,
  crystal_value: 0,
  soundtrack: "argon.mp3",
  speed_mod: 1,
  vocabulary: vocabulary,
  custom_map: map,
  asteroids_strength: 10,
  station_size: 2,
  ships: ships,
};
 
function tick(game){  
  if (game.step % 3600 === 0){
    if (game.ships.length === 1||2){
      rip += 1;
      basetimer(game);
    } else {
      rip += ~~(game.ships.length/3); 
      basetimer(game);
    }
  }
  if (game.step % 30 === 0){
    var max = Math.max(14,Math.min(26,~~(game.ships.length*2.2))); 
    if (game.aliens.length < max){
      var spawn_delay = game.step / ~~(1800/2*2.5);
      var alien = aliens[~~(Math.random()*Math.min(aliens.length,spawn_delay/4))];
      var coords = [[300,10],[300,-10],[290,0],[-290,0]];
      oof = coords[~~(Math.random()*coords.length)];
      alien.x = oof[1]+Math.cos(Math.random()*Math.PI*2)*5;
      alien.y = oof[0]+Math.sin(Math.random()*Math.PI*2)*5;
      game.addAlien(alien);
    }
    for (let ship of game.ships){
      if (!ship.custom.init){
        ship.custom.init = true;
        joinmessage(ship);
        basetimer(game);
        ship.custom.alive = true;
        game.configImageUI({
          id: "very important",
          visible: true,
          clickable: false,
          url: "https://raw.githubusercontent.com/Bhpsngum/img-src/master/yeet.jpg",
          position: {x:5,y:30},
          scale: {x:1,y:1.5},
          opacity: 1
        },ship.setUIComponent);
        game.configImageUI({
          id: "very important2",
          visible: true,
          clickable: false,
          url: "https://raw.githubusercontent.com/Bhpsngum/img-src/master/yeet2.jpg",
          position: {x:8,y:30},
          scale: {x:1,y:1.5},
          opacity: 1
        },ship.setUIComponent);        
      }
      for (let ship of game.ships){
        if (ship.alive === true){
        setTimeout(function(){
          ship.custom.alive = true;
        },5000);          
        }
        if (ship.x**2 + ship.y**2 > ship_radius && !ship.custom.alive){
          setTimeout(function(){
            ship.custom.alive = true;
            ship.set({x:0,y:0});
          },5000);      
        }
      }
    }
    if (rip > 79){
      game.setUIComponent({
        id: "wtf",
        position: [32,8,42-8,40-8],
        visible: true,
        components: [
          {type: "text",position:[0,0,80,33],value:"Your base is out of health!",color:"#fff"},
        ]
      });         
      setTimeout(function(){
        for (let ship of game.ships) ship.gameover({"Try again next time!":""});
        game.modding.I1I0I.send({name:"stop"});
      },5000);
    }
    for(var i=0; i<game.aliens.length; i++){  
      if (game.aliens[0].code == 19){
        //curry curry curry 
      } else {
        for (let alien of game.aliens) alien.set({kill:true});
        game.setUIComponent({
          id: "lol",
          position: [31,10,42-8,40-8],
          visible: true,
          components: [
            {type: "text",position:[0,-8,100,53],value:"Purple Saucer has been killed",color:"#fff"},
            {type: "text",position:[9,17,80,33],value:"GG, thanks for playing!",color:"#fff"},
          ]
        });            
        setTimeout(function(){ //don't make functions within a loop well FUCK YOU  
          for (let ship of game.ships) ship.gameover({"Nice":""});
          game.modding.I1I0I.send({name:"stop"});
        },5000);
      }
      //if (game.aliens[i].code == 12){
      //} else {
        //for (let i=0; i<2; i++) game.addAlien({code:19,level:1,crystals:2000,points:2000,x:game.aliens[0].x,y:game.aliens[0].y,vy:-1});
      //}
    }
  }
}

var ship_radius = 0.35;

function game_start(game){
  if (!game.custom.init){
    game.custom.init = true; 
    ship_radius = (ship_radius * game.options.map_size * 5) ** 2;
    game.addAlien({code:19,level:2,crystals:4000,points:4000,x:0,y:300});
    game.aliens[0].set({shield:10000,regen:5});
    for (let i=0; i<40; i+=10) game.addAlien({code:12,crystals:1200,points:1200,x:Math.cos(Math.random()*Math.PI*2)*i,y:280+Math.sin(Math.random()*Math.PI*2)*i});
  }
  this.tick = tick;
}
this.tick = game_start;

this.event = function(event, game){
  switch (event.name){
    case "ship_destroyed":
      event.ship.custom.alive = false;
    break;
  }
};


var rip = 1;

yeetalien = function(game){
  for(let i=0; i<game.aliens.length; i++){
    game.aliens[i].set({kill:true});
  }
};

var aliens = [
{code:10,level:0,points:20,crystal_drop:5},
{code:11,level:0,points:30,crystal_drop:10},
{code:10,level:1,points:40,crystal_drop:10},
{code:17,level:0,points:30,crystal_drop:10},
{code:16,level:0,points:30,crystal_drop:10},
{code:17,level:1,points:50,crystal_drop:20},
{code:16,level:1,points:50,crystal_drop:20}, 
{code:11,level:2,points:120,crystal_drop:50}, 
{code:10,level:2,points:70,crystal_drop:20}, 
{code:14,level:1,points:70,crystal_drop:30}, 
{code:16,level:2,points:150,crystal_drop:75},
{code:17,level:3,points:100,crystal_drop:75}, 
{code:19,level:0,points:400,crystal_drop:200},
{code:16,level:3,points:1000,crystal_drop:500}
];

function rand(lol){
  return ~~((Math.random() * lol));
}

function basetimer(game){
  game.setUIComponent({
    id: "pogggggggg",
    position: [22,1,22,20],
    visible: true,
    components: [
      {type: "text",position:[0,0,80,33],value:"Station energy:",color:"#fff"},
      {type:"box",position:[1,34,79-rip,10],fill:"#00cc00"},
      {type:"box",position:[1,34,78,10],stroke:"#000",width:3}
    ]
  });   
}

function joinmessage(ship){
  ship.setUIComponent({
    id: "yeet",
    position: [32,8,42-8,40-8],
    visible: true,
    components: [
      {type: "text",position:[0,0,85+3,38+3],value:"Kill the purple Saucer to win",color:"#fff"},
      {type: "text",position:[5.5,20,80-4,33-4],value:"Good luck and have fun!",color:"#fff"},
    ]
  });      
  setTimeout(function(){  
    ship.setUIComponent({id:"yeet",visible:false});
  },5000);
}

game.configImageUI = function(opt, handler){
  let image = {
    id: opt.id,
    visible: opt.visible,
    clickable: opt.clickable,
    components: []
  };
  if (opt.url){
    let img = $("#"+opt.id)[0];
    if (!img){
      img = document.createElement("img");
      img.setAttribute("id",opt.id);
      img.setAttribute("style","display:none");
      img.crossOrigin = "anonymous";
      $('body').append(img);
    }
    img.onload = function(){
      this.canvas = $('<canvas />')[0];
      this.canvas.width = img.width;
      this.canvas.height = img.height;
      this.canvas.getContext('2d').drawImage(this, 0, 0, this.width, this.height);
      let mx,my,h=100/this.height,w=100/this.width,d=[],pos=opt.position||{x:0,y:0},scale = opt.scale||{x:1,y:1};
      function round(num){
        return parseFloat(num.toFixed(2));
      }
      if (["scoreboard","radar_background"].indexOf(opt.id) != -1){
        d=[0,0];
        mx=(pos.x||0)/100;
        my=(pos.y||0)/100;
      } else {
        d = [pos.x||0,pos.y||0];
        mx=0;
        my=0;
      }
      image.position = [d,[round(w*(scale.x||1)),round(h*(scale.y||1))]].flat();
      for (let i=0;i<this.height;i++){
        for (let j=0;j<this.width;j++){
          let data = img.canvas.getContext('2d').getImageData(j,i,1,1).data;
          image.components.push({type:"box",position:[round(w*j+mx),round(h*i+my),round(w*1.5),round(h*1.5)],fill:`rgba(${data[0]},${data[1]},${data[2]},${data[3]/255*(opt.opacity||1)})`});
        }
      }
      (typeof handler == "function") && handler(image);
    };
    img.onerror = function(){throw new Error("Failed to fetch the image")};
    img.setAttribute("src",opt.url);
  }
  else throw new Error("No Image Url detected");
};
