<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Pokemon List</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Roboto+Flex:opsz,wght@8..144,200&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      <link rel="stylesheet" href="{{ asset('plugins/select2/css/select2.min.css') }}">
    <link rel="stylesheet" href="{{ asset('plugins/select2-bootstrap4-theme/select2-bootstrap4.min.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="{{ asset('img/pokeball.png') }}" />
    <script src="{{ asset('plugins/jquery/jquery.js') }}"></script>
    <script src="{{ asset('plugins/jquery/jquery.min.js') }}"></script>
    <script src="{{ asset('plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
    <script src="{{ asset('plugins/select2/js/select2.full.min.js') }}"></script>


</head>
<body>
    <div class="container-fluid w-50 bg-light">
        <button class=" btn btn-prev position-fixed top-50 start-0 translate-middle-y rounded-circle">
            <span class="material-symbols-outlined"> chevron_left</span>
        </button>
        <button class=" btn btn-next position-fixed top-50 end-0 translate-middle-y rounded-circle">
            <span class="material-symbols-outlined"> chevron_right</span>
        </button>
        <div class="row">
                <div class="col-md-6 my-5 d-flex justify-content-between ">
                    <div class="form-group">
                        <label class="form-label me-5">Type</label>
                        <select class="form-select w-100 select2bs4 type col-6" id="type">
                         <option></option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label me-5">Generation</label>
                        <select class="form-select  w-100 select2bs4 generation col-6" id="generation">
                            <option></option>
                        </select>
                    </div>
                </div>
                 <div class="col-md-6 my-5 d-flex align-items-center justify-content-end">
                    <button class="btn btn-primary me-3 col-4 find">Find</button>
                    <button class="btn btn-ligth col-4 compare">Compare</button>
                </div>
               
        </div>
        <div class="row">
            <div class="col-md-12 d-flex justify-content-center">
                <span class="fs-4 fw-bold mb-3" id="label-filter"></span>
            </div>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="row d-flex justify-content-center content" id="pokemon-list">

                </div>
            </div>
        </div>
    </div>
@include('pokemon.detail')
<script src="{{ asset('js/pokemon.js') }}"></script>

</body>



</html>