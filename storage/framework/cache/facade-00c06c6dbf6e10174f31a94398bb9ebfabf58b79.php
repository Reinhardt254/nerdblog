<?php

namespace Facades\Statamic\Fields;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Fields\Validator
 */
class Validator extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return 'Statamic\Fields\Validator';
    }
}
