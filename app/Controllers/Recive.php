<?php 
namespace App\Controllers;

//use App\Models\NewsModel;
use CodeIgniter\HTTP\IncomingRequest;

class Recive extends BaseController
{
    


	//--------------------------------------------------------------------
    /**
     * 接收广告点击数据
     * 并写入kafka
     */
	public function advdata(){
	    $clickData = $this->request->getGet();
	    $channe_id = isset($clickData['channel_id']) ? intval($clickData['channel_id']) : '';
	    //dump($info);
	    
	    //Conf
	    $conf = new \RdKafka\Conf();
	    /* $conf->setDrmSgCb(function ($kafka, $message){
	        file_put_contents("d:/dr_cb.log", var_export($message, true).PHP_EOL, FILE_APPEND);
	    });
        $conf->setErrorCb(function ($kafka, $err, $reason){
            file_put_contents("d:/err_cb.log",sprintf("Kafka error: %s (reason: %s)", rd_kafka_err2str($err), $reason).PHP_EOL, FILE_APPEND);
        }); */
        
        //TopicConf
        $topicConf = new \RdKafka\TopicConf();
        //-1必须等所有brokers同步完成的确认 1当前服务器确认 0不确认，这里如果是0回调里的offset无返回，如果是1和-1会返回offset
        // 我们可以利用该机制做消息生产的确认，不过还不是100%，因为有可能会中途kafka服务器挂掉
        $topicConf->set('request.required.acks', 0);
        
        $rk = new \RdKafka\Producer($conf);
        $rk->setLogLevel(LOG_DEBUG);
        $rk->addBrokers('192.168.238.132:9092');
        //根据chanel_id对应不同的topic
        switch ($channe_id){
            case 1:
                $channe_name = "ocean_adv_click_data";
                break;
            case 2:
                $channe_name = "gdt_adv_click_data";
                break;
            case 3:
                $channe_name = "mp_adv_click_data";
                break;
            case 4:
                $channe_name = "baidu_adv_click_data";
                break;
            case 5:
                $channe_name = "sina_adv_click_data";
                break;
            case 5:
                $channe_name = "163_adv_click_data";
                break;
            case 6:
                $channe_name = "sohu_adv_click_data";
                break;
            case 7:
                $channe_name = "mgtv_adv_click_data";
                break;
            case 8:
                $channe_name = "uc_adv_click_data";
                break;
            case 9:
                $channe_name = "oppo_adv_click_data";
                break;
            default:
                $channe_name = "unknown_adv_click_data";
                break;
        }
        $topic = $rk->newTopic($channe_name, $topicConf);
        $topic->produce(RD_KAFKA_PARTITION_UA, 0, json_encode($clickData));
        
        $len = $rk->getOutQLen();
        while ($len > 0) {
            $len = $rk->getOutQLen();
            //var_dump($len);
            $rk->poll(10);
        }
        echo json_encode(array('code'=>200,'msg'=>'ok'));
	}
	
	
	/**
	 * 接收设备启动上报数据
	 */
	public function launch(){
	    $deviceLaunchData = $this->request->getPost();
	    //dump($info);
	    $conf = new \RdKafka\Conf();
        
        //TopicConf
        $topicConf = new \RdKafka\TopicConf();
        //-1必须等所有brokers同步完成的确认 1当前服务器确认 0不确认，这里如果是0回调里的offset无返回，如果是1和-1会返回offset
        // 我们可以利用该机制做消息生产的确认，不过还不是100%，因为有可能会中途kafka服务器挂掉
        $topicConf->set('request.required.acks', 0);
        
        $rk = new \RdKafka\Producer($conf);
        $rk->setLogLevel(LOG_DEBUG);
        $rk->addBrokers('192.168.238.132:9092');
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
	 * 批量写入广告数据到clickhouse
	 */
	public function clickhousePost(){
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
	}
}
