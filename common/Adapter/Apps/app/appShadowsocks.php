<?php
/**
 * Created by PhpStorm.
 * User: ql_os
 * Date: 2016/10/15
 * Time: 下午4:50
 */

namespace Truesign\Adapter\Apps\app;
use Truesign\Adapter\Base\DbLibraryAdapter;
use Royal\Data\Field;


class appShadowsocksAdapter extends DbLibraryAdapter
{
    public function database()
    {
        return 'truesign_app';
    }
    public function dbConfig(){
        return 'truesign_app';
    }
    public function table_Prefix()
    {
        return 'app_';
    }
    public function tableAccess()
    {
        return 1;
    }

    public function table()
    {
        return 'shadowsocks';

    }

    public function tableDesc()
    {
        return 'shadowsocks代理';
    }

    public function tableInit()
    {
        return Field::start()
            ->def('document_id')->map('id')->int()->desc('id')
            ->def('userid')->map('userid')->int()->desc('用户id')
            ->def('username')->map('username')->varchar(100)->desc('用户名')
            ->def('email')->map('email')->varchar(100)->desc('邮箱')
            ->def('look_for')->map('look_for')->varchar(1000)->desc('目的')
            ->def('headpic')->map('headpic')->varchar(1000)->desc('头像')
            ->def('reg_ip')->map('reg_ip')->varchar(100)->desc('注册ip')
            ->def('ip')->map('ip')->varchar(100)->desc('最新登录ip')
            ->def('website_level')->map('website_level')->int()->desc('网站权限等级')
            ->def('mark')->map('mark')->int()->desc('备注')
            ->def('unique_auth_code')->map('unique_auth_code')->varchar(100)->desc('唯一识别码')
            ->def('socket_id')->map('socket_id')->varchar(10000)->desc('socket 客户端id')
            ->end();
    }

    public function tableAdd()
    {
        
    }
    public function tableModify()
    {
        // TODO: Implement tableModify() method.
    }

    public function tableDel()
    {

    }
    static function show(){
        print('showme');
    }
}