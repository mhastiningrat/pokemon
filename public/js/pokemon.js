var method;
$(document).ready(function () {
    $('.type').select2({
        theme: 'bootstrap4',
    })

    $('.generation').select2({
        theme: 'bootstrap4',
    })
    getList('/pokemon/list');

    function getList(url) { //Function for get all pokemon url
        $.ajax({
            url: url,
            method: 'GET',
            success: function (result) {
                for (var i = 0; i < result.length; i++) {
                    if (result[i].pokemon == undefined) {
                        if (result[i].url.includes("pokemon-species")) {
                            getListBySpecies(result[i].url)
                        } else {
                            getDetail(result[i].url)
                        }

                    } else {
                        getDetail(result[i].pokemon.url)
                    }
                }
            }
        })
    }

    function getListBySpecies(url) { //function for get pokemon url which is use to get pokemon list by filtering generation
        $.ajax({
            url: url,
            method: 'GET',
            success: function (result) {
                for (var i = 0; i < result.varieties.length; i++) {
                    getDetail(result.varieties[i].pokemon.url)
                }
            }
        })
    }

    function getDetail(url) { //function for get data detail pokemon 
        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'JSON',
            success: function (result) {
                let types = "";
                for (var i = 0; i < result.types.length; i++) {
                    types += '<p class="badge card-text background-color-' + result.types[i].type.name + ' me-2">' + result.types[i].type.name + '</p>'
                }
                if (method != "compare") {
                    let id = String(result.id).length == 1 ? "00" + result.id : String(result.id).length == 2 ? "0" + result.id : result.id
                    $('#pokemon-list').append(
                        '<div class="card m-2 p-0 border-0 rounded-3 shadow-sm mb-5 rounded" style ="width: 18rem;" id="' + result.id + '">\
                            <img src="'+ result.sprites.other["official-artwork"].front_default + '" class="card-img-top pokemon-image" alt="...">\
                            <div class="card-body">\
                                <h5 class="card-title">'+ result.name + "  #" + id + '</h5>'
                        + types +
                        '</div>\
                        </div>'
                    )
                } else {
                    $('#pokemon-compare').append(
                        '<div class="card m-2 p-0 border-0 rounded-3 shadow-sm mb-5 rounded card-compare" style ="width: 18rem;" id="' + result.id + '">\
                            <img src="'+ result.sprites.other["official-artwork"].front_default + '" class="card-img-top pokemon-image" alt="...">\
                            <div class="card-body">\
                                <h5 class="card-title">'+ result.name + '</h5>'
                        + types +
                        '</div>\
                        <div class="stats">\
                            <label for="hp">HP</label>\
                            <div class= "progress">\
                                <div class="progress-bar background-color-' + result.types[0].type.name + '" role="progressbar" style="width:' + result.stats[0].base_stat + '%" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>\
                            </div>\
                            <label class="mt-4" for="Attack">Attack</label>\
                             <div class="progress">\
                                <div class="progress-bar background-color-' + result.types[0].type.name + '" role="progressbar" style="width:' + result.stats[1].base_stat + '%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>\
                            </div>\
                            <label class="mt-4" for="Deffence">Deffence</label>\
                            <div class="progress">\
                                <div class="progress-bar background-color-' + result.types[0].type.name + '" role="progressbar" style="width:' + result.stats[2].base_stat + '%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>\
                            </div>\
                            <label class="mt-4" for="Special Attack">Special Attack</label>\
                            <div class="progress">\
                                <div class="progress-bar background-color-' + result.types[0].type.name + '" role="progressbar" style="width:' + result.stats[3].base_stat + '%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>\
                             </div>\
                             <label class="mt-4" for="Special">Special Defense</label>\
                             <div class="progress">\
                                <div class="progress-bar background-color-' + result.types[0].type.name + '" role="progressbar" style="width:' + result.stats[4].base_stat + '%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>\
                            </div>\
                            <label class="mt-4" for="Speed">Speed</label>\
                            <div class="progress">\
                                <div class="progress-bar background-color-' + result.types[0].type.name + '" role="progressbar" style="width:' + result.stats[5].base_stat + '%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>\
                            </div>\
                        </div>\
                        </div>'
                    )
                    $('.card').removeClass('bg-info')
                }
            }

        })
    }

    function getMoreDetail(url) { //function for get type and stats 
        $.ajax({
            url: url,
            method: 'GET',
            dataType: 'JSON',
            success: function (result) {
                let id = String(result.id).length == 1 ? "00" + result.id : String(result.id).length == 2 ? "0" + result.id : result.id
                $('#title').text(result.name + '   #' + id)
                $('.img-detail').attr("src", result.sprites.other["official-artwork"].front_default)
                $('.hp').css('width', result.stats[0].base_stat + "%")
                $('.atc').css('width', result.stats[1].base_stat + "%")
                $('.def').css('width', result.stats[2].base_stat + "%")
                $('.satc').css('width', result.stats[3].base_stat + "%")
                $('.sdef').css('width', result.stats[4].base_stat + "%")
                $('.spd').css('width', result.stats[5].base_stat + "%")
                $('.next').attr("id", result.id)
                $('.prev').attr("id", result.id)
                let types = "";
                for (var i = 0; i < result.types.length; i++) {
                    types += '<div class="types background-color-' + result.types[i].type.name + '"><span>' + result.types[i].type.name + '</span></div>'
                }
                $('.detail-type').append('<label for="hp">Type</label>' + types)
                $('#detail').modal('show')
            }

        })
    }

    $.ajax({ //get data type of pokemon for filterring
        url: "/pokemon/types",
        method: 'GET',
        success: function (result) {
            let data = [];
            for (var i = 0; i < result.length; i++) {
                data.push({
                    id: result[i].name,
                    text: result[i].name
                })
                $('.type').select2({
                    data: data,
                    placeholder: "Select a type",
                    allowClear: true
                })
            }
        }
    })

    $.ajax({ //get data generation of pokemon for filterring
        url: "/pokemon/generations",
        method: 'GET',
        success: function (result) {
            let data = [];
            for (var i = 0; i < result.length; i++) {
                data.push({
                    id: result[i].name,
                    text: result[i].name
                })
                $('.generation').select2({
                    data: data,
                    placeholder: "Select a generation",
                    allowClear: true
                })
            }
        }
    })

    $('.find').on('click', function () { // find by filter type or generation
        let type = $('.type').val()
        let generation = $('.generation').val()
        $('.content').html("")
        if (type == null || type == "") {
            getList('/pokemon/list/generations/' + generation)
            $('#label-filter').text("We are " + generation + " Pokemon")
        } else {
            getList('/pokemon/list/types/' + type)
            $('#label-filter').text("We are " + type + " Pokemon")
        }
        $('.type').val("").trigger("change")
        $('.generation').val("").trigger("change")

    })

    $('.compare').on('click', function () { //comparing any pokemon 
        let card = $('.card');
        if (card.hasClass('active')) {
            card.addClass('shadow-sm')
            card.removeClass('shadow-compare active')
            $('#pokemon-compare').html("");
            method = "compare";
            for (let i = 0; i < $('.bg-info').length; i++) {
                getDetail("https://pokeapi.co/api/v2/pokemon/" + $('.bg-info')[i].id)
            }
            $('#modal-compare').modal('show')
        } else {
            card.removeClass('shadow-sm')
            card.addClass('shadow-compare active')
        }

    })

    $(document).on("click", ".card", function () { // select pokemon for comparing
        let idCard = $("#" + this.id);
        if (idCard.hasClass('bg-info') && idCard.hasClass('active')) {
            idCard.removeClass('bg-info')
        } else if (idCard.hasClass('active')) {
            idCard.addClass('bg-info')

        } else {
            $('.detail-type').html("")
            getMoreDetail("https://pokeapi.co/api/v2/pokemon/" + this.id)
        }
    });

    $('.next').on('click', function () { //get next data detail of pokemon at detail page
        let id = Number(this.id) + 1
        $('.detail-type').html("")
        getMoreDetail("https://pokeapi.co/api/v2/pokemon/" + id)
    })
    $('.prev').on('click', function () { //get prev data detail of pokemon at detail page
        let id = Number(this.id) - 1
        $('.detail-type').html("")
        getMoreDetail("https://pokeapi.co/api/v2/pokemon/" + id)
    })
})
