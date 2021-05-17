function createWatch() {
  let twelveHrsContainer = document.getElementById("twelveHrs");
  let twentyFourHrscontainer = document.getElementById("twentyFourHrs");
  twelveHrsContainer.style.display = '';
  twentyFourHrscontainer.style.display = 'none';

  function checkTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    if (h < 10)
      h = '0' + h;
    if (m < 10)
      m = '0' + m;
    if (s < 10)
      s = '0' + s;
    return {h, m, s};
  }

  function displayHour() {
    const twelveHrsBtn = document.getElementById("twelveHrsBtn");
    const twentyFourHrsBtn = document.getElementById("twentyFourHrsBtn");
    getTwelveHrs();
    getTwentyFourHrs();

    function getTwentyFourHrs() {
      let {h, m, s} = checkTime();
      twentyFourHrscontainer.innerHTML = h + ':' + m + ':' + s;

      let t = setTimeout(function () {
        getTwentyFourHrs()
      }, 1000);
    }

    function getTwelveHrs() {
      let tag = 'AM';
      let {h, m, s} = checkTime();
      if (h > 12) {
        h -= 12
        tag = 'PM';
      }
      twelveHrsContainer.innerHTML = h + ':' + m + ':' + s + ' ' + tag;

      t = setTimeout(function () {
        getTwelveHrs()
      }, 1000);
    }

    twelveHrsBtn.addEventListener("click", function displayTwelveHrs() {
      twelveHrsContainer.style.display = '';
      twentyFourHrscontainer.style.display = 'none';
    })

    twentyFourHrsBtn.addEventListener("click", function displayTwentyFourHrs() {
      twelveHrsContainer.style.display = 'none';
      twentyFourHrscontainer.style.display = '';
    })
  }
  return {
    displayHour
  }
}
const watch = new createWatch();
watch.displayHour();

















// window.onload = function() {
//   var h, m, s;
//   document.getElementById('twelveHrs').style.display = 'none';
//   document.getElementById('twentyFourHrs').style.display = 'none';
//   getTwelveHrs();
//   getTwentyFourHrs();

  // function getTwelveHrs() {
  //  var tag = 'AM';
  //  checkTime();
  //  if(h > 12) {
  //   h -= 12
  //   tag = 'PM';
  //  }
  //  document.getElementById('twelveHrs').innerHTML = h + ':' + m + ':' + s + ' ' + tag;
  //  t = setTimeout(function() {
  //   getTwelveHrs()
  //  }, 1000);
  // }

//   function getTwentyFourHrs() {
//    checkTime();
//    document.getElementById('twentyFourHrs').innerHTML = h + ':' + m + ':' + s;
//    var t = setTimeout(function() {
//     getTwentyFourHrs()
//    }, 1000);
//   }

//   function checkTime() {
//    var today = new Date();
//    h = today.getHours();
//    m = today.getMinutes();
//    s = today.getSeconds();
//    if(h < 10)
//     h = '0' + h;
//    if(m < 10)
//     m = '0' + m;
//    if(s < 10)
//     s = '0' + s;
//    return h, m, s;
//   }
//  }

//  function displayTwelveHrs() {
//   document.getElementById('twentyFourHrs').style.display = 'none';
//   document.getElementById('twelveHrs').style.display = '';
//  }

//  function displayTwentyFourHrs() {
//   document.getElementById('twelveHrs').style.display = 'none';
//   document.getElementById('twentyFourHrs').style.display = '';
//  }



// Vero
// function Watch() {


//   function checkTime() {
//     var today = new Date();
//     h = today.getHours();
//     m = today.getMinutes();
//     s = today.getSeconds();
//     if (h < 10)
//       h = '0' + h;
//     if (m < 10)
//       m = '0' + m;
//     if (s < 10)
//       s = '0' + s;
//     return h, m, s;
//   }

//   function displayHour() {
//     const twelveHoursBtn = document.getElementById("twelveHoursBtn");
//     const twentyFourHoursBtn = document.getElementById("twentyFourHoursBtn");

//     twentyFourHoursBtn.addEventListener("click", function getTwentyFourHrs() {
//               document.getElementById('twelveHrs').style.display = 'none';

//       checkTime();
//       document.getElementById('twentyFourHrs').innerHTML = h + ':' + m + ':' + s;

//       let t = setTimeout(function () {
//         getTwentyFourHrs()
//       }, 1000);
//     })

//     twelveHoursBtn.addEventListener("click", function getTwelveHrs() {
//               // document.getElementById('twentyFourHrs').style.display = 'none';

//       let tag = 'AM';
//       checkTime();
//       if (h > 12) {
//         h -= 12
//         tag = 'PM';
//       }
//       document.getElementById('twelveHrs').innerHTML = h + ':' + m + ':' + s + ' ' + tag;

//       t = setTimeout(function () {
//         getTwelveHrs()
//       }, 1000);
//     })


//   }
//   return {
//     displayHour
//   }
// }
// const watch = new Watch();
// watch.displayHour();
