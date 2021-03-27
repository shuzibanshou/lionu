<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>量U-安装</title>
	<meta name="description" content="The small framework with powerful features">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel='stylesheet' id='dashicons-css'  href='/install_style/css/dashicons.min.css?ver=5.4.2' type='text/css' media='all' />
	<link rel='stylesheet' id='buttons-css'  href='/install_style/css/buttons.min.css?ver=5.4.2' type='text/css' media='all' />
	<link rel='stylesheet' id='forms-css'  href='/install_style/css/forms.min.css?ver=5.4.2' type='text/css' media='all' />
	<link rel='stylesheet' id='l10n-css'  href='/install_style/css/l10n.min.css?ver=5.4.2' type='text/css' media='all' />
	<link rel='stylesheet' id='install-css'  href='/install_style/css/install.min.css?ver=5.4.2' type='text/css' media='all' />
	<link rel="shortcut icon" type="image/png" href="/favicon.ico"/>
	
	<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>
</head>
<body>

<p id="logo"><a href="https://www.lion-u.com/">lion-u</a></p>
<p id="title">用数据挖掘您的广告价值</p>
<form method="post" action="/install/index?step=2" name="config">
<h2>系统信息</h2>
	<table class="form-table" role="presentation">
		<tr>
			<th scope="row"><label for="sysuser">SDK上报域名</label></th>
			<td><input class="conf" name="sdkdomain" id="sdkdomain" type="text" aria-describedby="sdkdomain-desc" size="25" value="" required placeholder="请填写一个公网解析的域名"/>
			<p>该域名的虚拟目录与量U系统相同</p>
			</td>
			<td id="sdkdomain-desc"></td>
		</tr>
	</table>
	<h2>管理员信息</h2>
	<table class="form-table" role="presentation">
		<tr>
			<th scope="row"><label for="sysuser">登录用户名</label></th>
			<td><input class="conf" name="sysuser" id="sysuser" type="text" aria-describedby="sysuser-desc" size="25" value="admin" required/></td>
			<td id="sysuser-desc"></td>
		</tr>
		<tr>
			<th scope="row"><label for="syspwd">登录密码</label></th>
			<td><input class="conf" name="syspwd" id="syspwd" type="text" aria-describedby="syspwd-desc" size="25" value="" required/>
			<p>请牢记您的密码</p>
			</td>
			<td id="syspwd-desc"></td>
		</tr>
		<tr>
			<th scope="row"><label for="sysrepwd">确认密码</label></th>
			<td><input name="sysrepwd" id="sysrepwd" type="text" aria-describedby="sysrepwd-desc" size="25" value="" autocomplete="off" required/></td>
			<td id="sysrepwd-desc"></td>
		</tr>
	</table>
	<h2>MySQL信息</h2>
	<table class="form-table" role="presentation">
		<tr>
			<th scope="row"><label for="dbhost">数据库地址</label></th>
			<td><input class="dbconf conf" name="dbhost" id="dbhost" type="text" aria-describedby="dbhost-desc" size="25" value="127.0.0.1" required/>
			<p>在使用PDO连接本地MySQL服务时,使用127.0.0.1比localhost有更好的兼容性</p>
			</td>
			<td id="dbhost-desc"></td>
		</tr>
		<tr>
			<th scope="row"><label for="dbname">数据库名</label></th>
			<td><input class="dbconf conf" name="dbname" id="dbname" type="text" aria-describedby="dbname-desc" size="25" value="lion-u" required/></td>
			<td id="dbname-desc"></td>
		</tr>

		<tr>
			<th scope="row"><label for="dbuser">数据库用户名</label></th>
			<td><input class="dbconf conf" name="dbuser" id="dbuser" type="text" aria-describedby="dbuser-desc" size="25" value="root" required/></td>
			<td id="dbuser-desc"></td>
		</tr>
		<tr>
			<th scope="row"><label for="dbpwd">数据库密码</label></th>
			<td><input class="dbconf conf" name="dbpwd" id="dbpwd" type="text" aria-describedby="dbpwd-desc" size="25" value="" autocomplete="off" /></td>
			<td id="dbpwd-desc"></td>
		</tr>
		<tr>
			<th scope="row"><label for="dbport">数据库端口</label></th>
			<td><input class="dbconf conf" name="dbport" id="dbport" type="text" aria-describedby="dbport-desc" size="25" value="3306" autocomplete="off" required/></td>
			<td id="dbport-desc"></td>
		</tr>
	</table>
	<h2>Kafka信息(可安装完成后再部署)</h2>
	<table class="form-table" role="presentation">
		<tr>
			<th scope="row"><label for="kafkahost">kafka地址</label></th>
			<td><input class="kafkaconf conf" name="kafkahost" id="kafkahost" type="text" aria-describedby="kafkahost-desc" size="25" value="127.0.0.1" required/>
			<p>kafka不是安装系统必须的，但是系统安装完成后需要部署上线</p>
			</td>
			<td id="kafkahost-desc"></td>
		</tr>

		<tr>
			<th scope="row"><label for="kafkaport">kafka端口</label></th>
			<td><input class="kafkaconf conf" name="kafkaport" id="kafkaport" type="text" aria-describedby="kafkaport-desc" size="25" value="9092" autocomplete="off" required/></td>
			<td id="kafkaport-desc"></td>
		</tr>
	</table>
		<?php
		if ( isset( $_GET['noapi'] ) ) {
			?>
<!-- <input name="noapi" type="hidden" value="1" /> -->
<?php } ?>
	<!-- <input type="hidden" name="language" value=" /> -->
	<p class="step"><input name="submit" type="submit" value="提交配置" class="button button-large" /></p>
</form>
</body>
<script type="text/javascript">
	/* function checkForm(){
		$("input").each(function(){
			console.log($(this).attr('required'))
		})
	} */
	
	$(document).ready(function(){
		$("form[name='config']").submit(function(){
			//检查登录用户名
			var sysuser = $.trim($("#sysuser").val())
			if(/^[a-zA-Z]{5,10}$/.test(sysuser) == false){
				$("#sysuser").addClass('error')
				alert('管理员用户名必须为5-10位的英文字符')
				return false
			} else {
				$("#sysuser").removeClass('error')
			}
			var pwd = $.trim($("#syspwd").val())
			var repwd = $.trim($("#sysrepwd").val())
			if(pwd.length < 6 || pwd.length > 20){
				alert('密码长度应在6-20位之间')
				return false
			} else {
    			if(pwd != repwd){
    				$("#sypwd").addClass('error')
    				$("#syrepwd").addClass('error')
    				alert('密码不一致')
    				return false
    			} else {
    				$("#sypwd").removeClass('error')
    				$("#syrepwd").removeClass('error')
    			}
			}
			//TODO 密码强度认证  显示隐藏
			var dbconf = $(".conf").serialize();

			var pass = true;
			$.ajax({
				'url':'/install/checkConfigAndEnvVersion',
				'type':'POST',
				'data':dbconf,
				'async':false,
				'dataType':'json',
				'success':function(res){
					if(res.code != 200){
						alert(res.msg)
						pass = false;
					}
				}
			})
			return pass
		})
	})
</script>
</html>
