const colors = ["red","green","blue","cyan","magenta","yellow","greenyellow","pink","purple","orange","lightseagreen","coral","black","white"]
function randpp() {
  var c = document.createElement("canvas")
  c.width = 400
  c.height = 400
  var ctx = c.getContext("2d")

  for (var i = 0; i < 4; i++) {
    for (var j = 0; j < 4; j++) {
      var rand = colors[Math.floor(Math.random()*colors.length)]
      ctx.fillStyle = rand
      ctx.fillRect(j*100, i*100, 100, 100)
    }
  }

  return c.toDataURL()
}


function resize(file, loaded){
    if(!file){
      loaded(false)
    }else if(file.type.match(/image.*/)) {
        var reader = new FileReader();
        reader.onload = function (readerEvent) {
            var image = new Image();
            image.onload = function (imageEvent) {

                // Resize the image
                var canvas = document.createElement('canvas'),
                    width = image.width,
                    height = image.height;
                canvas.width = 400;
                canvas.height = 400;
                if(width < height){
                  height *= 400/width
                  width = 400
                  canvas.getContext('2d').drawImage(image, 0, (height-400)/-2, width, height)
                }else if(width > height){
                  width *= 400/height
                  height = 400
                  canvas.getContext('2d').drawImage(image, (width-400)/-2, 0, width, height)
                }else{
                  canvas.getContext('2d').drawImage(image, 0, 0, 400, 400)
                }
                loaded(canvas.toDataURL('image/png'))
            }
            image.src = readerEvent.target.result;
        }
        reader.readAsDataURL(file);
    }
}

export { randpp, resize }