<?php

namespace App\Http\Controllers;


use Session;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;

class Pokemon extends Controller
{

    public function pokemonPage()
    {
        return view('pokemon.index');
    }

    public function getList(Request $request)
    {
        $api = config('app.api') . 'pokemon';
    
        try {
            $response = Http::get($api);
            if($response->getStatusCode() == 200){
            return json_decode($response)->results;
            }else{
                $json['status'] = $response->getStatusCode();
                $json['message'] = "Sorry something went wrong.";

                return $json;
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        }
    }

    public function getListByTypes($type)
    {
        $api = config('app.api').'type/'.$type;
    
        try {
            $response = Http::get($api);
            if($response->getStatusCode() == 200){
                return json_decode($response)->pokemon;
            }else{
                $json['status'] = $response->getStatusCode();
                $json['message'] = "Sorry something went wrong.";

                return $json;
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        }
    }

    public function getListByGeneration($generation)
    {
        $api = config('app.api').'generation/'.$generation;
    
        try {
            $response = Http::get($api);
            if($response->getStatusCode() == 200){
            return json_decode($response)->pokemon_species;
            }else{
                $json['status'] = $response->getStatusCode();
                $json['message'] = "Sorry something went wrong.";

                return $json;
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        }
    }

    public function getTypes()
    {
        $api = config('app.api').'type';
    
        try {
            $response = Http::get($api);
            if($response->getStatusCode() == 200){
            return json_decode($response)->results;
            }else{
                $json['status'] = $response->getStatusCode();
                $json['message'] = "Sorry something went wrong.";

                return $json;
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        }
    }

    public function getGeneration()
    {
        $api = config('app.api').'generation';
    
        try {
            $response = Http::get($api);
            if($response->getStatusCode() == 200){
            return json_decode($response)->results;
            }else{
                $json['status'] = $response->getStatusCode();
                $json['message'] = "Sorry something went wrong.";

                return $json;
            }
        } catch (\Exception $e) {
            Log::error($e->getMessage());
        }
    }
}
