<?php
   require_once  'libs/vendor/autoload.php';

    header('Access-Control-Allow-Origin:*');
    use Qiniu\Auth;
    $bucket = 'kenfo';
    $accessKey = 'yF_MwmT6viaNaHXHDHFANhv2kTQJLNSD5-TUEbyA';
    $secretKey = 'erNzpDpAtl4JeTBRAht92GlZ45e-WvdL7wdnkTf5';
    $auth = new Auth($accessKey, $secretKey);
    //$upToken = $auth->uploadToken($bucket);
    $policy = array(
        // 'returnUrl' => '',
        'returnBody' => '{"fname": $(fname), "size": $(fsize),"type": $(mimeType)}',
    );
    $upToken = $auth->uploadToken($bucket, null, 3600, $policy);
    echo $upToken;