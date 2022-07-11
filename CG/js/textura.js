var scene;
var camera;
var renderer;

var init = function() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    this.createASphere();
    this.createAmbientLight();
    this.createDirectionalLight();

    camera.position.x = 25;
    camera.position.y = 10;
    camera.position.z = 40;
    camera.lookAt(scene.position);

    document.body.appendChild( renderer.domElement );
    this.render();

};

var render = function() {
    earthMesh.rotation.y += 0.01;
    requestAnimationFrame( render );
    renderer.render( scene, camera );
};

var createASphere = function() {
    var sphereGeometry = new THREE.SphereGeometry(15, 60, 60);
    var sphereMaterial = this.createEarthMaterial(); //newTHREE.MeshNormalMaterial();

    earthMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    
    scene.add(earthMesh);
};

var createEarthMaterial = function() {
    var earthTexture = new THREE.TextureLoader().load("https://i0.wp.com/www.mapasmundi.com.br/wp-content/uploads/2015/08/05A1_atual.jpg?ssl=1");
    var earthMaterial = new THREE.MeshPhongMaterial(); //MeshBasicMaterial() é o outro tipo que funciona mesmo sem luz

    earthMaterial.map = earthTexture;

    return earthMaterial;

};

var createDirectionalLight = function() {
    var directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(120, 60, 0);
    directionalLight.name='directional';
    scene.add(directionalLight);
};

var createAmbientLight = function() {
    var ambientLight = new THREE.AmbientLight(0x111111);
    ambientLight.name='ambient';
    scene.add(ambientLight);
};

window.onload = this.init;
