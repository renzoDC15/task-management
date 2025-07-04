<?php

namespace App\Http\Controllers\Api\Auth;

use App\Actions\Auth\LoginUser;
use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function __invoke(LoginRequest $request)
    {
        $token = LoginUser::run($request->validated());

        return response()->json([
            'token' => $token,
        ]);
    }
}
