<?php

namespace App\Data\Repositories;

use App\Data\Models\Event;

class Events extends Repository
{
    /**
     * @var string
     */
    protected $model = Event::class;

    /**
     *
     * Return all subEvents to happen in 7 days
     *
     * @return array
     */
    public function allHasSubEventsNearToHappen()
    {
        return $this->applyFilter(
            $this->newQuery()->hasSubEventsNearToHappen()
        );
    }

    /**
     *
     * Return all events that have subEvents not finalized.
     *
     * @return array
     */
    public function allHasSubEventsNotFinalized()
    {
        return $this->applyFilter(
            $this->newQuery()->hasSubEventsNotFinalized()
        );
    }
}
