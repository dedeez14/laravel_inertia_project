<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LamanController extends Controller
{
    public function index()
    {

        $psot = "dada";
        // dd($psot);die();

        return inertia('Laman/Home',[
            'psot' => $psot
        ]);
    }
}
