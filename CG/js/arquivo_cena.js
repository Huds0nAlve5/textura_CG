var scene;
var camera;
var renderer;

var cube;


var init = function() {

    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    this.createACube();

    camera.position.z = 5;

    this.render();

};

var render = function() {
    requestAnimationFrame( render );

    this.animateCube();

    renderer.render( scene, camera );
};

/*var createACube = function() {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: "red" } );
    cube = new THREE.Mesh( geometry, material );
    cube.position.set(0, 0, -1)
    scene.add( cube );
}; */       //A primeira modificação que vamos fazer é mudar a forma como os objetos são redenrizados. Até aqui usamos o MeshBasicMaterial para especificar o material com o qual os objetos são criados. Isso inclui como os objetos se relacionam com as luzes. Perceba que até agora não especificando nenhuma informação de luz do ambiente. Por conta disso, vamos utilizar um material que necessite de luz para ser exibido.//             

var createACube = function() {
    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshBasicMaterial( { color: "red"} );
    cube = new THREE.Mesh( geometry, material );
    
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;
    
    scene.add( cube );
};

var animateCube = function() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
};

var createLight = function () {
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(10, 20, 20);
    spotLight.castShadow = true;
    scene.add(spotLight);
};  //aqui adiciona uma luz

window.onload = this.init;