import React from 'react';
import { Tabs } from 'antd';
const { TabPane } = Tabs;


const TicketList = () => {
    return (
        <Tabs onChange={(e)=>console.log(e)} type="card" destroyInactiveTabPane={true}>
            <TabPane tab="САМЫЙ ДЕШЕВЫЙ" key="1">
                Content of Tab Pane 1
            </TabPane>
            <TabPane tab="САМЫЙ БЫСТРЫЙ" key="2">
                Content of Tab Pane 2
            </TabPane>
            <TabPane tab="ОПТИМАЛЬНЫЙa" key="3">
                asd
            </TabPane>
        </Tabs>
    )
}

export default TicketList;