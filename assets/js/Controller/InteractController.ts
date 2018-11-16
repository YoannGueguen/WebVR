import {
    Camera, ImageLoader, Mesh, MeshLambertMaterial, MTLLoader, OBJLoader,
    Renderer,
    Scene, SphereGeometry, Texture
} from "three";
import {Inject} from "typescript-ioc";
import GUIService from "@js/Service/GUIService";
import TrackballControls from "three-trackballcontrols";
import InteractionService from "@js/Service/InteractionService";
import Controller from "@js/Core/Kernel/Controller"
import Illidan from "@js/Model/Illidan";
import Ragnaros from "@js/Model/Ragnaros";
import Guldan from "@js/Model/Guldan";
import AnimationService from "@js/Service/AnimationService";

// noinspection JSUnusedGlobalSymbols
export default class InteractController implements Controller {
    @Inject
    private guiService: GUIService;
    @Inject
    private interactionService: InteractionService;
    @Inject
    private animationService: AnimationService;

    public async run(scene: Scene, camera: Camera, renderer: Renderer) {
        let controls;
        let objects = [];

        let guldan = await Guldan.create();
        guldan.scale.addScalar(8);
        guldan.position.x = -5;
        guldan.castShadow =true;
        guldan.receiveShadow = true;
        scene.add(guldan);

        objects.push( guldan );
        guldan.addEventListener('mouseMove',()=>{
            this.interactionService.dragObject(guldan, camera, renderer, controls);
        })

        /*
                let illidan = await Illidan.create();
                illidan.scale.addScalar(3);
                illidan.position.set(15, -3, 5);
                scene.add(illidan);

                let ragnaros = await Ragnaros.create();
                ragnaros.position.z = -40;
                scene.add(ragnaros);

                objects.push(guldan);
                objects.push(illidan);
                objects.push(ragnaros);*/


        const mtlLoader = new MTLLoader();
        mtlLoader.setPath('assets/models/Guldan/');
        mtlLoader.load( 'Guldan.mtl', function( materials ) {
            materials.preload();
            const objLoader = new OBJLoader();
            objLoader.setPath( 'models/bench/' );
            objLoader.load( 'Guldan.obj', function ( Bench ) {
                Guldan.position.set( 125, 35, 175 );
                Guldan.scale.set( 1/30, 1/30, 1/30 );
                scene.add( Guldan );
                Guldan.name = 'Guldan';
                EventsControls1.attach( Guldan );
            } );
        });
        const objModel = new OBJLoader();
        let mesh;

        objModel.load('assets/models/Guldan/Guldan.obj', function(object) {
            object.traverse(function(child) {
                if (child instanceof Mesh) {
                    child.material.map() = texture;
                    mesh = child;
                }
            });

            scene.add(mesh);
        });

        const geometry = new SphereGeometry( 40, 40, 40 );

        for (let i = 0; i < 100; i++) {
            const object = new Mesh( geometry, new MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );

            object.position.x = Math.random() * 1000 - 500;
            object.position.y = Math.random() * 600 - 300;
            object.position.z = Math.random() * 800 - 400;

            object.castShadow = true;
            object.receiveShadow = true;

            scene.add( object );

            objects.push( object );
        }

        controls = new TrackballControls(camera);
        controls.rotateSpeed = 1.0;
        controls.zoomSpeed = 1.2;
        controls.panSpeed = 0.8;
        controls.noZoom = false;
        controls.noPan = false;
        controls.staticMoving = true;
        controls.dynamicDampingFactor = 0.3;

        this.interactionService.dragObject(objects, camera, renderer, controls);
    }

}
