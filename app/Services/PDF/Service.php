<?php

namespace App\Services\PDF;

use Barryvdh\DomPDF\Facade as PDF;

class Service
{
    protected $pdf;

    public function initialize($html, $paperSize = 'A4', $extraOptions = [])
    {
        $this->pdf = PDF::setOptions(
            array_merge(
                [
                    'defaultFont' => 'Helvetica',
                ],
                $extraOptions
            )
        )->setPaper($paperSize);

        $this->pdf->getDomPDF()->set_base_path(realpath(public_path('css')));

        $this->pdf->loadHTML($html);

        return $this;
    }

    public function save($fileName)
    {
        if (!file_exists(($path = dirname($fileName)))) {
            mkdir($path);
        }

        $this->pdf->save($fileName);
    }

    public function download($fileName)
    {
        $this->pdf->download($fileName);
    }
}
