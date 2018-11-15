import {
    BoxGeometry,
    DoubleSide, FogExp2, Mesh, MeshBasicMaterial, MeshPhongMaterial, PerspectiveCamera, PlaneGeometry,
    PointLight,
    Scene, SphereGeometry, Vector3,
    WebGLRenderer
} from "three";
import * as dat from 'dat.gui';
import * as OrbitControls from 'three-orbitcontrols';

function init(){
    const scene = new Scene();

    let enableFlog = false;
    if(enableFlog){
        scene.fog = new FogExp2(0xffffff,0.2);
    }

    const gui = new dat.GUI();

    const camera = getCamera();

    const box = getBox(1,1,1);

    // @ts-ignore
    box.position.y = box.geometry.parameters.height/2;

    const plane = getPlane(20);
    plane.rotation.x = Math.PI/2;
    plane.name = 'plane-1';

    const pointLight = getPointLight(2);
    pointLight.position.y = 2;
    pointLight.intensity = 2;

    gui.add(pointLight, 'intensity', 0, 10);
    gui.add(pointLight.position,'y',0,5);

    const sphere = getSphere(0.05);
    // @ts-ignore
    //sphere.position.y = sphere.geometry.parameters.height/2;


    scene.add(box);
    scene.add(plane);
    pointLight.add(sphere);
    scene.add(pointLight);

    const renderer = new WebGLRenderer();
    renderer.shadowMap.enabled = true;
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor('rgb(120,120,120)');
    document.getElementById('webgl').appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    update(renderer,scene, camera, controls);
    return scene;
}
function getCamera(){
    const camera = new PerspectiveCamera(
        45,
        window.innerWidth/window.innerHeight,
        1,
        1000
    );
    camera.position.z = 5;
    camera.position.x = 1;
    camera.position.y = 2;
    camera.lookAt((new Vector3(0,0,0)));
    return camera
}

function getBox(w,h,d){
    const geometry = new BoxGeometry(w,d,h);

    const material = new MeshPhongMaterial({
        color: 'rgb(120,120,120)'
    });

    const mesh = new Mesh(
        geometry,
        material
    );

    return mesh;
}
function getSphere(size){
    const geometry = new SphereGeometry(size, 24, 24);

    const material = new MeshBasicMaterial({
        color: 'rgb(255,255,255)'
    });

    const mesh = new Mesh(
        geometry,
        material
    );

    return mesh;
}
function getPlane(size){
    const geometry = new PlaneGeometry(size,size);

    const material = new MeshPhongMaterial({
        color: 0xffffff,
        side: DoubleSide
    });
    const mesh = new Mesh(
        geometry,
        material
    );

    return mesh;
}
function getPointLight(intensity){
    const light = new PointLight('rgb(120,120,120)', intensity);
    light.castShadow = true;
    return light;
}
function update(renderer,scene, camera, controls){
    renderer.render(
        scene,
        camera
    );

    controls.update();

    requestAnimationFrame(function(){
        update(renderer, scene, camera, controls);
    })
}
const scene = init();