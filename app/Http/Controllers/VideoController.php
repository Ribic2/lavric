<?php

namespace App\Http\Controllers;

use App\Models\Video;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class VideoController extends Controller
{
    public function getVideos(): JsonResponse{
        return new JsonResponse([
            "response" => Video::all()
        ]);
    }
}
