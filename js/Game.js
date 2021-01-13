class Game {
  constructor() {}
  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state,
    });
  }
  start() {
    if (gameState === 0) {
      player = new Player();
      player.getCount();
      form = new Form();

      form.display();
    }
    car1 = createSprite(100, 200);
    car1.addImage(car1Image);
    car2 = createSprite(300, 200);
    car2.addImage(car2Image);
    car3 = createSprite(500, 200);
    car3.addImage(car3Image);
    car4 = createSprite(700, 200);
    car4.addImage(car4Image);
    cars = [car1, car2, car3, car4];
  }
  play() {
    form.hide();
    Player.getPlayerInfo();
    if (allPlayers !== undefined) {
      background("#C68767");
      image(trackImage, 0, -displayHeight * 4, displayWidth, displayHeight * 5);
      var index = 0;
      var x = 0;

      var y;
      for (var plr in allPlayers) {
        index = index + 1;
        x = x + 175;
        y = displayHeight - allPlayers[plr].distance;

        cars[index - 1].x = x;
        cars[index - 1].y = y;

        if (index === player.index) {
          stroke(10);
          fill("purple");
          ellipse(x, y, 60, 60);

          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth / 2;
          camera.position.y = cars[index - 1].y;
        }

        //  text(
        //  allPlayers[plr].name + ":" + allPlayers[plr].distance,
        // 120,
        // displayPosition
        //);
      }
    }
    if (keyIsDown(UP_ARROW) && player.index != null) {
      player.distance = player.distance + 50;
      player.update();
    }
    if (player.distance > 3860) {
      gameState = 2;
    }
    drawSprites();
  }
  end() {
    console.log("gameEnded");
  }
}
