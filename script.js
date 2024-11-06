var content = document.getElementById("cntbox");

function displaybox(val) {
  content.innerHTML = val;
}

setTimeout(function () {
  displaybox(10);
  setTimeout(function () {
    displaybox(9);
    setTimeout(function () {
      displaybox(8);
      setTimeout(function () {
        displaybox(7);
        setTimeout(function () {
          displaybox(6);
          setTimeout(function () {
            displaybox(5);
            setTimeout(function () {
              displaybox(4);
              setTimeout(function () {
                displaybox(3);
                setTimeout(function () {
                  displaybox(2);
                  setTimeout(function () {
                    displaybox(1);
                    setTimeout(function () {
                      displaybox("Happy Independence Day");
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
