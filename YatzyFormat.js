let sum = [0, 0, 0, 0, 0];

document.addEventListener("DOMContentLoaded", function (event) {
  let calc_button = document.getElementById("summa");
  calc_button.addEventListener("click", function (event) {
    for (let player = 1; player <= 5; player++) {
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

    let x = parseInt(
      document.querySelectorAll("input.Times.player" + player)[0].value
    );
  });

  let calc_button2 = document.getElementById("summa2");
  calc_button2.addEventListener("click", function (event) {
    for (let player = 1; player <= 5; player++) {
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

      let x = parseInt(
        document.querySelectorAll("input.Times2.player" + player)[0].value
      );
    }
  });
});
