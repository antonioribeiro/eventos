<?php
namespace App\Data\Models;

class UploadedFile extends BaseWithClient
{
    /**
     * @var array
     */
    protected $fillable = [
        'name',
        'hash',
        'drive',
        'path',
        'mime_type',
        'client_id'
    ];

    protected $orderBy = ['uploaded_files.created_at' => 'asc'];

    protected $appends = ['url', 'sharing_url'];

    public function getUrlAttribute()
    {
        return config("filesystems.disks.{$this->drive}.url_prefix") .
            $this->path;
    }

    public function getSharingUrlAttribute()
    {
        return config("filesystems.disks.{$this->drive}.sharing_url_prefix") .
            $this->path;
    }

    public function client()
    {
        return $this->belongsTo(Client::class);
    }
}
