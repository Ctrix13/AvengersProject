import React from 'react';
import './Accueil.css';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function camera() {
    const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z = 5;
    return camera;
}

const controls = new OrbitControls( camera, renderer.domElement );
const loader = new GLTFLoader();


export default function Accueil(props) {
    return (
        <div>

        </div>
    );
}
