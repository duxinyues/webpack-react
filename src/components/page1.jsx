/*
 * @FileName: 
 * @Author: duxinyue
 * @Date: 2021-05-15 11:54:32
 * @LastEditors: yongyuan at <yongyuan253015@gmail.com>
 * @LastEditTime: 2021-07-20 00:10:07
 * @FilePath: \router\src\components\page1.jsx
 * @Description: 
 */
import React, { useState } from "react";
import { DatePicker, Space } from 'antd';
import moment from 'moment';
import { getFirstAndEndDay, getYearFirstLastDay } from "../utils/utils";
const { RangePicker } = DatePicker;
const dateFormat = 'YYYY-MM-DD';
export function Page1(props) {
    return <Toolbar />
}
function Toolbar(props) {
    const [all, setAll] = useState(false);
    const [date, setDate] = useState([moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)])
    const allDate = () => {
        setAll(true)
    }
    const onMonth = () => {

        setAll(false)
        setDate([moment(getFirstAndEndDay(2), dateFormat), moment(getFirstAndEndDay(1), dateFormat)])
    }
    const onYear = () => {
        var nowDate = new Date();
        console.log(nowDate.getFullYear())
        setAll(false)
        setDate([moment(`${nowDate.getFullYear()}-01-01`, dateFormat), moment(`${nowDate.getFullYear()}-12-31`, dateFormat)])
    }
    return <React.Fragment>
        <Space direction="horizontal" size={12}> <span onClick={allDate}>所有</span> <span onClick={onMonth}>本月</span> <span onClick={onYear}>今年</span></Space>
        <RangePicker
            value={all ? "" : date}
            format={dateFormat}
        />
    </React.Fragment>
}