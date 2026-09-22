document.addEventListener("DOMContentLoaded", function () {

    const textarea = document.getElementById("komentar");

    if (!textarea) return;

    const buttons = document.querySelectorAll(".btn-example");

    function setActive(button){

        buttons.forEach(btn=>{

            btn.classList.remove("active-example");

        });

        button.classList.add("active-example");

    }

    window.isiPositif = function(){

        textarea.value =
        "Permainan Timnas Indonesia hari ini sangat bagus. Strategi John Herdman berjalan efektif dan para pemain tampil maksimal.";

        setActive(document.querySelector(".positive"));

        textarea.focus();

    }

    window.isiNetral = function(){

        textarea.value =
        "bisa aja kalo full squad kaya tadi. Biasanya aff cuma  manggil pemain lokal. Diaspora cuma beberapa aja. Soalnya kompetisi ga resmi";

        setActive(document.querySelector(".neutral"));

        textarea.focus();

    }

    window.isiNegatif = function(){

        textarea.value =
        "Bubarin aja timnas sepak bolanya udh pemain naturalisasi tetep jelek permainannya back pass trs";
        setActive(document.querySelector(".negative"));

        textarea.focus();

    }

    textarea.addEventListener("input", function(){

        buttons.forEach(btn=>{

            btn.classList.remove("active-example");

        });

    });

});
