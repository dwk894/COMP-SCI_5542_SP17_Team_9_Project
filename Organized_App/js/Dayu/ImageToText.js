$(document).ready(
  function() {
    $('#processing').hide();
    $('#r_2').hide();
  }
);

function previewFile() {
  var preview = document.querySelector('img[id=preView]');
  var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();
  reader.addEventListener('load', function () {
    preview.src = reader.result;
  }, false);
  if (file) {
    reader.readAsDataURL(file);
  }
}

$(
  function() {
    $('#bt_sub_2').click(
      function() {
        var c = 0;
        $('#processing').show();
        var timer = setInterval(
          function() {
            if (c !== 0) {
              clearInterval(timer);
              $('#processing').hide();
              $('#r_2').show();
            } else {
              c++;
            }
          },
          2000
        );
      }
    );
  }
);