<?php

/**
 * Class AbstractClass
 */
class AbstractClass
{
public $param1;
public $param2;
function  __construct($var,$param3='пусто ')
{
    $this->param1=$var;
    echo $param3;
    //return $this->param1;
}

    /**
     * @param {string} $var2
     */
public function foo($var2){
    $this->param2=$var2;
    echo '<br/>fooo: '.$this->param1.'+'.$this->param2.'<br/>';
}
function __destruct()
{
    echo '<pre>разрушение ' . print_r($this,1). '</pre>';
}

    /**
     * ddddddddddddddd
     * @param
     */
public static function Stat (){
    echo 'sss';
}
}

