module main {
    import GameScene = gameengine.scenes.GameScene;
    import IGameObject = gameengine.gameObject.IGameObject;
    import GameObject = gameengine.gameObject.GameObject;
    import Camera3D = gameengine.engine.components.Camera3D;
    import MeshLoader = gameengine.engine.resources.MeshLoader;
    import MeshRenderer = gameengine.engine.components.MeshRenderer;
    import TextureMaterial = gameengine.engine.material.TextureMaterial;
    import Transform3D = gameengine.engine.components.Transform3D;
    export class Main {
        public constructor() {
            const scene: GameScene = new GameScene();

            const cameraObject: IGameObject = new GameObject();
            cameraObject.addComponent(Camera3D);

            const cameraTransform:Transform3D = cameraObject.getComponent(Transform3D);
            cameraTransform.position.z -= 1000;
            cameraTransform.getObject3D().lookAt(0,0,0);

            scene.addChild(cameraObject);

            scene.start();

            MeshLoader.loadMesh("fbx", "resources/object.fbx", (meshObject:IGameObject):void =>
            {
                const mesh:MeshRenderer = meshObject.getComponent(MeshRenderer);

                const texture:HTMLImageElement = new Image();
                texture.onload = ()=>{
                    mesh.material = new TextureMaterial(TextureMaterial.MESH_BASIC,texture);

                    scene.addChild(meshObject);

                    meshObject.getComponent(Transform3D).position.set(0,0,0);

                    console.log(mesh);
                };
                texture.src = "resources/texture.jpg";
            });
        }
    }
}
new main.Main();