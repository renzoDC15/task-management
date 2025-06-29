<?php

namespace App\Http\Controllers\Api\Auth;

use App\Actions\Auth\RegisterUser;
use App\Http\Controllers\Controller;
use app\Http\Requests\Auth\RegisterRequest;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function __invoke(RegisterRequest $request)
    {
        $user = RegisterUser::run($request->validated());

        return response()->json([
            'message' => 'Registered successfully.',
            'user' => $user,
        ]);
    }
}
