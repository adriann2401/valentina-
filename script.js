    import * as THREE from 'three';
    import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
    import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
    import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
    import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

    // --- BASE DE DATOS DE LAS 100 RAZONES DE AMOR ---
    const razonesAmor = [
        "Porque te amo xd", "Porque eres el amor de mi vida", "Porque eres la unica que me sabe entender",
        "Porque eres la persona mas linda que conozco y nadie te superara", "Porque eres hermosa tanto fisicamente como emocionalmente",
        "Porque te preocupas por mi", "Porque desde que te conocí supe que te queria para siempre",
        "Porque eres mi refugio, mi lugar seguro", "Porque me corrijes cuando estoy mal (aunque peleo por tener la razon xd)",
        "Porque me inspiras a ser mejor como persona", "Porque siempre logras sacarme una sonrisa",
        "Porque siempre me haces sentir amado", "Porque puedo ser yo mismo contigo y sé que me amaras de todas formas",
        "Porque confio en ti", "Porque amo tu forma de cuidarme", "Porque amo hablar contigo",
        "Porque sos lo mas preciado que tengo", "Porque amo todo lo que construimos y pasamos juntos, incluyendo malos momentos porque gracias a estos pudimos mejorar de alguna manera tanto como personas como para nosotros",
        "Porque amo cada uno de tus pequeños detalles y gestos de cariño", "Porque a pesar de que yo soy horrible en varios aspectos me sigues amando",
        "Porque siempre encuentras tiempo para mí", "Porque siempre me priorizas", "Porque aunque este equivocado sabes respetarme",
        "Porque eres demasiado inteligente", "Porque le das color a mis dias", "Porque me haces sentir seguro",
        "Porque amo estar contigo, amo que seas mi pareja", "Porque sé que tu seras y eres la mujer de mi vida",
        "Porque me encanta imaginarme un futuro a tu lado", "Porque amo que seas parte de cada uno de mis mejores recuerdos",
        "Porque amo que siempre seas tu", "Porque amo tener a alguien que me escuche todas las tonterias que digo",
        "Porque contigo aprendi demasiadas cosas y sigo aprendiendo", "Porque contigo aprendi a disfrutar mas el presente",
        "Porque amo la paciencia que tienes conmigo", "Porque me haces sentir que nunca estoy solo",
        "Porque amo la forma en la que me ves", "Porque me haces creet que el amor existe",
        "Porque gracias a ti logre mejorar varias cosas de mi persona", "Porque me haces sentir importante",
        "Porque nunca te rendiste conmigo", "Porque siempre estas cuando mas te necesito", "Porque amo hacer cosas contigo",
        "Porque amo cuando me cuentas tus cosas", "Porque sos la primera persona con la que quiero compartir todo lo que me pasa",
        "Porque incluso en nuestras diferencias encontramos la manera de seguir adelante", "Porque admiro la persona que sos",
        "Porque sos fuerte incluso cuando creer que no lo sos", "Porque contigo entendi lo que significa amar con el corazón",
        "Porque tambien quiero estar contigo en los momentos dificiles", "Porque haces que quiera dar mi mejor version",
        "Porque me aceptas aunque no sea el mejor, aunque tenga demasiados defectos y aunque sea un desastre",
        "Porque nunca me dejaras solo", "Porque me haces sentir afortunado todos los dias de tenerte a mi lado",
        "Porque eres mi persona favorita", "Porque nuestra historia no la cambiaria por ninguna otra",
        "Porque contigo aprendí que amar tambien es cuidar", "Porque siempre encuentras la forma de alegrarme",
        "Porque cada recuerdo contigo tiene un lugar especial en mi corazon", "Porque amo cuando hablamos de nuestro futuro juntos",
        "Porque siempre intentas entenderme", "Porque haces que mi mundo sea mucho mas bonito, es mas, sos mi mundo",
        "Porque cada \"te amo\" tuyo significa muchísimo para mí", "Porque no me imagino una vida sin ti",
        "Porque quiero que seas la madre de mis hijos", "Porque quiero que se cumpla ese futuro que tanto soñamos juntos",
        "Porque quiero casarme contigo", "Porque amo tu hermosa voz", "Porque amo escucharte reir, me alegra el alma",
        "Porque disfruto cada momento contigo", "Porque me amas incluso cuando no lo merezco", "Porque tu amor es constante siempre",
        "Porque tu amor me genera paz", "Porque juntos somos un equipo", "Porque ya formas parte de mi vida para ser feliz",
        "Porque sin ti me muero", "Porque somos almas gemelas", "Porque siempre logras sorprenderme de alguna manera",
        "Porque nunca me canso de decirte \"te amo\"", "Porque sos la dueña de mi corazón",
        "Porque sos la primera persona en la que pienso al despertar", "Porque sos la ultima persona en la que pienso al ir a dormir",
        "Porque me gusta hacerte feliz", "Porque incluso el silencio contigo se siente bonito",
        "Porque sos la unica persona que me conoce perfectamente", "Porque haces que quiera ser una mejor pareja para ti",
        "Porque te prefiero a ti antes que a todos", "Porque nunca me canso de hablar contigo.", "Porque sos mi felicidad",
        "Porque amo la mujer que sos", "Porque tienes todo lo bueno que podria tener una persona", "Porque sos como un angel",
        "Porque amo que seas tu y quiero que siga siendo asi por siempre", "Porque sos como mi motor para estar bien",
        "Porque cada dia te amo mas que el anterior", "Porque quiero seguir creando recuerdos contigo durante toda mi vida",
        "Porque eres el mejor regalo que la vida me pudo dar", "Porque contigo encontré a la persona con la que siempre soñé.",
        "Porque cada dia encuentro muchas mas razones para estar enamorado de ti",
        "Porque aunque escriba un millon de razones más, ninguna alcanzaria para explicar correctamente lo mucho que te amo"
    ];
    const bgMusic = document.getElementById("bgMusic");
    // --- Setup Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a060c, 0.012);

    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0a060c, 1);
    document.body.appendChild(renderer.domElement);

    camera.position.set(0, 90, 140); // Intro lejana cinematográfica

    // --- Orbit Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2 - 0.05;
    controls.minDistance = 12;
    controls.maxDistance = 65;

    // --- Post-processing (Glow Pastel Híper-Brillante) ---
    const renderScene = new RenderPass(scene, camera);
    const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 2.2, 0.6, 0.25);
    bloomPass.threshold = 0.005;
    bloomPass.strength = 2.2;
    bloomPass.radius = 0.85;

    const composer = new EffectComposer(renderer);
    composer.addPass(renderScene);
    composer.addPass(bloomPass);

    // --- texturas compartidas ---
    const canvasTex = document.createElement('canvas');
    canvasTex.width = 64; canvasTex.height = 64;
    const ctxTex = canvasTex.getContext('2d');
    const grad = ctxTex.createRadialGradient(32,32,0, 32,32,32);
    grad.addColorStop(0, 'rgba(255,255,255,1)');
    grad.addColorStop(0.3, 'rgba(255,235,240,0.85)');
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctxTex.fillStyle = grad; ctxTex.fillRect(0,0,64,64);
    const particleTexture = new THREE.CanvasTexture(canvasTex);

    // --- Particle System Setup (Corazón Galáctico Central) ---
    const heartParticleCount = 5800;      // Corazón
    const galaxyParticleCount = 18200;    // Galaxia

    const particleCount = heartParticleCount + galaxyParticleCount;
    const heartGeometry = new THREE.BufferGeometry();
    const heartPositions = new Float32Array(heartParticleCount * 3);
    const heartBasePositions = new Float32Array(heartParticleCount * 3);
    const heartVelocities = new Float32Array(heartParticleCount * 3);
    const heartColors = new Float32Array(heartParticleCount * 3);
    const heartAlphas = new Float32Array(heartParticleCount);

    const galaxyGeometry = new THREE.BufferGeometry();
    const galaxyPositions = new Float32Array(galaxyParticleCount * 3);
    const galaxyBasePositions = new Float32Array(galaxyParticleCount * 3);
    const galaxyVelocities = new Float32Array(galaxyParticleCount * 3);
    const galaxyColors = new Float32Array(galaxyParticleCount * 3);
    const galaxyAlphas = new Float32Array(galaxyParticleCount);

    function getHeartPoint(t, scale = 0.45) {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y = 13 * Math.cos(t) - 5 * Math.cos(2*t) - 2 * Math.cos(3*t) - Math.cos(4*t);
        return new THREE.Vector3(x * scale, y * scale, (Math.random() - 0.5) * 1.5);
    }

    const galaxyBranches = 3;
    const galaxyRadius = 25;
    const spinFactor = 0.7;

    const colorBlanco = new THREE.Color('#ffffff');
    const colorRosaPastel = new THREE.Color('#ffdae0');
    const colorRosaSuave = new THREE.Color('#ffb6c1');

    for (let i = 0; i < heartParticleCount; i++) {
        const t = Math.random() * Math.PI * 2;
        const hp = getHeartPoint(t, 0.38);
        const x = hp.x + (Math.random() - 0.5) * 1.0;
        const y = hp.y + 6.5;
        const z = hp.z + (Math.random() - 0.5) * 1.0;
        const mixedColor = new THREE.Color().copy(colorBlanco).lerp(colorRosaPastel, Math.random() * 0.4);

        const i3 = i * 3;
        heartPositions[i3] = heartBasePositions[i3] = x;
        heartPositions[i3 + 1] = heartBasePositions[i3 + 1] = y;
        heartPositions[i3 + 2] = heartBasePositions[i3 + 2] = z;
        heartVelocities[i3] = heartVelocities[i3 + 1] = heartVelocities[i3 + 2] = 0;
        heartColors[i3] = mixedColor.r; heartColors[i3 + 1] = mixedColor.g; heartColors[i3 + 2] = mixedColor.b;
        heartAlphas[i] = 1.0;
    }

    for (let i = 0; i < galaxyParticleCount; i++) {
        const radius = Math.random() * galaxyRadius;
        const branchAngle = ((i % galaxyBranches) / galaxyBranches) * Math.PI * 2;
        const spinAngle = radius * spinFactor;

        const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (radius * 0.16);
        const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (1.5 / (radius * 0.3 + 1));
        const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * (radius * 0.16);

        const x = Math.cos(branchAngle + spinAngle) * radius + randomX;
        const y = randomY + 0.5;
        const z = Math.sin(branchAngle + spinAngle) * radius + randomZ;

        const alphaRatio = radius / galaxyRadius;
        let mixedColor = new THREE.Color();
        if (alphaRatio < 0.3) {
            mixedColor.copy(colorBlanco).lerp(colorRosaPastel, alphaRatio * 3.3);
        } else {
            mixedColor.copy(colorRosaPastel).lerp(colorRosaSuave, (alphaRatio - 0.3) * 1.4);
        }
        const pAlpha = alphaRatio > 0.5 ? 1.0 - ((alphaRatio - 0.5) / 0.5) : 1.0;

        const i3 = i * 3;
        galaxyPositions[i3] = galaxyBasePositions[i3] = x;
        galaxyPositions[i3 + 1] = galaxyBasePositions[i3 + 1] = y;
        galaxyPositions[i3 + 2] = galaxyBasePositions[i3 + 2] = z;
        galaxyVelocities[i3] = galaxyVelocities[i3 + 1] = galaxyVelocities[i3 + 2] = 0;
        galaxyColors[i3] = mixedColor.r; galaxyColors[i3 + 1] = mixedColor.g; galaxyColors[i3 + 2] = mixedColor.b;
        galaxyAlphas[i] = pAlpha;
    }

    heartGeometry.setAttribute('position', new THREE.BufferAttribute(heartPositions, 3));
    heartGeometry.setAttribute('color', new THREE.BufferAttribute(heartColors, 3));
    heartGeometry.setAttribute('alpha', new THREE.BufferAttribute(heartAlphas, 1));

    galaxyGeometry.setAttribute('position', new THREE.BufferAttribute(galaxyPositions, 3));
    galaxyGeometry.setAttribute('color', new THREE.BufferAttribute(galaxyColors, 3));
    galaxyGeometry.setAttribute('alpha', new THREE.BufferAttribute(galaxyAlphas, 1));

    const customMaterial = new THREE.ShaderMaterial({
        vertexShader: `
            attribute float alpha;
            varying float vAlpha;
            varying vec3 vColor;
            void main() {
                vAlpha = alpha;
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = (110.0 / -mvPosition.z); 
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            uniform sampler2D pointTexture;
            varying float vAlpha;
            varying vec3 vColor;
            void main() {
                gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);
            }
        `,
        uniforms: { pointTexture: { value: particleTexture } },
        blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, vertexColors: true
    });

    const heartSystem = new THREE.Points(heartGeometry, customMaterial);
    const galaxySystem = new THREE.Points(galaxyGeometry, customMaterial);
    scene.add(heartSystem);
    scene.add(galaxySystem);

    const coreGeo = new THREE.SphereGeometry(0.7, 16, 16);
    const coreMat = new THREE.MeshStandardMaterial({ color: 0x221a22, emissive: 0xfff0f5, emissiveIntensity: 1.2 });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.position.y = 6.5; 
    scene.add(coreMesh);
    const heartHitbox = new THREE.Mesh(
        new THREE.SphereGeometry(6, 24, 24),
        new THREE.MeshBasicMaterial({ visible: false })
    );

    heartHitbox.position.set(0, 6.5, 0);
    scene.add(heartHitbox);

    // ==========================================
    // --- ELEMENTOS DE FONDO OPTIMIZADOS ---
    // ==========================================

    // 1. NEBULOSAS VOLUMÉTRICAS BALANCEADAS Y SUAVES
    const nebulaCount = 15;
    const nebulaGeo = new THREE.PlaneGeometry(130, 130);
    const nebulaGroup = new THREE.Group();

    const canvasNebula = document.createElement('canvas');
    canvasNebula.width = 256; canvasNebula.height = 256;
    const ctxNebula = canvasNebula.getContext('2d');
    const gradNebula = ctxNebula.createRadialGradient(128,128,0, 128,128,128);
    // Reducimos la opacidad drásticamente y suavizamos el desvanecimiento periférico
    gradNebula.addColorStop(0, 'rgba(240, 130, 155, 0.18)');
    gradNebula.addColorStop(0.4, 'rgba(120, 80, 185, 0.08)');
    gradNebula.addColorStop(1, 'rgba(0,0,0,0)');
    ctxNebula.fillStyle = gradNebula; ctxNebula.fillRect(0,0,256,256);
    const nebulaTexture = new THREE.CanvasTexture(canvasNebula);

    const nebulaMaterials = [];
    for(let i=0; i<nebulaCount; i++) {
        const mat = new THREE.MeshBasicMaterial({
            map: nebulaTexture,
            transparent: true,
            opacity: 0.3 + Math.random() * 0.3,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
            side: THREE.DoubleSide
        });
        nebulaMaterials.push(mat);
        const mesh = new THREE.Mesh(nebulaGeo, mat);
        
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos((Math.random() * 2) - 1);
        const dist = 55 + Math.random() * 25;
        mesh.position.set(Math.sin(phi)*Math.cos(theta)*dist, Math.sin(phi)*Math.sin(theta)*dist, Math.cos(phi)*dist);
        mesh.lookAt(0,6.5,0);
        mesh.rotation.z = Math.random() * Math.PI;
        nebulaGroup.add(mesh);
    }
    scene.add(nebulaGroup);

    // 2. LUNA GIGANTE DESENFOCADA
    const moonGeo = new THREE.SphereGeometry(18, 32, 32);
    const moonMat = new THREE.MeshBasicMaterial({
        color: 0xffeef2,
        transparent: true,
        opacity: 0.18,
        blending: THREE.AdditiveBlending
    });
    const moonMesh = new THREE.Mesh(moonGeo, moonMat);
    moonMesh.position.set(-25, 15, -75);
    scene.add(moonMesh);

    // 3. DESTELLOS TIPO DIAMANTE
    const flashCount = 120;
    const flashGeo = new THREE.BufferGeometry();
    const flashPositions = new Float32Array(flashCount * 3);
    const flashData = [];

    for(let i=0; i<flashCount; i++) {
        const i3 = i * 3;
        flashPositions[i3] = (Math.random() - 0.5) * 75;
        flashPositions[i3+1] = (Math.random() - 0.5) * 45 + 10;
        flashPositions[i3+2] = (Math.random() - 0.5) * 75;
        flashData.push({
            phase: Math.random() * Math.PI * 2,
            speed: 1.5 + Math.random() * 2.5,
            baseScale: 0.3 + Math.random() * 0.5
        });
    }
    flashGeo.setAttribute('position', new THREE.BufferAttribute(flashPositions, 3));
    const flashMat = new THREE.PointsMaterial({
        size: 1.2,
        map: particleTexture,
        blending: THREE.AdditiveBlending,
        transparent: true,
        depthWrite: false,
        color: 0xffe4e1
    });
    const flashPoints = new THREE.Points(flashGeo, flashMat);
    scene.add(flashPoints);

    // 4. MINI CORAZONES DE LUZ FLOTANTES
    const miniHeartCount = 25;
    const miniHeartGroup = new THREE.Group();
    const miniHeartData = [];

    function createHeartCanvasTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64; canvas.height = 64;
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = '#ffb6c1';
        ctx.beginPath();
        ctx.moveTo(32, 20);
        ctx.bezierCurveTo(32, 12, 44, 12, 44, 24);
        ctx.bezierCurveTo(44, 36, 32, 48, 32, 54);
        ctx.bezierCurveTo(32, 48, 20, 36, 20, 24);
        ctx.bezierCurveTo(20, 12, 32, 12, 32, 20);
        ctx.fill();
        return new THREE.CanvasTexture(canvas);
    }
    const miniHeartTex = createHeartCanvasTexture();

    for(let i=0; i<miniHeartCount; i++) {
        const mat = new THREE.MeshBasicMaterial({ map: miniHeartTex, transparent: true, opacity: 0.6, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending });
        const mesh = new THREE.Mesh(new THREE.PlaneGeometry(1.4, 1.4), mat);
        
        const r = 10 + Math.random() * 25;
        const angle = Math.random() * Math.PI * 2;
        mesh.position.set(Math.cos(angle)*r, (Math.random() - 0.5)*15 + 5, Math.sin(angle)*r);
        miniHeartGroup.add(mesh);
        miniHeartData.push({
            speedY: 1.2 + Math.random() * 2.0,
            wobbleSpeed: 2 + Math.random() * 3,
            phase: Math.random() * Math.PI
        });
    }
    scene.add(miniHeartGroup);

    // 5. ESTRELLAS FUGACES OMNIDIRECCIONALES 360° (ALTA FRECUENCIA)
    const shootingStarCount = 4;
    const shootingStars = [];
    for(let i=0; i<shootingStarCount; i++) {
        const lineGeo = new THREE.BufferGeometry();
        const linePos = new Float32Array(2 * 3);
        lineGeo.setAttribute('position', new THREE.BufferAttribute(linePos, 3));
        const lineMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending });
        const line = new THREE.Line(lineGeo, lineMat);
        scene.add(line);
        
        shootingStars.push({
            mesh: line,
            active: false,
            timer: 0,
            duration: 0.4 + Math.random()*0.3,
            startPos: new THREE.Vector3(),
            dir: new THREE.Vector3()
        });
    }


    // --- Carteles de la Nebulosa de Recuerdos ---
    const floatingItems = [];
    const razonesElegidas = [...razonesAmor].sort(() => 0.5 - Math.random()).slice(0, 7);

    function createGlassmorphicTextTexture(text) {
        const canvas = document.createElement('canvas');
        canvas.width = 512; canvas.height = 128;
        const ctx = canvas.getContext('2d');
        
        let fraseLimpia = text.trim();
        if (fraseLimpia.toLowerCase().startsWith("porque")) fraseLimpia = fraseLimpia.substring(6).trim();
        else if (fraseLimpia.toLowerCase().startsWith("por que")) fraseLimpia = fraseLimpia.substring(7).trim();
        else if (fraseLimpia.toLowerCase().startsWith("por qué")) fraseLimpia = fraseLimpia.substring(7).trim();
        fraseLimpia = fraseLimpia.charAt(0).toUpperCase() + fraseLimpia.slice(1);

        ctx.fillStyle = 'rgba(45, 12, 18, 0.6)'; 
        ctx.roundRect ? ctx.roundRect(10, 10, 492, 108, 20) : ctx.rect(10, 10, 492, 108);
        ctx.fill();
        
        ctx.strokeStyle = 'rgba(255, 130, 145, 0.5)'; 
        ctx.lineWidth = 3;
        ctx.stroke();

        ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
        ctx.fillStyle = '#ffffff';

        if (fraseLimpia.length > 45) {
            ctx.font = 'bold 18px "Trebuchet MS", sans-serif';
            const mid = Math.floor(fraseLimpia.length / 2);
            const spaceIdx = fraseLimpia.indexOf(' ', mid);
            const line1 = fraseLimpia.substring(0, spaceIdx);
            const line2 = fraseLimpia.substring(spaceIdx + 1);
            ctx.fillText(line1, canvas.width/2, canvas.height/2 - 15);
            ctx.fillText(line2, canvas.width/2, canvas.height/2 + 20);
        } else {
            ctx.font = 'bold 23px "Trebuchet MS", sans-serif';
            ctx.fillText(fraseLimpia, canvas.width/2, canvas.height/2);
        }
        return new THREE.CanvasTexture(canvas);
    }

    razonesElegidas.forEach((texto, idx) => {
        const planeGeo = new THREE.PlaneGeometry(12.5, 3.0);
        const materialTex = new THREE.MeshBasicMaterial({
            map: createGlassmorphicTextTexture(texto),
            transparent: true, 
            side: THREE.DoubleSide, 
            blending: THREE.NormalBlending, 
            depthWrite: true
        });
        const plane = new THREE.Mesh(planeGeo, materialTex);
        const angle = (idx / 7) * Math.PI * 2;
        const radius = 18 + Math.random() * 4; 
        plane.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 4 + 2, Math.sin(angle) * radius);
        scene.add(plane);
        
        floatingItems.push({ mesh: plane, angle: angle, radius: radius, speed: 0.08 + Math.random() * 0.1 });
    });

    // --- Estrellas de Fondo Estables ---
    const backgroundStarCount = 150;
    const starGeo = new THREE.SphereGeometry(0.08, 4, 4);
    const starMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const instancedStars = new THREE.InstancedMesh(starGeo, starMat, backgroundStarCount);
    const starData = []; const dummy = new THREE.Object3D();

    for (let i = 0; i < backgroundStarCount; i++) {
        const data = { radius: 15 + Math.random() * 25, angle: Math.random() * Math.PI * 2, ySpeed: 0.006 + Math.random() * 0.01, y: (Math.random() - 0.5) * 16 };
        starData.push(data);
        dummy.position.set(Math.cos(data.angle) * data.radius, data.y, Math.sin(data.angle) * data.radius);
        dummy.updateMatrix(); instancedStars.setMatrixAt(i, dummy.matrix);
    }
    scene.add(instancedStars);

    // --- Iluminación ---
    scene.add(new THREE.AmbientLight(0x221a22));
    const centerLight = new THREE.PointLight(0xffffff, 2.5, 40); centerLight.position.set(0, 6.5, 0); scene.add(centerLight);

    // --- Click Burst Real Explosion ---
    const burstCount = 80;
    const burstMesh = new THREE.InstancedMesh(new THREE.SphereGeometry(0.16, 4, 4), new THREE.MeshBasicMaterial({ color: 0xffffff }), burstCount);
    scene.add(burstMesh);
    let burstActive = false; let burstTimer = 0; const burstParticles = []; 

    for (let i = 0; i < burstCount; i++) burstParticles.push({ pos: new THREE.Vector3(), vel: new THREE.Vector3() });
    burstMesh.visible = false;

    // --- CONTROL DE ESTADOS DE LA INTERFAZ ---
    let actualRazonIdx = 0;

    function actualizarDiarioUI() {
        document.getElementById('diario-index').innerText = `Razón ${actualRazonIdx + 1}/100`;
        document.getElementById('diario-texto').innerText = razonesAmor[actualRazonIdx];
    }

    function triggerExplosion() {
        if (document.getElementById('intro-screen')) return;
        bloomPass.strength = 4.0;

        actualRazonIdx = Math.floor(Math.random() * razonesAmor.length);
        actualizarDiarioUI();

        const heartPosArr = heartGeometry.attributes.position.array;
        for (let i = 0; i < heartParticleCount; i++) {
            const idx = i * 3; const px = heartPosArr[idx]; const py = heartPosArr[idx + 1]; const pz = heartPosArr[idx + 2];
            const len = Math.hypot(px, py - 6.5, pz); if (len < 0.2) continue;
            const force = (Math.random() * 15 + 5) * (1 - Math.min(1, len / 24));
            heartVelocities[idx] += (px / len) * force; heartVelocities[idx + 1] += ((py - 6.5) / len) * force; heartVelocities[idx + 2] += (pz / len) * force;
        }

        const galaxyPosArr = galaxyGeometry.attributes.position.array;
        for (let i = 0; i < galaxyParticleCount; i++) {
            const idx = i * 3; const px = galaxyPosArr[idx]; const py = galaxyPosArr[idx + 1]; const pz = galaxyPosArr[idx + 2];
            const len = Math.hypot(px, py - 6.5, pz); if (len < 0.2) continue;
            const force = (Math.random() * 15 + 5) * (1 - Math.min(1, len / 24));
            galaxyVelocities[idx] += (px / len) * force; galaxyVelocities[idx + 1] += ((py - 6.5) / len) * force; galaxyVelocities[idx + 2] += (pz / len) * force;
        }
        burstActive = true; burstTimer = 0; burstMesh.visible = true;
        burstParticles.forEach((p) => {
            p.pos.set(0, 6.5, 0); const theta = Math.random() * Math.PI * 2; const phi = Math.acos((Math.random() * 2) - 1); const speed = Math.random() * 18 + 7;
            p.vel.set(Math.sin(phi) * Math.cos(theta) * speed, Math.sin(phi) * Math.sin(theta) * speed, Math.cos(phi) * speed);
        });
    }

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    function onHeartClick(event) {
        if (document.getElementById('intro-screen')) return;

        const x = event.touches ? event.touches[0].clientX : event.clientX;
        const y = event.touches ? event.touches[0].clientY : event.clientY;

        mouse.x = (x / window.innerWidth) * 2 - 1;
        mouse.y = -(y / window.innerHeight) * 2 + 1;

        raycaster.setFromCamera(mouse, camera);

        const intersects = raycaster.intersectObject(heartHitbox);

        if (intersects.length > 0) {
            triggerExplosion();
        }
    }

    window.addEventListener("click", onHeartClick);
    window.addEventListener("touchstart", onHeartClick, { passive: true });

    const clock = new THREE.Clock();
    // --- NUEVO: Configuración de Audio para el Latido ---
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioCtx.createMediaElementSource(bgMusic);
    const analyser = audioCtx.createAnalyser();
    analyser.fftSize = 256;
    source.connect(analyser);
    analyser.connect(audioCtx.destination);
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    let introActive = true;
    const targetCameraPos = new THREE.Vector3(0, 22, 35);

    // --- Animation Loop ---
    function animate() {
        requestAnimationFrame(animate);
        const delta = Math.min(clock.getDelta(), 0.1);
        const time = clock.getElapsedTime();

        if (bloomPass.strength > 2.2) bloomPass.strength -= 3.5 * delta;

        if (introActive && !document.getElementById('intro-screen')) {
            camera.position.lerp(targetCameraPos, 0.035);
            if (camera.position.distanceTo(targetCameraPos) < 0.2) {
                camera.position.copy(targetCameraPos);
                introActive = false; 
            }
        }

        // Partículas Cinéticas del Corazón Principal
        const heartPosArr = heartGeometry.attributes.position.array;
        const galaxyPosArr = galaxyGeometry.attributes.position.array;
        const vFactor = Math.pow(0.93, delta * 60); const returnFactor = 1 - Math.pow(1 - 0.045, delta * 60); const step = delta * 1.1;
        for (let i = 0; i < heartParticleCount; i++) {
            const idx = i * 3;
            heartPosArr[idx] += heartVelocities[idx] * step; heartPosArr[idx+1] += heartVelocities[idx+1] * step; heartPosArr[idx+2] += heartVelocities[idx+2] * step;
            heartVelocities[idx] *= vFactor; heartVelocities[idx+1] *= vFactor; heartVelocities[idx+2] *= vFactor;
            heartPosArr[idx] += (heartBasePositions[idx] - heartPosArr[idx]) * returnFactor; heartPosArr[idx+1] += (heartBasePositions[idx+1] - heartPosArr[idx+1]) * returnFactor; heartPosArr[idx+2] += (heartBasePositions[idx+2] - heartPosArr[idx+2]) * returnFactor;
        }
        heartGeometry.attributes.position.needsUpdate = true;

        for (let i = 0; i < galaxyParticleCount; i++) {
            const idx = i * 3;
            galaxyPosArr[idx] += galaxyVelocities[idx] * step; galaxyPosArr[idx+1] += galaxyVelocities[idx+1] * step; galaxyPosArr[idx+2] += galaxyVelocities[idx+2] * step;
            galaxyVelocities[idx] *= vFactor; galaxyVelocities[idx+1] *= vFactor; galaxyVelocities[idx+2] *= vFactor;
            galaxyPosArr[idx] += (galaxyBasePositions[idx] - galaxyPosArr[idx]) * returnFactor; galaxyPosArr[idx+1] += (galaxyBasePositions[idx+1] - galaxyPosArr[idx+1]) * returnFactor; galaxyPosArr[idx+2] += (galaxyBasePositions[idx+2] - galaxyPosArr[idx+2]) * returnFactor;
        }
        galaxyGeometry.attributes.position.needsUpdate = true;

        galaxySystem.rotation.y += 0.03 * delta;
// --- MODIFICACIÓN: Latido sincronizado solo para el corazón ---
        analyser.getByteFrequencyData(dataArray);
        let sum = 0;
        for(let i = 0; i < 10; i++) sum += dataArray[i];
        let average = sum / 10;
        
        // Calculamos la escala basada en el audio
        let beatScale = 1.0 + (average / 255) * 0.4; 
        
        // Aplicamos la escala solo al centro y a las partículas del corazón
        coreMesh.scale.setScalar(beatScale);
        heartSystem.scale.setScalar(beatScale);      
        // Rotar e iluminar Nebulosas de fondo ligeramente
        nebulaGroup.rotation.y += 0.008 * delta;
        nebulaMaterials.forEach((mat, idx) => {
            mat.opacity = (0.22 + Math.sin(time * 0.25 + idx) * 0.06);
        });

        // Animación de Luciérnagas / Destellos Diamante
        const flashPositionsArr = flashGeo.attributes.position.array;
        for(let i=0; i<flashCount; i++) {
            const data = flashData[i];
            data.phase += delta * data.speed;
            flashPositionsArr[i*3] += Math.sin(data.phase * 0.2) * 0.01;
        }
        flashMat.size = 1.2 + Math.sin(time * 4.0) * 0.4;

        // Animación de Mini Corazones de Luz
        const camPos = camera.position;
        miniHeartGroup.children.forEach((mesh, idx) => {
            const data = miniHeartData[idx];
            mesh.position.y += data.speedY * delta;
            data.phase += delta * data.wobbleSpeed;
            mesh.position.x += Math.sin(data.phase) * 0.03;
            
            if(mesh.position.y > 22) {
                mesh.position.y = -10;
                mesh.position.x = (Math.random() - 0.5) * 40;
            }
            mesh.lookAt(camPos);
        });

        // --- NUEVAS ESTRELLAS FUGACES COMPLETAMENTE OMNIDIRECCIONALES 360° ---
        shootingStars.forEach((star) => {
            if(!star.active && Math.random() < 0.028) { 
                star.active = true;
                star.timer = 0;
                star.mesh.material.opacity = 1;

                // Obtener la dirección actual de visión de la cámara hacia el centro
                const viewDir = new THREE.Vector3();
                camera.getWorldDirection(viewDir);

                // Generar una desviación lateral y vertical en base a la vista de la cámara
                const sideVector = new THREE.Vector3(-viewDir.z, 0, viewDir.x).normalize();
                const upVector = new THREE.Vector3(0, 1, 0);

                // Posicionar el inicio arriba a la derecha/izquierda de la pantalla actual
                const offsetSide = (Math.random() * 40) - 10;
                const offsetUp = (Math.random() * 15) + 15;
                const offsetForward = (Math.random() * 15) - 30; // Profundidad de campo visual

                star.startPos.copy(camera.position)
                    .addScaledVector(viewDir, 45 + offsetForward)
                    .addScaledVector(sideVector, offsetSide)
                    .addScaledVector(upVector, offsetUp);

                // La trayectoria cruza diagonalmente hacia abajo en el campo visual del usuario
                star.dir.copy(sideVector).multiplyScalar(-1.4).addScaledVector(upVector, -0.8).addScaledVector(viewDir, 0.2).normalize();
            }
            
            if(star.active) {
                star.timer += delta;
                const progress = star.timer / star.duration;
                
                const head = new THREE.Vector3().copy(star.startPos).addScaledVector(star.dir, progress * 40);
                const tail = new THREE.Vector3().copy(star.startPos).addScaledVector(star.dir, Math.max(0, (progress - 0.2) * 40));
                
                const linePosArr = star.mesh.geometry.attributes.position.array;
                linePosArr[0] = head.x; linePosArr[1] = head.y; linePosArr[2] = head.z;
                linePosArr[3] = tail.x; linePosArr[4] = tail.y; linePosArr[5] = tail.z;
                star.mesh.geometry.attributes.position.needsUpdate = true;
                
                star.mesh.material.opacity = 1.0 - progress;
                
                if(star.timer >= star.duration) {
                    star.active = false;
                    star.mesh.material.opacity = 0;
                }
            }
        });

        // Rotar Carteles 3D
        floatingItems.forEach((item) => {
            item.angle += 0.04 * item.speed * delta;
            item.mesh.position.x = Math.cos(item.angle) * item.radius;
            item.mesh.position.z = Math.sin(item.angle) * item.radius;
            item.mesh.lookAt(camPos);
        });

        // Estrellas de Fondo Estables
        for (let i = 0; i < backgroundStarCount; i++) {
            const data = starData[i]; data.angle += 0.08 * delta; data.y += data.ySpeed * (delta * 60); if (data.y > 8) data.y = -8;
            dummy.position.set(Math.cos(data.angle) * data.radius, data.y, Math.sin(data.angle) * data.radius);
            dummy.updateMatrix(); instancedStars.setMatrixAt(i, dummy.matrix);
        }
        instancedStars.instanceMatrix.needsUpdate = true;

        if (burstActive) {
            burstTimer += delta;
            burstParticles.forEach((p, i) => {
                p.pos.addScaledVector(p.vel, delta); p.vel.multiplyScalar(Math.pow(0.88, delta * 60));
                dummy.position.copy(p.pos); dummy.scale.setScalar(Math.max(0, 1.0 - (burstTimer / 0.8)));
                dummy.updateMatrix(); burstMesh.setMatrixAt(i, dummy.matrix);
            });
            burstMesh.instanceMatrix.needsUpdate = true;
            if (burstTimer > 0.8) { burstMesh.visible = false; burstActive = false; }
        }

        controls.update(); composer.render();
    }
    animate();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight; camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight); composer.setSize(window.innerWidth, window.innerHeight);
    });

    // --- LÓGICA DE INTERFAZ Y DIARIO INTERACTIVO ---
    const introScreen = document.getElementById('intro-screen');
    const btnSi = document.getElementById('btn-si');
    const btnNo = document.getElementById('btn-no');
    const infoText = document.getElementById('info');
    const diarioContenedor = document.getElementById('diario-contenedor');

    function huirBotonNo() {
        const padding = 80;
        const xMax = window.innerWidth - btnNo.offsetWidth - padding;
        const yMax = window.innerHeight - btnNo.offsetHeight - padding;
        const randomX = Math.max(padding, Math.random() * xMax);
        const randomY = Math.max(padding, Math.random() * yMax);
        btnNo.style.position = 'fixed'; btnNo.style.left = `${randomX}px`; btnNo.style.top = `${randomY}px`; btnNo.style.margin = '0';
    }
    btnNo.addEventListener('mouseover', huirBotonNo);
    btnNo.addEventListener('touchstart', (e) => { e.preventDefault(); huirBotonNo(); });

    document.getElementById('diario-next').addEventListener('click', () => {
        actualRazonIdx = (actualRazonIdx + 1) % razonesAmor.length;
        actualizarDiarioUI();
    });
    document.getElementById('diario-prev').addEventListener('click', () => {
        actualRazonIdx = (actualRazonIdx - 1 + razonesAmor.length) % razonesAmor.length;
        actualizarDiarioUI();
    });

    btnSi.addEventListener('click', () => {
        introScreen.classList.add('fade-out');
        bgMusic.volume = 0.35; // 35% de volumen
        bgMusic.play().catch(() => {});
        audioCtx.resume(); // <--- AGREGA ESTA LÍNEA AQUÍ
        infoText.style.display = 'block';
        diarioContenedor.style.display = 'block';
        bloomPass.strength = 5.5;
        actualizarDiarioUI();
        setTimeout(() => { introScreen.remove(); }, 1500);
    });

    setInterval(() => {
        if (document.getElementById('intro-screen')) return;
        floatingItems.forEach((item) => {
            const nuevaRazon = razonesAmor[Math.floor(Math.random() * razonesAmor.length)];
            if (item.mesh.material.map) item.mesh.material.map.dispose();
            item.mesh.material.map = createGlassmorphicTextTexture(nuevaRazon);
            item.mesh.material.needsUpdate = true;
        });
    }, 10000);