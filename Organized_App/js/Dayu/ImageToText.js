var q = 0;

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
        $('#r_2').hide();
        var timer = setInterval(
          function() {
            if (c !== 0) {
              clearInterval(timer);
              $('#processing').hide();
              $('#r_2').show();
              var t;
              if (q % 3 === 0) {
                q++;
                config.id = '857101424018280450';
                t = 'Joy'
                $('#r_2').replaceWith("<p id = 'r_2' align = 'center' style = 'margin-top: 40px;'><u style = 'font-family: \"Tahoma\"; font-size: 22px; font-weight: bold; color: green;'>Result</u><br><br><span style = 'font-family: \"Tahoma\"; font-size: 22px; font-weight: bold; color: red;'>Joy&emsp;0.6680593785</span>");
              } else if (q % 3 === 1) {
                q++;
                config.id = '857102156020822016';
                t = 'Fear';
                $('#r_2').replaceWith("<p id = 'r_2' align = 'center' style = 'margin-top: 40px;'><u style = 'font-family: \"Tahoma\"; font-size: 22px; font-weight: bold; color: green;'>Result</u><br><br><span style = 'font-family: \"Tahoma\"; font-size: 22px; font-weight: bold; color: red;'>Fear&emsp;0.5945783478</span>");
              } else {
                q++;
                config.id = '857110132861411331';
                t = 'Anger';
                $('#r_2').replaceWith("<p id = 'r_2' align = 'center' style = 'margin-top: 40px;'><u style = 'font-family: \"Tahoma\"; font-size: 22px; font-weight: bold; color: green;'>Result</u><br><br><span style = 'font-family: \"Tahoma\"; font-size: 22px; font-weight: bold; color: red;'>Anger&emsp;0.7338290347</span>");
              }
              $('#r_2').show();
              twitterFetcher.fetch(config);
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