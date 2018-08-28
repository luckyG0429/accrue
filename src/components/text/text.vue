<template>
    <div class="block" id="text1">

    </div>
</template>

<script>
  export default {
    name: 'text',
    methods:{
      drawtext(){
        let  text = params,
          font= '',
          size = 120,
          height = 80,
          curveSegment = 20,
          bevelEnabled = true,
          bevelThickness = 20,
          bevelSize =15,
          bevelSegments = 5;

        return THREE.TextGeometry(text,{
          font,
          size,
          height,
          curveSegment,
          bevelEnabled,
          bevelThickness,
          bevelSize,
          bevelSegments
        })
      }
    },
    mounted () {
      var renderer = new THREE.WebGLRenderer();   //画布的容器 - canvas
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('text1').appendChild(renderer.domElement);

      var sceen = new THREE.Scene(); //画布
      var camera = new THREE.PerspectiveCamera(150,window.innerWidth/window.innerHeight, 0.1, 1000);
      camera.position.set(0,0, 0);
      camera.lookAt(new THREE.Vector3(0,0,0));

      var  text1 = this.drawtext('hello,zai')
      sceen.add(text1);

      renderer.render(sceen, camera)


    }
  }
</script>

<style scoped>

</style>
