$(document).ready(function () {
  // start drop down button
  let btn = $("#btn");
  btn.click(function () {
    const menu = $("#navbar-default");
    menu.toggleClass("hidden");
  });
  // end the button
  // ===============================
  //   start Tronc commun table
  let tcBtn = $("#tc");
  tcBtn.click(function () {
    $.get(
      "data/tC.json",
      function (data, textStatus, jqXHR) {
        getData(data, "Tronc Commun");
      },
      "json"
    );
  });
  //   end of tronc table
  // ===============================
  //   start 1bac table
  let b1Btn = $("#bc1");
  b1Btn.click(function () {
    $.get(
      "data/1bac.json",
      function (data, textStatus, jqXHR) {
        getData(data, "1ère année baccalauréat");
      },
      "json"
    );
  });
  //   end of 1 bac table
  // ===============================
  //   start 2 bac table
  let b2Btn = $("#bc2");
  b2Btn.click(function () {
    let box = $(".title");
    let container = $("table");
    let btnBox = $("#btns");
    hid(box, container);
    const btns = $("#btns");
    btns.toggleClass("hidden");
  });
  // ******physic*******
  let phBtn = $("#physic");
  phBtn.click(function () {
    hid($("table"), $(".title"));
    getPage(
      "data/2bac.json",
      "physique",
      $("table"),
      $(".title"),
      "text-[#f00]"
    );
  });
  // ******physic*******
  let chBtn = $("#chimie");
  chBtn.click(function () {
    hid($("table"), $(".title"));
    getPage(
      "data/2bacChimie.json",
      "chimie",
      $("table"),
      $(".title"),
      "text-[#f00]"
    );
  });
  //   end of 2 bac table
  // ===============================
  // start all pages in one time
  $(window).on("load", function () {
    getPage("./data/tC.json", "Tronc Commun", $(".TCtable"), $(".TCtitle"));
    getPage(
      "../data/1bac.json",
      "1ère année baccalauréat",
      $(".bacTable"),
      $(".bacTitle")
    );
    getPage(
      "../data/2bac.json",
      "physique",
      $(".phTable"),
      $(".phTitle"),
      "text-[#f00]"
    );
    getPage(
      "../data/2bacChimie.json",
      "chimie",
      $(".chTable"),
      $(".chTitle"),
      "text-[#f00]"
    );
  });
  // end page
  // ===============================
  // ==========================
  // general function for each btn
  // ==========================
  function getData(data, title) {
    let box = $(".title");
    let container = $("table");
    hid(box, container);
    let btnBox = $("#btns");
    btnBox.addClass("hidden");
    let header =
      "<tr><th>Chapitre</th><th class ='pdf'>Résumé Pdf</th><th class ='pdf'>Exercices</th></tr>";
    box.append(
      `<h1 class='text-5xl text-center font-extrabold m-2'>${title}</h1>`
    );
    container.append(header);
    $.each(data, function (i, val) {
      let row = `<tr><td> ${val.chapiter} </td><td class ='pdf'><a href="#"><i class="fa-solid fa-file-pdf" style="color: #d91c1c;"></i></a>
      <a href="#"><i class="fa-brands fa-youtube fa-beat" style="color: #e20808;"></i></a></td>
      <td class ='pdf'><a href="#"><i class="fa-solid fa-file-pdf" style="color: #d91c1c;"></i></a>
      <a href="#"><i class="fa-brands fa-youtube fa-beat" style="color: #e20808;"></i></a></td></tr>`;
      container.append(row);
    });
  }
  // ==========================
  // general function for each page
  // ==========================
  function getPage(file, title, tabl, tbltitle, color = "") {
    $.get(
      `${file}`,
      function (data, textStatus, jqXHR) {
        // console.log(data[0].chapiter);
        let box = tbltitle;
        let container = tabl;
        // hid(box, container);
        let header =
          "<tr><th>chapitre</th><th class ='pdf'>Résumé pdf</th><th class ='pdf'>exercices</th></tr>";
        box.append(
          `<h1 class='text-5xl text-center font-extrabold m-2 ${color}'>${title}</h1>`
        );
        container.append(header);
        $.each(data, function (i, val) {
          let row = `<tr><td> ${val.chapiter} </td><td class ='pdf'><a href="#"><i class="fa-solid fa-file-pdf" style="color: #d91c1c;"></i></a>
          <a href="#"><i class="fa-brands fa-youtube fa-beat" style="color: #e20808;"></i></a></td>
          <td class ='pdf'><a href="#"><i class="fa-solid fa-file-pdf" style="color: #d91c1c;"></i></a>
          <a href="#"><i class="fa-brands fa-youtube fa-beat" style="color: #e20808;"></i></a></td></tr>`;
          container.append(row);
        });
      },
      "json"
    );
  }
  // ==========================
  // empty the table and title function
  // ==========================
  function hid(a, b) {
    a.empty();
    b.empty();
  }
});
