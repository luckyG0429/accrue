<template>
    <div id="plan">
    </div>
</template>

<script>
  export default {
    name: 'myplan',
    methods:{

      createdpoint1: function () {
        var canvas = document.createElement('canvas');
        var context = canvas.getContext('2d');
        canvas.width = 100;
        canvas.height = 100;
        context.fillStyle = 'red';

        context.arc(50,50,50,0,Math.PI);
        context.fill();
        let texture = new THREE.Texture(canvas);
        texture.needsUpdate = true
        this.createdpoint()

        let geo = new THREE.Geometry();
        // geo.vertices

      },


      createdpoint:function(){
        let geometry = new THREE.Geometry();
        geometry.vertices.push(new THREE.Vector3(0,0,0));
        geometry.vertices.push(new THREE.Vector3(35,15,0));
        geometry.vertices.push(new THREE.Vector3(35,55,0));

        let materical = new THREE.PointsMaterial({color:0x0000ff,size:10})

        let points = new THREE.Points(geometry,materical);
        return points;

      }
    },
    mounted(){
    //创建场景
      var scene = new THREE.Scene();
    //  创建相机,并设定可视域
      var camera = new THREE.OrthographicCamera(-200,200,-200,200,0.1,400);


    //  创建渲染器
      var renderer = new THREE.WebGLRenderer();
      renderer.setSize(400,400);
      document.getElementById('plan').appendChild(renderer.domElement);


      let points = this.createdpoint1()
    //  改变/设定相机的位置
      camera.position.set(0,0,400);//x,y,z
      camera.lookAt(scene.position);

      scene.add(points)
      renderer.render(scene,camera)

    }
  }
</script>

<style scoped>

</style>
