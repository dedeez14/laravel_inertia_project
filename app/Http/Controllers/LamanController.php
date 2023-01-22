<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LamanController extends Controller
{
    public function index()
    {

        $psot = "Homepage";

        return inertia('Laman/Home',[
            'header' => $psot
        ]);
    }

    public function news(){
        $news = "Newspage";

        return inertia('Laman/News', [
            'header' => $news
        ]);
    }

    public function about(){
        $news = "Aboutpage";

        return inertia('Laman/AboutMe', [
            'header' => $news
        ]);
    }
}
