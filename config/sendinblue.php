<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Brevo API Key
    |--------------------------------------------------------------------------
    |
    | The API key for connecting to the Brevo API.
    |
    */

    'api_key' => env('BREVO_API_KEY', env('SENDINBLUE_API_KEY')),

    /*
    |--------------------------------------------------------------------------
    | Forms
    |--------------------------------------------------------------------------
    |
    | The form settings for submissions to add to your Brevo list.
    |
    */

    'forms' => [
        [
            'id' => 'lXZTucIf',
            'form' => 'newsletter_signup',
            'list_id' => 18,
            'email_field' => 'email',
            'auto_split_name' => true,
            'marketing_optin_field' => 'optin',
            'mapped_fields' => [
                [
                    'id' => 'NfwBxcJq',
                ],
                [
                    'id' => 'lv14tym9',
                ],
            ],
        ],
    ],

];
