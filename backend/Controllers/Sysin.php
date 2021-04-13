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
	
	
	/**
	 * 监测zookeeper & kafka & spark系统软件的运行情况
	 */
	public function kafkaAndSpark(){
	    $data = array(
	        'cores'=>0,
	        'mem'=>0,
	        'php-kafka'=>1,
	        'zookeeper'=>0,
	        'kafka'=>0,
	        'spark'=>0
	    );
	    //检测CPU核数和内存大小
	    $check_cpus_shell = "grep 'physical id' /proc/cpuinfo | sort -u | wc -l";//物理CPU个数
	    $check_cpu_cores_shell = "grep 'core id' /proc/cpuinfo | sort -u | wc -l";//单个CPU核数
	    exec($check_cpus_shell,$check_cpus_result,$check_cpus_status);
	    exec($check_cpu_cores_shell,$check_cpu_cores_result,$check_cpu_cores_status);
	    
	    if(!$check_cpus_status && !$check_cpu_cores_status){
	        if(is_array($check_cpus_result) && is_array($check_cpu_cores_result)){
	            $data['cores'] = $check_cpus_result[0] * $check_cpu_cores_result[0];
	        }
	    }
	    $check_mem_shell = "cat /proc/meminfo | grep MemTotal";
	    exec($check_mem_shell,$check_mem_result,$check_mem_status);
	    if(!$check_mem_status){
	        if(is_array($check_mem_result) && count($check_mem_result) > 0){
	            $_mem_ = explode(':', $check_mem_result[0]);
	            $_mem = intval(trim(str_replace('kB', '', $_mem_[1])) / 1000 /1000);   //GB
	            $data['mem'] = $_mem;
	        }
	    }
	    //检测php-kafka扩展安装情况
	    
	    
	    //监测zookeeper运行情况 zookeeper默认2181端口
	    $check_zookeeper_shell = "netstat -tnlp | grep 2181";
	    exec($check_zookeeper_shell, $check_zookeeper_result, $check_zookeeper_status);

	    if(!$check_zookeeper_status){
	        if(is_array($check_zookeeper_result) && count($check_zookeeper_result) > 0){
	            $data['zookeeper'] = 1;
	        } 
	    }
	    //监测kafka运行情况 kafka默认9092端口
	    $check_kafka_shell = "netstat -tnlp | grep  9092";
	    exec($check_kafka_shell, $check_kafka_result, $check_kafka_status);
	    if(!$check_kafka_status){
	        if(is_array($check_kafka_result) && count($check_kafka_result) > 0){
	            $data['kafka'] = 1;
	        }
	    }
	    //监测spark运行情况 spark默认7077端口
	    $check_spark_shell = "netstat -tnlp | grep  7077";
	    exec($check_spark_shell, $check_spark_result, $check_spark_status);
	    if(!$check_spark_status){
	        if(is_array($check_spark_result) && count($check_spark_result) > 0){
	            $data['spark'] = 1;
	        }
	    }
	    _json(['code'=>200,'msg'=>'ok','data'=>$data]);
	}
	
	/**
	 * 启动zookeeper & kafka & spark系统软件
	 */
	public function startKafkaAndSpark(){
	    $post = $this->request->getPost(null,FILTER_SANITIZE_MAGIC_QUOTES);
	    $soft = $post['soft'];
	    switch ($soft){
	        case 'php-kafka':
	            break;
	        case 'zookeeper':
	            //根据端口检查服务是否启动
	            exec("netstat -tnlp | grep  2181", $zookeeper_port_result, $zookeeper_port_status);
	            if($zookeeper_port_status != 0){
            	    //以服务形式启动zookeeper以免卡住php进程
            	    $zookeeper_sh =  ROOTPATH . 'envsoft/kafka_2.12-2.6.0/bin/zookeeper-server-start.sh';
            	    $zookeeper_conf = ROOTPATH . 'envsoft/kafka_2.12-2.6.0/config/zookeeper.properties&';
            	    $start_zookeeper_shell = 'sudo '.$zookeeper_sh.' -daemon '.$zookeeper_conf;
    
            	    exec($start_zookeeper_shell, $start_zookeeper_result, $start_zookeeper_status);
            	    
            	    //dump($start_zookeeper_status);
            	    //dump($start_zookeeper_result);
            	    //echo get_current_user();
            	    //exit;
            	    if(!$start_zookeeper_status){
            	        //以服务形式启动后前端不会再接收到输出信息所以需要根据端口检查服务是否启动-但启动需要缓冲时间故需要等待几秒（暂无其他更好的解决方案）
            	        sleep(2);
            	        exec("netstat -tnlp | grep  2181", $zookeeper_port_result, $zookeeper_port_status);
            	        if($zookeeper_port_status != 0){
            	            //若启动失败 则以非服务方式再启动一次 收集输出错误信息
            	            $start_zookeeper_shell = 'sudo '.$zookeeper_sh.' '.$zookeeper_conf;
            	            exec($start_zookeeper_shell, $start_zookeeper_result, $start_zookeeper_status);
            	            //var_dump($start_zookeeper_result);
            	            //exit;
            	            if(is_array($start_zookeeper_result) && count($start_zookeeper_result) > 0){
            	                foreach ($start_zookeeper_result as $k=>$_line){
            	                    if(stripos($_line, '] ERROR') !== false){
            	                        $_line = isset($start_zookeeper_result[$k+1]) ? $_line."\r\n".$start_zookeeper_result[$k+1] : $_line;
            	                        _json(['code'=>199,'msg'=>'启动zookeeper失败'.$_line],1);
            	                    } elseif(stripos($_line, 'insufficient memory') !== false){
            	                        _json(['code'=>199,'msg'=>'启动zookeeper失败,内存不足'],1);
            	                    } else {
            	                        _json(['code'=>199,'msg'=>'启动zookeeper失败,其他原因'],1);
            	                    }
            	                }
            	            }
            	        } else {
            	            _json(['code'=>200,'msg'=>'启动zookeeper成功'],1);
            	        }
            	    } else {
            	    _json(['code'=>199,'msg'=>'启动zookeeper失败,请检查webServer用户及php-fpm用户权限或联系运维手动启动'],1);
            	    }
	            } else {
	                _json(['code'=>198,'msg'=>'zookeeper已启动,请勿重复启动'],1);
	            }
        	    break;
	        case 'kafka':
	            //根据端口检查服务是否启动
	            exec("netstat -tnlp | grep  9092", $kafka_port_result, $kafka_port_status);
	            //dump($kafka_port_status);
	            //dump($kafka_port_result);
	            //exit;
	            if($kafka_port_status != 0){
    	            //以服务形式启动kafka以免卡住php进程
    	            $kafka_sh =  ROOTPATH . 'envsoft/kafka_2.12-2.6.0/bin/kafka-server-start.sh';
    	            $kafka_conf = ROOTPATH . 'envsoft/kafka_2.12-2.6.0/config/server.properties&';
    	            $start_kafka_shell = 'sudo '.$kafka_sh.' -daemon '.$kafka_conf;
    
    	            exec($start_kafka_shell, $start_kafka_result, $start_kafka_status);
    	            //dump($start_kafka_status);
    	            //dump($start_kafka_result);
    	            //exit;
    	            if(!$start_kafka_status){
    	                //以服务形式启动后前端不会再接收到输出信息所以需要根据端口检查服务是否启动-但启动需要缓冲时间故需要等待几秒（暂无其他更好的解决方案）
    	                sleep(2);
    	                exec("netstat -tnlp | grep  9092", $kafka_port_result, $kafka_port_status);
    	                if($kafka_port_status != 0){
    	                    //若启动失败 则以非服务方式再启动一次 收集输出错误信息
    	                    $start_kafka_shell = 'sudo '.$kafka_sh.' '.$kafka_conf;
    	                    exec($start_kafka_shell, $start_kafka_result, $start_kafka_status);
    	                    //var_dump($start_kafka_result);
    	                    //exit;
    	                    if(is_array($start_kafka_result) && count($start_kafka_result) > 0){
    	                        foreach ($start_kafka_result as $k=>$_line){
    	                            if(stripos($_line, '] ERROR') !== false){
    	                                $_line = isset($start_kafka_result[$k+1]) ? $_line."\r\n".$start_kafka_result[$k+1] : $_line;
    	                                _json(['code'=>199,'msg'=>'启动kafka失败'.$_line],1);
    	                            } elseif(stripos($_line, 'insufficient\ memory') !== false){
    	                                _json(['code'=>199,'msg'=>'启动kafka失败,内存不足'],1);
    	                            } else {
    	                                _json(['code'=>199,'msg'=>'启动kafka失败,其他原因'],1);
    	                            }
    	                        }
    	                      }
    	                } else {
    	                    _json(['code'=>200,'msg'=>'启动kafka成功'],1);
    	                }
 
    	            } else {
    	            _json(['code'=>199,'msg'=>'启动kafka失败,请检查脚本可执行权限'],1);
    	            }
	            } else {
	                _json(['code'=>198,'msg'=>'kafka已启动,请勿重复启动'],1);
	            }
        	    break;
	        case 'spark':
	            
	            break;
        	default:
        	    _json(['code'=>198,'msg'=>'参数错误']);
        	    break;
	    }
	}
}
