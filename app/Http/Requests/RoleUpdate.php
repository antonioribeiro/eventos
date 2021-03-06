<?php

namespace App\Http\Requests;

use Illuminate\Support\Facades\Gate;

class RoleUpdate extends Request
{
    /**
     * @return bool
     */
    public function authorize()
    {
        return Gate::allows('roles:modify');
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
        ];
    }
}
