var joyS = 'cheerful,merry,delight,delightful,delighted,ecstatic,ecstasy,glad,happy,joyful,pleasant,pleased';
var joyA = 'depress,depressed,disappoint,disappointed,down,sad,sadness,sorrow,sorrowful,unhappy,upset,trouble,troubled,unfriendly,unlucky,pain,pained,unfortunate,hopeless,forsaken,grave';
var augment = 'very,so,quite,pretty,really';
var decrease = 'not,hardly,seldomly,scarcely';
$(
  function() {
    $('#bt_sub').click(
      function() {
        var input = $('#input_1').val().toLowerCase().replace(/[^a-z0-9\s]/gi, '');
        var joy_s = joyS.split(',');
        var joy_a = joyA.split(',');
        var aug = augment.split(',');
        var dec = decrease.split(',');
        input = input.split(' ');
        var joyScore = 0;
        var result = {
          'emotion': null,
          'degree': null
        };
        for (var i = 0; i < input.length; i++) {
          if (joy_s.indexOf(input[i]) >= 0) {
            joyScore++;
            continue;
          }
          if (aug.indexOf(input[i]) >= 0) {
            joyScore++;
            continue;
          }
          if (dec.indexOf(input[i]) >= 0) {
            joyScore -= 2;
            continue;
          }
          if (joy_a.indexOf(input[i]) >= 0) {
            joyScore -= 2;
            continue;
          }
        }
        console.log('joyScore = ' + joyScore);
        if (joyScore > 0) {
          result.emotion = 'joy';
          switch (joyScore) {
            case 1:
              result.degree = 1;
              break;
            case 2:
              result.degree = 2;
              break;
            default:
              result.degree = 3;
              break;
                          }
        }
        if (joyScore < 0) {
          result.emotion = 'unhappy';
        }
        console.log('degree = ' + result.degree);
        if (result.emotion === 'joy') {
          if (result.degree === 1) {
            $('#tte2').replaceWith("<p style = 'font-size: 24px; font-weight: bold; color: aliceblue; margin-left: 10px; margin-top: 28px' id = 'tte2'>Appropriate Emoticon:&nbsp;<span style = 'color: yellow;'><u>Serenity</u></span></p>");
            $('#tte1').replaceWith("<img width = '80px' height = '80px' src = 'images/Emoticon/Serenity.jpg' name = 'outputemoji' id = 'tte1'>");
          } else if (result.degree === 2) {
            $('#tte2').replaceWith("<p style = 'font-size: 24px; font-weight: bold; color: aliceblue; margin-left: 10px; margin-top: 28px' id = 'tte2'>Appropriate Emoticon:&nbsp;<span style = 'color: yellow;'><u>Joy</u></span></p>");
            $('#tte1').replaceWith("<img width = '80px' height = '80px' src = 'images/Emoticon/Joy.png' name = 'outputemoji' id = 'tte1'>");
          } else {
            $('#tte2').replaceWith("<p style = 'font-size: 24px; font-weight: bold; color: aliceblue; margin-left: 10px; margin-top: 28px' id = 'tte2'>Appropriate Emoticon:&nbsp;<span style = 'color: yellow;'><u>Ecstasy</u></span></p>");
            $('#tte1').replaceWith("<img width = '80px' height = '80px' src = 'images/Emoticon/Ecstasy.gif' name = 'outputemoji' id = 'tte1'>");
          }
        }
        if (result.emotion === 'unhappy') {
          $('#tte2').replaceWith("<p style = 'font-size: 24px; font-weight: bold; color: aliceblue; margin-left: 10px; margin-top: 28px' id = 'tte2'>Appropriate Emoticon:&nbsp;<span style = 'color: yellow;'><u>Unhappy</u></span></p>");
          $('#tte1').replaceWith("<img width = '80px' height = '80px' src = '/images/Emoticon/Unhappy.png' name = 'outputemoji' id = 'tte1'>");
        }
      }
    );
  }
);