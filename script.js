document.addEventListener("DOMContentLoaded", () => {
  const vocabulary = [
  [
    {
      "word": "art",
      "definition": "A school subject where you learn to draw, paint, or make creative things.",
      "image": "images/art.png",
      "emoji": "🖼️"
    },
    {
      "word": "emperor",
      "definition": "A male ruler of an empire.",
      "image": "images/emperor.png",
      "emoji": "🖼️"
    },
    {
      "word": "wrap",
      "definition": "To cover something or someone with paper, cloth, or another material.",
      "image": "images/wrap.png",
      "emoji": "🖼️"
    },
    {
      "word": "desert",
      "definition": "Dry land with very little rain and few plants.",
      "image": "images/desert.png",
      "emoji": "🖼️"
    },
    {
      "word": "first",
      "definition": "Coming before all others; number 1.",
      "image": "images/first.png",
      "emoji": "🖼️"
    },
    {
      "word": "soldier",
      "definition": "A person who serves in the army.",
      "image": "images/soldier.png",
      "emoji": "🖼️"
    },
    {
      "word": "barbecue",
      "definition": "To cook food over a fire or grill.",
      "image": "images/barbecue.png",
      "emoji": "🖼️"
    },
    {
      "word": "money",
      "definition": "Something we use to buy things and pay for what we need.",
      "image": "images/money.png",
      "emoji": "🖼️"
    },
    {
      "word": "think",
      "definition": "To use your mind to form ideas or make decisions.",
      "image": "images/think.png",
      "emoji": "🖼️"
    },
    {
      "word": "teach",
      "definition": "To help someone learn something.",
      "image": "images/teach.png",
      "emoji": "🖼️"
    }
  ],
  [
    {
      "word": "nuts",
      "definition": "Hard fruits with a shell that you can eat, like almonds or peanuts.",
      "image": "images/nuts.png",
      "emoji": "🖼️"
    },
    {
      "word": "pavement",
      "definition": "The hard path by the side of the road where people walk.",
      "image": "images/pavement.png",
      "emoji": "🖼️"
    },
    {
      "word": "exciting",
      "definition": "Something that makes you feel happy, thrilled, or full of energy.",
      "image": "images/exciting.png",
      "emoji": "🖼️"
    },
    {
      "word": "python",
      "definition": "A very large snake that lives in forests or jungles.",
      "image": "images/python.png",
      "emoji": "🖼️"
    },
    {
      "word": "help",
      "definition": "To make something easier for someone or do something for them.",
      "image": "images/help.png",
      "emoji": "🖼️"
    },
    {
      "word": "tent",
      "definition": "A portable shelter made of cloth, used for sleeping outdoors.",
      "image": "images/tent.png",
      "emoji": "🖼️"
    },
    {
      "word": "hurt",
      "definition": "To feel pain or to cause pain to someone.",
      "image": "images/hurt.png",
      "emoji": "🖼️"
    },
    {
      "word": "glass",
      "definition": "A hard, clear material used to make windows, cups, or bottles.",
      "image": "images/glass.png",
      "emoji": "🖼️"
    },
    {
      "word": "snail",
      "definition": "A small animal with a soft body and a hard shell that moves slowly.",
      "image": "images/snail.png",
      "emoji": "🖼️"
    },
    {
      "word": "brain",
      "definition": "The organ in your head that helps you think, learn, and remember.",
      "image": "images/brain.png",
      "emoji": "🖼️"
    }
  ],
  [
    {
      "word": "American",
      "definition": "A person from the US.",
      "image": "images/american.png",
      "emoji": "🇺🇸"
    },
    {
      "word": "diamond",
      "definition": "A hard and shiny stone used in jewellery.",
      "image": "images/diamond.png",
      "emoji": "💎"
    },
    {
      "word": "tomb",
      "definition": "A place where a dead person is buried.",
      "image": "images/tomb.png",
      "emoji": "🏛️"
    },
    {
      "word": "give",
      "definition": "To hand something to someone or let someone have it.",
      "image": "images/give.png",
      "emoji": "🎁"
    },
    {
      "word": "bowl",
      "definition": "A round, deep dish used to hold food or liquids.",
      "image": "images/bowl.png",
      "emoji": "🥣"
    },
    {
      "word": "wheel",
      "definition": "A round object that turns and helps vehicles like bikes or cars move.",
      "image": "images/wheel.png",
      "emoji": "🛞"
    },
    {
      "word": "torch",
      "definition": "A small light that you can carry in your hand to see in the dark.",
      "image": "images/torch.png",
      "emoji": "🔦"
    },
    {
      "word": "dinosaur",
      "definition": "A very big reptile that lived a long time ago.",
      "image": "images/dinosaur.png",
      "emoji": "🦕"
    },
    {
      "word": "net",
      "definition": "The barrier or mesh used in games to hit or pass the ball over.",
      "image": "images/net.png",
      "emoji": "🏐"
    },
    {
      "word": "sunburn",
      "definition": "When your skin hurts because of too much sun.",
      "image": "images/sunburn.png",
      "emoji": "☀️"
    }
  ],
  [
    {
      "word": "cough",
      "definition": "When air comes out of your chest and throat, usually because you are sick.",
      "image": "images/cough.png",
      "emoji": "🤧"
    },
    {
      "word": "cycling",
      "definition": "The activity of riding a bicycle.",
      "image": "images/cycling.png",
      "emoji": "🚴"
    },
    {
      "word": "panda",
      "definition": "A big, black-and-white bear that eats bamboo and lives in forests.",
      "image": "images/panda.png",
      "emoji": "🐼"
    },
    {
      "word": "plastic",
      "definition": "A material used to make many things, like bottles, toys, and bags.",
      "image": "images/plastic.png",
      "emoji": "🧴"
    },
    {
      "word": "jungle",
      "definition": "A thick forest with lots of trees and plants, where wild animals live.",
      "image": "images/jungle.png",
      "emoji": "🌴"
    },
    {
      "word": "butter",
      "definition": "A soft, yellow food made from milk, used for cooking or spreading on bread.",
      "image": "images/butter.png",
      "emoji": "🧈"
    },
    {
      "word": "entrance",
      "definition": "The place where you go in a building or area.",
      "image": "images/entrance.png",
      "emoji": "🚪"
    },
    {
      "word": "wig",
      "definition": "Artificial hair worn on the head.",
      "image": "images/wig.png",
      "emoji": "💇"
    },
    {
      "word": "poor",
      "definition": "Having very little money or things you need.",
      "image": "images/poor.png",
      "emoji": "🪙"
    },
    {
      "word": "snail",
      "definition": "A small animal with a soft body and a hard shell that moves slowly.",
      "image": "images/snail.png",
      "emoji": "🐌"
    }
  ]
];
  const themes = [
    {title:"Sunny Start",icon:"🌞"},
    {title:"Forest Explorer",icon:"🌿"},
    {title:"Treasure Quest",icon:"💎"},
    {title:"Word Champion",icon:"👑"}
  ];
  const $ = id => document.getElementById(id);
  let unlocked = 0, completed = [], totalScore = 0;
  try {
    const saved = JSON.parse(localStorage.getItem("wordAdventureProgressV2") || "{}");
    unlocked = Math.max(0,Math.min(3,Number(saved.unlocked)||0));
    completed = Array.isArray(saved.completed) ? saved.completed.filter(n=>Number.isInteger(n)&&n>=0&&n<4) : [];
    totalScore = Math.max(0,Number(saved.totalScore)||0);
  } catch(e) { console.warn("Progress could not be loaded",e); }
  let currentLevel = 0, currentWord = 0, score = 0, lives = 3, shuffledWords = [], waiting = false, pendingTimer = null;
  const save = () => { try {localStorage.setItem("wordAdventureProgressV2",JSON.stringify({unlocked,completed,totalScore}));}catch(e){} };
  function show(page){["homePage","gamePage","resultPage"].forEach(id=>$(id).classList.toggle("hidden",id!==page));}
  function renderMap(){
    $("totalScore").textContent=totalScore;
    $("completedCount").textContent=completed.length;
    $("levelMap").innerHTML="";
    themes.forEach((theme,i)=>{
      const btn=document.createElement("button");btn.className=`levelButton level${i+1}`;
      btn.disabled=i>unlocked;
      const state=i>unlocked?"🔒 Locked":completed.includes(i)?"🏅 Completed · Replay":"▶ Play now";
      btn.innerHTML=`<span class="levelIcon">${theme.icon}</span><strong>Level ${i+1}</strong><small>${theme.title}</small><span class="state">${state}</span>`;
      btn.addEventListener("click",()=>startGame(i));$("levelMap").append(btn);
    });
  }
  const shuffle = a => {const b=[...a];for(let i=b.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[b[i],b[j]]=[b[j],b[i]];}return b;};
  const hint = word => word[0].toUpperCase()+" "+Array.from(word.slice(1),()=>"_").join(" ");
  function updateLives(){ $("lives").textContent="❤️ ".repeat(lives)+"🤍 ".repeat(3-lives); }
  function startGame(level){
    if(level>unlocked)return;
    if(pendingTimer)clearTimeout(pendingTimer);
    currentLevel=level;currentWord=0;score=0;lives=3;waiting=false;shuffledWords=shuffle(vocabulary[level]);
    $("levelTitle").textContent=`${themes[level].icon} ${themes[level].title}`;
    $("levelTag").textContent=`Level ${level+1}`;
    show("gamePage");loadQuestion();
  }
  function loadQuestion(){
    waiting=false;$("submitBtn").disabled=false;$("answer").disabled=false;
    const item=shuffledWords[currentWord];if(!item)return;
    $("progress").textContent=`Question ${currentWord+1} / ${shuffledWords.length}`;
    $("progressBar").style.width=`${currentWord/shuffledWords.length*100}%`;
    $("score").textContent=`⭐ Score: ${score}`;updateLives();
    $("definition").textContent=item.definition;
    $("hint").textContent=hint(item.word);
    $("answer").value="";$("message").textContent="";
    const img=$("picture"),fallback=$("emojiPicture");
    fallback.textContent=item.emoji||"🖼️";fallback.classList.add("hidden");img.classList.remove("hidden");
    img.onload=()=>{img.classList.remove("hidden");fallback.classList.add("hidden");};
    img.onerror=()=>{img.classList.add("hidden");fallback.classList.remove("hidden");};
    img.alt="Picture clue";img.src=item.image;
    $("answer").focus();
  }
  function scheduleNext(delay){
    waiting=true;$("submitBtn").disabled=true;$("answer").disabled=true;
    pendingTimer=setTimeout(()=>{pendingTimer=null;currentWord++;if(currentWord>=shuffledWords.length)finishLevel();else loadQuestion();},delay);
  }
  function checkAnswer(){
    if(waiting)return;
    const value=$("answer").value.trim().toLowerCase();
    if(!value){$("message").textContent="✏️ Type an answer first!";$("answer").focus();return;}
    const correct=shuffledWords[currentWord].word.toLowerCase();
    if(value===correct){
      score+=10;$("score").textContent=`⭐ Score: ${score}`;
      $("message").textContent="🎉 Correct! +10 points!";$("message").style.color="#12a77d";
      $("progressBar").style.width=`${(currentWord+1)/shuffledWords.length*100}%`;
      scheduleNext(950);
    }else{
      lives--;updateLives();$("answer").value="";
      if(lives<=0){
        $("message").textContent=`💡 The answer is: ${shuffledWords[currentWord].word}`;
        $("message").style.color="#c67828";lives=3;scheduleNext(2000);
      }else{
        $("message").textContent="🌟 Not quite! Try again!";$("message").style.color="#d46a6a";$("answer").focus();
      }
    }
  }
  function confetti(){
    const colors=["#ff79a8","#ffc857","#7cd9ff","#85e8b6","#a68cff"];
    const host=$("confetti");host.innerHTML="";
    for(let i=0;i<48;i++){
      const piece=document.createElement("span");piece.className="confettiPiece";
      piece.style.left=Math.random()*100+"%";piece.style.background=colors[i%colors.length];
      piece.style.animationDelay=Math.random()*.7+"s";host.append(piece);
    }
    setTimeout(()=>host.replaceChildren(),3500);
  }
  function finishLevel(){
    const firstTime=!completed.includes(currentLevel);
    if(firstTime){completed.push(currentLevel);totalScore+=score;}
    if(currentLevel<3)unlocked=Math.max(unlocked,currentLevel+1);
    save();renderMap();confetti();
    $("resultTitle").textContent=currentLevel===3?"🏆 Word Adventure Champion!":"🎉 Level Complete!";
    $("resultText").textContent=currentLevel===3?"You finished all four levels! Keep practising and shining!":`Amazing! Level ${currentLevel+1} is complete. Level ${currentLevel+2} is unlocked!`;
    $("resultScore").textContent=`⭐ ${score} / ${shuffledWords.length*10} points${firstTime?" earned":" on this replay"}`;
    $("nextBtn").textContent=currentLevel===3?"🔄 Play Level 4 Again":`▶ Start Level ${currentLevel+2}`;
    show("resultPage");
  }
  $("submitBtn").addEventListener("click",checkAnswer);
  $("answer").addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();checkAnswer();}});
  $("backBtn").addEventListener("click",()=>{if(pendingTimer)clearTimeout(pendingTimer);pendingTimer=null;window.speechSynthesis?.cancel();renderMap();show("homePage");});
  $("mapBtn").addEventListener("click",()=>{renderMap();show("homePage");});
  $("nextBtn").addEventListener("click",()=>startGame(Math.min(currentLevel+1,3)));
  $("listenBtn").addEventListener("click",()=>{
    if(waiting||!shuffledWords[currentWord])return;
    if(!("speechSynthesis" in window)){ $("message").textContent="Audio isn't available in this browser.";return;}
    window.speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(shuffledWords[currentWord].word);
    utterance.lang="en-GB";utterance.rate=.8;window.speechSynthesis.speak(utterance);
  });
  renderMap();
});
