<?php

namespace Facades\Statamic\Updater;

use Illuminate\Support\Facades\Facade;

/**
 * @see \Statamic\Updater\UpdatesOverview
 */
class UpdatesOverview extends Facade
{
    /**
     * Get the registered name of the component.
     */
    protected static function getFacadeAccessor(): string
    {
        return 'Statamic\Updater\UpdatesOverview';
    }
}
