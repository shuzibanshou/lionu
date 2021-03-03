<?php 
namespace App\Controllers;

//use App\Models\NewsModel;

class Sysin extends NeedloginController
{
    
	
	/**
	 * 查看文档
	 * 新窗口打开连接
	 */
	public function doc(){
	    echo '这是文档';
	}
	
	/**
	 * 下载SDK
	 * 新窗口打开链接
	 */
	public function downloadSDK(){
	    $post = $this->request->getVar(null,FILTER_SANITIZE_MAGIC_QUOTES);
	    $app_id = isset($post['app_id']) && (intval($post['app_id']) > 0) ? intval($post['app_id']) : exit('app id empty');
	    echo 'sdk下载';
	}
	
}
