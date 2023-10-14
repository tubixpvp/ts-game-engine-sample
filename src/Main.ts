module main {
    import GameScene = gameengine.scenes.GameScene;
    import IGameObject = gameengine.gameObject.IGameObject;
    import GameObject = gameengine.gameObject.GameObject;
    import Camera3D = gameengine.engine.components.Camera3D;
    export class Main {
        public constructor() {
            let scene: GameScene = new GameScene();

            let cameraObject: IGameObject = new GameObject();
            let camera: Camera3D = cameraObject.addComponent(Camera3D);

            scene.addChild(cameraObject);

            scene.start();
        }
    }
}
new main.Main();