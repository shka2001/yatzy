let sum = [0, 0, 0, 0];

document.addEventListener("DOMContentLoaded", function (event) {
  let calc_button = document.getElementById("summa");
  calc_button.addEventListener("click", function (event) {
    for (let player = 1; player <= 4; player++) {
      var matches = document.querySelectorAll(".Times.player" + player);
      console.log(matches);

      let l = matches.length;
      for (let i = 0; i < l; i++) {
        let nr = parseInt(matches[i].value);
        sum[player - 1] = sum[player - 1] + nr;
        console.log(sum);
      }
      let total = document.querySelector(".total.player" + player);
      total.innerHTML = sum[player - 1];
    }
  });

  let calc_button2 = document.getElementById("summa2");
  calc_button2.addEventListener("click", function (event) {
    for (let player = 1; player <= 4; player++) {
      var matches = document.querySelectorAll(".Times2.player" + player);
      console.log(matches);

      let sum2 = 0;
      let l2 = matches.length;
      for (let i = 0; i < l2; i++) {
        let nr = parseInt(matches[i].value);
        console.log(nr);
        sum2 = sum2 + nr;
        console.log(sum2);
      }
      let total2 = document.querySelector(".total2.player" + player);
      sum2 = sum2 + sum[player - 1];
      total2.innerHTML = sum2;
    }
  });

  $(function () {
    $('input[name="num_only"]').on("input", function () {
      check_numtype($(this));
    });
  });

  // １．グローバル変数（一時的に保存しておく）を宣言
  var _chknum_value = "";
  // 入力値の半角数字チェック
  function check_numtype(obj) {
    // ２．変数の定義
    var txt_obj = $(obj).val();
    var text_length = txt_obj.length;

    // ３．入力した文字が半角数字かどうかチェック
    if (txt_obj.match(/^[0-9]+$/)) {
      // ３．１．文字数チェック
      if (text_length > 3) {
        $('input[name="num_only"]').val(_chknum_value);
      } else {
        _chknum_value = txt_obj;
      }
    } else {
      // ３．２．入力した文字が半角数字ではないとき
      if (text_length == 0) {
        _chknum_value = "";
      } else {
        $('input[name="num_only"]').val(_chknum_value);
      }
    }
  }
});
