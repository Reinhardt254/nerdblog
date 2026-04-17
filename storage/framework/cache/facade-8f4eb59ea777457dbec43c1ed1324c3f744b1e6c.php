<?php

namespace Facades\GuzzleHttp;

use Illuminate\Support\Facades\Facade;

/**
 * @see \GuzzleHttp\Client
 */
class Client extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return 'GuzzleHttp\Client';
    }
}
