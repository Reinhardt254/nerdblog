<?php

namespace Facades\Statamic\Fields;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Fields\BlueprintRepository
 */
class BlueprintRepository extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return 'Statamic\Fields\BlueprintRepository';
    }
}
