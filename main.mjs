let Molecules = require('molecular-formula')
let THREE = require('three')
var container, camera, scene, renderer, mesh;
function mol(container, formula, options) {
    let Formula = new Molecules(formula)
    let width, height;
    let parsedFormula = Formula.getComposition()
    if (container != HTMLCanvasElement) {
        width = container.width;
        height = container.height;
    }
    if (!width && !height) {
        width = container.style.width
        height = container.style.height;
    }
    if (container && Formula && formula) {
        renderer = new THREE.WebGLRenderer();
        renderer.setSize( width, height );
        container.appendChild( renderer.domElement );

        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera( 50, width / height, 1, 1000 );
        camera.position.y = 150;
        camera.position.z = 500;
        camera.lookAt( scene.position );
        const geometry = new THREE.SphereGeometry( 1, 64, 32);
        const material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
        const sphere = new THREE.Mesh( geometry, material );
        scene.add( sphere );
    }
}
module.exports = mol