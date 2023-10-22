var main;
(function (main) {
    var GameScene = gameengine.scenes.GameScene;
    var GameObject = gameengine.gameObject.GameObject;
    var Camera3D = gameengine.engine.components.Camera3D;
    var MeshLoader = gameengine.engine.resources.MeshLoader;
    var MeshRenderer = gameengine.engine.components.MeshRenderer;
    var TextureMaterial = gameengine.engine.material.TextureMaterial;
    var Transform3D = gameengine.engine.components.Transform3D;
    class Main {
        constructor() {
            const scene = new GameScene();
            const cameraObject = new GameObject();
            cameraObject.addComponent(Camera3D);
            const cameraTransform = cameraObject.getComponent(Transform3D);
            cameraTransform.position.z -= 1000;
            cameraTransform.getObject3D().lookAt(0, 0, 0);
            scene.addChild(cameraObject);
            scene.start();
            MeshLoader.loadMesh("fbx", "resources/object.fbx", (meshObject) => {
                const mesh = meshObject.getComponent(MeshRenderer);
                const texture = new Image();
                texture.onload = () => {
                    mesh.material = new TextureMaterial(TextureMaterial.MESH_BASIC, texture);
                    scene.addChild(meshObject);
                    meshObject.getComponent(Transform3D).position.set(0, 0, 0);
                    console.log(mesh);
                };
                texture.src = "resources/texture.jpg";
            });
        }
    }
    main.Main = Main;
})(main || (main = {}));
new main.Main();
//# sourceMappingURL=game.js.map