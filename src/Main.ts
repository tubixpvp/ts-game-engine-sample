module main {
    import GameScene = gameengine.scenes.GameScene;
    import IGameObject = gameengine.gameObject.IGameObject;
    import GameObject = gameengine.gameObject.GameObject;
    import Camera3D = gameengine.engine.components.Camera3D;
    import MeshLoader = gameengine.engine.resources.MeshLoader;
    import MeshRenderer = gameengine.engine.components.MeshRenderer;
    export class Main {
        public constructor() {
            const scene: GameScene = new GameScene();

            const cameraObject: IGameObject = new GameObject();
            const camera: Camera3D = cameraObject.addComponent(Camera3D);

            scene.addChild(cameraObject);

            scene.start();

            MeshLoader.loadMesh("3ds", "resources/object.3ds", (meshObject:IGameObject):void =>
            {
                let mesh:MeshRenderer = meshObject.getComponent(MeshRenderer);
                console.log(mesh);

                scene.addChild(meshObject);
            });
        }
    }
}
new main.Main();