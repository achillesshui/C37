class Game {
  constructor(){

  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play() {
    form.hide();
    text("Game Started", 200, 100);

    Player.getPlayerInfo();
    if(playerInfo !== undefined){
      var y = 100;
      y+=20;

      textSize(20)
      console.log(playerInfo[0].name)
      //text(playerInfo[plr].name+": " +playerInfo[plr].distance,200,y)
    }
    

  }
}
