
var motionInfo = [];
// motionInfo contient une liste d'objet
//listes des objets de collision
var obstacles = [];
//Exemple d'ajout a la liste des obstacles
obstacles.push(ascenseur);

// Instanciation de l'objet a bouger
motionInfo.object=null;

//Exemple d'ajout de l'objet
var bassin = objects.getObjectByName("bassin", true);
motionInfo.object = bassin;

// direction du mouvement
motionInfo.direction=new THREE.Vector2(1,0);

//Vitesse du personnage sur les differents axe
motionInfo.velocity = new THREE.Vector3(0,0,0);

//vitesse du personnage
var characterSpeed = 20.0;




// Initialisation de la vitesse du personnage
motionInfo.initVelocity = function() {
    motionInfo.velocity.x = motionInfo.direction.x*characterSpeed;
    motionInfo.velocity.y = motionInfo.direction.y*characterSpeed;
}

// Vitesse de deplacement en direction X et Y rectifier pour empecher la traverser des obstacles
motionInfo.collision = function(N) {
    var ps = motionInfo.velocity.dot(N);
    motionInfo.velocity.x -= ps*N.x;
    motionInfo.velocity.y -= ps*N.y;
}


/// Debut de chose dans la fonction animate
// test si il y a un objet dans motionInfo
if (motionInfo.object!=null) {

    //Initialisation du raycaster avec la position vertical de l'objet
    var raycaster = new THREE.Raycaster();
    raycaster.set(motionInfo.object.position,vertical);



    // place dans la variable intersection (tableau) la liste des objet en contact avec notre objet present
    var intersections = raycaster.intersectObjects(obstacles,true);
    // test si l'objet est en interaction avec des objets present dans la variable intersection
    if (intersections.length>0) {
        var height = intersections[0].distance;
        motionInfo.object.position.z += 12-height;
        // placement de l'objet a 12 uniter de hauteur
        document.getElementById('obj_name').value = height;
    }


    motionInfo.initVelocity();


    for (angle=-45; angle<45; angle+=15) {
        // Test des collision a 45deg devant l'objet
        var cs=Math.cos(angle*Math.PI/180);
        var ss=Math.sin(angle*Math.PI/180);
        dir = new THREE.Vector3(cs*motionInfo.direction.x-ss*motionInfo.direction.y,
            ss*motionInfo.direction.x+cs*motionInfo.direction.y,0);
        raycaster.set(motionInfo.object.position,dir); // Collision avec l'objet present dans motionInfo.object dans une certaine direction
        var intersections = raycaster.intersectObjects(obstacles, true); // placement des objets en collision dans la variable intersection
        // collision avec les differents objets
        if (intersections.length>0 && intersections[0].distance<8) {
            //console.log(intersections);
            //console.log(intersections[0].distance);
            //Evoie de la face de l'objet avec le quel il est en collision
            motionInfo.collision(intersections[0].face.normal)
        }
    }
}
/// Plus dans la fonction annimate