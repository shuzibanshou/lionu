<?php 
namespace App\Controllers;

//use App\Models\NewsModel;

class Receive extends BaseController
{
    	
    //receive adv data
	/* public function clickhouse()
	{
	    $get = $this->request->getGet();
	    $data = array(
	        'ip'=>$get['ip'],
	        'plan_id'=>$get['plan_id'],
	        'channel_id'=>$get['channel_id'],
	        'mac_md5'=>$get['mac'],
	        'androidid_md5'=>$get['androidid'],
	        'imei_md5'=>$get['imei'],
	        'oaid'=>$get['oaid'],
	        'appid'=>$get['appid'],
	        'os'=>$get['os'],
	        'ts'=>$get['ts']
	    );
	    //print_r($post);
	    //exit();
	    $config = [
	        "host" => "localhost",
	        "port" => "9000",
	        "compression" => true
	    ];
	    $client = new \SeasClick($config);
	    //$client->execute("DROP TABLE test.array_test");
	    //$client->execute("CREATE DATABASE IF NOT EXISTS test");
	    //$client->execute("CREATE TABLE IF NOT EXISTS test.array_test (ip String, plan_id UInt32, channel_id UInt16,mac_md5 String,androidid_md5 String,imei_md5 String,oaid String,appid UInt16,os UInt8,ts UInt64) ENGINE = Memory");
	    $field = ['ip','plan_id','channel_id','mac_md5','androidid_md5','imei_md5','oaid','appid','os','ts'];
	    //print_r($field);
	    //print_r($data);
	    $client->insert("test.datadvs_android_click_log", $field, [array_values($data)]);
	    echo 'ok';
	} */

	/**
	 * 批量写入广告数据到clickhouse
	 */
	/* public function clickhousePost(){
	    $post = $this->request->getPost();
	    //var_dump($post['info']);
	    if(!empty($post['info'])){
	        $info = json_decode($post['info'],true);
	        if(is_array($info) && count($info) > 0){
	            $res = [];
	            foreach ($info as $v){
	                $data = array(
	                    'ip'=>$v['ip'],
	                    'plan_id'=>$v['plan_id'],
	                    'channel_id'=>$v['channel_id'],
	                    'mac_md5'=>$v['mac'],
	                    'androidid_md5'=>$v['androidid'],
	                    'imei_md5'=>$v['imei'],
	                    'oaid'=>$v['oaid'],
	                    'appid'=>$v['appid'],
	                    'os'=>$v['os'],
	                    'ts'=>$v['ts']
	                );
	                $data = array_values($data);
	                $res[] = $data;
	            }
	            
	            //print_r($res);
	            //exit();
	            $config = [
	                "host" => "localhost",
	                "port" => "9000",
	                "compression" => true
	            ];
	            $client = new \SeasClick($config);
	            //$client->execute("DROP TABLE test.array_test");
	            //$client->execute("CREATE DATABASE IF NOT EXISTS test");
	            //$client->execute("CREATE TABLE IF NOT EXISTS test.array_test (ip String, plan_id UInt32, channel_id UInt16,mac_md5 String,androidid_md5 String,imei_md5 String,oaid String,appid UInt16,os UInt8,ts UInt64) ENGINE = MergeTree() ORDER BY imei_md5");
	            $field = ['ip','plan_id','channel_id','mac_md5','androidid_md5','imei_md5','oaid','appid','os','ts'];
	            //print_r($field);
	            //print_r($data);
	            $client->insert("test.array_test", $field, $res);
	            echo 'ok';
	        } else {
	            exit('paramers error');
	        }
	    } else {
	        exit('paramers empty');
	    }
	} */
	
	/**
	 * 接收设备启动消息
	 */
	public function launch(){
	    $deviceLaunchData = $this->request->getPost(null, FILTER_SANITIZE_MAGIC_QUOTES);
	    //dump($info);
	    $conf = new \RdKafka\Conf();
	    
	    //TopicConf
	    $topicConf = new \RdKafka\TopicConf();
	    //-1必须等所有brokers同步完成的确认 1当前服务器确认 0不确认，这里如果是0回调里的offset无返回，如果是1和-1会返回offset
	    // 我们可以利用该机制做消息生产的确认，不过还不是100%，因为有可能会中途kafka服务器挂掉
	    $topicConf->set('request.required.acks', 0);
	    
	    $rk = new \RdKafka\Producer($conf);
	    $rk->setLogLevel(LOG_DEBUG);
	    $rk->addBrokers('127.0.0.1:9092');
	    $topic = $rk->newTopic('launch', $topicConf);
	    
	    $topic->produce(RD_KAFKA_PARTITION_UA, 0, json_encode($deviceLaunchData));
	    
	    $len = $rk->getOutQLen();
	    while ($len > 0) {
	        $len = $rk->getOutQLen();
	        $rk->poll(10);
	    }
	    echo json_encode(array('code'=>200,'msg'=>'ok'));
	}
	
	/**
	 * 接收设备注册消息
	 */
	public function reg(){
	    $deviceRegData = $this->request->getPost(null, FILTER_SANITIZE_MAGIC_QUOTES);
	    //dump($info);
	    $conf = new \RdKafka\Conf();
	    
	    //TopicConf
	    $topicConf = new \RdKafka\TopicConf();
	    //-1必须等所有brokers同步完成的确认 1当前服务器确认 0不确认，这里如果是0回调里的offset无返回，如果是1和-1会返回offset
	    // 我们可以利用该机制做消息生产的确认，不过还不是100%，因为有可能会中途kafka服务器挂掉
	    $topicConf->set('request.required.acks', 0);
	    
	    $rk = new \RdKafka\Producer($conf);
	    $rk->setLogLevel(LOG_DEBUG);
	    $rk->addBrokers('127.0.0.1:9092');
	    $topic = $rk->newTopic('reg', $topicConf);
	    
	    $topic->produce(RD_KAFKA_PARTITION_UA, 0, json_encode($deviceRegData));
	    
	    $len = $rk->getOutQLen();
	    while ($len > 0) {
	        $len = $rk->getOutQLen();
	        $rk->poll(10);
	    }
	    echo json_encode(array('code'=>200,'msg'=>'ok'));
	}

	/**
	 * 接收设备付费消息
	 */
	public function pay(){
	    $devicePayData = $this->request->getVar(null, FILTER_SANITIZE_MAGIC_QUOTES);
	    //dump($info);
	    $conf = new \RdKafka\Conf();
	    
	    //TopicConf
	    $topicConf = new \RdKafka\TopicConf();
	    //-1必须等所有brokers同步完成的确认 1当前服务器确认 0不确认，这里如果是0回调里的offset无返回，如果是1和-1会返回offset
	    // 我们可以利用该机制做消息生产的确认，不过还不是100%，因为有可能会中途kafka服务器挂掉
	    $topicConf->set('request.required.acks', 0);
	    
	    $rk = new \RdKafka\Producer($conf);
	    $rk->setLogLevel(LOG_DEBUG);
	    $rk->addBrokers('127.0.0.1:9092');
	    $topic = $rk->newTopic('pay', $topicConf);
	    
	    $topic->produce(RD_KAFKA_PARTITION_UA, 0, json_encode($devicePayData));
	    
	    $len = $rk->getOutQLen();
	    while ($len > 0) {
	        $len = $rk->getOutQLen();
	        $rk->poll(10);
	    }
	    echo json_encode(array('code'=>200,'msg'=>'ok'));
	}
}
