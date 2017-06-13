<?php

namespace Truesign\Adapter\wechat_marketing;


use Truesign\Adapter\Base\DbLibraryAdapter;
use Royal\Data\Field;


class businessAdapter extends DbLibraryAdapter
{
    public function database()
    {
        return 'wechat_marketing';
    }
    public function dbConfig(){
        return 'wechat_marketing';
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
        return 'business';

    }

    public function tableDesc()
    {
        return '商户/公司/客户表';
    }


    public function tableInit()
    {
        return Field::start()
            ->def('document_id')->map('id')->int()->desc('id')
            ->def('username')->map('username')->varchar(100)->desc('用户名')
            ->def('password')->map('password')->varchar(100)->desc('密码')
            ->def('phone_num')->map('phone_num')->varchar(15)->desc('手机号')
            ->def('email')->map('email')->varchar(50)->desc('邮箱')
            ->def('weimob_num')->map('weimob_num')->int()->desc('公众号数量')
            ->def('recharge')->map('recharge')->varchar(50)->desc('充值总额')
            ->def('remainder')->map('remainder')->varchar(50)->desc('余额')
            ->def('sms_send_num')->map('sms_send_num')->int()->desc('已发送短信数')
            ->def('enable_time')->map('enable_time')->int()->desc('启用时间')
            ->def('expire_time')->map('expire_time')->int()->desc('到期时间')

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