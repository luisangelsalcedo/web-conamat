<?php

function buscarPorId($urlApi, $id){    
    $api_url = $urlApi . "/posts/" . urlencode($id);
    $response = @file_get_contents($api_url);
    
    if ($response !== false) return $response;
    return null;
}

function buscarPorSlug($urlApi, $slug) {
    $api_url = $urlApi . "/posts?slug=" . urlencode($slug);
    $response = file_get_contents($api_url);
    
    if ($response !== '[]') return substr($response, 1, -1);
    return null;
}

function serviceGetMedia($urlApi, $post){
    $postID = $post['acf']['main_image'];
	$imageData = file_get_contents($urlApi . "/media/" . $postID);

	return json_decode($imageData, true);
}

?>