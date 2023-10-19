var main;
(function (main) {
    var GameScene = gameengine.scenes.GameScene;
    var GameObject = gameengine.gameObject.GameObject;
    var Camera3D = gameengine.engine.components.Camera3D;
    var MeshLoader = gameengine.engine.resources.MeshLoader;
    var MeshRenderer = gameengine.engine.components.MeshRenderer;
    class Main {
        constructor() {
            const scene = new GameScene();
            const cameraObject = new GameObject();
            const camera = cameraObject.addComponent(Camera3D);
            scene.addChild(cameraObject);
            scene.start();
            MeshLoader.loadMesh("3ds", "resources/object.3ds", (meshObject) => {
                let mesh = meshObject.getComponent(MeshRenderer);
                console.log(mesh);
                scene.addChild(meshObject);
            });
        }
    }
    main.Main = Main;
})(main || (main = {}));
new main.Main();
//# sourceMappingURL=game.js.map