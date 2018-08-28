<template>
   <div class="block" id="linea">

   </div>
</template>

<script>
  export default {
    name: 'linea',
    methods:{
      drawline: function(params){
      //  1.先定义线条的材质
        var metarial = new THREE.LineBasicMaterial({color:0x0000ff});
        var geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(params[0].x,params[0].y,params[0].z));
        geometry.vertices.push(new THREE.Vector3(params[1].x,params[1].y,params[1].z));
        // geometry.vertices.push(new THREE.Vector3(params[1].x,params[1].y+50,params[1].z+50));

        let line = new THREE.Line(geometry, metarial)

        return line

      }
    },
    mounted () {
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('linea').appendChild(renderer.domElement)

      var sceen = new THREE.Scene();
      var camera = new THREE.OrthographicCamera(0, window.innerWidth, 0, window.innerHeight,0,1000);

      // var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
      camera.position.set( 0, 0, 1000 );

      // camera.position.set(0,0,0);
      camera.lookAt(new THREE.Vector3(0,0,0))

      var line = this.drawline([{
        x:0,
        y:5,
        z:0,
      },{
        x:window.innerWidth,
        y:window.innerHeight,
        z:0,
      }]);

      sceen.add(line);

      renderer.render(sceen,camera);

      var lin3 = this.drawline([{
        x:window.innerWidth/2,
        y:window.innerHeight/2,
        z:0,
      },{
        x:window.innerWidth/4*3,
        y:window.innerHeight/2,
        z:0,
      }])
      sceen.add(lin3);


      renderer.render(sceen, camera)
    }
  }
</script>

<style scoped>
.block{
  width: 100%;
  height: 100%;
}
</style>
