(this["webpackJsonpbashamayim-hi"]=this["webpackJsonpbashamayim-hi"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports={Btn:"Buttons_Btn__D111h",Answer:"Buttons_Answer__23L2T",Big:"Buttons_Big__2sODL",Config:"Buttons_Config__1xkX0",Small:"Buttons_Small__3Rynh",Wide:"Buttons_Wide__EnYXk"}},,,,,,,,,,function(e,t,a){e.exports={instructions:"GameInstructions_instructions__CymAn",picture:"GameInstructions_picture__1MiUw"}},,,function(e,t,a){e.exports={RoundContainer:"BHRound_RoundContainer__2N81t",Canvas:"BHRound_Canvas__2yRF9",canvasWrap:"BHRound_canvasWrap__32yia",textBox:"BHRound_textBox__2zIo4"}},,,,function(e,t,a){e.exports=a.p+"static/media/SRHirsch.0135d99e.png"},,,function(e,t,a){e.exports={scrollable_menu:"GameCustomText_scrollable_menu__2suWw"}},,function(e,t,a){e.exports={pageContainer:"BHGame_pageContainer__1aKmn",contentWrap:"BHGame_contentWrap__3vA_6"}},function(e,t,a){e.exports={NavbarOuter:"Navbar_NavbarOuter__3yFJ1",NavbarInner:"Navbar_NavbarInner__3UfLh"}},,,,,function(e,t,a){e.exports=a.p+"static/media/sky5.fa863610.jpg"},function(e,t,a){e.exports={Modal:"Modal_Modal__2PU8i"}},function(e,t,a){e.exports={scrollable_menu:"GameCustomChapter_scrollable_menu__3tml4"}},function(e,t,a){e.exports=a.p+"static/media/instructions1.d184b7ef.PNG"},function(e,t,a){e.exports=a.p+"static/media/instructions_spike.5a45cc6a.PNG"},function(e,t,a){e.exports=a.p+"static/media/blank_block.e24c31e6.PNG"},function(e,t,a){e.exports=a.p+"static/media/hard_block.de640c83.PNG"},function(e,t,a){e.exports=a.p+"static/media/bashamayim_hi_block.29c640e3.PNG"},function(e,t,a){e.exports=a.p+"static/media/powerup.aac40b6c.PNG"},,function(e,t,a){e.exports={footer:"Footer_footer__2JHEO"}},,function(e,t,a){e.exports=a(65)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},function(e,t,a){},function(e){e.exports=JSON.parse('{"general":{"screen":{"width":"","height":""}},"block":{"color":"","textColor":""},"easy":{"blockFreq":{},"powerUps":{"spring":20,"orbBack":20,"orbForward":20},"blockTypeFreq":{"sideways":5,"rising":5},"wordTypeFreq":{"spike":15}},"hard":{"blockTypeFreq":{"sideways":5,"rising":5},"powerUps":{"spring":20,"orbBack":20,"orbForward":20},"wordTypeFreq":{"spike":15}}}')},,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(20),s=a.n(i),o=(a(53),a(3)),l=(a(54),a(55),a(4)),h=a(11),c=a(15),d=a(14),u=function(){function e(){Object(l.a)(this,e),this.stripCantillation=function(e){return e.replace(/[\u0591-\u05AF\u05c0]|\(\u05e4\)|\(\u05e1\)|\[(.*?)]/g,"").split(/[\s\u05BE]+/)}}return Object(h.a)(e,[{key:"removeHTML",value:function(e){return e.map((function(e){return e.replace(/<\s*a[^>]*>(.*?)<\s*\/\s*a>/g,"").replace(/<[^>]*>/g,"")}))}},{key:"stripVowels",value:function(e){return e.replace(/[\u0591-\u05C7]/g,"")}},{key:"shuffleArray",value:function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}}]),e}(),m=function e(){var t=this;Object(l.a)(this,e),this.setDimensions=function(){window.innerHeight>=1e3?(t.screenHeight=1e3,t.screenWidth=t.screenHeight*(5/8)):window.innerHeight>=800?(t.screenHeight=800,t.screenWidth=t.screenHeight*(5/8)):(t.screenHeight=650,t.screenWidth=t.screenHeight*(5/8))},this.roundedRect=function(e,t,a,n,r,i){e.beginPath(),e.moveTo(t,a+i),e.lineTo(t,a+r-i),e.arcTo(t,a+r,t+i,a+r,i),e.lineTo(t+n-i,a+r),e.arcTo(t+n,a+r,t+n,a+r-i,i),e.lineTo(t+n,a+i),e.arcTo(t+n,a,t+n-i,a,i),e.lineTo(t+i,a),e.arcTo(t,a,t,a+i,i),e.fill(),e.stroke()},this.downwardTriangle=function(e,t,a,n,r){e.beginPath(),e.moveTo(t,a),e.lineTo(t+r,a+n),e.lineTo(t+2*r,a),e.fill()},this.adjustY=function(e){return e/800*t.screenHeight},this.adjustX=function(e){return e/600*t.screenWidth},this.setDimensions()},p=new m,f=function e(t,a,n,r,i,s,o,h){var c=this;Object(l.a)(this,e),this.width=p.adjustX(125),this.height=p.adjustY(25),this.directionH="right",this.directionV="down",this.riseCount=0,this.passedText=!1,this.highlight=!1,this.moveTime=10,this.broken=!1,this.color="#00bfff",this.killed=!1,this.draw=function(e){e.fillStyle=c.color,c.passedText?(c.color="#0a13ff",e.fillStyle=c.color):c.last?(c.color="#a38841",e.fillStyle=c.color):c.highlight&&(c.color="#5EFF16",e.fillStyle=c.color),p.roundedRect(e,c.x,c.y,c.width,c.height,p.adjustX(5),"black"),e.font="bold "+p.adjustX(22)+"px'BlinkMacSystemFont','Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",e.fillStyle="white","#5EFF16"===c.color&&(e.fillStyle="#090524"),e.textAlign="center",e.fillText(c.word,c.x+c.width/2,c.y+c.height/4*3),"spring"===c.powerup?(e.fillStyle="grey",e.fillRect(c.x+p.adjustX(35),c.y-p.adjustY(10),p.adjustX(30),p.adjustY(10))):"orbBack"==c.powerup?(e.beginPath(),e.arc(c.x+c.width/2,c.y-p.adjustY(15),p.adjustY(10),0,2*Math.PI),e.fillStyle="white",e.fill(),e.stroke()):"orbForward"==c.powerup?(e.beginPath(),e.arc(c.x+c.width/2,c.y-p.adjustY(15),p.adjustY(10),0,2*Math.PI),e.fillStyle="#5EFF16",e.fill(),e.stroke()):"spike"==c.wordType&&(e.fillStyle="grey",p.downwardTriangle(e,c.x+0*c.width,c.y+c.height,c.width/6,c.width/6),p.downwardTriangle(e,c.x+c.width*(2/6),c.y+c.height,c.width/6,c.width/6),p.downwardTriangle(e,c.x+c.width*(4/6),c.y+c.height,c.width/6,c.width/6))},this.update=function(){"sideways"===c.type?(c.x>=p.screenWidth-c.width?c.directionH="left":c.x<=0&&(c.directionH="right"),"right"===c.directionH?c.x+=p.adjustX(2.5):c.x-=p.adjustX(2.5)):"rising"===c.type&&("down"===c.directionV&&70===c.riseCount?(c.directionV="up",c.riseCount=0):"up"===c.directionV&&70===c.riseCount&&(c.directionV="down",c.riseCount=0),c.riseCount=c.riseCount+1,"down"===c.directionV?c.y+=p.adjustX(1.25):c.y-=p.adjustX(1.25)),"spike"===c.wordType&&("right"===c.directionH?(c.x+=p.adjustX(1),c.moveTime-=1,0===c.moveTime&&(c.directionH="left",c.moveTime=100)):(c.x-=p.adjustX(1),c.moveTime-=1,0===c.moveTime&&(c.directionH="right",c.moveTime=100)))},this.x=t,this.y=a,this.powerup=n,this.type=r,this.word=i,this.wordType=s,this.wordIndex=o,this.last=h},g=a(47),y=new m,x=new f,v=function e(t,a,n,r){var i=this;Object(l.a)(this,e),this.decoyIndex=0,this.textIndex=0,this.section=0,this.setIndex=function(e){i.textIndex=e},this.blockGenerator=function(e,t,a,n,r){var s;for(s=0===e?1:e;s<e+60;s++)if(s>=t.length){var o,l,h,c,d=0,u=void 0,m=void 0;u="decoyWord"===t[s-1].wordType||"spike"===t[s-1].wordType?"decoyWord"===t[s-2].wordType||"spike"===t[s-1].wordType?"textWord":i.generateWordType(s):"textWord"===t[s-1].wordType&&null!=t[s-2]&&"textWord"===t[s-2].wordType&&null!=t[s-3]&&"textWord"===t[s-3].wordType?"decoyWord":i.generateWordType(),o=i.generateBlockType(),0!==d||"textWord"===u&&(d=i.generatePowerup(i.level));var p=i.attributeWordToBlock(u),v=Object(g.a)(p,3);l=v[0],u=v[1],h=v[2],c=Math.random()*(y.screenWidth-x.width),m="decoyWord"===u||"decoyWord"===t[s-1].wordType?t[s-1].y-(Math.random()*(y.adjustY(50)+n*y.adjustY(10))+y.adjustY(30)+a)*(2/3):"spike"===u?t[s-1].y-(Math.random()*(y.adjustY(50)+n*y.adjustY(10))+y.adjustY(50)+a):"spike"===t[s-1].wordType?t[s-1].y-(Math.random()*(y.adjustY(20)+n*y.adjustY(10))+y.adjustY(10)+a):"sideways"===t[s-1].type||"rising"===t[s-1].type?t[s-1].y-(Math.random()*(y.adjustY(45)+n*y.adjustY(10))+y.adjustY(40)+a):"textWord"===t[s-1].wordType?t[s-1].y-(Math.random()*(y.adjustY(45)+n*y.adjustY(10))+y.adjustY(75)+a):t[s-1].y-(Math.random()*(y.adjustY(45)+n*y.adjustY(10))+y.adjustY(25)+a);var w=!1;if(i.textIndex===r.length){if("decoyWord"==u)break;w=!0}if(i.textIndex>r.length)break;var b=new f(c,m,d,o,l,u,h,w);t.push(b)}for(var k=0;k<e-2;k++)t.shift();i.section<3&&i.section++},this.generatePowerup=function(e){var t={easy:{spring:i.config.easy.powerUps.spring,orbBack:i.config.easy.powerUps.orbBack,orbForward:i.config.easy.powerUps.orbForward},hard:{spring:i.config.hard.powerUps.spring,orbBack:i.config.hard.powerUps.orbBack,orbForward:i.config.hard.powerUps.orbForward}};return 0===Math.round(Math.random()*t[e].spring)?"spring":0===Math.round(Math.random()*t[e].orbBack)?"orbBack":0===Math.round(Math.random()*t[e].orbForward)?"orbForward":0},this.generateBlockType=function(){var e=i.config.hard.blockTypeFreq.sideways*((5-i.section)/5),t=i.config.hard.blockTypeFreq.rising*((5-i.section)/5);return Math.round(Math.random()*e)===e?"sideways":Math.round(Math.random()*t)===t?"rising":"regular"},this.generateWordType=function(e){var t=i.config.hard.wordTypeFreq.spike,a=1;return e>5&&Math.round(Math.random()*t)===t?"spike":Math.round(Math.random()*a)===a?"textWord":"decoyWord"},this.attributeWordToBlock=function(e){var t,a;return"textWord"===e?(t=i.mainText[i.textIndex],a=i.textIndex,i.textIndex++):"decoyWord"===e?(t="hard"===i.level?i.decoyText[i.decoyIndex]:i.decoyIndex%2===0?"\u05d1\u05e9\u05de\u05d9\u05dd \u05d4\u05d9\u05d0":"",a=i.decoyIndex,i.decoyIndex++):(a=0,t=""),[t,e,a]},this.level=t,this.mainText=a,this.decoyText=n,this.config=r},w=a(25),b=a.n(w),k=new m,_=function e(t,a,n,r){var i=this;Object(l.a)(this,e),this.x=k.adjustX(300),this.y=k.adjustY(550),this.width=k.adjustX(80),this.height=k.adjustY(80),this.xSpeed=k.adjustX(6.7),this.ySpeed=0,this.orbDurability=0,this.yDistanceTravelled=0,this.direction="left",this.dead=!1,this.win=!1,this.highestWordIndex=0,this.update=function(e,t,a,n,r,s,o){if(i.dead)r.font="bold "+k.adjustX(54)+"px 'BlinkMacSystemFont','Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",r.fillStyle="#090524",r.textAlign="center",r.strokeStyle="black",r.lineWidth=1,r.fillText("Game Over:",k.screenWidth/2,k.screenHeight/2),r.strokeText("Game Over:",k.screenWidth/2,k.screenHeight/2),r.font="bold "+k.adjustX(36)+"px 'BlinkMacSystemFont','Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",r.fillStyle="#5EFF16",r.fillText("Press 'c' to Continue",k.screenWidth/2,k.screenHeight/2+50),r.strokeText("Press 'c' to Continue",k.screenWidth/2,k.screenHeight/2+50),r.fillText("Press 'n' to Start a New Game",k.screenWidth/2,k.screenHeight/2+100),r.strokeText("Press 'n' to Start a New Game",k.screenWidth/2,k.screenHeight/2+100);else if(i.win)i.ySpeed=0,i.xSpeed=0,r.font="bold "+k.adjustX(45)+"px 'BlinkMacSystemFont','Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",r.fillStyle="#090524",r.textAlign="center",r.strokeStyle="black",r.lineWidth=1,r.fillText("Congratulations!",k.screenWidth/2,k.screenHeight/2),r.strokeText("Congratulations!",k.screenWidth/2,k.screenHeight/2),r.font="bold "+k.adjustX(36)+"px 'BlinkMacSystemFont','Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",r.fillStyle="#5EFF16",r.fillText("Press 'n' to Start a New Game",k.screenWidth/2,k.screenHeight/2+100),r.strokeText("Press 'n' to Start a New Game",k.screenWidth/2,k.screenHeight/2+100);else{if(i.ySpeed+=i.gravity,i.y<=k.screenHeight/2-k.adjustY(100)&&i.ySpeed<=0)for(var l=0;l<a.length;l++)a[l].y-=i.ySpeed;else i.y+=i.ySpeed;i.yDistanceTravelled-=i.ySpeed}s&&(i.direction="left",i.img.src=b.a,i.moveLeft()),o&&(i.direction="right",i.img.src=b.a,i.moveRight());for(var h=0;h<a.length;h++)i.ySpeed>=0&&i.x>=a[h].x-i.width+k.adjustX(15)&&i.x<=a[h].x+a[h].width-k.adjustX(15)&&i.y>=a[h].y-i.height&&i.y<=a[h].y+a[h].height-i.height&&("decoyWord"===a[h].wordType?a[h].broken=!0:"spike"===a[h].wordType?(i.jump(a,h,e),a[h].wordType="wordText",a[h].word="",a[h].color="red"):(a[h].last&&(console.log("Win"),i.win=!0),i.jump(a,h,e))),i.y>a[h].y&&"spike"===a[h].wordType&&i.x>=a[h].x-i.width+k.adjustX(28)&&i.x<=a[h].x+a[h].width-k.adjustX(28)&&i.y>=a[h].y-a[h].height&&i.y<=a[h].y+a[h].height&&(i.dead=!0);for(var c=a.length-1;c>0;c--)if(a[c].y>k.screenHeight){i.setLowestBlock(c+1),e=c+1;break}(i.y>=a[e].y||i.y>=k.screenHeight)&&(i.dead=!0),e>=45&&(t<0&&(t+=1),i.BGenerate.blockGenerator(e,a,n,t,i.mainText))},this.jump=function(e,t,a){"textWord"===e[t].wordType&&(console.log("high "+i.highestWordIndex),i.highestWordIndex=Math.max(i.highestWordIndex,e[t].wordIndex),console.log("word "+e[t].wordIndex),console.log(Math.max(i.highestWordIndex,e[t].wordIndex)));var n=e[t],r=n.powerup,s=(n.type,n.wordType);if(i.ySpeed=k.adjustY(-11.5),"orbBack"===r&&(i.orbDurability=10),0!==i.orbDurability){for(var o=a;o<e.length;o++){if(e[o].y<=i.y+i.height-e[o].height){n.powerup=0;break}"decoyWord"!==e[o].wordType&&(e[o].passedText=!0)}i.orbDurability-=1}if("orbForward"===r){for(var l=t+1,h=0;h<5;){for(;"decoyWord"===e[l].wordType;)l++;e[l].highlight=!0,l++,h++}n.powerup=0}"textWord"===s&&"spring"===r&&(i.ySpeed=k.adjustY(-16.5))},this.moveLeft=function(){i.x-=i.xSpeed,i.x<=-i.width&&(i.x=k.screenWidth)},this.moveRight=function(){i.x+=i.xSpeed,i.x>=k.screenWidth&&(i.x=-i.width)},this.draw=function(e){e.drawImage(i.img,i.x,i.y,i.width,i.height)},this.img=new Image,this.img.src=b.a,this.gravity=t,this.setLowestBlock=a,this.BGenerate=n,this.mainText=r},C=a(36),M=a.n(C),E=new m,S=function e(t,a,n,r,i,s,o,h,c){var d=this;Object(l.a)(this,e),this.holdingLeftKey=!1,this.holdingRightKey=!1,this.dead=!1,this.difficulty=0,this.score=0,this.gravity=E.adjustY(.25),this.lowestBlock=0,this.blocks=[],this.blockOffset=E.adjustY(50),this.fps=60,this.then=Date.now(),this.interval=1e3/this.fps,this.reported=!1,this.id="",this.keydown=function(e){37===e.keyCode?d.holdingLeftKey=!0:39===e.keyCode?d.holdingRightKey=!0:67===e.keyCode&&d.player.dead&&(d.blocks=[],d.lowestBlock=0,d.difficulty=0,d.score=0,d.blocks.push(new f),d.blocks[0].x=E.adjustX(300),d.blocks[0].y=E.adjustY(650),d.blocks[0].type=0,d.blocks[0].powerup=0,d.blocks[0].word="",d.reported=!1,d.BGenerate.section=0,d.BGenerate.setIndex(d.player.highestWordIndex),d.BGenerate.blockGenerator(d.lowestBlock,d.blocks,d.blockOffset,d.difficulty,d.mainText),d.player.yDistanceTravelled=0,d.player.x=E.adjustX(300),d.player.y=E.adjustY(550),d.player.dead=!1,d.continueGame()),78===e.keyCode&&(d.player.dead||d.player.win)&&(d.newGame(),d.playing=!1)},this.keyup=function(e){37===e.keyCode?d.holdingLeftKey=!1:39===e.keyCode&&(d.holdingRightKey=!1)},this.showScore=function(e,t,a){e>t&&(d.score=Math.round(e)),a.font="bold 36px Arial",a.fillStyle="black",a.textAlign="left",a.fillText(t,18,40)},this.setFirstBlock=function(e){var t=E.adjustX(300),a=E.adjustY(650);e.push(new f(t,a,0,0,""))},this.setLowestBlock=function(e){d.lowestBlock=e},this.exitGame=function(){d.playing=!1},this.loop=function(){if(d.playing&&setTimeout(function(){requestAnimationFrame(this.loop)}.bind(d),1e3/60),d.now=Date.now(),d.delta=d.now-d.then,d.delta>d.interval){var e=new Image;e.src=M.a,d.ctx.drawImage(e,0,0,E.screenWidth-1,E.screenHeight),d.ctx.strokeRect(0,0,E.screenWidth-1,E.screenHeight),d.ctx.fill();for(var t=0;t<d.blocks.length;t++)d.blocks[t].broken||d.blocks[t].draw(d.ctx);d.player.dead||d.player.win||d.player.draw(d.ctx),d.ctx.fill();for(var a=0;a<d.blocks.length;a++)d.blocks[a].broken||d.blocks[a].update();d.player.update(d.lowestBlock,d.difficulty,d.blocks,d.blockOffset,d.ctx,d.holdingLeftKey,d.holdingRightKey),d.setIndex(d.player.highestWordIndex)}d.showScore(d.player.yDistanceTravelled,d.score,d.ctx),d.then=d.now-d.delta%d.interval,d.player.dead&&(d.reported,d.reported=!0)},this.mainText=n,this.ctx=t.getContext("2d"),t.width=E.screenWidth,t.height=E.screenHeight,this.canvas=t,window.addEventListener("keydown",this.keydown,!1),window.addEventListener("keyup",this.keyup,!1),this.config=c,this.BGenerate=new v(a,n,r,this.config),this.level=a,this.setFirstBlock(this.blocks),this.player=new _(this.gravity,this.setLowestBlock,this.BGenerate,this.mainText),this.BGenerate.blockGenerator(this.lowestBlock,this.blocks,this.blockOffset,this.difficulty,this.mainText),this.id=i,this.newGame=s,this.continueGame=o,this.setIndex=h,this.playing=!0,this.loop()},T=a(21),N=a.n(T),j={tanakh:{Genesis:50,Exodus:40,Leviticus:27,Numbers:36,Deuteronomy:34,Joshua:24,Judges:21,I_Samuel:31,II_Samuel:24,I_Kings:22,II_Kings:25,Isaiah:66,Jeremiah:52,Ezekiel:48,Hosea:14,Joel:4,Amos:9,Obadiah:1,Jonah:4,Micah:7,Nahum:3,Habakkuk:3,Zephaniah:3,Haggai:2,Zechariah:14,Malachi:3,Psalms:150,Proverbs:31,Job:42,Song_of_Songs:8,Ruth:4,Lamentations:5,Ecclesiastes:12,Esther:10,Daniel:12,Ezra:10,Nehemiah:13,I_Chronicles:29,II_Chronicles:36},mishnah:{Mishnah_Berakhot:9,Mishnah_Peah:8,Mishnah_Demai:7,Mishnah_Kilayim:9,Mishnah_Sheviit:10,Mishnah_Terumot:11,Mishnah_Maasrot:5,Mishnah_Maaser_Sheni:5,Mishnah_Challah:4,Mishnah_Orlah:3,Mishnah_Bikkurim:4,Mishnah_Shabbat:24,Mishnah_Eruvin:10,Mishnah_Pesachim:10,Mishnah_Shekalim:8,Mishnah_Yoma:8,Mishnah_Sukkah:5,Mishnah_Beitzah:5,Mishnah_Rosh_Hashanah:4,Mishnah_Taanit:4,Mishnah_Megillah:4,Mishnah_Moed_Katan:3,Mishnah_Chagigah:3,Mishnah_Yevamot:16,Mishnah_Ketubot:13,Mishnah_Nedarim:11,Mishnah_Nazir:9,Mishnah_Sotah:9,Mishnah_Gittin:9,Mishnah_Kiddushin:4,Mishnah_Bava_Kamma:10,Mishnah_Bava_Metzia:10,Mishnah_Bava_Batra:10,Mishnah_Sanhedrin:11,Mishnah_Makkot:3,Mishnah_Shevuot:8,Mishnah_Eduyot:8,Mishnah_Avodah_Zarah:5,Mishnah_Avot:5,Mishnah_Horayot:3,Mishnah_Zevachim:14,Mishnah_Menachot:13,Mishnah_Chullin:12,Mishnah_Bekhorot:9,Mishnah_Arakhin:9,Mishnah_Temurah:7,Mishnah_Keritot:6,Mishnah_Meilah:6,Mishnah_Tamid:7,Mishnah_Middot:5,Mishnah_Kinnim:3,Mishnah_Kelim:30,Mishnah_Oholot:18,Mishnah_Negaim:14,Mishnah_Parah:12,Mishnah_Tahorot:10,Mishnah_Mikvaot:10,Mishnah_Niddah:10,Mishnah_Makhshirin:6,Mishnah_Zavim:5,Mishnah_Tevul_Yom:4,Mishnah_Yadayim:4,Mishnah_Oktzin:3},talmud:{Berakhot:64,Shabbat:157,Eruvin:105,Pesachim:121,Rosh_Hashanah:35,Yoma:88,Sukkah:56,Beitzah:40,Taanit:31,Megillah:32,Moed_Katan:29,Chagigah:27,Yevamot:122,Ketubot:112,Nedarim:91,Nazir:66,Sotah:49,Gittin:90,Kiddushin:82,Bava_Kamma:119,Bava_Metzia:119,Bava_Batra:176,Sanhedrin:113,Makkot:24,Shevuot:49,Avodah_Zarah:76,Horayot:14,Zevachim:120,Menachot:110,Chullin:142,Bekhorot:61,Arakhin:34,Temurah:34,Keritot:28,Meilah:22,Tamid:8,Niddah:73}},B=a(8),H=a.n(B),I=function(e){e.title;return r.a.createElement("button",{className:"col-sm "+H.a.Btn+" "+H.a.Config+H.a.Small,onClick:function(){return e.setConfig(e.response)}},e.children)},W=function(e){var t=r.a.createElement("h3",null,e.title);return r.a.createElement("div",{className:"col"},e.title&&t,r.a.createElement("button",{className:H.a.Btn+" "+H.a.Config+" "+H.a.Wide,onClick:function(){return e.setConfig(e.response)}},e.children))},G=function(e){return r.a.createElement("div",{className:"col-sm "},r.a.createElement("button",{className:H.a.Btn+" "+H.a.Small,onClick:e.onClick},r.a.createElement("p",null,e.children)))},O=a(56),P=new u,F=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).updateCanvas=function(){e.refs.canvas.getContext("2d").fillRect(0,0,100,100)},e.fetchSingleChapterText=function(){var t="https://www.sefaria.org/api/texts/"+e.props.text+"."+e.props.startChapter+"?custom=ashkenazi";return fetch(t).then((function(e){return e.json()})).then((function(t){return t.he=P.removeHTML(t.he),e.props.startVerse&&e.props.endVerse&&(t.he=t.he.filter((function(t,a){return a>=e.props.startVerse-1&&a<e.props.endVerse}))),t.he})).then((function(e){return P.stripCantillation(e.join(" "))}))},e.fetchMultiChapterText=function(){var t=e.props.endChapter-e.props.startChapter+1,a=Array.from(new Array(t),(function(t,a){return a+e.props.startChapter}));return Promise.all(a.map((function(t,a){var n="https://www.sefaria.org/api/texts/"+e.props.text+"."+t+"?custom=ashkenazi";return fetch(n).then((function(e){return e.json()})).then((function(e){return P.removeHTML(e.he)}))}))).then((function(t){return t[0].splice(0,e.props.startVerse-1),t[t.length-1].splice(e.props.endVerse),t.flat()})).then((function(e){return P.stripCantillation(e.join(" "))}))},e.generateDecoyWords=function(t,a){for(var n=[],r=[],i=0;i<2;i++){var s=Object.keys(j.tanakh),o=s[Math.floor(Math.random()*s.length)],l=Math.ceil(Math.random()*j.tanakh[o]);n.push(o),r.push(l)}return Promise.all(n.map((function(e,t){var a="https://www.sefaria.org/api/texts/"+n[t]+"."+r[t]+"?custom=ashkenazi";return fetch(a).then((function(e){return e.json()})).then((function(e){return P.removeHTML(e.he)}))}))).then((function(t){for(var n=P.stripCantillation(e.verseListsToCleanedWords(t,a).join(" "));a.length*(5/4)>n.length;)n=n.concat(n);return console.log(a),console.log(n),n}))},e.verseListsToCleanedWords=function(t,a){var n=t.flat();return n=e.shuffleArray(n.join(" ").split(/[\s\u05BE]+/).filter((function(t){return e.checkOverlap(t,a)})))},e.shuffleArray=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}return e},e.checkOverlap=function(e,t){var a=t.map((function(e){return e.replace(/[\u0591-\u05C7]/g,"").substring(1)}));if(!(t=t.map((function(e){return e.replace(/[\u0591-\u05C7]/g,"")}))).includes(e)&&!a.includes(e.replace(/[\u0591-\u05C7]/g,"").substring(1))&&!a.includes(e.replace(/[\u0591-\u05C7]/g,""))&&!t.includes(e.replace(/[\u0591-\u05C7]/g,"").substring(1)))return!0},e.setIndex=function(t){e.setState({index:t}),console.log("setting index "+t)},e.setTextHelper=function(){console.log("textHelper"),e.setState({textHelper:!e.state.textHelper})},e.state={game:"",index:0,gameProcessed:!1,textHelper:!1},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.updateCanvas(),(this.props.endChapter?this.fetchMultiChapterText():this.fetchSingleChapterText()).then((function(t){return e.generateDecoyWords(e.props.text,t).then((function(a){var n=new S(e.refs.canvas,e.props.level,t,a,1,e.props.newGame,e.props.continueGame,e.setIndex,O);e.setState({game:n,gameProcessed:!0,textWords:t})}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row "+N.a.RoundContainer},r.a.createElement("div",{className:"col-sm "},r.a.createElement("p",null)),r.a.createElement("div",{className:"col-sm "+N.a.canvasWrap},r.a.createElement("canvas",{className:N.a.Canvas,ref:"canvas",width:0,height:0})),this.state.textHelper?r.a.createElement("div",{className:"col-sm "},r.a.createElement(G,{onClick:this.setTextHelper},"Hide Text"),r.a.createElement("p",{className:N.a.textBox},this.state.textWords.filter((function(t,a){return a<=e.state.index})).join(" "))):this.state.gameProcessed&&r.a.createElement(G,{onClick:this.setTextHelper},"Show Text"))}}]),a}(n.Component),Y=a(28),D=a.n(Y),U=a(37),L=a.n(U),V=function(e){return r.a.createElement("div",{className:L.a.Modal},e.children)},A=a(38),R=a.n(A),X=function(e){var t=r.a.createElement("div",null);return"Sefarim"!=e.textUrlName&&(t=Array.from(Array(j.tanakh[e.textUrlName]).keys()).map((function(t,a){return r.a.createElement("button",{className:"dropdown-item",type:"button",onClick:function(){return e.setStartChapter(t+1)}},t+1)}))),r.a.createElement("div",null,r.a.createElement("p",null,"Please choose a chapter"),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",className:"btn btn-secondary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},e.startChapter),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right "+R.a.scrollable_menu},t)))},K=function(e){var t=Object.keys(j.tanakh).map((function(t,a){return r.a.createElement("button",{className:"dropdown-item",type:"button",onClick:function(){return e.setText(t)}},t.split("_").join(" "))})),a=r.a.createElement("div",{className:"row"},r.a.createElement(I,{setConfig:function(){return e.setLevel("easy")}},"Easy"),r.a.createElement(I,{setConfig:function(){return e.setLevel("hard")}},"Hard"));return r.a.createElement(V,null,r.a.createElement("h1",null,"\u05d1\u05e9\u05de\u05d9\u05dd \u05d4\u05d9\u05d0"),r.a.createElement("p",null,"Please choose a Sefer"),r.a.createElement("div",{className:"btn-group"},r.a.createElement("button",{type:"button",className:"btn btn-secondary dropdown-toggle","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},e.textName),r.a.createElement("div",{className:"dropdown-menu dropdown-menu-right "+D.a.scrollable_menu},t)),r.a.createElement(X,{setStartChapter:e.setStartChapter,textUrlName:e.textUrlName,startChapter:e.startChapter,setGameDefault:e.setGameDefault}),r.a.createElement("div",{className:"container"},"Sefarim"!=e.textName&&"Chapters"!=e.startChapter&&a),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(G,{onClick:e.setGameDefault},"Back")))},z=a(18),J=a.n(z),q=a(39),Z=a.n(q),$=a(40),Q=a.n($),ee=a(41),te=a.n(ee),ae=a(42),ne=a.n(ae),re=a(43),ie=a.n(re),se=a(44),oe=a.n(se),le=function(e){return r.a.createElement(V,null,r.a.createElement("h1",null,"\u05d1\u05e9\u05de\u05d9\u05dd \u05d4\u05d9\u05d0"),r.a.createElement("h2",null,"Instructions"),r.a.createElement("div",{className:J.a.instructions},r.a.createElement("ul",null,r.a.createElement("li",null,"Jump from block to block to get as high as you can!"),r.a.createElement("li",null,"Use the left and right arrow keys to move"),r.a.createElement("li",null,"You may only step on the blocks that contain words that are the continuation of the text that you selected. (You need not land on these blocks in order or consecutively.)"),r.a.createElement("div",{className:J.a.picture},r.a.createElement("img",{src:Z.a,alt:"image of player jumping from block to block",height:"200"})),r.a.createElement("li",null,'Easy: Decoy blocks will be blank or "bashamayim hi" blocksnp'),r.a.createElement("div",{className:J.a.picture},r.a.createElement("img",{src:te.a,alt:"blank block",height:"50"}),r.a.createElement("img",{src:ie.a,alt:"bashamayim hi block",height:"50"})),r.a.createElement("li",null,"Hard: Decoy blocks will have other words from Tanakh written on them"),r.a.createElement("div",{className:J.a.picture},r.a.createElement("img",{src:ne.a,alt:"hard gameplay",width:"250"})),r.a.createElement("li",null,"Avoid the spiked blocks! Though you can land on top of them if you'd like."),r.a.createElement("div",{className:J.a.picture},r.a.createElement("img",{src:Q.a,alt:"image of spike block",height:"125"})),r.a.createElement("li",null,"Powerup"),r.a.createElement("div",{className:J.a.picture},r.a.createElement("img",{src:oe.a,alt:"powerup",height:"75"})))),r.a.createElement("div",null,r.a.createElement(G,{onClick:e.setGameDefault},"Back")))},he=a(30),ce=a.n(he),de=a(22),ue=a(26),me=a(31),pe=a.n(me),fe=a(17),ge=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={},n}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement(de.a,{className:pe.a.NavbarOuter,expand:"lg"},r.a.createElement(de.a.Brand,{className:pe.a.NavbarInner,href:"#"},"Bashamayim Hi"),r.a.createElement(de.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(de.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(ue.a,{className:"mr-auto"},r.a.createElement(ue.a.Link,{as:fe.b,to:"/about"},"About"),r.a.createElement(ue.a.Link,{as:fe.b,to:"/suggestions"},"Suggestions"))))}}]),a}(n.Component),ye=function(e){var t=r.a.createElement("div",{className:"row"},r.a.createElement(W,{setConfig:e.setParsha,title:"Parashat Hashavua"},e.parsha.textName),r.a.createElement(W,{setConfig:e.setHaftorah,title:"Haftorat Hashavua"},e.haftorah.textName),r.a.createElement("div",{className:"w-100"}),r.a.createElement(W,{setConfig:e.set929,title:"929"},e.nine.textName),r.a.createElement(W,{setConfig:e.setCustom,title:"Custom"},"Choose Text"),r.a.createElement(W,{setConfig:e.setInstruction,title:""},"Instructions"));return r.a.createElement(V,null,r.a.createElement("h1",null,"\u05d1\u05e9\u05de\u05d9\u05dd \u05d4\u05d9\u05d0"),r.a.createElement("p",null,"Select a text"),t)},xe=function(e){return r.a.createElement(V,null,r.a.createElement("h1",null,"Game: \u05d1\u05e9\u05de\u05d9\u05dd \u05d4\u05d9\u05d0"),r.a.createElement("h2",null,e.textName),r.a.createElement("p",null,"Select a level"),r.a.createElement("div",{className:"row"},r.a.createElement(W,{setConfig:function(){return e.setLevel("easy")}},"Easy"),r.a.createElement(W,{setConfig:function(){return e.setLevel("hard")}},"Hard")),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement(G,{onClick:e.setGameDefault},"Back")))},ve=a(46),we=a.n(ve),be=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(h.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:we.a.footer+" _root page-footer justify-content-center"},r.a.createElement("p",null,"Powered by",r.a.createElement("a",{href:"https://github.com/Sefaria/Sefaria-Project/wiki/API-Documentation"}," Sefaria APIs")),r.a.createElement("p",null,"Free background photos from",r.a.createElement("a",{href:"https://pngtree.com/free-backgrounds"}," pngtree.com")))}}]),a}(n.Component),ke=1,_e=2,Ce=4,Me=5,Ee=6,Se=function(e){Object(c.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).retrieveParsha=function(e,t){var a,r,i=e.calendar_items[t].url.split("-")[0].split("."),s=i[0],o=parseInt(i[1]),l=e.calendar_items[t].displayValue.en.split("-")[0],h=parseInt(e.calendar_items[t].url.split("-")[0].split(".")[2]),c=(e.calendar_items[t].url.split("-")[0].split(".")[0],e.calendar_items[t].url.split("-")[1],e.calendar_items[t].url.split("-")[1]);c.includes(".")?(r=parseInt(c.split(".")[0]),a=parseInt(c.split(".")[1])):(a=parseInt(c),r=o),n.setState({parsha:new Te(s,o,l,r,h,a)})},n.retrieveHaftorah=function(e,t){var a,r,i=e.calendar_items[t].url.split("-")[0].split("."),s=i[0],o=parseInt(i[1]),l=e.calendar_items[t].displayValue.en,h=parseInt(e.calendar_items[t].url.split("-")[0].split(".")[2]),c=e.calendar_items[t].url.split("-")[1];c.includes(".")?(r=parseInt(c.split(".")[0]),a=parseInt(c.split(".")[1])):(a=parseInt(c),r=o),n.setState({haftorah:new Te(s,o,l,r,h,a)})},n.retrieve929=function(e,t){var a=e.calendar_items[t].url.split("-")[0].split("."),r=a[0],i=parseInt(a[1]),s=e.calendar_items[t].displayValue.en,o=e.calendar_items[t].url.split("-")[0].split(".")[0]+e.calendar_items[t].url.split("-")[1];n.setState({nine:new Te(r,i,s,o)})},n.setParsha=function(){n.setState({textUrlName:n.state.parsha.textUrlName,textName:n.state.parsha.textName,startChapter:n.state.parsha.startChapter,startVerse:n.state.parsha.startVerse,endChapter:n.state.parsha.endChapter,endVerse:n.state.parsha.endVerse,gameState:Me})},n.setHaftorah=function(){n.setState({textUrlName:n.state.haftorah.textUrlName,textName:n.state.haftorah.textName,startChapter:n.state.haftorah.startChapter,startVerse:n.state.haftorah.startVerse,endChapter:n.state.haftorah.endChapter,endVerse:n.state.haftorah.endVerse,gameState:Me})},n.set929=function(){n.setState({textUrlName:n.state.nine.textUrlName,textName:n.state.nine.textName,startChapter:n.state.nine.startChapter,gameState:Me})},n.setCustom=function(){n.setState({gameState:Ce})},n.setGamePlay=function(){n.setState({gameState:_e})},n.setInstruction=function(e){n.setState({gameState:Ee})},n.setLevel=function(e){n.setState({level:e,gameState:_e})},n.setText=function(e){n.setState({textName:e.split("_").join(" "),textUrlName:e})},n.setStartChapter=function(e){n.setState({startChapter:e})},n.setGameDefault=function(){n.setState({textUrlName:"",startChapter:"Chapters",textName:"Sefarim",startVerse:0,endChapter:0,endVerse:0,level:"",gameNumber:n.state.gameNumber+1,gameState:ke})},n.continueGame=function(){},n.state={textUrlName:"",startChapter:"Chapters",startVerse:0,endChapter:0,endVerse:0,textName:"Sefarim",level:"",parsha:new Te("",0,"",0),haftorah:new Te("",0,"",0),nine:new Te("",0,"",0),gameState:ke},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;return fetch("https://www.sefaria.org/api/calendars").then((function(e){return e.json()})).then((function(t){e.retrieveParsha(t,t.calendar_items.findIndex((function(e){return"Parashat Hashavua"===e.title.en}))),e.retrieveHaftorah(t,t.calendar_items.findIndex((function(e){return"Haftarah"===e.title.en}))),e.retrieve929(t,t.calendar_items.findIndex((function(e){return"929"===e.title.en}))),e.setGameDefault()})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e;return this.state.gameState==ke?e=r.a.createElement(ye,{setParsha:this.setParsha,parsha:this.state.parsha,setHaftorah:this.setHaftorah,haftorah:this.state.haftorah,set929:this.set929,nine:this.state.nine,setCustom:this.setCustom,textUrlName:this.state.textUrlName,startChapter:this.state.startChapter,setInstruction:this.setInstruction}):this.state.gameState==_e?e=r.a.createElement(F,{level:this.state.level,newGame:this.setGameDefault,continueGame:this.continueGame,text:this.state.textUrlName,startChapter:this.state.startChapter,endChapter:this.state.endChapter,startVerse:this.state.startVerse,endVerse:this.state.endVerse}):this.state.gameState==Ce?e=r.a.createElement(K,{setText:this.setText,textName:this.state.textName,textUrlName:this.state.textUrlName,startChapter:this.state.startChapter,setStartChapter:this.setStartChapter,setGamePlay:this.setGamePlay,setGameDefault:this.setGameDefault,setLevel:this.setLevel}):this.state.gameState==Ee?e=r.a.createElement(le,{setGameDefault:this.setGameDefault}):this.state.gameState==Me&&(e=r.a.createElement(xe,{setLevel:this.setLevel,setGameDefault:this.setGameDefault,textName:this.state.textName})),r.a.createElement("div",{className:ce.a.pageContainer},r.a.createElement("div",{className:ce.a.contentWrap},r.a.createElement(ge,null),e),r.a.createElement(be,null))}}]),a}(n.Component),Te=function e(t,a,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;Object(l.a)(this,e),this.textUrlName=t,this.startChapter=a,this.textName=n,this.endChapter=r,this.startVerse=i,this.endVerse=s};var Ne=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App"},r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",component:Se}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(fe.a,null,r.a.createElement(Ne,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[48,1,2]]]);
//# sourceMappingURL=main.ffb9c5e5.chunk.js.map