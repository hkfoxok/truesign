<?php
/**
 * Created by PhpStorm.
 * User: ql-win
 * Date: 2017/3/10
 * Time: 13:20
 */
class WebSiteController extends  OAppBaseController
{
    public function indexAction(){

        echo 'website';
    }
    public function regOrLoginAction()
    {
        $params = $this->getParams(array('username', 'pass', 'email','unique_auth_code'), array('look_for', 'ip'));
        $doDao = new \Royal\Data\DAO(new \Truesign\Adapter\Apps\appWebSiteAdapter());
        $db_checkUsername_response = $doDao->readSpecified(array('username' => $params['username']),array());
        $db_checkEmail_response = $doDao->readSpecified(array('email' => $params['email']),array());
        $db_reponse['status']=0;
        $db_reponse['msg']='error';

        if(!empty($db_checkUsername_response['statistic']['count']) || !empty($db_checkEmail_response['statistic']['count'])){
            $db_Login_response = $doDao->readSpecified(array('username' => $params['username'], 'email' => $params['email'],'pass' => $params['pass']),array());
            if($db_Login_response['statistic']['count'] == 1){
                $db_reponse['status']=1;
                $db_reponse['msg']='登录成功';
                $db_reponse['website_level']=$db_Login_response['data'][0]['website_level'];
                $doDao->updateByQuery(array('ip'=>$params['ip'],'look_for'=>$params['look_for'],'unique_auth_code'=>$params['unique_auth_code']),array('username' => $params['username'], 'email' => $params['email'],'pass' => $params['pass']));
                $website_encryption_key = \Royal\Util\Decrypt::encryption($params['unique_auth_code'],$db_Login_response['data'][0]['document_id'],0);
                $db_reponse['website_encryption_key'] = $website_encryption_key;
            }
            elseif($db_Login_response['statistic']['count'] == 0){
                $db_reponse['status']=0;
                $msg = '';
                if(!empty($db_checkUsername_response['statistic']['count'])){
                    $msg .= '用户名存在;';
                }
                if(!empty($db_checkEmail_response['statistic']['count'])){
                    $msg .= '邮箱存在';
                }
                $db_reponse['msg']=$msg;
            }
            elseif($db_Login_response['statistic']['count'] > 0){
                $db_reponse['status']=0;
                $db_reponse['msg']='账号唯一性错误，联系[高]权限ID进行认证';
            }
            else{
                $db_reponse['status']=0;
                $db_reponse['msg']='账号内部错误，联系[最高]权限ID进行认证';
            }

        }
        else{
            $db_check_unique_machine = $doDao->readSpecified(array('unique_auth_code'=>$params['unique_auth_code']),array());
            if(!empty($db_check_unique_machine['statistic']['count'])){
                $db_reponse['status']=0;
                $db_reponse['msg']='此机器唯一序列已经绑定到账户名['.$db_check_unique_machine['data'][0]['username'].']，请用其此账户登录';

            }
            else{
                $website_level = 1;
                $params['reg_ip'] = $params['ip'];
                $params['website_level'] = $website_level;
                $db_reg_response = $doDao->create($params);
                if(!empty($db_reg_response)){
                    $db_reponse['status']=1;
                    $db_reponse['msg']='注册成功';
                    $db_reponse['sys_msg'] = $db_reg_response;
                    $website_encryption_key = \Royal\Util\Decrypt::encryption($params['unique_auth_code'],$db_reg_response,0);
                    $db_reponse['website_encryption_key'] = $website_encryption_key;
                    $db_reponse['website_level'] = $website_level;

                }
                else{
                    $db_reponse['status']=0;
                    $db_reponse['msg']='注册失败，请重试，或联系[最高]权限ID进行解决';
                    $db_reponse['sys_msg'] = $db_reg_response;

                }
            }

        }




        $this->setResponseBody($db_reponse);
    }

    public function getWebSiteLevelAction(){
        $params = $this->getParams(array('unique_auth_code','website_encryption_key'));
        $doDao = new \Royal\Data\DAO(new \Truesign\Adapter\Apps\appWebSiteAdapter());
        $unique_auth_code = $params['unique_auth_code'];
        $key = $params['website_encryption_key'];
        $needData = $doDao->readSpecified(array(
            'unique_auth_code'=>$unique_auth_code
        ),array());

        if($needData['data'][0]['document_id']){
            $decode_encryption_key = \Royal\Util\Decrypt::encryption($key,$needData['data'][0]['document_id'],1);
            if(sizeof($decode_encryption_key) == 2){
                [0=>$tmp_unique_auth_code,1=>$limit_time]=$decode_encryption_key;
                if($limit_time>time()){
                    if($tmp_unique_auth_code == $unique_auth_code){
                        $re_check['status'] = 1;
                        $re_check['msg'] = 'website验证成功';
                        $re_check['website_level'] = $needData['data'][0]['website_level'];

                    }
                    else{
                        $re_check['status'] = 0;
                        $re_check['msg'] = 'website唯一验证key不一致';
                    }
                }
                else{
                    $re_check['status'] = 0;
                    $re_check['msg'] = 'website加密key已经过期';
                }
            }
            else{
                $re_check['status'] = 0;
                $re_check['msg'] = 'website加密key违法';
            }
        }
        else{
            $re_check['status'] = 0;
            $re_check['msg'] = 'website此唯一识别码未颁发';
        }
        $this->setResponseBody($re_check);
    }

}
