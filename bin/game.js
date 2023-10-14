var main;
(function (main) {
    var GameScene = gameengine.scenes.GameScene;
    var GameObject = gameengine.gameObject.GameObject;
    var Camera3D = gameengine.engine.components.Camera3D;
    class Main {
        constructor() {
            let scene = new GameScene();
            let cameraObject = new GameObject();
            let camera = cameraObject.addComponent(Camera3D);
            scene.addChild(cameraObject);
            scene.start();
        }
    }
    main.Main = Main;
})(main || (main = {}));
new main.Main();
//# sourceMappingURL=game.js.map