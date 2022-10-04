

texture1 = new Texture('texture1.png')
texture2 = new Texture('texture3.png')
texture3 = new Texture('texture4.png')

document.getElementById('title').innerHTML="Aerionna's PA04 Assignment"

function runTest(){
	canvas.width=900
	canvas.height=900
	const renderer = new Renderer(900,900)
	const scene = new Scene('pa04a')


	const mat1 = Material.standard()
	mat1.texture = texture1
	mat1.textureWeight = 0.5
	mat1.texture.repeatU=2
	mat1.texture.repeatV=2

	const mat2 = Material.standard()
	mat2.texture = texture2
	mat2.textureWeight = 0.8
	mat2.texture.repeatU=1
	mat2.texture.repeatV=1

	const mat3 = Material.standard()
	mat3.texture = texture3
	mat3.textureWeight = 0.8
	mat3.texture.repeatU=1
	mat3.texture.repeatV=1




	//const s1 = new Sphere(new Vector3(-2,0,-80),20)
	//const s2 = new Sphere(new Vector3(-50,0,-80),10)
	const s0 = new Sphere()
	s0.material = mat2

	  //.translate(new Vector3(25,5,25))
	  s0.scale(new Vector3(0.5,0.5,0.5))
		s0.translate(new Vector3(0,0,2))
	scene.addObject(s0)

	const s1 = new Sphere()
	s1.material=mat2

		//.rotateY(-Math.PI*0.5)
		s1.scale(new Vector3(0.5,0.5,0.5))
	  s1.translate(new Vector3(4,0,2))

	//s1.material=mat2
	// s1.material.emissive = new Color(204,85,0)
  scene.addObject(s1)

	const s3=new Sphere()
	s3.material= mat3
	s3.scale(new Vector3(0.5,0.5,0.5))
	s3.translate(new Vector3(2,2,0))
	 s3.material.emissive = Color.GREEN
	scene.addObject(s3)

	const s2 = new Sphere()
	s2.material = mat2
	s2.translate(new Vector3(-3,1,2))
	  s2.scale(new Vector3(1,1,1))

	scene.addObject(s2)
	const g=8
	const p1 = new Square()
	p1.material = mat1
	p1.rotateX(Math.PI/2)
	 // .translate(new Vector3(-30,-10,-50))
		p1.scale(new Vector3(g,g,1))
		p1.translate(new Vector3(-0.5,-0.5,0.5))

	scene.addObject(p1)



	const light1 = new Light(new Vector3(5,7,3))
	light1.intensity = 0.75
	light1.diffuseColor = Color.RED
	light1.specularColor = new Color (102, 0,102)
	
	scene.addLight(light1)

	const light2 = new Light(new Vector3(-2,4,7))
	light2.intensity = 0.90
	light2.diffuseColor= Color.WHITE
	light2.specularColor = new Color(51,153,255)
	scene.addLight(light2)

	const camera = new Camera()
	camera.translate(new Vector3(3,0,3))
	camera.lookAt(s0.position)

	renderer.render(scene,camera)
}

setTimeout(runTest, 1000)
