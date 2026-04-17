<?php

namespace Facades\Statamic\Stache;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Stache\Traverser
 */
class Traverser extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return 'Statamic\Stache\Traverser';
    }
}
