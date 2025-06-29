<?php

namespace App\Http\Controllers\Api\Auth;

use App\Actions\Auth\LogoutUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LogoutRequest;
use Illuminate\Http\Request;

class LogoutController extends Controller
{
    public function __invoke(LogoutRequest $request)
    {
        LogoutUser::run($request);

        return response()->json([
            'message' => 'Logged out successfully.',
        ]);
    }

}
