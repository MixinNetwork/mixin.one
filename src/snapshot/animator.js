import * as THREE from 'three';
import CanvasRenderer from './CanvasRenderer.js';
import $ from 'jquery';
import uuidv4 from 'uuid/v4';

function Animator() {
  this.angle = 0;
  this.uniqueId = "particles-" + uuidv4();
}

Animator.prototype = {
  init: function (container) {
    const self = this;
    var particles, particle;
    self.camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 100, 1000 );
    self.camera.position.z = 100;
    self.scene = new THREE.Scene();
    self.scene.background = new THREE.Color(255,255,255);
    self.renderer = new CanvasRenderer();
    self.renderer.setPixelRatio( window.devicePixelRatio );
    self.renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild($('<input type="hidden" id="' + self.uniqueId + '" />')[0]);
    container.appendChild( self.renderer.domElement );
    // particles
    var PI2 = Math.PI * 2;
    var material = new THREE.SpriteCanvasMaterial( {
      color: 0x00B0E9,
      program: function ( context ) {
        context.beginPath();
        context.arc( 0, 0, 0.5, 0, PI2, true );
        context.fill();
      }
    } );
    var points = [];
    for ( var i = 0; i < 100; i ++ ) {
      particle = new THREE.Sprite( material );
      particle.position.x = Math.random() * 2 - 1;
      particle.position.y = Math.random() * 2 - 1;
      particle.position.z = Math.random() * 2 - 1;
      particle.position.normalize();
      particle.position.multiplyScalar( Math.random() * 10 + 450 );
      particle.scale.x = particle.scale.y = 10;
      self.scene.add( particle );
      points.push( particle.position );
    }
    // lines
    var geometry = new THREE.BufferGeometry().setFromPoints( points );
    var line = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color: 0x00B0E9, opacity: 1 } ) );
    self.scene.add( line );

    window.addEventListener( 'resize', function () {
      self.camera.aspect = window.innerWidth / window.innerHeight;
      self.camera.updateProjectionMatrix();
      self.renderer.setSize( window.innerWidth, window.innerHeight );
    }, false );
  },

  animate: function() {
    const self = this;
    if ($('#' + self.uniqueId).length !== 1) {
      return;
    }
    requestAnimationFrame( function () { self.animate(); } );
    self.render();
  },

  render: function () {
    const self = this;
    const radius = 500;
    self.camera.position.x = radius * Math.cos( self.angle );
    self.camera.position.z = radius * Math.sin( self.angle );
    self.angle += 0.001;

    self.camera.lookAt( self.scene.position );
    self.renderer.render( self.scene, self.camera );
  }
}

export default Animator;
