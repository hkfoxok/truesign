<?php
namespace Truesign\Service;


use Royal\Data\DAO;

class AppBaseService {
//    表权限控制
    public function tableaccess_ctrl()
    {
        $config = \Yaf_Registry::get('accessconfig');
        return $config['wechat_marketing']['tableaccess'];
    }

    public function AuthTableAccess($access,$tableaccess,$way='both')
    {
        if('both' == $way){
            if(intval($tableaccess['read'])>intval($access) || intval($tableaccess['write'])>intval($access)){
                throw new Exception('无权限操作此表');
            }
        }
        elseif ('read' == $way){
            if(intval($tableaccess['read'])>intval($access)){
                throw new Exception('无权限读取此表');
            }
        }
        elseif ('write' == $way){
            if(intval($tableaccess['write'])>intval($access)){
                throw new Exception('无权更改此表');
            }
        }
    }

    public function filterRules(&$rules,$db_data_row,$rules_show=0)
    {
        $request_db_param = array();
        if($db_data_row && !empty($rules_show)){
            foreach ($db_data_row as $k=>$v){
                $request_db_param[] = $k;
            }
            foreach ($rules as $k=>$v){
                if(!in_array($k,$request_db_param)){
                    unset($rules[$k]);
                }
            }
        }
        if(empty($db_data_row) && !empty($rules_show)){
            return;
        }
        if(empty($rules_show)){
            $rules = '';
        }



    }
    public function getAccess(){
        $params = $this->getParams(array('token'));
        $token = $params['token'];
        return $token;

    }

    /**
     * A表要用到B表中的列。比如A里只有一个FK_ID，需要从B中查出数据
     * @param $result  A表扣的结果集
     * @param $fromKey  A和B关连时，A表中的外键
     * @param DAO $dao B表的DAO对象
     * @param $searchFromCol  A和B关连时，B表中的主键
     * @param $searchToArray 要查询B表中的哪些列
     * @param $otherKey 放在JOSN字符串里的KEY
     * @return mixed
     */
    public static function mergeData($result, $fromKey, DAO $dao, $searchFromCol, $searchToArray, $otherKey) {
        $data = array();

        foreach ($result['data'] as $e) {
            $data[] = $e[$fromKey];
        }
        $ids = array_unique($data);

        if (empty($ids)) {
            $ids[] = '-1';
        }

        $searchToArray = array_merge($searchToArray, array($searchFromCol));
        $rows = $dao->readSpecified(array($searchFromCol => array(
            'operation' => 'in',
            'value' => array_values($ids),
        )), $searchToArray);

        $rowMap = array();
        foreach ($rows['data'] as $k => $v) {
            $rowMap[$v[$searchFromCol]] = $v;
        }
        foreach ($result['data'] as $k => $v) {
            if ($v[$fromKey] && $rowMap[$v[$fromKey]]) {
                $result['data'][$k][$otherKey] = $rowMap[$v[$fromKey]];
            }
        }
        return $result;
    }

    //涉及到 两张表 查询的情况
    public static function mergeSearchData($result, $fromKey, DAO $dao, $searchFromCol, $params, $pager, $otherKey) {
        $data = array();
        $rowMap = array();
        foreach ($result['data'] as $e) {
            $data[] = $e[$fromKey];
            $rowMap[$e[$fromKey]] = $e;
        }
        $ids = array_unique($data);

        if (empty($ids)) {
            $ids[] = '-1';
        }

        $params[$searchFromCol] = array(
            'operation' => 'in',
            'value' => array_values($ids),
        );

//        print_r($params);

        $rows = $dao->read($params, $pager);

        if ($rows['data']) {
            foreach ($rows['data'] as $k => $v) {
                $rows['data'][$k][$otherKey] = $rowMap[$v[$searchFromCol]];
            }
        }

        return $rows;
    }

    // 获取修改 记录
    public static function getModifyContent(DAO $dao, $param) {
        return $dao->getAdapter()->getModifyContent($dao, $param);
    }

    public static function getAddContent(DAO $dao, $param) {
        return $dao->getAdapter()->getAddContent($dao, $param);
    }

    public static function getDelContent(DAO $dao, $param,$cols) {
        return $dao->getAdapter()->getDelContent($dao, $param,$cols);
    }

    // 获取结果结的总数
    public static function getResultTotal($result) {
        if ($result['statistic']) {
            return $result['statistic']['count'];
        }
        return 0;
    }

    // 抛出异常
    public static function throwException($str, $code = -100) {
        throw new \Exception($str, $code);
    }

    /**
     * 从结果集里，得到一个数组，里面只包含一列指定的$col。去重复。
     * @param $result
     * @param $col
     * @return array
     */
    public static function getColArrayFromResult($result, $col) {
        $data = array();
        foreach ($result['data'] as $e) {
            $data[] = $e[$col];
        }
        $ids = array_unique($data);
        return $ids;
    }

    public static function keyValueFromResult($result, $key) {
        $data = array();
        foreach ($result['data'] as $e) {
            $data[$e[$key]] = $e;
        }
        return $data;
    }



    public function setParam($key, $type, $value, &$param) {
        if($type == 'in') {
            if(empty($value)) {
                $value = array('0');
            }
        }
        //            $suffixMap = array('le'=>'以下', 'lt'=>'以下', 'ge'=>'以上', 'gt'=>'以上');
        $param[$key] = array(
            'operation' => $type,
            'value' => $value
        );
    }

    // 增加管理后台日志
    public function addBackendLog($id,$type, $subtype, $content) {
        $backendLog = new BackendLog();
        $backendLog->add($type, $subtype, $id, $content);
    }

    public function uuid()
    {
        list($prefix, $suffix) = explode('.', uniqid(null, 1));
        $uuid = "$prefix$suffix";
        return $uuid;
    }

    public function returnError($msg)
    {
        return array(
            'code'=>-100,
            'desc'=>$msg,
        );
    }
    //二维数组排序
    public function array_sort($arr,$keys,$type='asc'){
        $keysvalue = $new_array = array();
        foreach ($arr as $k=>$v){
            $keysvalue[$k] = $v[$keys];
        }
        if($type == 'asc'){
            asort($keysvalue);
        }else{
            arsort($keysvalue);
        }
        //reset($keysvalue);
        foreach ($keysvalue as $k=>$v){
            $new_array[] = $arr[$k];
        }
        return $new_array;
    }

//    //增加管理后台财务日志
//    public static function addFinanceLog($id, $type, $sub_type, $content)
//    {
//        $finance_log = new FinanceLog();
//        $finance_log->add($type,$sub_type,$id,$content);
//    }

    //阿里云图片缩放（2016-11-28 最新API）
    /*
     * 这里按宽度标准缩放
     */
    public static function zoompic($size){

        $zoom_param = '?x-oss-process=image/resize,m_lfit,w_'.$size.'&';
        return $zoom_param;
    }
}
